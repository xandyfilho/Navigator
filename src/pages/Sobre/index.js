import React from 'react';
import { 
  View,
  Image,
  TextInput, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  StatusBar, 
  SafeAreaView, 
  ImageBackground,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Sobre() {
  const navigation = useNavigation();
 return (
  <View style={styles.container}>
    <StatusBar hidden/>
    <ImageBackground
      source={require('Navigator/public/Assets/fundo.png')} 
      style={styles.fundo}
    >
      <TouchableOpacity 
      style={styles.icon1}
      onPress = { () => navigation.navigate('Perfil')}
      >
         <Icon
          style={styles.icon1}
          name = "questioncircleo"
          size={20} 
          color='white'
          />
      </TouchableOpacity>    
        
        <Icon
          style={styles.icon2} 
          name = "lock" 
          size={23} 
          color='white'
       />

      <TouchableOpacity 
      style={styles.icon3}
      onPress = { () => navigation.navigate('Perfil')}
      > 
        <Icon
          style={styles.icon3} 
          name = "book" 
          size={20} 
          color='white'
       />
      </TouchableOpacity> 
      
 <View style={styles.containerAll}>
  <View style={styles.topContainer}>
          <Text style={styles.topText}>Enter the code sent to your number ending in 8691 or use your Backup Codes.</Text>    
          <Text style={styles.botText}>It many take few moments to receive SMS. </Text>
  </View>   

      <TextInput 
        placeholder = 'Enter Two-Factor code'
        style = {styles.input} 
      />

      <View style = {styles.forgotContainer}>
        <TouchableOpacity>
          <Text style = {styles.forgotText}>What is it?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        style = {styles.loginButton}
        onPress = { () => navigation.navigate('Perfil')}
      >
        <Text style = {styles.loginText}>Login with Instagram</Text>
      </TouchableOpacity>

      <View style = {styles.backContainer}>
        <TouchableOpacity>
          <Text style = {styles.backText}>Back to Login</Text>
        </TouchableOpacity>
      </View>

      <View style= {styles.orContainer}>
        <Text style={styles.orText}>or</Text>
      </View>

      <TouchableOpacity 
        style = {styles.repostButton}
        onPress = { () => navigation.navigate('Home')}
      >
        <Text style = {styles.repostText}>Repost without login</Text>
      </TouchableOpacity>

    </View>

  </ImageBackground>

  </View>  

);
}

const styles = StyleSheet.create ({
container: {
  flex: 1,
},
fundo: {
  flex:1,
  width:'100%',
  flexDirection: 'column',
  alignItems: 'center'
},
containerAll: {
  flex:1,
  width: '100%',
  justifyContent:'flex-start',
  alignItems: 'center',
  marginTop: '25%'
},
icon1: {
  position: 'absolute',
  right: '15%',
  top: '2%'
},
icon2: {
  position: 'absolute',
  top: '8%',
  alignItems: 'center'
},
icon3: {
  position: 'absolute',
  top: '2%',
  right: '5%'
},
topContainer: {
  width:'75%',
  justifyContent: 'center',
  alignItems: 'center',
  
},
topText: {
  fontSize: 13,
  color: 'white',
  textAlign: 'center'
},
botText: {
  marginTop: '5%',
  fontSize: 13,
  color: 'white',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 10
},
input: {
  width: '85%',
  height: '8%',
  backgroundColor: '#0000',
  marginBottom: 2,
  padding: 8,
  borderRadius: 15,
  borderWidth: 1,
  borderColor: '#ffff',
  fontSize: 17,
  fontWeight: 'bold',    
  color: '#ffff'
},
forgotContainer: {
  width: '90%',
  alignItems: 'flex-end',
  marginBottom: '3%',
  marginRight: '7%'

},
forgotText: {
  color:'white'
},
loginButton: {
  width: '85%',
  marginTop: '0%',
  backgroundColor: '#FFF',
  marginBottom: '2%',
  height: '7%',
  borderRadius: 2,
  alignItems: 'center',
  justifyContent: 'center'
},
loginText: {
  fontSize: 14,
  fontWeight: 'bold',    
  color: '#9a9a9a'
},
backContainer: {
  marginBottom:3
},
backText: {
  color: 'white'
},
orContainer: {
  backgroundColor: '#c34a0e',
  borderRadius: 10,
  width: '6%',
  height: '4%',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '3%'
},
orText: {
  fontSize: 14,
  color: 'white'
},
repostButton: {
  width: '85%',
  backgroundColor: '#c34a0e',
  marginBottom: '2%',
  height: '7%',
  borderRadius: 2,
  alignItems: 'center',
  justifyContent: 'center'
},
repostText: {
  fontSize: 14,
  fontWeight: 'bold',    
  color: '#ffff'
},
signUpText: {
  color: '#fffafa',
  marginTop: '30%'
}

});

