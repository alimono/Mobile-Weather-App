# Ain't no Sunshine Mobile Weather App  

Built using Framework 7 (React) and Capacitor.  

## How to run the project  

- Clone this repository  

In the terminal of your code editor, type:  

`git clone https://github.com/alimono/Mobile-Weather-App.git`  

- Change directory into the source folder  

`cd ./Mobile-Weather-App/src/`  

- Locally create an .env file in src with the Open Weather API key.   

You'll need to have an account on OpenWeather API to generate the key. The key should be saved in the .env file as follows:  

`VITE_WEATHER_API_KEY=your_api_key_here`  

- Install the project dependencies.  

`npm install`  

- Run the project  

`npm run dev`  

Click the link `http://localhost:5173/` and it will open the project in your browser.  

## Running as a mobile app  

This is intended to be built as a mobile app, although I only managed to test it on a browser. More on that later...  

* Ensure that you are one level up from src in the folder structure, same level as the package.json and config files.  

`cd ..`  

To build the app for mobile devices, run the following commands in the terminal:  

`npm run build`  

`npx cap copy`  

`npx cap sync`  

- iOS  

To run on iOS, ensure that you have Xcode installed.  

`npx cap add ios` (this command may give an error that the plaform already exists)  

`npx cap open ios`  

- Android  

To run on Android, ensure that you have Android Studio installed.  

`npx cap add android` (this command may give an error that the plaform already exists)   

`npx cap open android`  

## Challenges  

This is still a work in progress and I have paused at this stage. Some things to bear in mind.  

### iOS and Android  

This app was designed as a mobile intended to run on iOS and Android. I did not manage to build the app and test on either iOS or Android due to compatibility issues with my development device and the platforms required to test this.   

#### iOS  

I am currently running an older version of macOS, 13.7 Ventura. To test that it runs on iOS, you need to have Xcode installed and open the project in Xcode. The latest version of Xcode from the app store requires macOS 15 and above, which is incompatible with my device. I tried to find older version of Xcode but they wouldn't install, and some of them require an Apple Developer account.   

So I decided to test on...  

#### Android  

I managed to install Android studio and tried to build and run my project here. I ran into a Java issue, I needed to install this on my machine. I installed a version 8 which was free and accessible. The project requires version 11 and above, which I had to create an Oracle account to get.   

At this point it was late in the night, and I had to stop somewhere, but with more time and a newer device, I would have continued until this was resolved.  

#### SQLite

Once the main features of the app were done, I continued to work on some of the optional features. I decided to try the SQLite plugin for data storage for recent searches and favourites.  

I ran into some issues testing my code on a browser, as the SQLite plugin is for mobile devices, and I couldn't get my mobile testing platforms to run to check if this worked, and refactor my code from there to get the right functionality.   

I tried to test this in the browser using jeep-sqlite, and then ran into an issue in the browser, with an error saying jeep was not added to the DOM. I tried to add this in app.jsx but at this stage, I decided to leave this optional features, as even if it did work, I would keep coding until the render and functionality was smooth, and this was taking / would take more time.

I commented out all the SQLite code I attempted to prevent any errors in the existing, functioning code. 

### Offline first

I would have loved to attempt this offline feature, but did not manage to get round to it in the alloted time.

## Lessons learned

Anything is possible with more time, better tech!   

Also, prioritise tesing earlier on.

Thanks for reading!