// document.addEventListener('DOMContentLoaded', function() {
//     // Ensure the button click event listener is correctly attached to the button element with the id "search"
//     document.getElementById('search').addEventListener('click', function() {
//         const destination = document.getElementById('destination').value;
//         const checkinDate = document.getElementById('check-in-date').value;
//         const checkoutDate = document.getElementById('check-out-date').value;
//         const adults = document.querySelector('.adult-count').value;
//         const children = document.querySelector('.children-count').value;

//         // Simulated hotel data
//         const hotels = [
//             { name: 'Hotel Mumbai', city: 'Mumbai', rooms: [{ type: 'Single', price: 100 }, { type: 'Double', price: 150 }] },
//             { name: 'Hotel Delhi', city: 'Delhi', rooms: [{ type: 'Single', price: 90 }, { type: 'Double', price: 140 }] },
//             { name: 'Hotel Bangalore', city: 'Bangalore', rooms: [{ type: 'Single', price: 110 }, { type: 'Double', price: 160 }] }
//         ];

//         // Filter hotels based on the city
//         const filteredHotels = hotels.filter(hotel => hotel.city.toLowerCase() === destination.toLowerCase());

//         // Display results
//         const resultsDiv = document.getElementById('results');
//         resultsDiv.innerHTML = '';

//         if (filteredHotels.length > 0) {
//             filteredHotels.forEach(hotel => {
//                 const hotelDiv = document.createElement('div');
//                 hotelDiv.classList.add('hotel');
//                 hotelDiv.innerHTML = `<h2>${hotel.name}</h2>`;

//                 const roomsList = document.createElement('ul');
//                 hotel.rooms.forEach(room => {
//                     const roomItem = document.createElement('li');
//                     roomItem.textContent = `${room.type} Room - $${room.price} per night`;
//                     roomsList.appendChild(roomItem);
//                 });

//                 hotelDiv.appendChild(roomsList);
//                 resultsDiv.appendChild(hotelDiv);
//             });
//         } else {
//             resultsDiv.innerHTML = '<p>No hotels found for the selected city.</p>';
//         }
//     });
// });





















document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM content loaded");
    
    document.querySelector('.hotel-booking button').addEventListener('click', function() {
        console.log("Button clicked");
        
        const destination = document.querySelector('.hotel-booking #destination').value;
        const checkinDate = document.querySelector('.hotel-booking #check-in-date').value;
        const checkoutDate = document.querySelector('.hotel-booking #check-out-date').value;
        const adults = document.querySelector('.hotel-booking .adult-count').value;
        const children = document.querySelector('.hotel-booking .children-count').value;

        console.log("Destination:", destination);
        console.log("Check-in Date:", checkinDate);
        console.log("Check-out Date:", checkoutDate);
        console.log("Adults:", adults);
        console.log("Children:", children);

        // Simulated hotel data
        const hotels = [
            { name: 'Hotel Mumbai', city: 'Mumbai', rooms: [{ type: 'Single', price: 100 }, { type: 'Double', price: 150 }] },
            { name: 'Hotel Delhi', city: 'Delhi', rooms: [{ type: 'Single', price: 90 }, { type: 'Double', price: 140 }] },
            { name: 'Hotel Bangalore', city: 'Bangalore', rooms: [{ type: 'Single', price: 110 }, { type: 'Double', price: 160 }] }
        ];

        // Filter hotels based on the city
        const filteredHotels = hotels.filter(hotel => hotel.city.toLowerCase() === destination.toLowerCase());

        console.log("Filtered Hotels:", filteredHotels);

        // Display results
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = '';

        if (filteredHotels.length > 0) {
            filteredHotels.forEach(hotel => {
                const hotelDiv = document.createElement('div');
                hotelDiv.classList.add('hotel');
                hotelDiv.innerHTML = `<h2>${hotel.name}</h2>`;

                const roomsList = document.createElement('ul');
                hotel.rooms.forEach(room => {
                    const roomItem = document.createElement('li');
                    roomItem.textContent = `${room.type} Room - $${room.price} per night`;
                    roomsList.appendChild(roomItem);
                });

                hotelDiv.appendChild(roomsList);
                resultsDiv.appendChild(hotelDiv);
            });
        } else {
            resultsDiv.innerHTML = '<p>No hotels found for the selected city.</p>';
        }
    });
});
