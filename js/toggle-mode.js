const BUTTON_TOGGLE = document.getElementById('toggle-mode');
let darkMode = true;

BUTTON_TOGGLE.addEventListener('click', (event) => {
    document.documentElement.classList.toggle('light');
    const MODE = darkMode ? 'light' : 'dark';
    event.currentTarget.querySelector('span').textContent = `${MODE} mode ativado!`;
    darkMode = !darkMode;
});