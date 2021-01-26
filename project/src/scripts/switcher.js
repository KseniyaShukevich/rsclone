function switchColorTheme() {
  const switchThemeButton = document.querySelector('.form-switch_color');

  switchThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    if (document.body.classList.contains('dark')) {
      localStorage.setItem('colorTheme', 'dark');
    } else {
      localStorage.setItem('colorTheme', 'light');
    }
  });
}

function setColorTheme() {
  const colorValue = localStorage.getItem('colorTheme');
  const switchThemeInput = document.querySelector('.form-switch_color input');

  if (colorValue === 'dark') {
    document.body.classList.add('dark');
    switchThemeInput.setAttribute('checked', '');
  }
}

switchColorTheme();
setColorTheme();
