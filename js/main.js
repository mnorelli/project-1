console.log("Linked.");
window.onload = function(){

  // https://api.mapbox.com/geocoding/v5/mapbox.places/Botswana.json?access_token=pk.eyJ1IjoibW5vcmVsbGkiLCJhIjoiU3BCcTNJQSJ9.4EsgnQLWdR10NXrt7aBYGw

mapboxgl.accessToken = 'pk.eyJ1IjoibW5vcmVsbGkiLCJhIjoiU3BCcTNJQSJ9.4EsgnQLWdR10NXrt7aBYGw';
var map = new mapboxgl.Map({
    container: 'map',
    bbox: [
    19.9991470000001,
    -26.907545,
    29.375304,
    -17.778158
    ],
    // zoom: 7,
    // center: [ 30.056329, -3.462907],
    // style: 'mapbox://styles/mapbox/outdoors-v9' //hosted style id  37.888227 -122.566571
    style: 'mapbox://styles/mnorelli/ciobrznir0063adnmx40se090'
});

// map.on('load', function () {
//     map.addSource('museums', {
//         type: 'vector',
//         url: 'mapbox://mapbox.2opop9hr'
//     });
//     map.addLayer({
//         'id': 'museums',
//         'type': 'circle',
//         'source': 'museums',
//         'layout': {
//             'visibility': 'visible'
//         },
//         'paint': {
//             'circle-radius': 8,
//             'circle-color': 'rgba(55,148,179,1)'
//         },
//         'source-layer': 'museum-cusco'
//     });

//     map.addSource('contours', {
//         type: 'vector',
//         url: 'mapbox://mapbox.mapbox-terrain-v2'
//     });
//     map.addLayer({
//         'id': 'contours',
//         'type': 'line',
//         'source': 'contours',
//         'source-layer': 'contour',
//         'layout': {
//             'visibility': 'visible',
//             'line-join': 'round',
//             'line-cap': 'round'
//         },
//         'paint': {
//             'line-color': '#877b59',
//             'line-width': 1
//         }
//     });
// });






}