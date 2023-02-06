import { Modal, StyleSheet, Text, View,Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Bottom from '../Route/Bottom'; 
import { useState } from 'react';
import HeaderBar from '../Components/HeaderBar';
import { FontAwesome5 } from '@expo/vector-icons'; 
  import CalendarList from 'react-native-calendars/src/calendar-list/new';
 
const Activites = () => {
    const { navigate } = useNavigation()
    const navigation = useNavigation();
    const [checked, setChecked] = useState(false);
     
  return (
    <> 
   <View style={styles.Fond}>

   <HeaderBar destination={'Accueil'}/>

    <Text style={styles.Titre}>Quelle séance souhaitez vous pour votre enfant ?</Text>
   
 <FontAwesome5 name="arrow-right" size={40} color="#F0B444" style={styles.suivant} onPress={() => navigate('Periode')}/>
  
 
 <TouchableOpacity  >
 <View style={styles.GoProBox}>
            <ImageBackground source={ require('../Ressources/activite1.png')}  resizeMode='cover' style={styles.goProBgImage}>
            <View style={styles.overlayView}/>
            <Text style={styles.goProText}>Stage Ado</Text>
             
            </ImageBackground>
</View>
</TouchableOpacity>
<TouchableOpacity  >
<View style={styles.GoProBox}>
            <ImageBackground source={ require('../Ressources/activite2.png')}  resizeMode='cover' style={styles.goProBgImage}>
            <View style={styles.overlayView}/>
            <Text style={styles.goProText}>Cour de natation</Text>
             
            </ImageBackground>
</View>
</TouchableOpacity>
<TouchableOpacity  > 
<View style={styles.GoProBox}>
            <ImageBackground source={ require('../Ressources/piscine.png')}  resizeMode='cover' style={styles.goProBgImage}>
            <View style={styles.overlayView}/>
            <Text style={styles.goProText}>Séance 30 min piscine</Text>
             
            </ImageBackground>
</View>
</TouchableOpacity>
    </View>
    <Bottom />
    </>
  )
}

export default Activites

const styles = StyleSheet.create({
  
  GoProBox: {
    width: '90%',
    height: 160,
    margin: 5,
    backgroundColor: '#00cc00',
    borderRadius: 10,
    alignSelf: 'center',
    overflow: 'hidden',
     
},
goProBgImage: {
    width: '100%', height: '100%',


},

goProText: {
    textAlign: 'center',
    fontSize: 22,
    marginTop: 110,
    fontWeight: 'bold',
    padding: 10,
    color: 'white'

},
 
overlayView: {
    marginTop: 110,
    height: 80,
    width: "100%",
    position: 'absolute',
    backgroundColor: 'rgba(0, 160, 198, 0.8)',

},
 
  

 
  
    suivant:{
        position: 'absolute',
        bottom: 14,
        right:40,
 
    },
   
    
 

    position:{   marginLeft :56,
        marginTop : 53, },
   

    Fond: {
      
        flex: 1,
      },
      Titre: {
        marginTop:20,
        color: '#2D5F74',
        fontSize: 25,
        textAlign: 'center',
         
        marginLeft: 'auto',
        marginRight: 'auto',
        fontWeight: '900',
        marginBottom:20,

        
      },
})