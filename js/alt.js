console.log("Linked alt.");

var country = "Vietnam"

var geocoder_endpoint = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
var accessToken = "pk.eyJ1IjoibW5vcmVsbGkiLCJhIjoiU3BCcTNJQSJ9.4EsgnQLWdR10NXrt7aBYGw";
var dataSource = geocoder_endpoint+country+".json?access_token="+accessToken;
var worldBase = "mapbox://styles/mnorelli/ciobrznir0063adnmx40se090"
var worldBaseNames = "mapbox://styles/mnorelli/ciodesuuy0093ahm80g9jf6hq"

    mapboxgl.accessToken = accessToken;

    var map = new mapboxgl.Map({
        container: 'map',
        bbox: [
        19.9991470000001,
        -26.907545,
        29.375304,
        -17.778158
        ],
        // style: worldBaseNames,

        // filter: ["==","country_label","United Kingdom"]
        style: 'mapbox://styles/mnorelli/ciobrznir0063adnmx40se090'
      });
map.resize()