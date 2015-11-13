var application = require("application");
// google maps api key for ios
application.mainModule = "main-page";
application.cssFile = "./app.css";
if(application.ios) {
  GMSServices.provideAPIKey("YOUR_KEY_HERE");
}
application.start();

