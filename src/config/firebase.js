import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

// var firebaseConfig = {
//   apiKey: "AIzaSyAbcIQ7Vdhwj0ToI5gEQo2todCpOJWZDnw",
//   authDomain: "fir-auth-5696d.firebaseapp.com",
//   databaseURL: "https://fir-auth-5696d.firebaseio.com",
//   projectId: "fir-auth-5696d",
//   storageBucket: "fir-auth-5696d.appspot.com",
//   messagingSenderId: "810613068516",
//   appId: "1:810613068516:web:a68cbd35910eb4315b52f1",
//   measurementId: "G-TDQBE5EJVB",
// };

const firebaseConfig = {
  apiKey: 'AIzaSyBdy7uTRoqz5gHvRB7LGo16XyTJL4n83QE',
  authDomain: 'todo-app-8a5c2.firebaseapp.com',
  projectId: 'todo-app-8a5c2',
  storageBucket: 'todo-app-8a5c2.appspot.com',
  messagingSenderId: '87789817063',
  appId: '1:87789817063:web:14d17b2bfa33acb7b42642',
  measurementId: 'G-3R7WPTV09G',
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();

const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      // var credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      // var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(user);
      // ...
    });
  // .catch((error) => {
  //   // Handle Errors here.
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  //   // The email of the user's account used.
  //   var email = error.email;
  //   // The firebase.auth.AuthCredential type that was used.
  //   var credential = error.credential;
  //   // ...
  // });
};
export { signInWithGoogle };
export const db = firebase.firestore();
export default firebase;
// export default firebase;
