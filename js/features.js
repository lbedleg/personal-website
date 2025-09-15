/* ========= Dark mode toggle ========= */
const darkBtn = document.querySelector('#darkToggle');
if (darkBtn) {
  darkBtn.addEventListener('click', () => {
    const root = document.documentElement;
    const next = !root.classList.contains('dark');
    root.classList.toggle('dark', next);
    darkBtn.setAttribute('aria-pressed', String(next));
  });
}

/* ========= Accordion (FAQ) ========= */
document.querySelectorAll('.acc .acc__head').forEach((head) => {
  head.addEventListener('click', () => {
    const item = head.closest('.acc__item');
    const expanded = head.getAttribute('aria-expanded') === 'true';
    head.setAttribute('aria-expanded', String(!expanded));
    item.classList.toggle('open', !expanded);
  });
});

/* ========= Modal (native <dialog>) ========= */
const modal = document.querySelector('#demoModal');
document.querySelector('#openModal')?.addEventListener('click', () => modal?.showModal());
document.querySelector('#closeModal')?.addEventListener('click', () => modal?.close());

/* ========= Slider (prev/next) ========= */
(function(){
  const slides = Array.from(document.querySelectorAll('.slide'));
  if (!slides.length) return;

  let idx = 0;
  const show = (i) => slides.forEach((s, n) => s.style.display = n === i ? 'block' : 'none');

  document.querySelector('#next')?.addEventListener('click', () => { idx = (idx + 1) % slides.length; show(idx); });
  document.querySelector('#prev')?.addEventListener('click', () => { idx = (idx - 1 + slides.length) % slides.length; show(idx); });

  show(0);
})();

/* ========= Back-to-top ========= */
const toTop = document.querySelector('#toTop');
if (toTop) {
  const update = () => { toTop.style.opacity = window.scrollY > 300 ? 1 : 0; };
  window.addEventListener('scroll', update, { passive: true });
  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  update();
}

/* ========= Live Filter (optional extra) ========= */
const filterInput = document.querySelector('#filterInput');
const filterItems = document.querySelectorAll('#filterList li');
if (filterInput && filterItems.length) {
  filterInput.addEventListener('input', () => {
    const q = filterInput.value.trim().toLowerCase();
    filterItems.forEach(li => {
      const label = (li.getAttribute('data-label') || '').toLowerCase();
      li.style.display = label.includes(q) ? '' : 'none';
    });
  });
}
