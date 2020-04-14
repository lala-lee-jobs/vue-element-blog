
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from 'firebase/app';
// Add the Firebase services that you want to use
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDaK7g-2n1CujyjKzdQD9swRcQMpdjPA0I',
  authDomain: 'lala-code-blog.firebaseapp.com',
  databaseURL: 'https://lala-code-blog.firebaseio.com',
  projectId: 'lala-code-blog',
  storageBucket: 'lala-code-blog.appspot.com',
  messagingSenderId: '783819178075',
  appId: '1:783819178075:web:65a5b87eeff9f871313f7e',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
export { db, auth };
