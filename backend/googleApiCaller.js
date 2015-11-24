var express = require('express'),
    https = require('https'),
    morgan = require('morgan'),
 	app = express();

var PORT = 3000;
var HOST = "127.0.0.1";

// Setup logging
app.use(morgan('combined'));

// Construct client request 
function stringifyReq (req){
	// Build up a string to pass to the googles
	var googleApiUrl = 'https://maps.googleapis.com/maps/api/elevation/json?path=' +
					req.params.myLat + ',' +
					req.params.myLng + '|' +
					req.params.colLat + ',' +
					req.params.colLng + '&' +
					'samples=20&key=' + req.params.apiKey;
	return googleApiUrl;					
}

// submit client request to google
function callGoogle(clientRequest, callback){
	https.get(clientRequest, function(response){
    	var body = '';

    	response.on('data', function(chunk){
        	body += chunk;
    	});

    	response.on('end', function(){
        	googRes = JSON.parse(body);
        	
    		// lacing in our callback to return JSON
    		callback();
    	});

	}).on('error', function(e){
      	
      	console.log("Got an error: ", e);
	
	});
}

// Synchronization of our nested APIs
app.get('/api/:myLat/:myLng/:colLat/:colLng/:apiKey', function(req,res){

	var clientRequest = stringifyReq(req);
	
	console.log(clientRequest);
	
	callGoogle(clientRequest, function(){
		if (googRes.status === 'OK'){
				
				console.log('Data received from google');
				// pass the json back to the client
				res.json(googRes);

		} else {

				console.log('Data not received');
		}
		
	});
	

	

});		


app.listen(PORT);

// Pass argument to google elevation API

// Return the response from google to the client