// Two-way data binding objects for the view
var observableModule = require("data/observable");

// Data we pass to the chart
var dataModelModule = require("~/view-models/chart-data-model");

// Google API
var ElevDataViewModel = require("~/view-models/elev-data-model");
var elevData = new ElevDataViewModel([],[],[]);    

// Location services
var locationModule = require("location");
var Location = require("location").Location;
var LocationManager = require("location").LocationManager;
var locationOptions = {
    desiredAccuracy: 3,
    updateDistance: 0,
    minimumUpdateTime: 5000,
    maximumAge: 20000,
};

// Map default centering loc (on the column) and zoom level
var columnLoc = new Location();
    // Assign location of column
    columnLoc.latitude = 46.181400;
    columnLoc.longitude = -123.817502;

var initialLoc = 
        {
            latitude  : columnLoc.latitude, 
            longitude   : columnLoc.longitude,
            zoom : "15"  
        }
     ;

var page;
var myLoc = new Location();

// Data binding of "geoData" to the view
var pageData = new observableModule.Observable(
    {
         geoData: initialLoc,
         distData: "-",
         chartData: new dataModelModule.CategoricalDataModel()
    }
);


// var distData = new observableModule.Observable();
// distData.distance = 0;

exports.pageLoaded = function(args) {
    page = args.object;
    page.bindingContext = pageData;

};

exports.OnMapReady= function(args) {
      var mapView = args.object;

      var gMap = mapView.gMap;
      
      console.log("Initialize the map...");
     
        // if(mapView.android) {
        //     var markerOptions = new com.google.android.gms.maps.model.MarkerOptions();
        //     markerOptions.title("Sydney");
        //     markerOptions.snippet("Australia");
        //     var latLng = new com.google.android.gms.maps.model.LatLng(-33.86, 151.20);
        //     markerOptions.position(latLng);
        //     gMap.addMarker(markerOptions);
        // } 
     
        if (mapView.ios) {

            // Replace with current bus options and their associated locations
            var position = CLLocationCoordinate2DMake(46.185790, -123.811471);
            var marker = GMSMarker.markerWithPosition(CLLocationCoordinate2DMake(46.185790, -123.811471));
            marker.title = "Astoria";
            marker.snippet = "Oregon";
            marker.map = gMap;

            // Try to draw a path

        }
};

exports.getElevationProf = function (args){
    page = args.object;
    page.bindingContext = pageData;

    
    // Enable GPS services on iOS
    var iosLocationManager = CLLocationManager.alloc().init();
        iosLocationManager.requestWhenInUseAuthorization();
    
    // Get the users location
    locationModule.getLocation(locationOptions)
    .then(function(location){
        myLoc.latitude  = location.latitude;
        myLoc.longitude = location.longitude;

        // Determine distance
        distData = LocationManager.distance(myLoc, columnLoc).toFixed(1);
        
        // Update data-binding to the view [not working]

        elevData.load(myLoc, columnLoc, [])
        // a nested then... gross!
        .then(function (myData){
            // Pass data for plotting here
            pageData.set("distData", distData);
            console.log(JSON.stringify(pageData.distData));
            
            console.log('Plot this data! ');
            console.log(JSON.stringify(myData));
            
            var plotData = []; 
            var currLoc = new Location();
            for(var i=0; i<myData.length; i++) { 
                
                // extract elevation from api response for plotting
                // elevPlot.push(myData[i].elev.toFixed(1));

                var currElev = myData[i].elev.toFixed(1);

                // extract distance from api response for plotting
                // currLoc.latitude = myData[i].lat;
                // currLoc.longitude = myData[i].lng;
                
                // Silly Location manager NOT recomputing distance for me...
                // var currDist = LocationManager.distance(currLoc, columnLoc);
                
                var numSamples = 20; // Number of points we request elevation data for in google
                var stepSize = (distData/numSamples).toFixed(0);


                plotData.push({Distance : stepSize*i, Elevation :  currElev  } );

            }
            
            console.log(JSON.stringify(plotData));

            pageData.set("categoricalSource", plotData);
        
        });

    }, function (error) {

        console.log('Location error received: ' + error);

    });
};
