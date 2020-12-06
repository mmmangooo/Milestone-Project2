// Credit for Map initialization, markers and cluster: Google Maps API Tutorial: https://developers.google.com/maps/documentation/javascript/marker-clustering //


//This code was written to initialize showing the map on the page, setting appropriate zoom and coordinates to show the area of Södertörn 
function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: { lat: 59.12630249180509, lng:  18.12316825393977 },
  });
}


  var locations = [
      {lat: 59.16166454309989, lng: 18.02274289457959}, //Paradiset coordinates
      {lat: 59.170135557673994, lng: 18.235728632254503}, // Tyresta By coordinates
      {lat: 59.16488292914418, lng: 18.132294280597314} // Rudan coordinates
  ]

//This code was written to create markers for the starting points at Paradiset, Tyresta By and Rudan in a cluster on the map //
  var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 
  var markers = locations.map(function(location, i) {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });

  new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });



