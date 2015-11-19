// application/platform objects for platform-dependent peices
var appModule = require("application");
var platformModule = require("platform");

// UI: dialog box, button
var dialogsModule = require("ui/dialogs");
var buttonModule = require("ui/button");

// Two-way data binding objects for the view
var observableModule = require("data/observable");
var observableArrayModule = require("data/observable-array");

// Data we pass to the chart
var dataModelModule = require("~/view-models/chart-data-model");

// Google API
var MapDataViewModel = require("~/view-models/api-data-model");
var getElev = new MapDataViewModel();    

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
columnLoc.latitude = 46.181400;
columnLoc.longitude = -123.817502;

initialLoc = 
        {
            latitude  : columnLoc.latitude, 
            longitude   : columnLoc.longitude,
            zoom : "15"  
        }
     ;

var page;
var dist; // set the value inside a promise below
var myLoc = new Location();

// Data binding of "geoData" to the view
var pageData = new observableModule.Observable({
     geoData: initialLoc
});


exports.pageLoaded = function(args) {
    page = args.object;
    page.bindingContext = pageData;
    page.bindingContext = new dataModelModule.CategoricalDataModel();

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
     
        // if (mapView.ios) {

        //     // Replace with current bus options and their associated locations
        //     var position = CLLocationCoordinate2DMake(46.185790, -123.811471);
        //     var marker = GMSMarker.markerWithPosition(CLLocationCoordinate2DMake(46.185790, -123.811471));
        //     marker.title = "Astoria";
        //     marker.snippet = "Oregon";
        //     marker.map = gMap;
        // }
};


exports.getElevationProf = function (){
    // Enable GPS services on iOS

    var iosLocationManager = CLLocationManager.alloc().init();
        iosLocationManager.requestWhenInUseAuthorization();
    
    // Get the users location
        // Promise to get my location
    var getMyLoc = locationModule.getLocation(locationOptions);
        // Promise to determine my distance to the column in FT (?)
    var getDistance = getMyLoc.then(function (location) {
        myLoc.latitude = location.latitude;
        myLoc.longitude = location.longitude;
        
        // dist = LocationManager.distance(location, columnLoc);
        
    });

    
    
    // Promise to send request to google API
    var getApiData = getDistance.then(function() {
        
        console.log(JSON.stringify(myLoc));
        console.log(JSON.stringify(columnLoc));
        
        getElev.load(myLoc, columnLoc);

        // console.log(JSON.stringify(stuff));
    });

    
    // https://maps.googleapis.com/maps/api/elevation/json?path=36.578581,-118.291994|36.23998,-116.83171&samples=3&key=YOUR_API_KEY


    
};

