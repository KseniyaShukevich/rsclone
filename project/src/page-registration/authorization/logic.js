export default function checkInputs(...ids) {
  ids.forEach((id) => {
    const el = document.getElementById(id);
    if (!el.value.trim()) {
      el.style.borderColor = 'red';
      el.addEventListener('focus', (e) => {
        e.target.style.borderColor = '';
      });
    }
  });
}
