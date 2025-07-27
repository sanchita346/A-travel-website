// JavaScript for hotels page interactivity

document.addEventListener('DOMContentLoaded', () => {
    // Carousel functionality
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.next-btn');
    const prevButton = document.querySelector('.prev-btn');
    const slideWidth = slides[0].getBoundingClientRect().width;

    // Arrange slides next to one another
    slides.forEach((slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    });

    let currentSlideIndex = 0;

    const moveToSlide = (track, currentSlide, targetSlide) => {
        track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
        currentSlide.classList.remove('current-slide');
        targetSlide.classList.add('current-slide');
    };

    // Click right, move slides to the left
    nextButton.addEventListener('click', () => {
        const currentSlide = track.querySelector('.current-slide');
        let nextSlide = currentSlide.nextElementSibling;
        if (!nextSlide) {
            nextSlide = slides[0];
        }
        moveToSlide(track, currentSlide, nextSlide);
    });

    // Click left, move slides to the right
    prevButton.addEventListener('click', () => {
        const currentSlide = track.querySelector('.current-slide');
        let prevSlide = currentSlide.previousElementSibling;
        if (!prevSlide) {
            prevSlide = slides[slides.length - 1];
        }
        moveToSlide(track, currentSlide, prevSlide);
    });

    // 3D Virtual Tour Button
    const virtualTourBtn = document.getElementById('virtualTourBtn');
    virtualTourBtn.addEventListener('click', () => {
        alert('3D Virtual Tour is coming soon!');
    });

    // Booking form submission
    const bookingForm = document.getElementById('bookingForm');
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const destination = bookingForm.destination.value;
        const checkin = bookingForm.checkin.value;
        const checkout = bookingForm.checkout.value;
        const guests = bookingForm.guests.value;

        alert(`Booking request received for ${destination} from ${checkin} to ${checkout} for ${guests} guest(s).`);
        bookingForm.reset();
    });
});
