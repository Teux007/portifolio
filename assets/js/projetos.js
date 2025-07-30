document.addEventListener('DOMContentLoaded', function() {
    // Verifica o tema preferido do usuário
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        document.querySelector('.theme-toggle').textContent = '☀️';
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
        document.querySelector('.theme-toggle').textContent = '☀️';
    } else {
        document.querySelector('.theme-toggle').textContent = '🌙';
    }

    // Alternar entre temas claro e escuro
    document.querySelector('.theme-toggle').addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            this.textContent = '☀️';
        } else {
            localStorage.setItem('darkMode', 'disabled');
            this.textContent = '🌙';
        }
    });
});