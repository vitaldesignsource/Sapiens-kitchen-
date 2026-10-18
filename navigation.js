/* Native desktop dropdowns keep navigation usable before this enhancement loads. */
(() => {
  'use strict';
  const groups = [...document.querySelectorAll('.desktop-nav .nav-dropdown')];
  if (!groups.length) return;
  function closeOthers(keep = null) {
    groups.forEach(group => { if (group !== keep) group.open = false; });
  }
  groups.forEach(group => {
    const summary = group.querySelector('summary');
    group.addEventListener('toggle', () => { if (group.open) closeOthers(group); });
    summary.addEventListener('keydown', event => {
      if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;
      event.preventDefault(); closeOthers(group); group.open = true;
      const links = [...group.querySelectorAll('.nav-flyout a')];
      (event.key === 'ArrowUp' ? links[links.length - 1] : links[0])?.focus();
    });
    group.addEventListener('keydown', event => {
      if (event.key === 'Escape' && group.open) {
        event.preventDefault(); group.open = false; summary.focus({ preventScroll: true });
      }
    });
    group.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeOthers()));
  });
  document.addEventListener('click', event => {
    const current = groups.find(group => group.contains(event.target));
    if (!current) closeOthers();
  });
  document.addEventListener('focusin', event => {
    const current = groups.find(group => group.contains(event.target));
    closeOthers(current || null);
  });
  window.matchMedia('(max-width: 1050px)').addEventListener('change', event => {
    if (event.matches) closeOthers();
  });
})();
