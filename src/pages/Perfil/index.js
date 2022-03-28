import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';


export default function Perfil(){
    const navigation = useNavigation();
      return(
        <SafeAreaView style= {{flex:1}}>

            <View style={styles.container}>

                <View style={styles.header}>

                    <TouchableOpacity 
                    style={styles.icon0}
                    onPress = { () => navigation.navigate('Home')}
                    >
                        <Icon
                        name = "arrowleft"
                        size={20} 
                        color='white'
                        />
                    </TouchableOpacity>

                    <Icon
                        style={styles.icon1}
                        name = "search1"
                        size={15} 
                        color='white'
                        />     

                    <TextInput 
                        placeholder = ''
                        style = {styles.input}
                    />
                </View>
                
                            
                <View style={styles.capa}>
                </View>

                <View style={styles.nomeContainer}>
                    <Text style={styles.nomeText}>Your Name</Text>
                </View>

                <View style={styles.chatContainer}>
                    <Icon 
                        name="message1"
                        size={20}
                    />
                    <Icon 
                        name="ellipsis1"
                        size={20}
                    />
                        
                </View>

                <View style={styles.bioContainer}>
                    <Text>Your basic info 1</Text>
                    <Text>Your basic info 2</Text>
                </View>

                <View style={styles.tabContainer}>
                    <Text>ABOUT</Text>
                    <Text>PHOTOS</Text>
                    <Text>FRIENDS</Text>
                </View>
                
                <View style={styles.box1}></View>         
            
            </View>
        </SafeAreaView>
            
    );
}

const styles = StyleSheet.create({
container: {
    flex:1 
},
header:{
    flex:1,
    backgroundColor: '#385899',
    flexDirection: 'row',
    justifyContent: 'center',
},
icon0:{
    marginTop: 20,
    marginLeft: 15
},
icon1: {
    marginTop: 23,
    marginLeft:25, 
          
},
input: {
    flex:5,
    borderBottomWidth: 1,
    borderColor:'#b1b9cd',       
    margin: '3%',
    marginLeft: '15%',
    padding: 8,
},
box1: {
    width: '37%',
    height: '22.5%',
    backgroundColor: '#c2d0eb',
    position: 'absolute',
    marginTop: 255,
    alignSelf: 'center',
    borderColor: '#ffff',
    borderWidth: 4, 
},
capa: {
    flex:4,
    backgroundColor:'#b1b9cd'
},
nomeContainer: {
    flex:3,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: '3%'

},
nomeText: {
    fontSize: 30,
    color:'#a0a3a2',
    fontWeight: 'bold',
    
},
chatContainer: {
    flex:1,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginBottom: 12,
    borderColor:'#b1b9cd',
},
bioContainer: {
    flex:1,
    marginLeft: '15%'
},
tabContainer: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#e2e2f1',
    padding:'3%'
}



})