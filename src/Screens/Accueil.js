import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Bottom from '../Route/Bottom';
import Personne from '../Data/Data'
import { Ionicons } from '@expo/vector-icons';
import HeaderBar from '../Components/HeaderBar';
import { useNavigation } from '@react-navigation/native';

const Accueil = () => {
  const firstPerson = Personne[0];
  const { navigate } = useNavigation()
  return (
    <> 
      <View style={styles.container}>
        <View style ={styles.rowContainer}>
        <Image
                    source={{ uri: firstPerson.Photo }}
                    style={styles.imgProfil}
                />
                <Text style={styles.nom}>Bonjour {firstPerson.Prenom}</Text>
          <Ionicons style={{marginLeft: 150, marginTop: 26}} name="notifications" size={30} color="black" onPress={() => navigate('MesNotifs')}/>
                
        </View>
        <Text style={styles.Titre}>Réservez maintenant</Text>
        <View style={styles.rowContainer}>
          <View style={styles.item}>
            <Image
              source={require('../Ressources/stage.png')}
              style={styles.img}
            />
            <Text style={styles.textItem}>Stage Ado</Text>
          </View>
          <View style={styles.item}>
            <Image
              source={require('../Ressources/stage.png')}
              style={styles.img}
            />
            <Text style={styles.textItem}>Réservations en cours</Text>
          </View>
        </View>
        <Text style={styles.reservation}>Réservations à venir :</Text>
      </View>
      <Bottom/> 
    </>
  )
}

export default Accueil

const styles = StyleSheet.create({

  nom: {
    color: '#2D5F74',
    fontSize: 15,
    marginTop: 33,
    marginLeft: 15,
    fontWeight: '500'
},

  imgProfil: {
    marginTop : 20,
    marginLeft: 20,
    width: 46,
    height: 46,
    borderRadius: 135,
    backgroundColor: 'black',
},

  container: {
    backgroundColor : 'white',
    flex: 1, 
  }, 
  reservation: {
    color: '#2D5F74',
    fontSize: 20,
    marginLeft: 37,
    marginBottom: 36,
    fontWeight: '700'
  },

  Titre: {
    color: '#2D5F74',
    fontSize: 42,
    textAlign: 'center',
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 36,
    fontWeight: '900'
  },
  img: {
    width: 173,
    height: 201,
    borderRadius: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    
  },

  rowContainer: {
    flexDirection: 'row'
  },

  item: {
    backgroundColor: 'white',
    height: 260,
    width: 173,
    borderRadius: 20,
    marginRight: 'auto', 
    marginLeft: 'auto',
    marginBottom: 25,
    display: "flex",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
   
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,

  },


  textItem: {
    color: '#19A0C6',
    fontSize: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    fontWeight: '700',
    marginTop: 'auto',
    marginBottom: 'auto',
  }

})