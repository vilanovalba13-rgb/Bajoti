document.addEventListener('click', function (e) {
  const link = e.target.closest && e.target.closest('.discover-link');
  if (!link) return;
  e.preventDefault();
  const dest = document.querySelector('#Destins');
  if (dest) {
    dest.scrollIntoView({ behavior: 'smooth', block: 'start' });
    dest.setAttribute('tabindex', '-1');
    dest.focus({ preventScroll: true });
    setTimeout(() => dest.removeAttribute('tabindex'), 1000);
  }
});