// HTTPS request to the google elevation api
var fetchModule = require("fetch");
var observableArrayModule = require("data/observable-array");

var config = require("~/config");

function MapDataViewModel(myLoc, columnLoc) {
    var mapData = new observableArrayModule.ObservableArray();
    
    mapData.load = function(myLoc, columnLoc) {
            // var apiQuery = config.startElevUri + myLoc.latitude + ',' +  myLoc.longitude + '|'+ columnLoc.latitude + ',' + columnLoc.longitude + config.endElevUri + config.apiKey ;        
            // console.log(apiQuery);
            // // return fetch('"'+apiQuery+'"')
            // return http.getJSON("'" + apiQuery + "'")
            // fetch("http://maps.googleapis.com/maps/api/elevation/json?path=37.33240904999999,-122.03051210999995|46.1814,-123.817502&samples=20&key=AIzaSyCPfkZC-BXChfwvqIpzH3jxCL6bMxkWoOQ")
            fetch("http://localhost:3000/api/37.33240904999999/-122.03051210999995/46.1814/-123.817502/AIzaSyCPfkZC-BXChfwvqIpzH3jxCL6bMxkWoOQ")
            .then(function (r) { 
                    // API response isn't being logged out...
                    // query string to the api looks correct...
                    console.log(JSON.stringify(r));

                    return response.json();
                
                }, function (e) {
                
                    console.log(e);
                
                });
            // .then(function(data) {
            //         // console.log(JSON.stringify(data));
            //         mapData.push(data);
            //         console.log(JSON.stringify(mapData));
            // });

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
