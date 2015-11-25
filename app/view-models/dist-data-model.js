// HTTPS request to the google elevation api
var fetchModule = require("fetch");
var observableArrayModule = require("data/observable-array");

var config = require("~/config");

function MapDataViewModel(myLoc, columnLoc) {
    var mapData = new observableArrayModule.ObservableArray();
    
    mapData.load = function(myLoc, columnLoc) {
            
            // First approach (not working): construct a direct https get request to google
            // var apiQuery = config.startElevUri + myLoc.latitude + ',' +  myLoc.longitude + '|'+ columnLoc.latitude + ',' + columnLoc.longitude + config.endElevUri + config.apiKey ;        
            // console.log(apiQuery);
            // fetch('"'+apiQuery+'"')
            // http.getJSON("'" + apiQuery + "'")
            // Hardcoded example (works in the browser):
            // fetch("http://maps.googleapis.com/maps/api/elevation/json?path=37.33240904999999,-122.03051210999995|46.1814,-123.817502&samples=20&key=YOUR_KEY_HERE")

            // Second approach (working):
            // Hardcoded example (works in the browser and with this {N}-client)
            // fetch("http://localhost:3000/api/37.33240904999999/-122.03051210999995/46.1814/-123.817502/AIzaSyCPfkZC-BXChfwvqIpzH3jxCL6bMxkWoOQ")
            var apiQuery = config.startElevUri + '/' +
                           myLoc.latitude + '/' +
                           myLoc.longitude + '/' +
                           columnLoc.latitude + '/' +
                           columnLoc.longitude + '/' +
                           config.apiKey;

            fetch(apiQuery)
            .then(function (r) { 
                    
                    console.log(JSON.stringify(r));
                    return r.json();
                
                }, function (e) {
                
                    console.log(e);
                
            })
            .then(function(data) {
                    // console.log(JSON.stringify(data));
                    mapData.push(data);
                    // console.log(JSON.stringify(mapData));
            });

        };

     return mapData;    
}

function handleErrors(response) {
    if (!response.ok) {
        console.log(JSON.stringify(response));
        throw Error(response.statusText);
    }
    return response;
}
module.exports=MapDataViewModel;