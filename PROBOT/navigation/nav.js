let currentIndex = 0;

function moveSlide(step) {
    const slider = document.querySelector(".product-slider");
    const totalSlides = document.querySelectorAll(".product-card").length;
    const visibleSlides = 3;

    currentIndex += step;

    if (currentIndex > totalSlides - visibleSlides) {
        currentIndex = 0; // Loop back to the start
    } else if (currentIndex < 0) {
        currentIndex = totalSlides - visibleSlides; // Loop to the last set
    }

    slider.style.transform = `translateX(${-currentIndex * 220}px)`;
}
