function initPresentation() {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const slideNumberDisplay = document.getElementById('slidenumber');
    const body = document.body;

    let currentSlide = 0;
    const totalSlides = slides.length;

    console.log("Presentation loaded. Total slides:", totalSlides);

    function updateSlide() {
        slides.forEach((slide, index) => {
            if (index === currentSlide) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });

        if (slideNumberDisplay) {
            slideNumberDisplay.textContent = `${currentSlide + 1} / ${totalSlides}`;
        }

        // Background hue shift
        // const hue = (currentSlide * 10) % 360;
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
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            console.log("Next button clicked");
            nextSlide();
        });
    }
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            console.log("Prev button clicked");
            prevSlide();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        }
    });

    // Initialize
    updateSlide();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPresentation);
} else {
    initPresentation();
}
