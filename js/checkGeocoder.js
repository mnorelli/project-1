// get results of MapBox geocoder to prevent processing the wrong data

var name = "Guinea";

var Data = {};
var geocoder_endpoint = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
var accessToken = "pk.eyJ1IjoibW5vcmVsbGkiLCJhIjoiU3BCcTNJQSJ9.4EsgnQLWdR10NXrt7aBYGw";

function check(n){
  var dataSource = geocoder_endpoint+n+".json?types=country&access_token="+accessToken

  $.get(dataSource,function(data){})
    .done(function(data){
      Data.outcome = data.features;
  })

return Data
}

check(name);