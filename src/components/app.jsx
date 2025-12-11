// import { use, useEffect } from 'react';
// import { initDB, initSQLiteWeb } from '../services/dbService.js';
import { getDevice }  from 'framework7/lite-bundle';
import {
  f7,
  f7ready,
  App,
  View,
} from 'framework7-react';

import capacitorApp from '../js/capacitor-app';
import routes from '../js/routes';
import store from '../js/store';

const MyApp = () => {

  const device = getDevice();
  // Framework7 Parameters
  const f7params = {
    name: 'AintNoSunshine', // App name
      theme: 'auto', // Automatic theme detection




      // App store
      store: store,
      // App routes
      routes: routes,


      // Input settings
      input: {
        scrollIntoViewOnFocus: device.capacitor,
        scrollIntoViewCentered: device.capacitor,
      },
      // Capacitor Statusbar settings
      statusbar: {
        iosOverlaysWebView: true,
        androidOverlaysWebView: false,
      },
  };

  f7ready(() => {

    // Init capacitor APIs (see capacitor-app.js)
    if (f7.device.capacitor) {
      capacitorApp.init(f7);
    }
    // Call F7 APIs here
  });

  /* TRIED TO GET THIS TO WORK IN THE DOM TO RESOLVE ERRORS ABOUT JEEP-SQLITE NOT BEING IN THE DOM,
  DIDN'T WORK, SO COMMENTED OUT FOR NOW */
  // useEffect(() => {
  //   if (!document.querySelector('jeep-sqlite')) {
  //     const jeepSqlite = document.createElement('jeep-sqlite');
  //     document.body.appendChild(jeepSqlite);
  //   }
  // }, []);

  // useEffect(() => {
  //   initSQLiteWeb();
  // }, []);

  // useEffect(() => {
  //   // Initialize the database when the app starts
  //   initDB();
  // }, []);

  return (
    <App { ...f7params }>

        {/* Your main view, should have "view-main" class */}
        <View main className="safe-areas" url="/" />

    </App>
  );
}
export default MyApp;