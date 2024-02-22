importScripts (https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js)
importScripts (https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js)

const firebaseConfig = {
  apiKey: "AIzaSyCa0kMEfchM8jf1EYDws11kLlr00D9Dd0Q",
  authDomain: "estacion-darkness.firebaseapp.com",
  projectId: "estacion-darkness",
  storageBucket: "estacion-darkness.appspot.com",
  messagingSenderId: "1070951978655",
  appId: "1:1070951978655:web:aacf3bf4ba825c680434aa",
  measurementId: "G-G1V15R3VS0"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging(app);

messaging.onBackgroundMessage(payload => {
    console.log(Recibiste este mensaje mientras no estabas);
//previo a notificación
    const notificationTitle= payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: "favicon/android-chrome-256x256.png"
    }

    return self.registration.showNotification (
        notificationTitle,
        notificationOptions
    )

})
}