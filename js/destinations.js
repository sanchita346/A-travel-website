// JavaScript for destinations page interactivity

document.addEventListener('DOMContentLoaded', () => {
    const moreLinks = document.querySelectorAll('.more-link');
    const modal = document.getElementById('destinationModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalCloseBtn = document.getElementById('modalCloseBtn');

    // Destination detailed info data
    const destinationDetails = {
        "Goa": {
            overview: "Goa is a vibrant coastal destination known for its beautiful beaches, nightlife, and Portuguese heritage.",
            highlights: [
                "Baga Beach and Calangute Beach",
                "Famous for vibrant nightlife and beach parties",
                "Portuguese architecture and churches"
            ],
            bestTime: "November to February",
            climate: "Warm and sunny with average temperatures around 25°C",
            events: "Sunburn Festival, Carnival",
            seasonalTips: "Light clothing, sunscreen, avoid monsoon season",
            flightDuration: "Approx. 2 hours from major Indian cities",
            airports: "Dabolim Airport",
            averageCost: "Affordable to mid-range hotels, local cuisine is inexpensive",
            accommodation: "Beach resorts, boutique hotels, guesthouses",
            cuisine: "Seafood, Goan curries, feni drink",
            activities: "Water sports, sightseeing, nightlife",
            culture: "Blend of Indian and Portuguese cultures",
            sustainability: "Eco-friendly resorts available",
            travelTips: "Use local transport, beware of crowded beaches",
            media: "https://example.com/goa-photos",
            reviews: [
                "Amazing beaches and vibrant culture!",
                "Great place for relaxation and parties."
            ]
        },
        "Kerala": {
            overview: "Kerala, known as 'God's Own Country', is famous for its backwaters, hill stations, and rich cultural heritage.",
            highlights: [
                "Backwaters of Alleppey and Kumarakom",
                "Munnar hill station and tea plantations",
                "Traditional Kathakali dance and Ayurveda"
            ],
            bestTime: "September to March",
            climate: "Tropical climate with moderate temperatures and high humidity",
            events: "Onam Festival, Snake Boat Races",
            seasonalTips: "Light cotton clothes, monsoon season is wet",
            flightDuration: "Approx. 3 hours from major Indian cities",
            airports: "Cochin International Airport",
            averageCost: "Mid-range to luxury resorts, local cuisine affordable",
            accommodation: "Houseboats, resorts, homestays",
            cuisine: "Seafood, traditional Kerala Sadya, spices",
            activities: "Boat rides, trekking, cultural shows",
            culture: "Rich traditions in arts and festivals",
            sustainability: "Eco-tourism initiatives in backwaters",
            travelTips: "Respect local customs, use eco-friendly transport",
            media: "https://example.com/kerala-photos",
            reviews: [
                "Peaceful and scenic with great hospitality.",
                "A perfect blend of nature and culture."
            ]
        },
        "Rajasthan": {
            overview: "Rajasthan is known for its majestic forts, palaces, desert landscapes, and vibrant culture.",
            highlights: [
                "Amber Fort and City Palace in Jaipur",
                "Thar Desert and camel safaris",
                "Traditional folk music and dance"
            ],
            bestTime: "October to March",
            climate: "Hot summers and cool winters",
            events: "Desert Festival, Pushkar Fair",
            seasonalTips: "Light clothes for day, warm clothes for night",
            flightDuration: "Approx. 2-3 hours from major Indian cities",
            airports: "Jaipur International Airport",
            averageCost: "Affordable to luxury heritage hotels",
            accommodation: "Heritage hotels, desert camps, guesthouses",
            cuisine: "Rajasthani thali, dal bati churma",
            activities: "Fort tours, desert safaris, cultural shows",
            culture: "Rich Rajput heritage and crafts",
            sustainability: "Promoting heritage conservation",
            travelTips: "Stay hydrated, respect local traditions",
            media: "https://example.com/rajasthan-photos",
            reviews: [
                "A royal experience with stunning architecture.",
                "Desert adventures and cultural richness."
            ]
        },
        "Uttarakhand": {
            overview: "Uttarakhand is a Himalayan state known for its spiritual sites, trekking trails, and natural beauty.",
            highlights: [
                "Char Dham pilgrimage sites",
                "Valley of Flowers National Park",
                "Adventure sports in Rishikesh"
            ],
            bestTime: "March to June and September to November",
            climate: "Cool mountain climate with snowfall in winters",
            events: "Kumbh Mela, Nanda Devi Festival",
            seasonalTips: "Warm clothing, trekking gear",
            flightDuration: "Approx. 1-2 hours from major Indian cities",
            airports: "Jolly Grant Airport (Dehradun)",
            averageCost: "Budget to mid-range hotels and guesthouses",
            accommodation: "Hill resorts, ashrams, homestays",
            cuisine: "North Indian cuisine, local Kumaoni dishes",
            activities: "Trekking, river rafting, spiritual tours",
            culture: "Spiritual and nature-centric traditions",
            sustainability: "Eco-friendly trekking and tourism",
            travelTips: "Prepare for altitude, respect religious sites",
            media: "https://example.com/uttarakhand-photos",
            reviews: [
                "Breathtaking landscapes and spiritual vibes.",
                "Great for adventure and peace seekers."
            ]
        },
        "Himachal Pradesh": {
            overview: "Himachal Pradesh is a mountainous state known for its scenic beauty, hill stations, and adventure sports.",
            highlights: [
                "Shimla and Manali hill stations",
                "Rohtang Pass and Solang Valley",
                "Paragliding and skiing opportunities"
            ],
            bestTime: "March to June and September to December",
            climate: "Cool summers and snowy winters",
            events: "Kullu Dussehra, Winter Carnival",
            seasonalTips: "Warm clothes, trekking gear",
            flightDuration: "Approx. 1-2 hours from major Indian cities",
            airports: "Kangra Airport",
            averageCost: "Budget to luxury resorts",
            accommodation: "Hill resorts, guesthouses, homestays",
            cuisine: "North Indian and Himachali cuisine",
            activities: "Trekking, skiing, cultural tours",
            culture: "Rich mountain traditions and festivals",
            sustainability: "Promoting eco-tourism",
            travelTips: "Be prepared for weather changes",
            media: "https://example.com/himachal-photos",
            reviews: [
                "Stunning mountain views and fresh air.",
                "Perfect for nature lovers and adventurers."
            ]
        },
        "Andaman & Nicobar": {
            overview: "The Andaman & Nicobar Islands are a tropical paradise known for pristine beaches and marine life.",
            highlights: [
                "Radhanagar Beach and Cellular Jail",
                "Scuba diving and snorkeling",
                "Tropical rainforests and wildlife"
            ],
            bestTime: "November to May",
            climate: "Tropical climate with high humidity",
            events: "Island festivals and cultural events",
            seasonalTips: "Light clothing, sun protection",
            flightDuration: "Approx. 2-3 hours from mainland India",
            airports: "Veer Savarkar International Airport",
            averageCost: "Mid-range to luxury resorts",
            accommodation: "Beach resorts, eco-lodges",
            cuisine: "Seafood, local island cuisine",
            activities: "Water sports, nature tours",
            culture: "Diverse tribal and colonial heritage",
            sustainability: "Marine conservation efforts",
            travelTips: "Respect local environment",
            media: "https://example.com/andaman-photos",
            reviews: [
                "A serene and beautiful island getaway.",
                "Excellent diving and beach experiences."
            ]
        },
        "Sikkim": {
            overview: "Sikkim is a Himalayan state known for its monasteries, trekking, and biodiversity.",
            highlights: [
                "Rumtek Monastery and Tsongmo Lake",
                "Trekking routes and mountain views",
                "Rich flora and fauna"
            ],
            bestTime: "March to June and September to November",
            climate: "Cool mountain climate",
            events: "Losar Festival, Bumchu Festival",
            seasonalTips: "Warm clothing, trekking gear",
            flightDuration: "Approx. 2 hours from Kolkata",
            airports: "Pakyong Airport",
            averageCost: "Budget to mid-range hotels",
            accommodation: "Guesthouses, homestays, resorts",
            cuisine: "Tibetan and Nepali cuisine",
            activities: "Trekking, cultural tours",
            culture: "Buddhist traditions and festivals",
            sustainability: "Eco-tourism initiatives",
            travelTips: "Respect local customs",
            media: "https://example.com/sikkim-photos",
            reviews: [
                "Peaceful and scenic with rich culture.",
                "Great for trekking and nature lovers."
            ]
        },
        "Varanasi": {
            overview: "Varanasi is one of the oldest living cities, known for its spiritual significance and ghats.",
            highlights: [
                "Ghats of the Ganges River",
                "Kashi Vishwanath Temple",
                "Cultural and religious festivals"
            ],
            bestTime: "October to March",
            climate: "Hot summers and cool winters",
            events: "Dev Deepawali, Ganga Mahotsav",
            seasonalTips: "Light cotton clothes, avoid peak summer",
            flightDuration: "Approx. 1.5 hours from major Indian cities",
            airports: "Lal Bahadur Shastri Airport",
            averageCost: "Affordable hotels and guesthouses",
            accommodation: "Hotels near ghats, guesthouses",
            cuisine: "North Indian cuisine, street food",
            activities: "Boat rides, temple visits, cultural tours",
            culture: "Ancient spiritual traditions",
            sustainability: "Promoting responsible tourism",
            travelTips: "Respect religious customs",
            media: "https://example.com/varanasi-photos",
            reviews: [
                "A deeply spiritual and cultural experience.",
                "Vibrant and historic city."
            ]
        },
        "Mysore": {
            overview: "Mysore is known for its royal heritage, palaces, and gardens.",
            highlights: [
                "Mysore Palace and Chamundi Hill",
                "Brindavan Gardens",
                "Dasara Festival"
            ],
            bestTime: "October to March",
            climate: "Moderate climate year-round",
            events: "Dasara Festival",
            seasonalTips: "Comfortable clothing, festival season is busy",
            flightDuration: "Approx. 1 hour from Bangalore",
            airports: "Mysore Airport",
            averageCost: "Affordable to mid-range hotels",
            accommodation: "Heritage hotels, guesthouses",
            cuisine: "South Indian cuisine, Mysore Pak sweet",
            activities: "Palace tours, garden visits, shopping",
            culture: "Rich royal traditions",
            sustainability: "Encouraging heritage conservation",
            travelTips: "Plan visits during festivals",
            media: "https://example.com/mysore-photos",
            reviews: [
                "Beautiful palaces and gardens.",
                "Rich cultural experiences."
            ]
        },
        "Pondicherry": {
            overview: "Pondicherry is a French colonial town known for its beaches and spiritual centers.",
            highlights: [
                "Promenade Beach and Auroville",
                "French Quarter architecture",
                "Spiritual retreats and yoga centers"
            ],
            bestTime: "October to March",
            climate: "Tropical climate with moderate temperatures",
            events: "Pondicherry Heritage Festival",
            seasonalTips: "Light clothing, beachwear",
            flightDuration: "Approx. 1 hour from Chennai",
            airports: "Pondicherry Airport",
            averageCost: "Budget to mid-range hotels",
            accommodation: "Beach resorts, guesthouses",
            cuisine: "French and South Indian cuisine",
            activities: "Beach activities, cultural tours",
            culture: "Blend of French and Indian cultures",
            sustainability: "Promoting eco-tourism",
            travelTips: "Respect local customs",
            media: "https://example.com/pondicherry-photos",
            reviews: [
                "Charming town with beautiful beaches.",
                "Relaxing and culturally rich."
            ]
        },
        "Bora Bora": {
            overview: "Bora Bora is a tropical island in French Polynesia known for its turquoise lagoon and luxury resorts.",
            highlights: [
                "Crystal-clear lagoon and coral reefs",
                "Overwater bungalows",
                "Mount Otemanu hiking"
            ],
            bestTime: "May to October",
            climate: "Warm tropical climate with little rainfall",
            events: "Heiva Festival",
            seasonalTips: "Light clothing, sun protection",
            flightDuration: "Long haul flights with connections",
            airports: "Bora Bora Airport",
            averageCost: "Luxury resorts, high-end dining",
            accommodation: "Overwater bungalows, luxury hotels",
            cuisine: "French Polynesian seafood and tropical fruits",
            activities: "Snorkeling, diving, boat tours",
            culture: "Polynesian traditions and festivals",
            sustainability: "Marine conservation efforts",
            travelTips: "Book accommodations early",
            media: "https://example.com/borabora-photos",
            reviews: [
                "A paradise island with stunning views.",
                "Perfect for honeymooners and luxury travelers."
            ]
        },
        "Malaysia": {
            overview: "Malaysia is a Southeast Asian country known for its diverse culture, rainforests, and modern cities.",
            highlights: [
                "Petronas Twin Towers in Kuala Lumpur",
                "Langkawi beaches",
                "Cultural diversity and festivals"
            ],
            bestTime: "March to early October",
            climate: "Tropical climate with high humidity",
            events: "Hari Raya, Chinese New Year",
            seasonalTips: "Light clothing, rain gear",
            flightDuration: "Approx. 4-5 hours from major Asian cities",
            airports: "Kuala Lumpur International Airport",
            averageCost: "Affordable to mid-range hotels",
            accommodation: "Hotels, resorts, hostels",
            cuisine: "Malay, Chinese, Indian cuisines",
            activities: "City tours, island hopping, hiking",
            culture: "Multicultural society with rich traditions",
            sustainability: "Eco-tourism in rainforests",
            travelTips: "Use public transport, stay hydrated",
            media: "https://example.com/malaysia-photos",
            reviews: [
                "Vibrant cities and beautiful nature.",
                "Great food and friendly people."
            ]
        },
        "New Caledonia": {
            overview: "New Caledonia is a French territory in the South Pacific known for its lagoons and biodiversity.",
            highlights: [
                "World Heritage-listed lagoons",
                "Diverse marine life",
                "Kanak culture and art"
            ],
            bestTime: "May to October",
            climate: "Tropical climate with dry and wet seasons",
            events: "Melanesian Festival",
            seasonalTips: "Light clothing, sun protection",
            flightDuration: "Long haul flights with connections",
            airports: "La Tontouta International Airport",
            averageCost: "Mid-range to luxury resorts",
            accommodation: "Beach resorts, eco-lodges",
            cuisine: "French and Melanesian cuisine",
            activities: "Diving, hiking, cultural tours",
            culture: "Melanesian traditions and festivals",
            sustainability: "Marine and forest conservation",
            travelTips: "Respect local customs",
            media: "https://example.com/newcaledonia-photos",
            reviews: [
                "Beautiful natural environment.",
                "Rich cultural experiences."
            ]
        },
        "Indonesia": {
            overview: "Indonesia is an archipelago with diverse cultures, beaches, and volcanic landscapes.",
            highlights: [
                "Bali beaches and temples",
                "Komodo National Park",
                "Cultural festivals and markets"
            ],
            bestTime: "April to October",
            climate: "Tropical climate with wet and dry seasons",
            events: "Nyepi Day, Bali Arts Festival",
            seasonalTips: "Light clothing, insect repellent",
            flightDuration: "Varies by city, approx. 4-6 hours from Asia",
            airports: "Ngurah Rai International Airport (Bali)",
            averageCost: "Affordable to mid-range hotels",
            accommodation: "Beach resorts, guesthouses, hostels",
            cuisine: "Indonesian dishes like Nasi Goreng",
            activities: "Surfing, diving, cultural tours",
            culture: "Diverse ethnic groups and traditions",
            sustainability: "Eco-tourism initiatives",
            travelTips: "Respect local customs and environment",
            media: "https://example.com/indonesia-photos",
            reviews: [
                "Amazing beaches and cultural richness.",
                "Great for adventure and relaxation."
            ]
        },
        "Paris": {
            overview: "Paris is the capital of France, known for its art, fashion, gastronomy, and culture.",
            highlights: [
                "Eiffel Tower and Louvre Museum",
                "Champs-Élysées and Notre-Dame Cathedral",
                "Cafés and world-class shopping"
            ],
            bestTime: "April to June and September to November",
            climate: "Mild with warm summers and cold winters",
            events: "Bastille Day, Paris Fashion Week",
            seasonalTips: "Layered clothing, comfortable shoes",
            flightDuration: "Approx. 7 hours from NYC",
            airports: "Charles de Gaulle Airport",
            averageCost: "Mid-range to luxury hotels",
            accommodation: "Boutique hotels, apartments",
            cuisine: "French cuisine, patisseries",
            activities: "Museum tours, river cruises, shopping",
            culture: "Rich history and arts scene",
            sustainability: "Green city initiatives",
            travelTips: "Use public transport, beware of pickpockets",
            media: "https://example.com/paris-photos",
            reviews: [
                "Romantic city with endless attractions.",
                "A must-visit for art and culture lovers."
            ]
        },
        "Rome": {
            overview: "Rome is Italy's capital, famous for its ancient ruins, art, and vibrant street life.",
            highlights: [
                "Colosseum and Roman Forum",
                "Vatican City and Sistine Chapel",
                "Piazzas and fountains"
            ],
            bestTime: "April to June and September to October",
            climate: "Mediterranean with hot summers and mild winters",
            events: "Rome Film Fest, Natale di Roma",
            seasonalTips: "Light clothing, sunscreen",
            flightDuration: "Approx. 8 hours from NYC",
            airports: "Leonardo da Vinci International Airport",
            averageCost: "Mid-range hotels and guesthouses",
            accommodation: "Historic hotels, apartments",
            cuisine: "Italian cuisine, gelato",
            activities: "Historical tours, food tours",
            culture: "Ancient history and vibrant culture",
            sustainability: "Promoting sustainable tourism",
            travelTips: "Stay hydrated, watch for traffic",
            media: "https://example.com/rome-photos",
            reviews: [
                "Rich history and amazing food.",
                "Beautiful city with friendly locals."
            ]
        },
        "Maui": {
            overview: "Maui is a Hawaiian island known for its beaches, volcanic landscapes, and luxury resorts.",
            highlights: [
                "Haleakalā National Park",
                "Road to Hana scenic drive",
                "Snorkeling and whale watching"
            ],
            bestTime: "April to May and September to November",
            climate: "Tropical with warm temperatures year-round",
            events: "Maui Film Festival, Aloha Festivals",
            seasonalTips: "Light clothing, sun protection",
            flightDuration: "Approx. 6 hours from US mainland",
            airports: "Kahului Airport",
            averageCost: "Luxury resorts and vacation rentals",
            accommodation: "Beachfront resorts, condos",
            cuisine: "Hawaiian and Pacific Rim cuisine",
            activities: "Beach activities, hiking, cultural tours",
            culture: "Hawaiian traditions and festivals",
            sustainability: "Marine conservation efforts",
            travelTips: "Respect local culture and environment",
            media: "https://example.com/maui-photos",
            reviews: [
                "Stunning beaches and natural beauty.",
                "Great for relaxation and adventure."
            ]
        },
        "Tahiti": {
            overview: "Tahiti is the largest island in French Polynesia, known for its black sand beaches and lagoons.",
            highlights: [
                "Matira Beach",
                "Lagoon snorkeling",
                "Traditional Polynesian culture"
            ],
            bestTime: "May to October",
            climate: "Tropical with dry and wet seasons",
            events: "Heiva Festival",
            seasonalTips: "Light clothing, sun protection",
            flightDuration: "Long haul flights with connections",
            airports: "Faa'a International Airport",
            averageCost: "Mid-range to luxury resorts",
            accommodation: "Beach resorts, bungalows",
            cuisine: "French Polynesian cuisine",
            activities: "Snorkeling, cultural tours",
            culture: "Polynesian traditions",
            sustainability: "Marine conservation",
            travelTips: "Book early for best rates",
            media: "https://example.com/tahiti-photos",
            reviews: [
                "Beautiful island with rich culture.",
                "Perfect for honeymooners."
            ]
        },
        "Germany": {
            overview: "Germany is a European country known for its history, castles, and vibrant cities.",
            highlights: [
                "Brandenburg Gate and Berlin Wall",
                "Neuschwanstein Castle",
                "Oktoberfest and Christmas markets"
            ],
            bestTime: "May to September",
            climate: "Temperate seasonal climate",
            events: "Oktoberfest, Christmas markets",
            seasonalTips: "Layered clothing, rain gear",
            flightDuration: "Approx. 8 hours from NYC",
            airports: "Frankfurt Airport",
            averageCost: "Mid-range to luxury hotels",
            accommodation: "Hotels, guesthouses, hostels",
            cuisine: "German sausages, beer",
            activities: "Historical tours, festivals",
            culture: "Rich history and traditions",
            sustainability: "Green city initiatives",
            travelTips: "Use public transport",
            media: "https://example.com/germany-photos",
            reviews: [
                "Rich culture and beautiful landscapes.",
                "Great for history and beer lovers."
            ]
        },
        "Tokyo": {
            overview: "Tokyo is Japan's bustling capital known for its modernity, culture, and cuisine.",
            highlights: [
                "Shibuya Crossing and Tokyo Tower",
                "Temples and gardens",
                "Sushi and street food"
            ],
            bestTime: "March to May and September to November",
            climate: "Humid subtropical climate",
            events: "Cherry Blossom Festival, Sumida River Fireworks",
            seasonalTips: "Comfortable walking shoes, layered clothing",
            flightDuration: "Approx. 14 hours from NYC",
            airports: "Narita and Haneda Airports",
            averageCost: "Mid-range to luxury hotels",
            accommodation: "Hotels, ryokans, hostels",
            cuisine: "Japanese cuisine, ramen, sushi",
            activities: "Sightseeing, shopping, cultural tours",
            culture: "Blend of tradition and modernity",
            sustainability: "Eco-friendly city initiatives",
            travelTips: "Learn basic Japanese phrases",
            media: "https://example.com/tokyo-photos",
            reviews: [
                "Vibrant city with amazing food.",
                "A mix of old and new culture."
            ]
        }
        // Add similar objects for other destinations...
    };

    moreLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const destinationName = link.previousElementSibling.textContent.trim();
            const details = destinationDetails[destinationName];
            if (details) {
                modalTitle.textContent = destinationName;
                modalDescription.innerHTML = `
                    <div class="modal-section">
                        <h3>Overview</h3>
                        <p>${details.overview}</p>
                    </div>
                    <div class="modal-section">
                        <h3>Key Highlights</h3>
                        <ul>${details.highlights.map(item => `<li>${item}</li>`).join('')}</ul>
                    </div>
                    <div class="modal-section">
                        <h3>Best Time to Visit</h3>
                        <p>${details.bestTime}</p>
                        <p><strong>Climate:</strong> ${details.climate}</p>
                        <p><strong>Events:</strong> ${details.events}</p>
                    </div>
                    <div class="modal-section">
                        <h3>Seasonal Tips</h3>
                        <p>${details.seasonalTips}</p>
                    </div>
                    <div class="modal-section">
                        <h3>Flight Duration & Connectivity</h3>
                        <p>${details.flightDuration}</p>
                        <p><strong>Airports:</strong> ${details.airports}</p>
                    </div>
                    <div class="modal-section">
                        <h3>Average Cost</h3>
                        <p>${details.averageCost}</p>
                    </div>
                    <div class="modal-section">
                        <h3>Where to Stay</h3>
                        <p>${details.accommodation}</p>
                    </div>
                    <div class="modal-section">
                        <h3>Local Cuisine</h3>
                        <p>${details.cuisine}</p>
                    </div>
                    <div class="modal-section">
                        <h3>Things to Do & Activities</h3>
                        <p>${details.activities}</p>
                    </div>
                    <div class="modal-section">
                        <h3>Local Culture & Etiquette</h3>
                        <p>${details.culture}</p>
                    </div>
                    <div class="modal-section">
                        <h3>Sustainability & Eco-Tourism</h3>
                        <p>${details.sustainability}</p>
                    </div>
                    <div class="modal-section">
                        <h3>Travel Tips & Safety Information</h3>
                        <p>${details.travelTips}</p>
                    </div>
                    <div class="modal-section">
                        <h3>User Reviews</h3>
                        <ul>${details.reviews.map(review => `<li>${review}</li>`).join('')}</ul>
                    </div>
                `;
                modal.setAttribute('aria-hidden', 'false');
            } else {
                modalTitle.textContent = destinationName;
                modalDescription.textContent = "Detailed information is not available for this destination yet.";
                modal.setAttribute('aria-hidden', 'false');
            }
        });
    });

    modalCloseBtn.addEventListener('click', () => {
        modal.setAttribute('aria-hidden', 'true');
    });

    // Close modal on outside click
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.setAttribute('aria-hidden', 'true');
        }
    });
});
