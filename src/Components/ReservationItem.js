import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native' 
import React from 'react'
import Stage from '../Data/Stage';
import { useNavigation } from '@react-navigation/native'; 
import { Entypo } from '@expo/vector-icons';
import { useApp } from '../Provider/app.provider';

const ReservationItem = () => {
    const { User} = useApp()
    const firstStage = Stage[0]
    const { navigate } = useNavigation()
    const navigation = useNavigation();
  return (
    <View>
      <View style={styles.ridesFriends}>
        <Image source={{ uri: firstStage.Image }} style={styles.img}  />
                <View>
                <Text style={styles.nom}>{[User.use_nom, User.use_prenom]}</Text>
                <Text style={styles.activite}>Activité : {firstStage.Activite}</Text>
                <View style={{flexDirection: 'row',}}>
                <Entypo name="location-pin" size={16} color="#2D5F74" />
                <Text style={styles.lieu}>{firstStage.Lieu}</Text>
                </View>
                <Text style={styles.activite}>Date : {firstStage.Date}</Text>
                <Text style={styles.inscription}>{firstStage.Inscription}</Text>
                </View> 
                <TouchableOpacity style={styles.Bouton} onPress={() => navigate('DetailReserv')}>
                <View style={styles.BoutonCommencer}>
                    <Text style={styles.textbtn}> Voir</Text>
                </View>
            </TouchableOpacity>
        </View>    
        <View style={styles.verticleLine}></View>
    </View>
  )
}

export default ReservationItem

const styles = StyleSheet.create({

   
    textbtn: {
        color: 'white',
        fontSize: 12,
        fontWeight: '900',
        marginTop: 'auto',
        marginLeft:'auto',
        marginRight:'auto',
        marginBottom: 'auto'
    },

    BoutonCommencer: {
        
        width: 50,
        lineHeight: 54,
        height: 35,
        flexDirection: 'row',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#2D5F74',
        backgroundColor: '#2D5F74',
        position: 'absolute'

    },
    Bouton: {
        marginLeft:15,
        marginTop: 46,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight : 15,
    },

    verticleLine: {
        height: 1 ,
        width: '100%',
        backgroundColor: 'grey',
    },

    

    nom:{
        
        fontSize :17,
        fontWeight : '600',
    },

    activite:{
        fontSize :13,
        fontWeight : '600',
    },

    lieu:{
        color : '#19A0C6',
        fontSize :13,
        fontWeight : '600',
    },


    ridesFriends: {
        paddingTop: 50,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        marginBottom: 20,
    },

    img: {        
        width: 123,
        height: 110,
        borderRadius: 20,
      },

 
   
    
})