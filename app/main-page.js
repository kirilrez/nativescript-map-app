var dialogsModule = require("ui/dialogs");
var observableModule = require("data/observable");
var observableArrayModule = require("data/observable-array");
var dataModelModule = require("~/main-data-model");
var locationModule = require("location");

// location monitoring
var locationManager = new locationModule.LocationManager();

var locationOptions = {
    desiredAccuracy: 3,
    updateDistance: 0,
    minimumUpdateTime: 5000,
    maximumAge: 20000
};

// Request a permission to use location service
var buttonModule = require("ui/button");
var appModule = require("application");
var platformModule = require("platform");


var page;

// Todo: GPS call to return user's location
// Current hardwired version:
geoData = 
        {
            latitude  : "46.185790", 
            longitude   : "-123.811471",
            zoom : "15"  
        }
     ;

var pageData = new observableModule.Observable({
     geoData: geoData
});


exports.pageLoaded = function(args) {
    page = args.object;
    page.bindingContext = pageData;
    page.bindingContext = new dataModelModule.CategoricalDataModel();

};

exports.OnMapReady= function(args) {
      var mapView = args.object;

      var gMap = mapView.gMap;
      
      console.log("Setting a marker...");
     
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
        }
};

// Function 1
// define function to interact with google elevation api... just 
// passing a query string with the coordinates of column and returned user
// position

// Function 2
// plot the returned data from Function 1.


exports.getElevationProf = function (){
    // Get current GPS
        var iosLocationManager = CLLocationManager.alloc().init();
            iosLocationManager.requestWhenInUseAuthorization();

    locationManager.startLocationMonitoring(function(location){
        
        console.log("Location received: " + JSON.stringify(location));
    }, function (error) {
        console.log("Location error received: " + error);
    }, locationOptions);

    // Function 1

    // Function 2

};

