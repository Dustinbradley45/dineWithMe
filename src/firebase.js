import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyClPrfC7PN_rZpzNrU_fhIVYJDx_vjR7HI",
    authDomain: "restdecider2.firebaseapp.com",
    databaseURL: "https://restdecider2.firebaseio.com",
    projectId: "restdecider2",
    storageBucket: "restdecider2.appspot.com",
    messagingSenderId: "187666667466"
  };
  firebase.initializeApp(config);



export default firebase;