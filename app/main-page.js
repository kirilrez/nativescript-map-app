var dialogsModule = require("ui/dialogs");
var observableModule = require("data/observable");
var observableArrayModule = require("data/observable-array");
var dataModelModule = require("~/main-data-model");

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
    // Send query to google elevation api with current GPS and column GPS
    // then update the chart.
};

