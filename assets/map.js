// Credit for Map initialization, markers and styling: Google Maps API Tutorial: https://developers.google.com/maps/documentation/javascript/marker-clustering //


// Initializes showing the map on the page, setting appropriate zoom and coordinates to show the area of Södertörn
function initMap() {

 /* // Styles map colors  
  let styledMap = new google.maps.StyledMapType([
  {
    featureType: 'landscape.natural.landcover',
    elementType: 'all',
    stylers: [{color: '#5ab570'}],
  },
  {
    featureType: 'road',
    elementType: 'all',
    stylers: [{color: 'black'}]
  },
    ],
    {name: 'Styled Map'}

);*/

    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: {
            lat: 59.12630249180509,
            lng: 18.12316825393977
        },
        mapId: 'b17fffddf0f2c07c',
        gestureHandling: "cooperative",
    });

    // Creates markers for the starting points at Paradiset, Tyresta By and Rudan in a cluster on the map //
    let locations = [
        {
            lat: 59.16166454309989,
            lng: 18.02274289457959,
            name: "Paradiset"
        }, {
            lat: 59.170135557673994,
            lng: 18.235728632254503,
            name: "Tyresta By"
        }, {
            lat: 59.16488292914418,
            lng: 18.132294280597314,
            name: "Rudan"
        }
    ]

    for (let i = 0; i < locations.length; i++) {
        const marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i].lat, locations[i].lng),
            map: map,
            title: locations[i].name
        });
    }
}