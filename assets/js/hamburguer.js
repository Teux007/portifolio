document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o botão do menu hambúrguer pelo ID
    const menuToggle = document.getElementById('menu-toggle');
    // Seleciona a lista de links de navegação pelo ID
    const navLinks = document.getElementById('nav-links');

    // Verifica se os elementos existem antes de adicionar o listener
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            // Adiciona ou remove a classe 'active' na lista de links
            // Essa classe controla a visibilidade do menu via CSS
            navLinks.classList.toggle('active');
        });
    }

    // --- Opcional: Fecha o menu quando um link é clicado (útil para menus mobile) ---
    const navItems = navLinks.querySelectorAll('a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // --- Funcionalidade de Tema (mantida do seu código) ---
    const themeToggleBtn = document.getElementById('toggle-theme');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', function() {
            document.body.classList.toggle('dark');
            // Salva a preferência de tema no localStorage
            if (document.body.classList.contains('dark')) {
                localStorage.setItem('theme', 'dark');
                themeToggleBtn.textContent = '🌙'; // Altera para ícone de lua
            } else {
                localStorage.setItem('theme', 'light');
                themeToggleBtn.textContent = '☀️'; // Altera para ícone de sol
            }
        });

        // Aplica o tema salvo ao carregar a página
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark');
            themeToggleBtn.textContent = '🌙';
        } else {
            themeToggleBtn.textContent = '☀️';
        }
    }
});