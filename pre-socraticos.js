let index = 0;

function showNextSlide() {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
    index = (index + 1) % totalSlides;
    slides.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(showNextSlide, 3000);