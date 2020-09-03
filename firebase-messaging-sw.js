// Import and configure the Firebase SDK
// These scripts are made available when the app is served or deployed on Firebase Hosting
// If you do not serve/host your project using Firebase Hosting see https://firebase.google.com/docs/web/setup
// importScripts('/__/firebase/7.18.0/firebase-app.js');
// importScripts('/__/firebase/7.18.0/firebase-messaging.js');
// importScripts('/__/firebase/init.js');



importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js');
// importScripts('https://www.gstatic.com/firebasejs/7.14.0/init.js');

/**
 * Here is is the code snippet to initialize Firebase Messaging in the Service
 * Worker when your app is not hosted on Firebase Hosting.

 // [START initialize_firebase_in_sw]
 // Give the service worker access to Firebase Messaging.
 // Note that you can only use Firebase Messaging here, other Firebase libraries
 // are not available in the service worker.
 

 // Initialize the Firebase app in the service worker by passing in
 // your app's Firebase config object.
 // https://firebase.google.com/docs/web/setup#config-object
 firebase.initializeApp({
   apiKey: 'api-key',
   authDomain: 'project-id.firebaseapp.com',
   databaseURL: 'https://project-id.firebaseio.com',
   projectId: 'project-id',
   storageBucket: 'project-id.appspot.com',
   messagingSenderId: 'sender-id',
   appId: 'app-id',
   measurementId: 'G-measurement-id',
 });

 // Retrieve an instance of Firebase Messaging so that it can handle background
 // messages.
 const messaging = firebase.messaging();
 // [END initialize_firebase_in_sw]
 **/


// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// [START background_handler]

firebase.initializeApp({
  apiKey: "AIzaSyDzXXiHeHR9IeNiXcDNfurbQU6wD-xSutc",
  authDomain: "estudomensagemmanutencao.firebaseapp.com",
  databaseURL: "https://estudomensagemmanutencao.firebaseio.com",
  projectId: "estudomensagemmanutencao",
  storageBucket: "estudomensagemmanutencao.appspot.com",
  messagingSenderId: "577411657952",
  appId: "1:577411657952:web:79fd0624560228d7c62085",
  measurementId: "G-HQ9XN1Y4RY"
})

const messaging = firebase.messaging();



messaging.setBackgroundMessageHandler(function (payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = "Background Message Title";
  const notificationOptions = {
    body: "Background Message body.",
    icon: "/firebase-logo.png",
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});

// [END background_handler]
