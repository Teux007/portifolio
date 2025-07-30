const button = document.getElementById('portfolio-btn');
const bubblesContainer = document.querySelector('.bubbles');

// Criação das bolinhas
for (let i = 0; i < 50; i++) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    const size = Math.random() * 10 + 5; // Tamanho aleatório entre 5 e 15
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.animationDuration = `${Math.random() * 2 + 3}s`; // Duração aleatória entre 3s e 5s
    bubblesContainer.appendChild(bubble);
}

// Efeito de rastro
document.addEventListener('mousemove', (e) => {
    const rastro = document.createElement('div');
    rastro.className = 'rastro';
    rastro.style.left = `${e.pageX}px`;
    rastro.style.top = `${e.pageY}px`;
    document.body.appendChild(rastro);

    setTimeout(() => {
        rastro.remove();
    }, 300);
});
