/* Credit for Map initialization, markers and styling: Google Maps API Tutorial: 
   https://developers.google.com/maps/documentation/javascript/ and Google maps tutorial made by 
   Code Institute student Eamonn Smythe: (https://slack-files.com/T0L30B202-F01DRAEPEH5-16d0e0a646)*/



// Initializes showing the map on the page, setting appropriate zoom and coordinates to show the area of Södertörn
function initMap() {                                                  //'initMap' is flagged as unused variable in JSHint, see details in TESTING.md
    let map = new google.maps.Map(document.getElementById("map"), {   //'google' is flagged as undefined variable in JSHint, see details in TESTING.md
        zoom: 11,
        center: {
            lat: 59.14630249180509,
            lng: 18.12316825393977
        },
        mapId: 'b17fffddf0f2c07c',
        gestureHandling: "cooperative"
    });


//  Markers and information window contents for the starting points at Paradiset, Tyresta By and Rudan//
let locations = [
    {
        lat: 59.16166454309989,
        lng: 18.02274289457959,
        name: "<h3 class='info-window-header'>Paradiset</h3>",
        information: `<div class='info-window'><img src='https://img.icons8.com/ios-glyphs/30/000000/campfire.png'/>
        <img src='https://img.icons8.com/ios-glyphs/28/000000/pavilion.png'/><img src='https://img.icons8.com/ios/30/000000/outdoor-toilet.png'/>
        <div><img src='https://img.icons8.com/android/20/000000/info.png'/><a href='paradiset.html'>Mer information om Paradiset</a></div></div>`
    },
  
    {
        lat: 59.170135557673994,
        lng: 18.235728632254503,
        name: "<h3 class='info-window-header'>Tyresta By</h3>",
        information: `<div class='info-window'><img src='https://img.icons8.com/ios-glyphs/30/000000/campfire.png'/>
        <img src='https://img.icons8.com/ios-glyphs/28/000000/pavilion.png'/><img src='https://img.icons8.com/ios/30/000000/outdoor-toilet.png'/>
        <img src='https://img.icons8.com/windows/32/000000/stroller.png'/><div><img src='https://img.icons8.com/android/20/000000/info.png'/>
        <a href='tyresta-by.html'>Mer information om Tyresta By</a></div></div>`
    },
                
        
    {
        lat: 59.16488292914418,
        lng: 18.132294280597314,
        name: "<h3 class='info-window-header'>Rudan</h3>",
        information: `<div class='info-window'><img src='https://img.icons8.com/ios-glyphs/30/000000/campfire.png'/>
        <img src='https://img.icons8.com/ios/30/000000/outdoor-toilet.png'/><img src='https://img.icons8.com/windows/32/000000/stroller.png'/>
        <img src='https://img.icons8.com/fluent-systems-regular/28/000000/playground.png'/><div><img src='https://img.icons8.com/android/20/000000/info.png'/> 
        <a href='rudan.html'> Mer information om Rudan</a></div></div>`     
    }
];



//Holds the information showed in each infowindow//
let infoObj= [];


// Iterates through the locations, adding a marker and its info to each location//

    for (let i = 0; i < locations.length; i++) {
        let contentString = '<h3>' + locations[i].name + '</h3>'+ locations[i].information;

    /*Adds marker */
        let marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i].lat, locations[i].lng),
            title: locations[i].name,
            map: map
        });

    /* Adds infowindow */   
        let infowindow = new google.maps.InfoWindow({
            content: contentString
        });
    

    /* Tells the page to show the infowindow when location is clicked */ 
        marker.addListener("click", function () {          //Warning thrown in JSHint for code starting on this line, see TESTING.md for details
           closeOtherInfo();

            infowindow.open(map, marker);
            infoObj[0] = infowindow;
        });
    }

    /* Tells the page to close any previously opened infowindow */

     function closeOtherInfo() {
         if (infoObj.length > 0) {
             infoObj[0].set("marker", null);
             infoObj[0].close();
             infoObj[0].length = 0;
         }
     }     
}