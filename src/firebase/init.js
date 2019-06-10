import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCdheKya178V39K0AQNEjbZIR1skeEZMWY",
    authDomain: "vue-chat-app-64f47.firebaseapp.com",
    databaseURL: "https://vue-chat-app-64f47.firebaseio.com",
    projectId: "vue-chat-app-64f47",
    storageBucket: "vue-chat-app-64f47.appspot.com",
    messagingSenderId: "134852038583",
    appId: "1:134852038583:web:419c35a91928823e"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp.firestore()