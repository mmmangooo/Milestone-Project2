// Credit for Map initialization, markers and styling: Google Maps API Tutorial: https://developers.google.com/maps/documentation/javascript/ //

// Initializes showing the map on the page, setting appropriate zoom and coordinates to show the area of Södertörn
function initMap() {
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: {
            lat: 59.12630249180509,
            lng: 18.12316825393977
        },
        mapId: 'b17fffddf0f2c07c',
        gestureHandling: "cooperative"
    });

// Creates markers for the starting points at Paradiset, Tyresta By and Rudan, with information window content//
let locations = [
    {
        lat: 59.16166454309989,
        lng: 18.02274289457959,
        name: "Paradiset",
        information: "<img src='https://img.icons8.com/ios-glyphs/30/000000/campfire.png'/><img src='https://img.icons8.com/ios-glyphs/28/000000/pavilion.png'/><img src='https://img.icons8.com/ios/30/000000/outdoor-toilet.png'/><img src='https://img.icons8.com/windows/32/000000/stroller.png'/><img src='https://img.icons8.com/pastel-glyph/32/000000/route--v1.png'/><img src='https://img.icons8.com/android/20/000000/info.png'/><a href='paradiset.html'>Mer information om Paradiset</a>"
    },
  
    {
        lat: 59.170135557673994,
        lng: 18.235728632254503,
        name: "Tyresta By",
        information: "<img src='https://img.icons8.com/ios-glyphs/30/000000/campfire.png'/><img src='https://img.icons8.com/ios-glyphs/28/000000/pavilion.png'/><img src='https://img.icons8.com/ios/30/000000/outdoor-toilet.png'/><img src='https://img.icons8.com/windows/32/000000/stroller.png'/><img src='https://img.icons8.com/pastel-glyph/32/000000/route--v1.png'/><img src='https://img.icons8.com/android/20/000000/info.png'/><a href='tyresta-by.html'>Mer information om Tyresta By</a>"
    },
                
        
    {
        lat: 59.16488292914418,
        lng: 18.132294280597314,
        name: "Rudan",
        information: "<img src='https://img.icons8.com/ios-glyphs/30/000000/campfire.png'/><img src='https://img.icons8.com/ios-glyphs/28/000000/pavilion.png'/><img src='https://img.icons8.com/ios/30/000000/outdoor-toilet.png'/><img src='https://img.icons8.com/windows/32/000000/stroller.png'/><img src='https://img.icons8.com/pastel-glyph/32/000000/route--v1.png'/><img src='https://img.icons8.com/android/20/000000/info.png'/><a href='rudan.html'> Mer information om Rudan</a>"     
    }
];

let infoObj= [];

// Iterate through locations, adding a marker and its info to each location//


    for (let i = 0; i < locations.length; i++) {
        let contentString = '<h3>' + locations[i].name + '</h3>'+ locations[i].information;

        let marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i].lat, locations[i].lng),
            title: locations[i].name,
            map: map
        });

        let infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        marker.addListener("click", function () {
           closeOtherInfo();

            infowindow.open(map, marker);
            infoObj[0] = infowindow;
        });
    }

     function closeOtherInfo() {
         if (infoObj.length > 0) {
             infoObj[0].set("marker", null);
             infoObj[0].close();
             infoObj[0].length = 0;
         }
     }
}
