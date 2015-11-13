var application = require("application");
// google maps api key for ios
if(application.ios) {
  GMSServices.provideAPIKey("AIzaSyAjhlF70etTrM5fIGYfR_NlB_W5kXqE7Ng");
}
application.mainModule = "main-page";
application.cssFile = "./app.css";
application.start();

