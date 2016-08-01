$(function(){   // when window is loaded (and when the countries data object is read)

console.log("Linked.");

playGame();

})  // end of window onload



// starting variables for map
// the URL parts needed for the API call, and two custom mapstyles, one showing country names and one without
var geocoder_endpoint = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
var accessToken = "pk.eyJ1IjoibW5vcmVsbGkiLCJhIjoiU3BCcTNJQSJ9.4EsgnQLWdR10NXrt7aBYGw";
var worldBase = "mapbox://styles/mnorelli/ciobrznir0063adnmx40se090"
var worldBaseNames = "mapbox://styles/mnorelli/ciodesuuy0093ahm80g9jf6hq"

// the Data object, used to ferry out the data returned from the API call to other functions without polluting global space
var Data = {}

// the Map object, also retains attributes set in functions
var MapObj = {}

function playGame(){
  pick(countries);
  getCountry();
  showMap();
  intro();
  guessLoop();
}

// this function is run waaay at the bottom, after the countries object is read in
// from a random number, it picks a country and populates the Data object with these details:
//   country name, subregion, capital city
// it also builds the request string sent to the API, filtering for countries 
// (not points of interest or businesses, e.g.) to get geographic details:  
//   bounding box
function pick(countries) {
  console.log("countries length: "+countries.length)  
  var index = Math.floor(Math.random()*248);
  // var index = 72 // Fiji
  // var index = 233  // United States
  Data.num = countries[index];
  Data.countryName = countries[index].name.common;
  console.log("loading: ",Data.countryName)
  Data.countryRegion = countries[index].subregion;
  Data.capital = countries[index].capital
  Data.dataSource = geocoder_endpoint+Data.countryName+".json?types=country&access_token="+accessToken+"";
}

// used to pass messages to the screen
function say(status,where){
  var msg = document.querySelector("#"+where+"-message");
  msg.textContent = status;
}

// used to flip to a map style that includes names of countries
function addCountryNames() {
  console.log("country names")
  MapObj.map.setStyle(worldBaseNames);   
}

// the MapBox geocoder sometimes returns bounding boxes that are hard to map.  
// This edits some data to produce a more meaningful display
function fixData(){
  if (Data.countryName === "United States") Data.countryBounds = [-179.330950579, 18.765563302, -85, 71.540723637]; 
  if (Data.countryName === "Russia") Data.countryBounds = [60, 41.185352938, 180.099847971, 81.961618459]
  // because of Aletian Islands(?), US bounding box extends from 179 lat to -179 lat, fills screen
  var badOnes = ["Tokelau","Fiji","United States Minor Outlying Islands",
                 "Mayotte","British Virgin Islands","Svalbard and Jan Mayen",
                 "Åland Islands","Kiribati"]
  //  the above aren't found by the geocoder or whose bbox fills the whole screen
  for (var i in badOnes) {
    if (Data.countryName === badOnes[i]) playGame();
    }  
}

function showMap(){
  // creates the map with a default location in equatorial Africa and a style I authored in MapBox Studio
  mapboxgl.accessToken = accessToken;
  MapObj.map = new mapboxgl.Map({
    container: 'map',
    bbox: [
    19.9991470000001,
    -26.907545,
    29.375304,
    -17.778158
    ],
    // style: worldBaseNames
    style: worldBase

    // filter: ["==","country_label","United Kingdom"]
  });

  // when map is drawn, move to the quizzed map location
  MapObj.map.on("load",function() {
    MapObj.map.fitBounds(Data.countryBounds,
      {linear: false,padding:30});  
    // MapObj.map.filter = ["!==","country_label",Data.countryName]  // doesn't work to hide the quizzed country label
  })

  // "cheat" by clicking the map to show country names by switchung to the MapBox style that includes them
  // doesn't work after guess box is shown
  MapObj.map.on("click",function(){addCountryNames()});
}

  // show the opening message
  // when opening message is clicked, show the guess box and message there
function intro(){
  say("Guess a country by its outline.  Click to play!","center")
  $("#center-message").on("click", function(){
    say("","center")
    $("#footer").removeClass("hidden")
  })
}

// terribly complicated code to use placeholder attribute of input box to manage
// guesses because submit events cause page to reload with no guess handling
function guessLoop(){
  var guessForm = document.querySelector("#guess")
  guessForm.addEventListener("submit",function(event){
    event.preventDefault();
    var guess = $("input#guess").val()
    console.log("value ",guess)
    if (guess == Data.countryName) {
      alert("You guessed it! "+Data.countryName.toUpperCase());
      addCountryNames();
    } else {
      console.log("incorrect guess")
      say("Try again!","footer")
    }
    guessLoop()
  })

  // var guessForm = document.querySelector("#guess")
  // guessForm.addEventListener("keypress",function(event){
  // event.preventDefault();
  // var code = event.keyCode || event.which;
  // var keyd = String.fromCharCode(event.keyCode);
  // console.log(keyd)
  // var content = guessForm.getAttribute("placeholder");
  // if (code == 13) {  // enter key
  //   if (content == Data.countryName) {
  //     console.log("guess",guessForm.getAttribute("placeholder"))
  //     alert("You guessed it! "+Data.countryName.toUpperCase());
  //     addCountryNames();
  //   } else {
  //     guessForm.setAttribute("placeholder","")
  //     console.log("incorrect guess")
  //     say("Try again!","footer")
  //     console.log("Wrong")
  //     guessLoop();
  //   }
  // } else if (code == 8) {   // backspace key 
  //     console.log(content,"before slice")
  //     var content = content.slice(0, -1)
  //     console.log(content,"after slice")
  //     guessForm.setAttribute("placeholder",content)
  // } else {
  //   console.log("typed ",keyd)
  //   if (content == "Your guess" || content == "") {
  //     guessForm.setAttribute("placeholder",keyd)
  //   } else {
  //     var content = content + keyd
  //     guessForm.setAttribute("placeholder",content)
  //   }
  // }

  // })
}

function getCountry(){
$.get(Data.dataSource,function(data){})
  .done(function(data){
    if (!data.features[0].bbox) playGame()
    else {
      Data.countryBounds = data.features[0].bbox;
      fixData();
      console.log("answer: ",Data.countryName, Data.countryBounds,"\n","map: ",map)
    }
  })  //end of map load
  .fail(function(response){
    console.log("Error: '", response.statusText,"'");
  });
  return Data.countryName;
}   // end of runTheGame

