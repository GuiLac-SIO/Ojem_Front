import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'; 
import Bottom from '../Route/Bottom';
import { Ionicons } from '@expo/vector-icons';
import HeaderBar from '../Components/HeaderBar';
import ReservationItem from '../Components/ReservationItem';

const Reservation = () => {
 
    const { navigate } = useNavigation()
    const navigation = useNavigation();
  return (
    <>  
    <View style={styles.Fond}>
    <HeaderBar destination={'Accueil'}/>
      <Text style={styles.Titre}>RÉSERVATION</Text>
      <Image
                source={require('../Ressources/waveJaune.png')}
                style={styles.Wave}
            />
        <ReservationItem/>
        <Ionicons style={styles.add} name="add-circle-outline" size={40} color="grey" onPress={() => navigate('AddReservation')} />
    </View>   
    <Bottom/> 
        </>
  )
}

export default Reservation

const styles = StyleSheet.create({
    add:{
        marginTop:60,
        marginRight:'auto',
        marginLeft:'auto'
    },
   

    margin:{
        marginLeft:10,

    },
  

    Fond: {
        backgroundColor: 'white',
        flex: 1,
    },
    Titre: {
        color: '#00A0C6',
        fontSize: 30,
        textAlign: 'center',
        marginTop: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
        fontWeight: '900'
    },
    Wave: {
        marginLeft: 'auto',
        marginRight: 'auto',

    },
    
     
})