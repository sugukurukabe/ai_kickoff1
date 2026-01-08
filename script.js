document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const slideNumberDisplay = document.getElementById('slidenumber');
    const body = document.body;

    let currentSlide = 0;
    const totalSlides = slides.length;

    function updateSlide() {
        slides.forEach((slide, index) => {
            if (index === currentSlide) {
                slide.classList.add('active');
                // Optional: add exit animations for previous slide here if needed
            } else {
                slide.classList.remove('active');
            }
        });

        if (slideNumberDisplay) {
            slideNumberDisplay.textContent = `${currentSlide + 1} / ${totalSlides}`;
        }

        // Background hue shift
        const hue = (currentSlide * 10) % 360;
        // body.style.setProperty('--bg-gradient', ...); // Reserved for future use
    }

    function nextSlide() {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            updateSlide();
        }
    }

    function prevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlide();
        }
    }

    // Event Listeners
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        }
    });

    // Initialize
    updateSlide();
});
