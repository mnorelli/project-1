console.log("Linked.");

var country = "Italy"

var geocoder_endpoint = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
var accessToken = "pk.eyJ1IjoibW5vcmVsbGkiLCJhIjoiU3BCcTNJQSJ9.4EsgnQLWdR10NXrt7aBYGw";
var dataSource = geocoder_endpoint+country+".json?access_token="+accessToken;

window.onload = function(){

$.get(dataSource,function(data){

  }).done(function(data){

    mapboxgl.accessToken = accessToken;

    var map = new mapboxgl.Map({
        container: 'map',
        bbox: [
        19.9991470000001,
        -26.907545,
        29.375304,
        -17.778158
        ],
        style: 'mapbox://styles/mnorelli/ciobrznir0063adnmx40se090'
      });

    var countryBounds = data.features[0].bbox;

    function fit(bounds) {
        console.log("running fit")
        map.fitBounds(bounds,
          {linear: false,padding:20});
      }

    fit(countryBounds);

  }).fail(function(response){
    console.log("Error: '", response.statusText,"'");
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