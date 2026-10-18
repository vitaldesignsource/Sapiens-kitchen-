/* Quiet, finite motion. Content stays visible if this enhancement cannot run. */
(() => {
  'use strict';
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const ease = 'cubic-bezier(.22,1,.36,1)';
  // Keep completed or interrupted moments quiet across preference changes and
  // browser-history restoration. New observers do not mean a new entrance.
  const entrances = new WeakSet();
  const traces = new WeakSet();
  let stop = () => {};

  function start() {
    if (preference.matches || !('IntersectionObserver' in window) || !Element.prototype.animate) return () => {};
    const active = new Set();
    const observers = [];
    let disposed = false;
    let frame = 0;

    function play(element, keyframes, options = {}, played = entrances) {
      if (!element || disposed || preference.matches || document.hidden || played.has(element)) return;
      // Long-form copy stays still, including when a future template adds a
      // reveal attribute to its wrapper. Never move a currently focused control.
      if (element.closest('.story-original') || element.querySelector('.story-original') || element.contains(document.activeElement)) {
        played.add(element);
        return;
      }
      const animation = element.animate(keyframes, {
        duration: 760, easing: ease, fill: 'backwards', ...options
      });
      played.add(element);
      active.add(animation);
      const release = () => active.delete(animation);
      animation.onfinish = release;
      animation.oncancel = release;
      return animation;
    }

    function rise(element, delay = 0, distance = 18) {
      const base = window.getComputedStyle(element).transform;
      const existing = base && base !== 'none' ? ` ${base}` : '';
      return play(element, [
        { opacity: 0, transform: `translate3d(0,${distance}px,0)${existing}` },
        { opacity: 1, transform: `translate3d(0,0,0)${existing}` }
      ], { delay });
    }

    // The opening composition settles into place once, in reading order.
    const hero = document.querySelector('.hero');
    if (hero && hero.getBoundingClientRect().bottom > 0) {
      document.querySelectorAll('.hero-copy > *').forEach((element, index) => {
        rise(element, Math.min(index * 75, 350), 16);
      });
      play(document.querySelector('.hero-visual'), [
        { opacity: 0, transform: 'translate3d(0,22px,0) scale(.985)' },
        { opacity: 1, transform: 'translate3d(0,0,0) scale(1)' }
      ], { duration: 1050, delay: 130 });
    }

    // Observe independent content groups, never an ancestor and its children.
    const delays = new WeakMap();
    const reveal = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        rise(entry.target, delays.get(entry.target) || 0);
        reveal.unobserve(entry.target);
      });
    }, { threshold: .12, rootMargin: '0px 0px -22px 0px' });
    observers.push(reveal);
    const groups = [
      '.dietary-intro, .dietary-list > li',
      '.philosophy .section-note, .philosophy h2, .philosophy-columns, .philosophy-copy > .text-link',
      '.menu-section .section-heading, .menu-tabs, #menu-grid, .menu-bottom',
      '.meal-content > .eyebrow, .meal-content > h2, .meal-content > p, .meal-steps, .meal-content > .button',
      '.chef-image-wrap, .chef-copy > .eyebrow, .chef-copy > h2, .chef-copy > p:not(.eyebrow), .chef-copy > .text-link',
      '#gather > div',
      '.more-photo, .more-copy > .eyebrow, .more-copy > h2, .service-list',
      '.faq-heading, .faq-list',
      '.dining-room > div',
      '.visit-title, .visit-details',
      '.footer-top, .footer-bottom',
      '[data-reveal]'
    ];
    groups.forEach(selector => {
      document.querySelectorAll(selector).forEach((element, index) => {
        delays.set(element, Math.min(index * 70, 210));
        reveal.observe(element);
      });
    });

    // A single outline trace gives the French ornament a small moment of focus.
    const gathering = document.querySelector('#gather');
    const mapObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.querySelectorAll('.france-outline path').forEach((path, index) => {
          play(path, [
            { strokeDasharray: '1', strokeDashoffset: '1', fillOpacity: 0 },
            { strokeDasharray: '1', strokeDashoffset: '0', fillOpacity: .12 }
          ], { duration: 1800, delay: index * 130, easing: 'cubic-bezier(.45,0,.2,1)' }, traces);
        });
        mapObserver.unobserve(entry.target);
      });
    }, { threshold: .25 });
    if (gathering) mapObserver.observe(gathering);
    observers.push(mapObserver);

    // A small botanical rule is drawn once, then stays part of the printed
    // composition. Its complete static form is the no-script/reduced-motion view.
    const botanicalObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.querySelectorAll('.botanical-stem, .botanical-leaf').forEach((path, index) => {
          const leaf = path.classList.contains('botanical-leaf');
          play(path, [
            { strokeDasharray: '1', strokeDashoffset: '1', fillOpacity: 0 },
            { offset: .72, strokeDasharray: '1', strokeDashoffset: '0', fillOpacity: 0 },
            { strokeDasharray: '1', strokeDashoffset: '0', fillOpacity: leaf ? .14 : 0 }
          ], {
            duration: leaf ? 1000 : 1200,
            delay: leaf ? Math.min(index * 65, 390) : 0,
            easing: 'cubic-bezier(.45,0,.2,1)'
          }, traces);
        });
        botanicalObserver.unobserve(entry.target);
      });
    }, { threshold: .6 });
    document.querySelectorAll('[data-botanical-trace]').forEach(ornament => botanicalObserver.observe(ornament));
    observers.push(botanicalObserver);

    const signature = document.querySelector('.signature');
    const signatureObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        play(entry.target, [
          { clipPath: 'inset(-25% 100% -25% -15%)', opacity: 0 },
          { clipPath: 'inset(-25% -20% -25% -15%)', opacity: 1 }
        ], { duration: 1150, delay: 180 });
        signatureObserver.unobserve(entry.target);
      });
    }, { threshold: .5 });
    if (signature) signatureObserver.observe(signature);
    observers.push(signatureObserver);

    // Just two large photos drift with the scroll on pointer-driven wide screens.
    // A frame is requested only after scroll, resize, or visibility changes.
    const widePointer = window.matchMedia('(min-width: 900px) and (hover: hover) and (pointer: fine)');
    const photos = [...document.querySelectorAll('.meal-photo > img, .dining-room > img')];
    const visiblePhotos = new Set();
    photos.forEach(photo => photo.classList.add('photo-parallax'));

    function updatePhotos() {
      frame = 0;
      if (disposed || preference.matches || document.hidden) return;
      if (!widePointer.matches) {
        photos.forEach(photo => photo.style.removeProperty('--photo-shift'));
        return;
      }
      const height = window.innerHeight;
      visiblePhotos.forEach(photo => {
        const rect = photo.parentElement.getBoundingClientRect();
        const progress = (rect.top + rect.height / 2 - height / 2) / (height + rect.height);
        const offset = Math.max(-12, Math.min(12, -progress * 28));
        photo.style.setProperty('--photo-shift', `${offset.toFixed(2)}px`);
      });
    }
    function requestUpdate() {
      if (!disposed && !frame && !document.hidden) frame = window.requestAnimationFrame(updatePhotos);
    }
    const photoObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) visiblePhotos.add(entry.target);
        else visiblePhotos.delete(entry.target);
      });
      requestUpdate();
    }, { rootMargin: '70px 0px' });
    photos.forEach(photo => photoObserver.observe(photo));
    observers.push(photoObserver);

    function visibilityChanged() {
      if (document.hidden) {
        if (frame) window.cancelAnimationFrame(frame);
        frame = 0;
        active.forEach(animation => animation.cancel());
        active.clear();
      } else requestUpdate();
    }
    function focusChanged(event) {
      active.forEach(animation => {
        const target = animation.effect?.target;
        if (target && target.contains(event.target)) animation.cancel();
      });
    }
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate, { passive: true });
    document.addEventListener('visibilitychange', visibilityChanged);
    document.addEventListener('focusin', focusChanged);
    requestUpdate();

    return () => {
      disposed = true;
      observers.forEach(observer => observer.disconnect());
      if (frame) window.cancelAnimationFrame(frame);
      active.forEach(animation => animation.cancel());
      active.clear();
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      document.removeEventListener('visibilitychange', visibilityChanged);
      document.removeEventListener('focusin', focusChanged);
      photos.forEach(photo => {
        photo.classList.remove('photo-parallax');
        photo.style.removeProperty('--photo-shift');
      });
    };
  }

  function syncPreference() {
    stop();
    stop = start();
  }
  preference.addEventListener('change', syncPreference);
  window.addEventListener('pagehide', () => stop());
  window.addEventListener('pageshow', event => { if (event.persisted) syncPreference(); });
  syncPreference();
})();
