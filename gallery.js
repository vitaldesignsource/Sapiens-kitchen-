/* One calm photographic carousel; native horizontal scrolling is the fallback. */
(() => {
  'use strict';
  const root = document.querySelector('[data-place-carousel]');
  if (!root) return;
  const slides = [...root.querySelectorAll('[data-gallery-slide]')];
  const dots = [...root.querySelectorAll('[data-gallery-dot]')];
  const track = root.querySelector('[data-gallery-track]');
  const controls = root.querySelector('[data-gallery-controls]');
  const rotation = root.querySelector('[data-gallery-toggle]');
  const rotationText = root.querySelector('[data-gallery-toggle-text]');
  const status = root.querySelector('[data-gallery-status]');
  const count = root.querySelector('[data-gallery-count]');
  if (slides.length < 2 || dots.length !== slides.length || !track || !controls || !rotation) return;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const duration = 7000;
  let index = 0;
  let requested = !reduced.matches;
  let inView = !('IntersectionObserver' in window);
  let hovering = false;
  let suspended = false;
  let timer = 0;
  let motion = null;
  let request = 0;
  let gesture = null;
  let toggleIntent = null;

  function stopClock() {
    window.clearTimeout(timer); timer = 0;
    root.classList.remove('is-playing');
    if (motion) motion.pause();
  }

  function reconcile() {
    stopClock();
    root.classList.toggle('is-requested', requested && !reduced.matches);
    rotation.hidden = reduced.matches;
    rotation.setAttribute('aria-label', requested ? 'Pause slideshow' : 'Play slideshow');
    rotationText.textContent = requested ? 'Pause' : 'Play';
    if (!requested || reduced.matches || !inView || hovering || document.hidden || suspended) return;
    root.classList.add('is-playing');
    const photo = slides[index].querySelector('img');
    if (!motion && photo?.animate) {
      motion = photo.animate([{ transform: 'scale(1.028)' }, { transform: 'scale(1)' }], {
        duration: duration + 1000, easing: 'cubic-bezier(.2,.5,.4,1)', fill: 'both'
      });
    } else if (motion && motion.playState !== 'finished') motion.play();
    timer = window.setTimeout(() => { timer = 0; show(index + 1, false); }, duration);
  }

  function render(announce = false) {
    slides.forEach((slide, number) => {
      const active = number === index;
      slide.classList.toggle('is-active', active);
      slide.setAttribute('aria-hidden', String(!active));
      slide.inert = !active;
      dots[number].classList.toggle('is-current', active);
      if (active) dots[number].setAttribute('aria-current', 'true');
      else dots[number].removeAttribute('aria-current');
    });
    count.textContent = String(index + 1).padStart(2, '0') + ' / ' + String(slides.length).padStart(2, '0');
    if (announce) status.textContent = slides[index].getAttribute('aria-label');
    reconcile();
  }

  async function show(next, manual = true) {
    const ticket = ++request;
    if (manual) requested = false;
    stopClock();
    const target = (next + slides.length) % slides.length;
    const photo = slides[target].querySelector('img');
    if (photo) {
      photo.loading = 'eager';
      try { if (photo.decode) await photo.decode(); } catch (_) { /* Keep its descriptive alternative. */ }
    }
    if (ticket !== request) return;
    if (target !== index && motion) { motion.cancel(); motion = null; }
    index = target; render(manual);
  }

  root.querySelector('[data-gallery-prev]').addEventListener('click', () => show(index - 1));
  root.querySelector('[data-gallery-next]').addEventListener('click', () => show(index + 1));
  dots.forEach((dot, number) => dot.addEventListener('click', () => show(number)));
  // Preserve click intent when pointer focus first pauses an already playing gallery.
  rotation.addEventListener('pointerdown', () => { toggleIntent = requested; });
  rotation.addEventListener('pointercancel', () => { toggleIntent = null; });
  rotation.addEventListener('click', () => {
    requested = !(toggleIntent ?? requested); toggleIntent = null; reconcile();
  });
  root.addEventListener('focusin', () => { requested = false; reconcile(); });
  root.addEventListener('keydown', event => {
    const targets = { ArrowLeft: index - 1, ArrowRight: index + 1, Home: 0, End: slides.length - 1 };
    if (!(event.key in targets)) return;
    event.preventDefault(); show(targets[event.key]);
  });
  track.addEventListener('pointerenter', event => {
    if (event.pointerType === 'touch') return;
    hovering = true; reconcile();
  });
  track.addEventListener('pointerleave', () => { hovering = false; reconcile(); });
  track.addEventListener('pointerdown', event => {
    if (!event.isPrimary || event.button > 0) return;
    gesture = { x: event.clientX, y: event.clientY, id: event.pointerId };
    if (track.setPointerCapture) track.setPointerCapture(event.pointerId);
  });
  track.addEventListener('pointerup', event => {
    if (!gesture || gesture.id !== event.pointerId) return;
    const dx = event.clientX - gesture.x, dy = event.clientY - gesture.y;
    gesture = null;
    if (Math.abs(dx) >= 40 && Math.abs(dx) > Math.abs(dy) * 1.25) show(index + (dx < 0 ? 1 : -1));
  });
  track.addEventListener('pointercancel', () => { gesture = null; });
  track.addEventListener('lostpointercapture', () => { gesture = null; });
  track.addEventListener('dragstart', event => event.preventDefault());
  document.addEventListener('visibilitychange', reconcile);
  window.addEventListener('pagehide', () => { suspended = true; ++request; stopClock(); });
  window.addEventListener('pageshow', () => { suspended = false; reconcile(); });
  reduced.addEventListener('change', () => {
    requested = false;
    if (motion) { motion.cancel(); motion = null; }
    reconcile();
  });
  root.classList.add('is-enhanced'); controls.hidden = false; render();
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      const entry = entries[entries.length - 1];
      inView = entry.isIntersecting && entry.intersectionRatio >= .25; reconcile();
    }, { threshold: .25 });
    observer.observe(root);
  }
})();
