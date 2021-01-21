export default function checkInputs(...ids) {
  ids.forEach((id) => {
    const el = document.querySelector(`#${id}`);
    if (!el.value.trim()) {
      el.style.borderColor = 'rgba(225, 0, 0, 0.6)';
      el.addEventListener('focus', (e) => {
        e.target.style.borderColor = '';
      });
    }
  });
}
