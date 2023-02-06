import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Personne from '../Data/Data'
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Bottom from '../Route/Bottom';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import HeaderBar from '../Components/HeaderBar';


const Profil = () => {
    const firstPerson = Personne[0];
    const { navigate } = useNavigation() 

    async function takeAndUploadPhotoAsync() {
        // Display the camera to the user and wait for them to take a photo or to cancel
        // the action
        let result = await ImagePicker.launchCameraAsync({
          allowsEditing: true,
          aspect: [4, 3],
        });
      
        if (result.cancelled) {
          return;
        }
      
        // ImagePicker saves the taken photo to disk and returns a local URI to it
        let localUri = result.uri;
        let filename = localUri.split('/').pop();
      
        // Infer the type of the image
        let match = /\.(\w+)$/.exec(filename);
        let type = match ? `image/${match[1]}` : `image`;
      
        // Upload the image using the fetch and FormData APIs
        let formData = new FormData();
        // Assume "photo" is the name of the form field the server expects
        formData.append('photo', { uri: localUri, name: filename, type });
      
        return await fetch(YOUR_SERVER_URL, {
          method: 'POST',
          body: formData,
          headers: {
            'content-type': 'multipart/form-data',
          },
        });
      }

    return (
        <>  
        <View style={styles.Fond}>
           
        <HeaderBar destination={'Accueil'}/>

            <Text style={styles.Titre}>PROFIL</Text>
            <Image
                source={require('../Ressources/waveJaune.png')}
                style={styles.Wave}
            />
            <View style={styles.ridesFriends}>
                
                <Image
                    source={{ uri: firstPerson.Photo }}
                    style={styles.img}
                />
                <MaterialIcons style={styles.camera} name="photo-camera" size={30} color="#00A0C6" onPress={() => takeAndUploadPhotoAsync()} />
                <View style={styles.verticleLine}></View>
                <View>
                    <Text style={styles.membre}>Membre depuis</Text>
                    <Text style={styles.inscription}>{firstPerson.Inscription}</Text>
                </View>
            </View>

            <Text style={styles.prenomId}>{firstPerson.Prenom}</Text>


            <Text style={styles.nomId}>{firstPerson.Nom}</Text>

            <View style={styles.item}>
                <Text style={styles.nom}>Nom</Text>
                <AntDesign name="rightsquare" size={24} color="grey" style={{ marginTop: 33, marginLeft: 286, }} />
            </View>

            <View style={styles.item}>
                <Text style={styles.text}>Prénom</Text>
                <AntDesign style={styles.icone} name="rightsquare" size={24} color="grey" />
            </View>

            <View style={styles.item}>
                <Text style={styles.text}>Sexe</Text>
                <AntDesign style={styles.icone3} name="rightsquare" size={24} color="grey" />
            </View>

            <View style={styles.item}>
                <Text style={styles.text}>Naissance</Text>
                <AntDesign style={styles.icone2} name="rightsquare" size={24} color="grey" />
            </View>

            <View style={styles.item}>
                <Text style={styles.text}>Mail</Text>
                <AntDesign style={styles.icone1} name="rightsquare" size={24} color="grey" />
            </View>

            <View style={styles.item}  >
                <Text style={styles.text} onPress={() => navigate('Enfant')}>Enfants</Text>
                <AntDesign style={styles.icone} name="rightsquare" size={24} color="grey" onPress={() => navigate('Enfant')} />
            </View>

            <TouchableOpacity style={styles.Bouton} onPress={() => navigate('Home')}>
                <View style={styles.BoutonCommencer}>
                    <MaterialCommunityIcons name="location-exit" size={28} color="red" style={{ marginRight: 30, marginTop: 'auto', marginBottom: 'auto' }} />
                    <Text style={styles.textbtn}> Se connecter</Text>
                </View>
            </TouchableOpacity>
        </View>
        <Bottom/> 
        </>
    )
}

export default Profil


const styles = StyleSheet.create({

    camera:{
        backgroundColor:'white',
        borderRadius:145,
        bottom: 22,
        right: 52,
    },

    exit:{
         marginLeft: 250,
    },
    icone: {
          marginLeft : 265,   
    },

    icone1: {
        marginLeft : 288,   
  },

  icone2: {
    marginLeft : 246,   
},
icone3: {
    marginLeft : 285,   
},
    item: {
        flexDirection: 'row',
        marginTop: 20,
    },

    ridesFriends: {
        paddingTop: 50,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        marginBottom: 20,
    },

    membre: {
        color: 'grey',
        fontSize: 15,
    },

    inscription: {
        color: '#2D5F74',
        fontSize: 20,
        position: 'relative',
        fontWeight: '800'

    },

    verticleLine: {
        height: '100%',
        width: 1,
        backgroundColor: '#909090',
    },

    textbtn: {
        color: '#2D5F74',
        fontSize: 16,
        fontWeight: '900',
        marginTop: 'auto',
        marginBottom: 'auto'
    },

    BoutonCommencer: {
        width: 210,
        lineHeight: 54,
        height: 54,
        flexDirection: 'row',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#F6F7F9',
        backgroundColor: '#F6F7F9',
        position: 'absolute'

    },
    Bouton: {
        marginTop: 46,
        alignItems: 'center',
        justifyContent: 'center'
    },

    img: {
        width: 89,
        height: 89,
        borderRadius: 135,
        backgroundColor: 'black',
    },

    prenomId: {
        color: '#00A0C6',
        fontSize: 23,
        marginTop: 10,
        marginLeft: 35,
        fontWeight: '700'
    },

    nomId: {
        color: '#2D5F74',
        fontSize: 33,
        marginLeft: 35,
        fontWeight: '900'
    },

    nom: {
        color: '#2D5F74',
        fontSize: 15,
        marginTop: 33,
        marginLeft: 35,
        fontWeight: '500'
    },

    text: {
        color: '#2D5F74',
        fontSize: 15,

        marginLeft: 35,
        fontWeight: '500'
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
    Fond: {
        backgroundColor: 'white',
        flex: 1,
    },

})