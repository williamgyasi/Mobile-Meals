import * as firebase from 'firebase';
import 'firebase/firestore';
import {Alert} from 'react-native';


const UserCollection = firebase.firestore().collection('Users');


export async function RegisterUser(email,password,data){
    try {
        await firebase.auth().createUserWithEmailAndPassword(email,password);
        const currentUser=firebase.auth().currentUser;

        
    } catch (error) {
        
    }
}

export async function registration(email, password, lastName, firstName) {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      const currentUser = firebase.auth().currentUser;
  
      UserCollection
        .doc(currentUser.uid)
        .set({
          email: currentUser.email,
          lastName: lastName,
          firstName: firstName,
        });
    } catch (err) {
      Alert.alert("There is something wrong!!!!", err.message);
    }
  }
  
  export async function signIn(email, password) {
    try {
     await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
    } catch (err) {
      Alert.alert("There is something wrong!", err.message);
    }
  }

  
  export async function loggingOut() {
    try {
      await firebase.auth().signOut();
    } catch (err) {
      Alert.alert('There is something wrong!', err.message);
    }
  }