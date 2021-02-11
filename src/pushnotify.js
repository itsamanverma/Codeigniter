import * as firebase from "firebase";
    
export const initializeFirebase = () => {
  firebase.initializeApp({
    apiKey: "AIzaSyAVz0HHLZCmpdFt73l7k5AOyMmY1n4ZQx",
    authDomain: "pushnotification-872fa.firebaseapp.com",
    databaseURL: "https://pushnotification-872fa.firebaseio.com",
    projectId: "fundoo-237806",
    storageBucket: "pushnotification-872fa.appspot.com",
    messagingSenderId: "871833141121"
  });
  // use other service worker
  navigator.serviceWorker.register("/my-sw.js").then(registration => {
    firebase.messaging().useServiceWorker(registration);
  });
};

export const askForPermissioToReceiveNotifications = async () => {
  try {
    const messaging = firebase.messaging();
    await messaging.requestPermission();
    const token = await messaging.getToken();
    console.log("FireBase token is:", token);
    localStorage.setItem("pushToken", token);
    var data = {
      pushToken: token,
      userId: localStorage.getItem("userId")
    };
    pushNotification(data);
    return token;
  } catch (error) {
    console.error(error);
  }
};

export const deletePushToken = async () => {
  try {
    const messaging = firebase.messaging();
    const token = await messaging.getToken();
    await messaging.deleteToken(token);
  } catch (error) {
    console.error(error);
  }
};
