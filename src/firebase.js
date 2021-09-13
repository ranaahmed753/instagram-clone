import firebase from 'firebase/app';
import firestore from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC-3fkYFrk3qSPxH3UXR9huR04BXox5Jb0",
    authDomain: "instagram-clone-7a3af.firebaseapp.com",
    projectId: "instagram-clone-7a3af",
    storageBucket: "instagram-clone-7a3af.appspot.com",
    messagingSenderId: "249769859795",
    appId: "1:249769859795:web:75734d68957e84c4725226"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  export default db;