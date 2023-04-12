import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { collection, doc, setDoc, addDoc, updateDoc, getDoc } from "firebase/firestore";
import { db } from './components/conifg';

export default function App() {

  const [ username , setusername ] = useState('')
  const [ email , setemail ] = useState('')

  function create () {
    addDoc(collection(db, "users"), {
      username: username,
      email: email,
      
    });
    
  }

  // function create () {
  //   getDoc(doc(db, "users","LA"), {
  //     username: username,
  //     email: email,
      
  //   });
    
  

  return (
    <View style={styles.container}>
      <TextInput 
        value={username}
        onChangeText={(username) => {setusername(username)}}
        placeholder="Enter Username"
        style={styles.textinput}
        />
        <TextInput
        value={email}
        onChangeText={(email) => {setemail(email)}} 
        placeholder="Enter Password"
        style={styles.textinput}
        />
        <TouchableOpacity onPress={create} style={styles.touchableopacity}>
         <Text> Submit Data </Text>
        </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinput:{
    borderWidth:1,
    height:50,
    width:350,
    padding:10,
    marginTop:10,
  },
  touchableopacity:{
    marginTop:10,
    borderWidth:1,
  }
});
