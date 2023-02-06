import { Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Bottom from '../Route/Bottom';
import { useState } from 'react';
import HeaderBar from '../Components/HeaderBar';
import { FontAwesome5 } from '@expo/vector-icons';
import CalendarList from 'react-native-calendars/src/calendar-list/new';

const Calendrier = () => {
  const { navigate } = useNavigation()
  const navigation = useNavigation();
  const [checked, setChecked] = useState(false);

  return (
    <>
      <View style={styles.Fond}>

        <HeaderBar destination={'Accueil'} />

        <Text style={styles.Titre}>Pour quelle période ?</Text>

        <View style={styles.ridesFriends}>
           <View>
          <Text style={styles.text}>Début</Text>
          <Text >** ***** ****</Text>
          </View> 
          
          <FontAwesome5 name="arrow-right" size={15} color="#F0B444"  />
          <View>
          <Text style={styles.text}>Fin</Text>
          <Text >** ***** ****</Text>
          </View>
        </View>

        <View style={styles.verticleLine}></View>





        <FontAwesome5 name="arrow-right" size={40} color="#F0B444" style={styles.suivant} onPress={() => navigate('Activites')} />

      </View>
      <Bottom />
    </>
  )
}

export default Calendrier

const styles = StyleSheet.create({

  text: {
    marginTop: 18, 
    fontSize: 25, 
    bottom:10,
    fontWeight: '900',

  },

  ridesFriends: {
    paddingTop: 50,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom: 20,
  },

  verticleLine: {
    height: 1,
    width: '100%',
    backgroundColor: 'grey',
  },

  suivant: {
    position: 'absolute',
    bottom: 54,
    right: 40,

  },
  add: {

  },

  text1: {
    flex: 1,
    color: '#00A0C6',
    fontWeight: '400',
    fontSize: 16,
    marginLeft: 26,
  },

  text2: {
    flex: 1,
    color: '#2D5F74',
    fontWeight: '400',
    fontSize: 16,
    marginLeft: 26,

  },

  checkbox: {
    paddingTop: 20,
    flexDirection: 'row',
  },

  position: {
    marginLeft: 56,
    marginTop: 53,
  },


  Fond: {
    backgroundColor: 'white',
    flex: 1,
  },
  Titre: {
    marginTop: 20,
    color: '#2D5F74',
    fontSize: 25,
    textAlign: 'center',

    marginLeft: 'auto',
    marginRight: 'auto',
    fontWeight: '900',

  },
})