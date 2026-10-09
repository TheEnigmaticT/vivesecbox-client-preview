document.querySelectorAll('[data-permission-demo]').forEach((demo) => {
  const result = demo.querySelector('.permission-result');
  const copy = result?.querySelector('[data-permission-copy]');
  const limited = demo.querySelector('[data-limited-copy]');
  const approved = demo.querySelector('[data-approved-copy]');
  demo.querySelectorAll('[data-role]').forEach((button) => button.addEventListener('click', () => {
    const state = button.dataset.role;
    demo.querySelectorAll('[data-role]').forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
    const source = state === 'approved' ? approved : limited;
    if (result && source) { result.dataset.state = state; result.replaceChildren(source.content.cloneNode(true)); }
  }));
});

document.querySelectorAll('[data-contact-form]').forEach((form) => form.addEventListener('submit', (event) => {
  event.preventDefault();
  const error = form.querySelector('[data-form-error]');
  const name = form.elements.namedItem('name')?.value.trim();
  const email = form.elements.namedItem('email')?.value.trim();
  const workflow = form.elements.namedItem('workflow')?.value.trim();
  if (!name || !email || !workflow) { error.textContent = 'Add your name, email and one workflow before opening your email client.'; return; }
  error.textContent = '';
  const subject = encodeURIComponent(`ViVeSec hands-on demo request — ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nWhat I would like to try:\n${workflow}\n\nThis message was prepared in the ViVeSec website preview. Please review and send it from your email client.`);
  window.location.href = `mailto:info@vivesecbox.com?subject=${subject}&body=${body}`;
}));

document.querySelectorAll('.mobile-nav').forEach((menu) => {
  const summary = menu.querySelector('summary');
  menu.addEventListener('keydown', (event) => { if (event.key === 'Escape' && menu.open) { menu.open = false; summary.focus(); } });
});
