// JavaScript to handle the "Details" button functionality on flights page

document.addEventListener('DOMContentLoaded', () => {
    const detailsButtons = document.querySelectorAll('.details-btn');
    const modal = document.getElementById('flightDetailsModal');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const modalFlightRoute = document.getElementById('modalFlightRoute');
    const modalFlightPrice = document.getElementById('modalFlightPrice');
    const modalFlightDates = document.getElementById('modalFlightDates');
    const modalBookBtn = document.getElementById('modalBookBtn');

    detailsButtons.forEach(button => {
        button.addEventListener('click', () => {
            const dealCard = button.closest('.deal-card');
            if (!dealCard) return;

            // Extract flight route and price from the flight-info section
            const flightRoute = dealCard.querySelector('.flight-info h3')?.textContent || '';
            const flightPrice = dealCard.querySelector('.price')?.textContent || '';

            // Extract additional details from the hidden details-panel
            const detailsPanel = dealCard.querySelector('.details-panel');
            let detailsHtml = '';
            if (detailsPanel) {
                detailsHtml = detailsPanel.innerHTML;
            }

            // Populate modal content
            modalFlightRoute.textContent = flightRoute;
            modalFlightPrice.textContent = flightPrice;
            modalFlightDates.innerHTML = detailsHtml;

            // Show modal
            modal.style.display = 'block';

            // Update Book Now button action if needed
            modalBookBtn.onclick = () => {
                // Simulate clicking the Book Now button in the deal card
                const bookBtn = dealCard.querySelector('.book-btn');
                if (bookBtn) {
                    bookBtn.click();
                }
                modal.style.display = 'none';
            };
        });
    });

    // Close modal on close button click
    modalCloseBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal on outside click
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
