function OnMapReady(args) {
  var mapView = args.object;
  var gMap = mapView.gMap;
 
  console.log("Setting a marker...");
 
    if(mapView.android) {
        var markerOptions = new com.google.android.gms.maps.model.MarkerOptions();
        markerOptions.title("Sydney");
        markerOptions.snippet("Australia");
        var latLng = new com.google.android.gms.maps.model.LatLng(-33.86, 151.20);
        markerOptions.position(latLng);
        gMap.addMarker(markerOptions);
    } 
 
    if (mapView.ios) {
        var position = CLLocationCoordinate2DMake(-33.86, 151.20);
        var marker = GMSMarker.markerWithPosition(CLLocationCoordinate2DMake(-33.86, 151.20));
        marker.title = "Sydney";
        marker.snippet = "Australia";
        marker.map = gMap;
    }
}
exports.OnMapReady = OnMapReady;