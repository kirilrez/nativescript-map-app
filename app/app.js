var application = require("application");
// google maps api key for ios
if(application.ios) {
  GMSServices.provideAPIKey("YOUR_KEY_HERE");
}
application.mainModule = "main-page";
application.cssFile = "./app.css";
application.start();

