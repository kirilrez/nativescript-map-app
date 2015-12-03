module.exports = {
    apiKey : "YOUR_API_KEY_HERE_FOR_iOS",
    
    
    
    // hit up our localhost
    startElevUri:"http://localhost:3000/api"
    
    // In a nicer world the following direct call should work...
    // startElevUri:"https://maps.googleapis.com/maps/api/elevation/json?path=",
    // endElevUri:"&samples=20&key="


    // Thus a sample request for elevation along a straight path might ask for:
    // fetch ( startElevUri + myLoc.lat + ',' +  myLoc.lng + '|'+ columnLoc.lat + ',' + columnLoc.lat + endElevUri + apiKey )

};