import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyC8XCEuQwN4pcFMvVg7luT65cEB_YiL9VM",
  authDomain: "edent-61d92.firebaseapp.com",
  databaseURL: "https://edent-61d92.firebaseio.com",
  projectId: "edent-61d92",
  storageBucket: "edent-61d92.appspot.com",
  messagingSenderId: "545442096199"
};

const fire = firebase.initializeApp(config);
export default fire;
