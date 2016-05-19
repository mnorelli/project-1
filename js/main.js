console.log("Linked.");

var country = "United Kingdom"

var geocoder_endpoint = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
var accessToken = "pk.eyJ1IjoibW5vcmVsbGkiLCJhIjoiU3BCcTNJQSJ9.4EsgnQLWdR10NXrt7aBYGw";
var dataSource = geocoder_endpoint+country+".json?access_token="+accessToken;
var worldBase = "mapbox://styles/mnorelli/ciobrznir0063adnmx40se090"
var worldBaseNames = "mapbox://styles/mnorelli/ciodesuuy0093ahm80g9jf6hq"

function say(status,color){
  var msg = document.querySelector("#message");
  msg.textContent = status;
  msg.style.color = color;
}

window.onload = function(){

// start
  say("Guess a country by its outline.  Click to play!","black")
  $("#message").on("click", function(){
    say("","black")
    $("form").removeClass("hidden")
  })


$.get(dataSource,function(data){})

  .done(function(data){

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

    var countryBounds = data.features[0].bbox;

    map.on("load",function() {
        map.fitBounds(countryBounds,
          {linear: false,padding:30});  // slowly move to new map location

    function addCountryNames() {
      console.log("country names")

      map.setStyle(worldBaseNames);   // switch style to one showing country names

      // map.addSource('streetsV7', {
      //     type: 'vector',
      //     url: 'mapbox://mapbox.mapbox-streets-v7'
      // });
      // if (!map.getLayer("country-names")){ 
      // map.addLayer({
      //     "id": "country-names",
      //     "type": "symbol",
      //     "source": "streetsV7",
      //     "source-layer": "country_label",
      //     "filter": ["==","$type","Point"],
      //     "layout": {
      //               "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"],
      //               "text-size": 11,
      //               "text-transform": "uppercase",
      //               "text-letter-spacing": 0.05,
      //               "text-offset": [0, 1.5]},
      //      "paint": {
      //           "text-color": "#666",
      //           "text-halo-color": "rgba(255,255,255,0.75)",
      //           "text-halo-width": 1,
      //           "text-halo-blur": 1
      //       }
      // })
      // };

      console.log(map.getClasses())
    }

    map.on("click",function(){addCountryNames()});

    // function addContours() {
    //   console.log("contours")
    //     map.addSource('terrain-data', {
    //         type: 'vector',
    //         url: 'mapbox://mapbox.mapbox-terrain-v2'
    //     });
    //     map.addLayer({
    //         "id": "terrain-data",
    //         "type": "line",
    //         "source": "terrain-data",
    //         "source-layer": "contour",
    //         "layout": {
    //             "line-join": "round",
    //             "line-cap": "round"
    //         },
    //         "paint": {
    //             "line-color": "#ff69b4",
    //             "line-width": 1
    //         }
    //     });
    // }
    //
    // addContours();

    $("form").on("submit", function(event){
        event.preventDefault(); // Stops the form from submitting!
        if ($("input#guess").val()===country) {
          alert("You guessed it! "+country.toUpperCase());
          map.setStyle(worldBaseNames);
        } else console.log("Wrong")
      })


      });  //end of map load

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