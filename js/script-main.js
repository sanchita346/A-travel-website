console.log("script.js loaded");
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOMContentLoaded event fired");
    // Existing code unchanged...

    // Thumbnail slideshow for side-thumbnails in main hero
    const thumbnails = document.querySelectorAll('.thumbnail-slide');
    const prevBtn = document.getElementById('prevThumbnail');
    const nextBtn = document.getElementById('nextThumbnail');
    const pauseBtn = document.getElementById('pauseThumbnail');

    let currentIndex = 0;
    let isPlaying = true;
    let intervalTime = 10000; // 10 seconds
    let slideshowInterval;

    function showThumbnail(index) {
        console.log('Showing thumbnail index:', index);
        thumbnails.forEach((thumb, i) => {
            thumb.classList.toggle('active', i === index);
        });
    }

    function nextThumbnail() {
        currentIndex = (currentIndex + 1) % thumbnails.length;
        console.log('Next thumbnail:', currentIndex);
        showThumbnail(currentIndex);
    }

    function prevThumbnailFunc() {
        currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
        console.log('Previous thumbnail:', currentIndex);
        showThumbnail(currentIndex);
    }

    function startSlideshow() {
        console.log('Starting slideshow');
        slideshowInterval = setInterval(() => {
            nextThumbnail();
        }, intervalTime);
        pauseBtn.textContent = '❚❚';
        pauseBtn.setAttribute('aria-label', 'Pause slideshow');
        isPlaying = true;
    }

    function pauseSlideshow() {
        console.log('Pausing slideshow');
        clearInterval(slideshowInterval);
        pauseBtn.textContent = '▶';
        pauseBtn.setAttribute('aria-label', 'Play slideshow');
        isPlaying = false;
    }

    prevBtn.addEventListener('click', () => {
        console.log('Prev button clicked');
        prevThumbnailFunc();
        pauseSlideshow();
    });

    nextBtn.addEventListener('click', () => {
        console.log('Next button clicked');
        nextThumbnail();
        pauseSlideshow();
    });

    pauseBtn.addEventListener('click', () => {
        console.log('Pause button clicked');
        if (isPlaying) {
            pauseSlideshow();
        } else {
            startSlideshow();
        }
    });

    // Initialize
    showThumbnail(currentIndex);
    startSlideshow();

    // Carousel functionality for trending destinations
    const carousels = [
        {
            containerId: 'globalSlider',
            leftArrowId: 'globalLeft',
            rightArrowId: 'globalRight',
            progressId: 'globalProgress',
            playPauseId: 'globalPlayPause',
        },
        {
            containerId: 'indianSlider',
            leftArrowId: 'indianLeft',
            rightArrowId: 'indianRight',
            progressId: 'indianProgress',
            playPauseId: 'indianPlayPause',
        }
    ];

    carousels.forEach(({ containerId, leftArrowId, rightArrowId, progressId, playPauseId }) => {
        const container = document.getElementById(containerId);
        const leftArrow = document.getElementById(leftArrowId);
        const rightArrow = document.getElementById(rightArrowId);
        const progress = document.getElementById(progressId);
        const playPauseBtn = document.getElementById(playPauseId);

        if (!container || !leftArrow || !rightArrow || !progress || !playPauseBtn) return;

        const cardWidth = container.querySelector('.destination-card').offsetWidth + 16; // card width + gap
        const totalCards = container.querySelectorAll('.destination-card').length;
        const visibleCards = Math.floor(container.offsetWidth / cardWidth);
        const maxIndex = totalCards - visibleCards;
        let currentIndex = 0;
        let isPlaying = true;
        let autoplayInterval;

        // Create progress dots
        for (let i = 0; i <= maxIndex; i++) {
            const dot = document.createElement('button');
            dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
            dot.addEventListener('click', () => {
                currentIndex = i;
                updateCarousel();
                pauseAutoplay();
            });
            progress.appendChild(dot);
        }

        const dots = Array.from(progress.children);

        function updateCarousel() {
            container.scrollTo({
                left: currentIndex * cardWidth,
                behavior: 'smooth'
            });
            dots.forEach((dot, idx) => {
                dot.classList.toggle('active', idx === currentIndex);
            });
        }

        function nextSlide() {
            if (currentIndex < maxIndex) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            updateCarousel();
        }

        function prevSlide() {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = maxIndex;
            }
            updateCarousel();
        }

        function startAutoplay() {
            autoplayInterval = setInterval(() => {
                nextSlide();
            }, 4000);
            playPauseBtn.textContent = '⏸️';
            playPauseBtn.setAttribute('aria-label', 'Pause carousel');
            isPlaying = true;
        }

        function pauseAutoplay() {
            clearInterval(autoplayInterval);
            playPauseBtn.textContent = '▶️';
            playPauseBtn.setAttribute('aria-label', 'Play carousel');
            isPlaying = false;
        }

        leftArrow.addEventListener('click', () => {
            prevSlide();
            pauseAutoplay();
        });

        rightArrow.addEventListener('click', () => {
            nextSlide();
            pauseAutoplay();
        });

        playPauseBtn.addEventListener('click', () => {
            if (isPlaying) {
                pauseAutoplay();
            } else {
                startAutoplay();
            }
        });

        // Initialize
        updateCarousel();
        startAutoplay();

        // Keyboard accessibility for dots
        dots.forEach(dot => {
            dot.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    dot.click();
                }
            });
        });
    });

    // Additional button handlers for index.html

    // Sign Up button navigation
    const signUpBtn = document.querySelector('.sign-up-btn');
    if (signUpBtn) {
        signUpBtn.addEventListener('click', () => {
            window.location.href = 'auth.html';
        });
    }

    // Login button navigation (if any login buttons exist)
    const loginBtns = document.querySelectorAll('.login-btn');
    loginBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            window.location.href = 'auth.html';
        });
    });

    // Explore Destinations button navigation
    const exploreBtn = document.querySelector('.cta-btn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
            window.location.href = 'destinations.html';
        });

    }

    // Flight search form submission handling
    const flightForm = document.getElementById('flightForm');
    if (flightForm) {
            flightForm.addEventListener('submit', (e) => {
                e.preventDefault(); // prevents default form submit
                console.log("flightForm submitted");
                const from = flightForm.from.value.trim();
                const to = flightForm.to.value.trim();
                if (!from || !to) {
                    alert('Please enter both From and To locations.');
                    return;
                }
                const params = new URLSearchParams(new FormData(flightForm)).toString();
                window.location.href = `flights.html?${params}`;
            });

        // Enable/disable return date based on trip type
        const tripTypeRadios = flightForm.querySelectorAll('input[name="tripType"]');
        const returnInput = flightForm.querySelector('input[name="return"]');
        tripTypeRadios.forEach(radio => {
            radio.addEventListener('change', () => {
                if (radio.value === 'roundTrip' && radio.checked) {
                    returnInput.disabled = false;
                } else {
                    returnInput.disabled = true;
                    returnInput.value = '';
                }
            });
        });
    }

    // Map hotspots click handling
    const mapHotspots = document.querySelectorAll('.map-hotspot');
    mapHotspots.forEach(button => {
        button.addEventListener('click', () => {
            console.log('Map hotspot clicked:', button.getAttribute('aria-label'));
            const infoModal = document.getElementById('map-info-modal');
            const modalTitle = document.getElementById('modal-title');
            const modalDesc = document.getElementById('modal-desc');
            const modalCloseBtn = document.getElementById('modal-close-btn');

            modalTitle.textContent = button.getAttribute('aria-label');
            modalDesc.textContent = button.getAttribute('data-info');
            infoModal.hidden = false;

            function closeModal() {
                infoModal.hidden = true;
                modalCloseBtn.removeEventListener('click', closeModal);
                window.removeEventListener('keydown', escListener);
            }

            modalCloseBtn.addEventListener('click', closeModal);

            function escListener(e) {
                if (e.key === 'Escape') {
                    closeModal();
                }
            }

            window.addEventListener('keydown', escListener);

            // Close modal when clicking outside modal content
            infoModal.addEventListener('click', (event) => {
                if (event.target === infoModal) {
                    closeModal();
                }
            });
        });
    });

    // Newsletter subscribe form handling
    const subscribeForm = document.getElementById('subscribeForm');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = subscribeForm.querySelector('input[name="email"]');
            const email = emailInput.value.trim();
            if (!email) {
                alert('Please enter your email to subscribe.');
                return;
            }
            alert(`Thank you for subscribing with ${email}!`);
            subscribeForm.reset();
        });
    }

    // Flight deals "Book Now" buttons handling
    const bookButtons = document.querySelectorAll('.book-btn');
    const modal = document.getElementById('flightDetailsModal');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const modalFlightRoute = document.getElementById('modalFlightRoute');
    const modalFlightPrice = document.getElementById('modalFlightPrice');
    const modalFlightDates = document.getElementById('modalFlightDates');
    const modalBookBtn = document.getElementById('modalBookBtn');

    bookButtons.forEach(button => {
        button.addEventListener('click', () => {
            const dealCard = button.closest('.deal-card');
            if (!dealCard) return;

            const route = dealCard.querySelector('h3')?.textContent || '';
            const price = dealCard.querySelector('p:nth-of-type(1)')?.textContent || '';
            const dates = dealCard.querySelector('p:nth-of-type(2)')?.textContent || '';

            modalFlightRoute.textContent = route;
            modalFlightPrice.textContent = price;
            modalFlightDates.textContent = dates;

            modal.style.display = 'block';
        });
    });

    modalCloseBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modalBookBtn.addEventListener('click', () => {
        alert('Booking confirmed! Thank you for choosing The Heritage Luxe.');
        modal.style.display = 'none';
    });

    // Close modal when clicking outside modal content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Details button toggle handling
    document.addEventListener("DOMContentLoaded", () => {
        const detailsButtons = document.querySelectorAll('.details-btn');
        console.log(`Found ${detailsButtons.length} details buttons`);
        const modal = document.getElementById('flightDetailsModal');
        const modalCloseBtn = document.getElementById('modalCloseBtn');
        const modalFlightRoute = document.getElementById('modalFlightRoute');
        const modalFlightPrice = document.getElementById('modalFlightPrice');
        const modalFlightDates = document.getElementById('modalFlightDates');
        const modalBookBtn = document.getElementById('modalBookBtn');

        detailsButtons.forEach(button => {
            button.addEventListener('click', () => {
                console.log("Details button clicked");
                const dealCard = button.closest('.deal-card');
                if (!dealCard) return;

                // Extract flight info from deal card
                const route = dealCard.querySelector('h3')?.textContent || '';
                const price = dealCard.querySelector('.price')?.textContent || '';
                // Extract duration and stops from paragraphs
                const infoParagraphs = dealCard.querySelectorAll('.flight-info p');
                let duration = '';
                let stops = '';
                infoParagraphs.forEach(p => {
                    if (p.textContent.includes('Duration')) {
                        duration = p.textContent;
                    } else if (p.textContent.includes('Stops')) {
                        stops = p.textContent;
                    }
                });
                const dates = `${duration} | ${stops}`;

                // Populate modal content
                modalFlightRoute.textContent = route;
                modalFlightPrice.textContent = price;
                modalFlightDates.textContent = dates;

                // Show modal
                modal.style.display = 'block';
            });
        });

        modalCloseBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        modalBookBtn.addEventListener('click', () => {
            alert('Booking confirmed! Thank you for choosing The Heritage Luxe.');
            modal.style.display = 'none';
        });

        // Close modal when clicking outside modal content
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });

    // Newsletter form submission handling with success message
    const newsletterForm = document.getElementById('newsletter-form');
    const formMessage = document.getElementById('form-message');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input[name="email"]');
            const email = emailInput.value.trim();
            if (!email) {
                formMessage.textContent = 'Please enter a valid email address.';
                formMessage.style.color = 'red';
                return;
            }
        formMessage.textContent = 'Thank you for subscribing!';
        formMessage.style.color = 'lightgreen';
        emailInput.value = '';
        setTimeout(() => {
            formMessage.textContent = '';
        }, 3000);
    });
}


            // Simulate successful submission
            formMessage.textContent = 'Thank you for subscribing!';
            formMessage.style.color = 'lightgreen';

            // Clear input
            emailInput.value = '';

            // Animate success message fade out after 3 seconds
            setTimeout(() => {
                formMessage.textContent = '';
            }, 3000);
        });
    }
});
