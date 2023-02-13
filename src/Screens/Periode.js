import { Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Bottom from '../Route/Bottom'; 
import { useState } from 'react';
import HeaderBar from '../Components/HeaderBar';
import { FontAwesome5 } from '@expo/vector-icons';  
import CheckBox from '../Components/CheckBox';

 
const Periode = () => {
    const { navigate } = useNavigation() 
    const [checked, setChecked] = useState(false);
     
  return (
    <> 
   <View style={styles.Fond}>

   <HeaderBar destination={'Accueil'}/>

    <Text style={styles.Titre}>Pour combien de jours ?</Text>

    <View style={styles.checkbox} >
          <CheckBox Taille={30} />
          <View>
          <Text style={styles.text1}>1 semaine</Text>
          <Text style={styles.text2}>Recommandé aux clubs</Text>
          </View>
    </View>

    <View style={styles.checkbox} >
          <CheckBox Taille={30} />
          <View>
          <Text style={styles.text1}>Autre</Text> 
          </View>
    </View>


   
 <FontAwesome5 name="arrow-right" size={40} color="#F0B444" style={styles.suivant} onPress={() => navigate('Paiement')}/>
 

    </View>
    <Bottom />
    </>
  )
}

export default Periode

const styles = StyleSheet.create({
    suivant:{
        position: 'absolute',bottom: 40,
        right:40,
 
    },
   text2:{
        marginTop :5,
        color : 'grey',
        fontWeight : '400',
        fontSize : 10,
        marginLeft :26,
        marginTop:'auto',
        marginBottom:'auto',
    },
    text1:{
         
        color : '#2D5F74',
        fontWeight : '400',
        fontSize : 16,
        marginLeft :26,
        marginTop:'auto',
        marginBottom:'auto',
    },
    

  

    checkbox:{
        marginLeft:50,
        marginTop:50,
        flexDirection: 'row',
    },

    

    Fond: {
        backgroundColor: 'white',
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
        
      },
})