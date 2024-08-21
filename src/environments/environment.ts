// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  /***Api´s Dev***/
  apiStore2:"https://api.escuelajs.co/api/v1/products",
  apiStore: 'https://fakestoreapi.com/products',
  apiStore3:"https://dummyjson.com/products",
  /***Firebase **/
  firebaseConfig: {
    apiKey: 'AIzaSyA3pd0GbZeokCAZsLX6mGloI39XRyIGqHo',
    authDomain: 'soga-50a48.firebaseapp.com',
    projectId: 'soga-50a48',
    storageBucket: 'soga-50a48.appspot.com',
    messagingSenderId: '600790909088',
    appId: '1:600790909088:web:c153e97480701c525f09c5',
    measurementId: 'G-GW8YNX361C',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
