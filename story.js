/* Reading aids enhance the owner's unedited text; the text never depends on JS. */
(() => {
  'use strict';
  const original = document.querySelector('.story-original');
  if (!original) return;
  const header = document.querySelector('.site-header');
  const ring = document.querySelector('[data-reading-progress]');
  const index = document.querySelector('.story-index');
  const links = [...document.querySelectorAll('.story-index nav a')];
  const chapters = links.map(link => document.getElementById(link.hash.slice(1)));
  let frame = 0;
  let disposed = false;

  // Native details stays available without JavaScript and starts compact on phones.
  if (index && window.matchMedia('(min-width: 1051px)').matches) index.open = true;

  function update() {
    frame = 0;
    if (disposed || document.hidden) return;
    const top = header ? Math.max(0, header.getBoundingClientRect().bottom) + 28 : 28;
    const rect = original.getBoundingClientRect();
    const start = rect.top + window.scrollY - top;
    const finish = rect.bottom + window.scrollY - window.innerHeight + 48;
    const progress = finish > start
      ? Math.max(0, Math.min(1, (window.scrollY - start) / (finish - start)))
      : rect.top <= top ? 1 : 0;
    if (ring) ring.style.strokeDashoffset = String(1 - progress);
    let current = 0;
    chapters.forEach((chapter, position) => {
      if (chapter && chapter.getBoundingClientRect().top <= top + 80) current = position;
    });
    links.forEach((link, position) => {
      if (position === current) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }
  function requestUpdate() {
    if (!disposed && !frame && !document.hidden) frame = window.requestAnimationFrame(update);
  }
  function visibilityChanged() {
    if (document.hidden && frame) {
      window.cancelAnimationFrame(frame);
      frame = 0;
    } else requestUpdate();
  }
  function stop() {
    disposed = true;
    if (frame) window.cancelAnimationFrame(frame);
    frame = 0;
  }
  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate, { passive: true });
  document.addEventListener('visibilitychange', visibilityChanged);
  window.addEventListener('pagehide', stop);
  window.addEventListener('pageshow', event => {
    if (event.persisted) { disposed = false; requestUpdate(); }
  });
  requestUpdate();
})();
