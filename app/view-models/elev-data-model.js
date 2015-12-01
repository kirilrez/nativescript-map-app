// HTTPS request to the google elevation api
var fetchModule = require("fetch");
var observableArrayModule = require("data/observable-array");

var config = require("~/config");

function ElevDataViewModel(myLoc, columnLoc, items) {
    var viewModel = new observableArrayModule.ObservableArray(items);
    
    viewModel.load = function(myLoc, columnLoc) {
            
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
            
            // Test the api query sent to the googles
            console.log(apiQuery);              
            
            return fetch(apiQuery)
            .then(function (response) { 
                    
                    // console.log(JSON.stringify(r));
                    return response.json();
                
                }, function (error) {
                
                    console.log(error);
                
            })
            .then(function (data) {
                var dataSet = data.results;
                var cleanData=[];
                // console.log('Building...');
                for (var i=0; i<dataSet.length; i++){
                    
                    var currData = {
                            lat: dataSet[i].location.lat,
                            lng: dataSet[i].location.lng,
                            elev: dataSet[i].elevation
                        };

                    cleanData.push(currData);
                    // console.log(JSON.stringify(currData));
                }

                // viewModel.push(cleanData);
                // console.log(JSON.stringify(cleanData));
                return cleanData;

            });
    };

    return viewModel; 

}

function handleErrors(response) {
    if (!response.ok) {
        console.log(JSON.stringify(response));
        throw Error(response.statusText);
    }
    return response;}

module.exports=ElevDataViewModel;