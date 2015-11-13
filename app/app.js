var application = require("application");
// google maps api key for ios
application.mainModule = "main-page";
application.cssFile = "./app.css";
if(application.ios) {
  GMSServices.provideAPIKey("AIzaSyAjhlF70etTrM5fIGYfR_NlB_W5kXqE7Ng");
}
application.start();

