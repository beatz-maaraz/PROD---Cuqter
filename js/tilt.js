// Premium 3D Tilt Hover Animation for Cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.bento-card, .glass-panel, .glass-card');
    
    cards.forEach(card => {
        // Exclude interactive search dropdown or specific overlays
        if (card.id === 'search-results' || card.closest('#article-modal')) return;

        // Apply smooth transition styling
        card.style.transition = 'transform 0.1s ease-out, box-shadow 0.2s ease-out, background-color 0.3s ease';
        card.style.transformStyle = 'preserve-3d';
        
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within element
            const y = e.clientY - rect.top;  // y position within element
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Calculate rotation values (max 8 degrees tilt)
            const rotateX = ((centerY - y) / centerY) * 8;
            const rotateY = ((x - centerX) / centerX) * 8;
            
            // Apply 3D rotation and translation
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
            
            // Set dynamic shadow glow based on tilt direction
            card.style.boxShadow = `0 20px 45px rgba(0, 0, 0, 0.45), 0 0 25px rgba(216, 202, 255, 0.08)`;
        });
        
        card.addEventListener('mouseleave', () => {
            // Smoothly snap back to default state
            card.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.5s ease-out';
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
            card.style.boxShadow = '';
            
            // Reset transition for mousemove reactivity after snapping back
            setTimeout(() => {
                card.style.transition = 'transform 0.1s ease-out, box-shadow 0.2s ease-out, background-color 0.3s ease';
            }, 500);
        });
    });
});
