// Script pour la carte :
var map = L.map('map').setView([47.73101417355266, 7.300597124759713], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([47.73101417355266, 7.300597124759713]).addTo(map)
    .bindPopup('Do It<br>61 Rue Albert Camus<br>68200')
    .openPopup();