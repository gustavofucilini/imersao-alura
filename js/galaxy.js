document.addEventListener('DOMContentLoaded', function() {
    const galaxyBackground = document.querySelector('.galaxy-background');

    // Cria estrelas aleatoriamente
    for (let i = 0; i < 200; i++) { 
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 1 + 's'; // Adiciona atraso na animação para as estrelas piscarem em momentos diferentes
        galaxyBackground.appendChild(star);
    }

    // Move as estrelas em relação ao cursor
    document.addEventListener('mousemove', (event) => {
        const mouseX = event.clientX / window.innerWidth;
        const mouseY = event.clientY / window.innerHeight;

        const stars = document.querySelectorAll('.star');
        stars.forEach(star => {
            const starX = (mouseX - 0.5) * 50;
            const starY = (mouseY - 0.5) * 50;

            star.style.transform = `translate(${starX}px, ${starY}px)`;
        });
    });
});
