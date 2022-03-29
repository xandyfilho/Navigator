import React from 'react';
import { 
  View,
  Image,
  TextInput, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  StatusBar, 
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
 return (
  <View style={styles.container}>      
  <StatusBar hidden/>  

  <Image
    source = { require ('Navigator/public/Assets/1.png')}
    style = {styles.logo}
  />

  <TextInput 
    placeholder = 'email or phone'
    style = {styles.input} 
  />

  <TextInput 
    placeholder = 'password'
    style = {styles.input}
  />
    <TouchableOpacity 
    style = {styles.loginButton}
    onPress = { () => navigation.navigate('Sobre')}
    >
      <Text style = {styles.loginText}>Log In</Text>
    </TouchableOpacity>

    <TouchableOpacity>
      <Text style = {styles.signUpText}>sign up for facebook</Text>
    </TouchableOpacity>

</View>

   
);
}

const styles = StyleSheet.create ({
container: {
  flex: 1,
  backgroundColor: '#385899',
  alignItems: 'center',
  justifyContent: 'center'
},
logo: {
  width: '80%',
  height: '20%',
  resizeMode: "contain",
  marginTop: 0,
  marginBottom: 40,
},
input: {
  width: '80%',
  height: '8%',
  backgroundColor: '#f4f3f3',
  marginBottom: 20,
  padding: 8,
  borderRadius: 5,
  borderWidth: 1,
  borderColor: '#e0e0e0'
},
loginButton: {
  width: '80%',
  marginTop: '0%',
  backgroundColor: '#304675',
  marginBottom: '2%',
  height: '10%',
  borderRadius: 5,
  alignItems: 'center',
  justifyContent: 'center'
},
loginText: {
  fontSize: 16,
  fontWeight: 'bold',    
  color: '#FFFF'
},
signUpText: {
  color: '#fffafa',
  marginTop: '20%'

}

});

