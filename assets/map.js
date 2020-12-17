// Credit for Map initialization, markers and styling: Google Maps API Tutorial: https://developers.google.com/maps/documentation/javascript/ and Google maps tutorial made by Code Institute student Eamonn Smythe: (https://slack-files.com/T0L30B202-F01DRAEPEH5-16d0e0a646)//



// Initializes showing the map on the page, setting appropriate zoom and coordinates to show the area of Södertörn
function initMap() {
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: {
            lat: 59.12630249180509,
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
        name: "Paradiset",
        information: "<div class='info-window'><img src='https://img.icons8.com/ios-glyphs/30/000000/campfire.png'/><img src='https://img.icons8.com/ios-glyphs/28/000000/pavilion.png'/><img src='https://img.icons8.com/ios/30/000000/outdoor-toilet.png'/><div class='back-link'><img src='https://img.icons8.com/android/20/000000/info.png'/><a href='paradiset.html'>Mer information om Paradiset</a></div></div>",
        
        
    },
  
    {
        lat: 59.170135557673994,
        lng: 18.235728632254503,
        name: "Tyresta By",
        information: "<div class='info-window'><img src='https://img.icons8.com/ios-glyphs/30/000000/campfire.png'/><img src='https://img.icons8.com/ios-glyphs/28/000000/pavilion.png'/><img src='https://img.icons8.com/ios/30/000000/outdoor-toilet.png'/><img src='https://img.icons8.com/windows/32/000000/stroller.png'/><div><img src='https://img.icons8.com/android/20/000000/info.png'/><a href='tyresta-by.html'>Mer information om Tyresta By</a></div></div>",
    },
                
        
    {
        lat: 59.16488292914418,
        lng: 18.132294280597314,
        name: "Rudan",
        information: "<div class='info-window'><img src='https://img.icons8.com/ios-glyphs/30/000000/campfire.png'/><img src='https://img.icons8.com/ios/30/000000/outdoor-toilet.png'/><img src='https://img.icons8.com/windows/32/000000/stroller.png'/><img src='https://img.icons8.com/fluent-systems-regular/28/000000/playground.png'/><div><img src='https://img.icons8.com/android/20/000000/info.png'/> <a href='rudan.html'> Mer information om Rudan</a></div></div>",     
       
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

    /* Tells the page to show the infowindow when location is clicked, and to close any previously opened infowindow */
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


      /*

     // This is where I try to add code for showing another content in the infowindow when a link (backsidelink in locations object) is clicked
    

       for (let i = 0; i< locations.length; i++) {

         let contentBackString = locations[i].infobackside;

         let infowindowback = new google.maps.InfoWindow({
           content: contentBackString
           });

           let backlink = document.getElementById('back-link');

           backlink("click", function() {
            closeOtherInfo();

            infowindow.open(map, marker);
            infoObjBack[0] = infowindowback;
           });

            function closeOtherInfo() {
         if (infoObj.length > 0) {
             infoObjBack[0].set("infowindow", null);
             infoObjBack[0].close();
             infoObjBack[0].length = 0;
         }
        }
    }*/
     

     
}