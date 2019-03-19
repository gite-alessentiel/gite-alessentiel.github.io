import './scss/main.scss';
import $ from "jquery";
import popper from "popper.js";
import bootstrap from "bootstrap";
import './js/map';
// import './js/hello.week.min';
// import './js/calendar.js';

import('https://maps.googleapis.com/maps/api/js?key=AIzaSyBOKNVB5xJvCxtydI_hipGLoeamhzpp00Y&callback=initMap').then(() => {
    console.log("prout !");
});

window.initMap = function() {
    var alessentiel = {lat: 45.2075138, lng: 1.1136933};
    // The map, centered at Grange d'Ans
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 11,
            center: alessentiel,
            mapTypeId: 'roadmap',
            mapTypeControlOptions: {
                mapTypeIds: ['roadmap']
            },

        });
    // The marker, positioned at Grange d'Ans
    var marker = new google.maps.Marker({position: alessentiel, map: map});
    console.log('yo !');
}

console.log('hello world 2');
