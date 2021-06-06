import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore
  .collection('users')
  .doc('h0eenHhNjQT9iwKJZ18z')
  .collection('cartItems')
  .doc('jTKKQTRy4txFER3sqic0');
firestore.doc('/users/h0eenHhNjQT9iwKJZ18z/cartItems/jTKKQTRy4txFER3sqic0');
firestore.collection('/users/h0eenHhNjQT9iwKJZ18z/cartItems');
