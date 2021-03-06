# columnhike!

## Overview

This app connects to the [Google Maps API](https://developers.google.com/maps/documentation/javascript/) to determine the elevation profile between the user and the [Astoria column](http://astoriacolumn.org/) - a historic landmark in the Pacific Northwest of the United States. This app could easily be altered to plot elevation profiles between any two  points on the earth.

This (learning) project utilizes the [NativeScript](https://github.com/NativeScript) framework to build an app using JavaScript. See app directory for code files. I was unable to get ```https``` calls from the app to communicate directly with the google elevation API - no doubt there is some aspect of the google maps sdk I do not understand - and thus setup my own backend service using ```node.js```, see the ```backend``` directory for code files.

 	
## Prerequisites

Installation requires the use of the [node package manager]((http://blog.npmjs.org/post/104272486560/getting-started-with-npm)) (npm) and the [Telerik NativeScript](http://docs.nativescript.org/getting-started#install-nativescript-and-configure-your-environment) (tns) command line tools.

This app has been developed to run on iOS which will require installing Xcode, the Xcode command line tools, and Cocoapods. Cocoapods can be installed at the command line via

```>sudo gem install cocoapods```

Lastly, this project requires the NativeScript google maps sdk available [here](https://github.com/dapriett/nativescript-google-maps-sdk). As well as your own google maps API key, click [here](https://developers.google.com/maps/signup?hl=en) for details.


## Installation

Begin by downloading the repository via git in the console:

```>git clone https://github.com/kvnphllps/oldastoria.git```

or if you don't have git installed simply click the "Download Zip" link to the right.

 Install package dependencies via the node package manager (npm) in the console:
 
 ``` >npm install ```

Install nativescript dependencies via the Telerik NativeScript command line tool

```>tns install```

## Configuration of the App

Next, add a mobile platform - this project has only been tested in the iOS enviroment:

```>tns platform add ios```

Configure the project with your own google map API key in the ```config.js``` file: replace ```"YOUR_API_KEY_HERE_FOR_iOS"``` with your google API key.

Next copy and paste the ```columnhike-Info.plist``` file from the configuration directory to the newly created directory ```platforms\ios\columnhike```. This file has been modified from the boilerplate ```.plist``` file to enable ```http``` calls from the app. This app is for demo purposes only and ```http``` is not considered secure for production use.

## Configuration of the Backend

Change directory to the ```backend``` directory. Install package dependencies via npm:

```>npm install```

Then deploy the backend via 

```>nodemon google-api-caller.js```

Now you will have a localhost listening for calls from the app. The backend service uses ```morganjs``` to log out calls to the console. 

## Running the App

To run the app on the Xcode iOS emulator:

```>tns run ios --emulator```

Note: the app requires the backend services running to connect to the google maps elevation API.

A "TelerikUI for iOS" dialog box will appear - just click "Ok".

Next, in the emulator menu, select the debug dropdown and then select location. You can enter your own location or select among the defaults. For sensible results in the app you can use the coordinates of downtown Astoria, OR: ```latititude = 46.189474, longitude = -123.831298```.

## Troubleshooting

The backend portion of the app currently logs all requests to the console. This lets you know if the backend is being utilized by the app. If you hit the one and only button in the app and do not see a corresponding log event in the console then there is a configuration  error of some kind.

Another common issue is updating the location in the emulator. It has to be updated each time the app is ran.

The important variables used in the app are all logged to the cosole as well to provide a means of investigating the behaviour of the app.


## Credits
This code relies on the porting of the google maps sdk to NativeScript by [@dapriett](https://github.com/danvk). This project was carried out while interning at [iFocus Consulting](http://www.ifocus.us/).

