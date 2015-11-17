var dialogsModule = require("ui/dialogs");
var observableModule = require("data/observable");
var observableArrayModule = require("data/observable-array");
var dataModelModule = require("~/main-data-model");
var locationModule = require("location");

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

exports.getElevationProf = function (){
    // Get current GPS
        var LocationManager = require("location").LocationManager;
        var isEnabled = LocationManager.isEnabled();
        var locationManager = new LocationManager();
        var lastKnownLocation = locationManager.lastKnownLocation;

        // To Add: can we turn on location services in the simulator?
        // Are they on by default on the device? Prolly not...
        // Dialog to turn them on?
        
        // var iosLocationManager = CLLocationManager.alloc().init();
        // iosLocationManager.requestWhenInUseAuthorization();



        dialogsModule.alert({
            message: 'Location received: ' + isEnabled,
            okButtonText: 'Ok'
        });



    // locationModule.getLocation({ maximumAge: 30000, timeout: 0 })
    // .then(function (location) {
        
    //     dialogsModule.alert({
    //         message: 'Location received: ' + location,
    //         okButtonText: 'Ok'
    //     });

    //     console.log('Location received: ' + location);
    // }, function (error) {

    //     dialogsModule.alert({
    //         message: 'Location error received: ' + error,
    //         okButtonText: 'Ok'
    //     });

    //     console.log('Location error received: ' + error);
    // });

    // Send query to google elevation api with current GPS and column GPS
    // then update the chart.
};

