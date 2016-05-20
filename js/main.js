console.log("Linked.");

var country = "United Kingdom"

var geocoder_endpoint = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
var accessToken = "pk.eyJ1IjoibW5vcmVsbGkiLCJhIjoiU3BCcTNJQSJ9.4EsgnQLWdR10NXrt7aBYGw";
var dataSource = geocoder_endpoint+country+".json?access_token="+accessToken;
var worldBase = "mapbox://styles/mnorelli/ciobrznir0063adnmx40se090"
var worldBaseNames = "mapbox://styles/mnorelli/ciodesuuy0093ahm80g9jf6hq"

function say(status,color){
  var msg = document.querySelector("#center-message");
  msg.textContent = status;
  msg.style.color = color;
}

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

map.on("click",function(){addCountryNames()});

$.get(dataSource,function(data){})

  .done(function(data){

    var countryBounds = data.features[0].bbox;

    map.on("load",function() {
      map.fitBounds(countryBounds,
        {linear: false,padding:30});  // slowly move to new map location
      say("Guess a country by its outline.  Click to play!","black")
      $("#center-message").on("click", function(){
        say("","black")
        $("#footer").removeClass("hidden")
      })

    function addCountryNames() {
      console.log("country names")
      map.setStyle(worldBaseNames);   // switch style to one showing country names
      console.log(map.getClasses())
    }

    map.on("click",function(){addCountryNames()});

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
