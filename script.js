function initPresentation() {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const slideNumberDisplay = document.getElementById('slidenumber');

    let currentSlide = 0;
    const totalSlides = slides.length;

    console.log("Presentation loaded. Total slides key:", totalSlides);

    if (totalSlides === 0) {
        console.error("No slides found!");
        return;
    }

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
        nextBtn.onclick = (e) => { // Use onclick directly to avoid duplicate listeners
            e.preventDefault();
            console.log("Next button clicked");
            nextSlide();
        };
    }
    if (prevBtn) {
        prevBtn.onclick = (e) => {
            e.preventDefault();
            console.log("Prev button clicked");
            prevSlide();
        };
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
            e.preventDefault(); // Prevent scrolling
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            prevSlide();
        }
    });

    // Initialize
    updateSlide();
}

// Ensure init runs after DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPresentation);
} else {
    initPresentation();
}
