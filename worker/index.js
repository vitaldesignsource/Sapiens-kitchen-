const STATIC_ASSETS = /* SAPIENS_ASSETS */ {};
const COOKIE = '__Host-sapiens-preview';
const SESSION_SECONDS = 12 * 60 * 60;
const encoder = new TextEncoder();
const decoded = new Map();
let keyMaterial = '', cachedKey;

function escape(value) {
  return value.replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
}

function headers(type = 'text/html; charset=utf-8') {
  return new Headers({
    'Content-Type': type, 'Cache-Control': 'private, no-store, max-age=0',
    'Vary': 'Cookie', 'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'same-origin', 'X-Robots-Tag': 'noindex, noarchive'
  });
}

function base64url(bytes) {
  return btoa(String.fromCharCode(...new Uint8Array(bytes))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function unbase64url(value) {
  if (!/^[a-zA-Z0-9_-]{43}$/.test(value)) return null;
  try {
    const bytes = Uint8Array.from(atob(value.replace(/-/g, '+').replace(/_/g, '/') + '='), char => char.charCodeAt(0));
    return base64url(bytes) === value ? bytes : null;
  }
  catch { return null; }
}

async function signingKey(env) {
  const material = env.SAPIENS_SESSION_SECRET + '\0' + env.SAPIENS_SITE_PASSWORD;
  if (material !== keyMaterial) {
    keyMaterial = material;
    cachedKey = crypto.subtle.importKey('raw', encoder.encode(material), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign', 'verify']);
  }
  return cachedKey;
}

async function session(env) {
  const expires = Math.floor(Date.now() / 1000) + SESSION_SECONDS;
  const nonce = [...crypto.getRandomValues(new Uint8Array(16))].map(value => value.toString(16).padStart(2, '0')).join('');
  const payload = expires + '.' + nonce;
  const signature = await crypto.subtle.sign('HMAC', await signingKey(env), encoder.encode(payload));
  return payload + '.' + base64url(signature);
}

async function unlocked(request, env) {
  const cookie = (request.headers.get('Cookie') || '').split(';').map(part => part.trim()).find(part => part.startsWith(COOKIE + '='));
  if (!cookie) return false;
  const parts = cookie.slice(COOKIE.length + 1).split('.');
  if (parts.length !== 3 || !/^\d{10,12}$/.test(parts[0]) || !/^[0-9a-f]{32}$/.test(parts[1])) return false;
  const now = Math.floor(Date.now() / 1000), expires = Number(parts[0]);
  if (expires <= now || expires > now + SESSION_SECONDS + 60) return false;
  const signature = unbase64url(parts[2]);
  if (!signature) return false;
  return crypto.subtle.verify('HMAC', await signingKey(env), signature, encoder.encode(parts[0] + '.' + parts[1]));
}

// Login navigates to the top-level window so SameSite=Lax cookies work from the embedded preview.
function cookie(value, clear = false) {
  return COOKIE + '=' + value + '; Path=/; Secure; HttpOnly; SameSite=Lax' + (clear ? '; Max-Age=0' : '');
}

function safeNext(value, origin) {
  if (!value || !value.startsWith('/') || value.startsWith('//') || /[\\\r\n\0]/.test(value)) return '/';
  try {
    const next = new URL(value, origin);
    if (next.origin !== origin || next.pathname.startsWith('/_preview/')) return '/';
    return next.pathname + next.search;
  } catch { return '/'; }
}

async function form(request) {
  if (!request.headers.get('Content-Type')?.toLowerCase().startsWith('application/x-www-form-urlencoded')) return null;
  if (Number(request.headers.get('Content-Length')) > 2048 || !request.body) return null;
  const reader = request.body.getReader();
  const pieces = []; let size = 0;
  while (true) {
    const chunk = await reader.read();
    if (chunk.done) break;
    size += chunk.value.length;
    if (size > 2048) { await reader.cancel(); return null; }
    pieces.push(chunk.value);
  }
  const bytes = new Uint8Array(size); let offset = 0;
  for (const piece of pieces) { bytes.set(piece, offset); offset += piece.length; }
  return new URLSearchParams(new TextDecoder().decode(bytes));
}

async function correctPassword(candidate, expected) {
  const [a, b] = await Promise.all([
    crypto.subtle.digest('SHA-256', encoder.encode(candidate)),
    crypto.subtle.digest('SHA-256', encoder.encode(expected))
  ]);
  const left = new Uint8Array(a), right = new Uint8Array(b); let difference = 0;
  for (let i = 0; i < left.length; i++) difference |= left[i] ^ right[i];
  return difference === 0;
}

function login(next, error = false) {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="#233d34"><meta name="robots" content="noindex,nofollow"><title>A private invitation · Sapiens Kitchen</title><style>
@font-face{font-family:SapiensSerif;src:url('/_preview/type/serif') format('woff');font-weight:500;font-display:swap}*{box-sizing:border-box}body{margin:0;background:#f6f1e7;color:#233d34;font-family:Arial,sans-serif;min-height:100svh}.gate{min-height:100svh;display:grid;grid-template-columns:.92fr 1.08fr}.invitation{padding:62px 13%;background:#233d34;color:#f6f1e7;display:flex;flex-direction:column;justify-content:space-between;position:relative;overflow:hidden}.invitation img{width:240px;max-width:100%;height:auto;align-self:flex-start}.invitation .intro{position:relative;z-index:1;margin:75px 0}.eyebrow{font-size:9px;font-weight:400;letter-spacing:2.5px;text-transform:uppercase;line-height:1.8}.invitation .eyebrow{color:#d7ba86}.invitation h2{font-family:SapiensSerif,Georgia,serif;font-size:clamp(48px,5.3vw,80px);font-weight:500;line-height:1.03;letter-spacing:-1.1px;margin:25px 0}.invitation h2 em{color:#dec595;font-weight:500}.invitation p:last-child{font-size:12px;line-height:1.9;color:#d4d9cb;max-width:300px}.invitation footer{font-size:9px;letter-spacing:1.5px;color:#c8cdbf}.ornament{position:absolute;right:-100px;bottom:40px;width:340px;opacity:.17;fill:none;stroke:#e3c58c;stroke-width:.8}.entry{display:grid;place-items:center;padding:70px 10%}.card{max-width:400px;width:100%}.card>.eyebrow{color:#7b3039}.card h1{font-family:SapiensSerif,Georgia,serif;font-size:70px;font-weight:500;letter-spacing:-1px;line-height:1;margin:25px 0}.card>p:not(.eyebrow){font-size:14px;line-height:1.9;color:#6a6d61;margin:0 0 36px;max-width:340px}label{display:block;font-size:11px;margin-bottom:12px;letter-spacing:.5px}input{display:block;width:100%;background:#fffcf6;border:1px solid #c9bea8;border-radius:0;min-height:55px;padding:16px;font:16px Arial;color:#233d34}input:focus-visible,button:focus-visible{outline:2px solid #7b3039;outline-offset:4px}button{background:#7b3039;color:#fff7e9;border:0;min-height:55px;padding:17px 24px;width:100%;font:12px Arial;letter-spacing:.4px;cursor:pointer;display:flex;justify-content:space-between;align-items:center;margin-top:20px}button:hover{background:#63262e}button span{font-size:20px;line-height:1}.note{font-size:10px;line-height:1.8;color:#75776b;margin-top:23px}.error{font-size:12px;line-height:1.8;color:#8e2834;margin:15px 0 0;padding-left:12px;border-left:2px solid #8e2834}@media(max-width:700px){.gate{grid-template-columns:1fr}.invitation{padding:30px 8% 27px;min-height:205px}.invitation img{width:175px}.invitation .intro{margin:30px 0 0}.invitation .eyebrow{font-size:8px;letter-spacing:1.6px}.invitation h2{font-size:40px;line-height:1.05;margin:16px 0 0}.invitation h2 br{display:none}.invitation h2 em{display:block}.invitation .intro>p:last-child,.invitation footer{display:none}.ornament{width:230px;right:-80px;bottom:-55px}.entry{padding:47px 8% 60px}.card{max-width:440px}.card h1{font-size:56px;margin:22px 0}.card>p:not(.eyebrow){font-size:13px;margin-bottom:28px}.card>.eyebrow{font-size:8px;letter-spacing:2px}}@media(prefers-reduced-motion:reduce){*{scroll-behavior:auto}}
</style></head><body><main class="gate"><aside class="invitation"><img src="/_preview/brand" width="600" height="200" alt="Sapiens Paleo Kitchen"><div class="intro"><p class="eyebrow" lang="fr">UNE INVITATION PRIVÉE</p><h2>French roots.<br><em>Beautiful beginnings.</em></h2><p>A little look at what’s taking shape.<br>French at heart. Naturally Sapiens.</p></div><svg class="ornament" viewBox="0 0 300 300" aria-hidden="true"><circle cx="150" cy="150" r="130"/><circle cx="150" cy="150" r="119"/><path d="M85 238C120 190 147 126 216 65M121 182c-38 3-49-16-45-34 24 1 41 11 45 34Zm9-19c1-36 20-47 38-44-3 24-14 39-38 44Zm19-30c-32-4-39-20-32-36 21 5 32 17 32 36Zm22-26c4-31 23-39 38-34-6 20-18 31-38 34Z"/></svg><footer>NORTH SCOTTSDALE · SAPIENS KITCHEN</footer></aside><section class="entry"><div class="card"><p class="eyebrow">A PRIVATE PREVIEW</p><h1 lang="fr">Bienvenue.</h1><p>Enter the password to explore the new<br>Sapiens Kitchen website.</p><form action="/_preview/unlock" method="post" target="_top"><input type="hidden" name="next" value="${escape(next)}"><label for="site-password">Password</label><input id="site-password" name="password" type="password" autocomplete="current-password" required aria-describedby="${error ? 'password-error ' : ''}password-note">${error ? '<p class="error" id="password-error" role="alert">That isn’t the right password. Please try again.</p>' : ''}<button type="submit">Enter the site <span aria-hidden="true">↗</span></button><p class="note" id="password-note">Opens the site in the full browser window.<br>It stays unlocked for this browser session.</p></form></div></section></main></body></html>`;
}

function gate(next, method, error = false) {
  const h = headers();
  h.set('Content-Security-Policy', "default-src 'none'; img-src 'self'; font-src 'self'; style-src 'unsafe-inline'; form-action 'self'; base-uri 'none'");
  if (error) h.set('Set-Cookie', cookie('', true));
  return new Response(method === 'HEAD' ? null : login(next, error), { status: 401, headers: h });
}

function bytes(path, asset) {
  const cached = decoded.get(path);
  if (cached?.hash === asset[2]) return cached.value;
  const value = Uint8Array.from(atob(asset[1]), char => char.charCodeAt(0));
  decoded.set(path, { hash: asset[2], value });
  return value;
}

function serve(path, request, assets, lockLink = false) {
  const asset = assets[path];
  if (!asset) return new Response(request.method === 'HEAD' ? null : 'Page not found.', { status: 404, headers: headers('text/plain; charset=utf-8') });
  const h = headers(asset[0]);
  let body = request.method === 'HEAD' ? null : bytes(path, asset);
  if (body && lockLink && asset[0].startsWith('text/html')) {
    body = new TextDecoder().decode(body).replace('</body>', '<form action="/_preview/lock" method="post" style="margin:0;padding:22px 7% 30px;background:#233d34;text-align:center"><button type="submit" style="background:transparent;border:1px solid #b8a273;color:#e5d6b9;padding:12px 19px;min-height:44px;font:11px Arial;cursor:pointer">Lock site <span aria-hidden="true">↗</span></button></form></body>');
  }
  return new Response(body, { headers: h });
}

export async function handleRequest(request, env, assets = STATIC_ASSETS) {
  const url = new URL(request.url);
  if (!env.SAPIENS_SITE_PASSWORD || !env.SAPIENS_SESSION_SECRET || env.SAPIENS_SESSION_SECRET.length < 32) {
    return new Response(request.method === 'HEAD' ? null : 'The private preview is temporarily unavailable.', { status: 503, headers: headers('text/plain; charset=utf-8') });
  }
  const origin = new URL(env.SAPIENS_SITE_ORIGIN || url.origin).origin;
  if (url.pathname === '/_preview/unlock' || url.pathname === '/_preview/lock') {
    if (request.method !== 'POST') {
      const h = headers('text/plain; charset=utf-8'); h.set('Allow', 'POST');
      return new Response('Use the password form to continue.', { status: 405, headers: h });
    }
    if (request.headers.get('Origin') !== origin) return new Response('Please use the password form on this site.', { status: 403, headers: headers('text/plain; charset=utf-8') });
    if (url.pathname === '/_preview/lock') {
      const h = headers(); h.set('Location', '/'); h.set('Set-Cookie', cookie('', true));
      return new Response(null, { status: 303, headers: h });
    }
    const values = await form(request);
    if (!values || values.getAll('password').length !== 1 || values.getAll('next').length > 1) return new Response('Please try the password form again.', { status: 400, headers: headers('text/plain; charset=utf-8') });
    const next = safeNext(values.get('next'), origin);
    if (!await correctPassword(values.get('password'), env.SAPIENS_SITE_PASSWORD)) return gate(next, request.method, true);
    const h = headers(); h.set('Location', next); h.set('Set-Cookie', cookie(await session(env)));
    return new Response(null, { status: 303, headers: h });
  }
  if (!['GET', 'HEAD'].includes(request.method)) {
    const h = headers('text/plain; charset=utf-8'); h.set('Allow', 'GET, HEAD');
    return new Response('Method not allowed.', { status: 405, headers: h });
  }
  // Only the gate's brand mark and font are public; website paths still require the password.
  if (url.pathname === '/_preview/brand') return serve('/assets/sapiens-logo.png', request, assets);
  if (url.pathname === '/_preview/type/serif') return serve('/assets/french-fonts/cormorant-garamond-500.woff', request, assets);
  if (!await unlocked(request, env)) {
    const isPage = url.pathname === '/' || /\.html$/.test(url.pathname) || !/\.[a-z0-9]+$/i.test(url.pathname) || request.headers.get('Accept')?.includes('text/html');
    return isPage ? gate(safeNext(url.pathname + url.search, origin), request.method) : new Response(null, { status: 401, headers: headers('text/plain; charset=utf-8') });
  }
  let path;
  try { path = decodeURIComponent(url.pathname); } catch { return new Response('Invalid address.', { status: 400, headers: headers('text/plain; charset=utf-8') }); }
  if (path === '/') path = '/index.html';
  if (!assets[path] && path.endsWith('/')) path = path.slice(0, -1) + '.html';
  return serve(path, request, assets, true);
}

export default { fetch(request, env) { return handleRequest(request, env); } };
