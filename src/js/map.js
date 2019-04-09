
export default function() {
    var alessentiel = {lat: 45.2075138, lng: 1.1136933};
    // The map, centered at Grange d'Ans
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 10,
            center: alessentiel,
            mapTypeId: 'roadmap',
            mapTypeControlOptions: {
                mapTypeIds: ['roadmap']
            },

        });
    // The marker, positioned at Grange d'Ans
    var marker = new google.maps.Marker({position: alessentiel, map: map});
}
