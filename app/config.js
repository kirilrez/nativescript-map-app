module.exports = {
    apiKey = "YOUR_API_KEY_HERE_FOR_iOS",
    
    startElevUri:"https://maps.googleapis.com/maps/api/elevation/json?path=",
    endElevUri:"&samples=20&key="

    // Thus a sample request might ask for:
    // fetch ( startElevUri + myLoc.lat + ',' +  myLoc.lng + '|'+ columnLoc.lat + ',' + columnLoc.lat + endElevUri + apiKey )

};