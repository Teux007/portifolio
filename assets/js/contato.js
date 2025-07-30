document.getElementById('toggle-theme').addEventListener('click', () => {
    // Alterna entre os temas claro e escuro
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    // Atualiza o atributo data-theme no body
    document.body.setAttribute('data-theme', newTheme);
    
    // Salva o tema no localStorage
    localStorage.setItem('theme', newTheme);
});

// Verifica o tema armazenado no localStorage ao carregar a página
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.setAttribute('data-theme', savedTheme);
}
