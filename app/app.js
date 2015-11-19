var application = require("application");
var config = require("~/config");
// google maps api key for ios
application.mainModule = "main-page";
application.cssFile = "./app.css";
if(application.ios) {
 	// GMSServices.provideAPIKey("YOUR_API_KEY_HERE_FOR_iOS");
 	GMSServices.provideAPIKey(config.apiKey);
}
application.start();

