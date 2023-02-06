import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import { useNavigation } from '@react-navigation/native';
import React from 'react'



const Home = () => {


    const { navigate } = useNavigation()

    return (
        <View style={styles.Fond}>
            <Image
                source={require('../Ressources/ojem.png')}
                style={styles.logo}
            />
            <Image
                source={require('../Ressources/accueil.png')}
                style={styles.img}
            />
            <Text style={styles.Titre}>DES EXPÉRIENCES PLEINES DE MAGIE !</Text>
            <Image
                source={require('../Ressources/wave.png')}
                style={styles.Wave}
            />

            <Text style={styles.Texte}>Nos 3 clubs accueillants les enfants de 2 ans ½ à 16 ans seront ouverts cette année pour continuer à partager l’esprit OJEM avec vous et pour vous.</Text>

            <TouchableOpacity style={styles.Bouton} onPress={() => navigate('Inscription')}>
                <Text style={styles.BoutonCommencer}  >Commencer</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Bouton} onPress={() => navigate('Connexion')}>
                <Text style={styles.BoutonConnecter}>Se connecter</Text>
            </TouchableOpacity>
        </View>
    )
};

export default Home

const styles = StyleSheet.create({


    fontFamily: Montserrat_400Regular,

    BoutonCommencer: {
        width: 271,
        lineHeight: 54,
        height: 'auto',
        color: 'white',
        fontSize: 16,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#2D5F74',
        backgroundColor: '#2D5F74',
        textAlign: 'center',
        display: 'flex',
        marginVertical: 37,
        marginBottom: 15,


    },

    img: {
        width: 270,
        height: 270,
        borderRadius: 135,
        backgroundColor: 'black', 
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 35, 
        
    }, 
    Wave: {
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    Bouton: {

        alignItems: 'center',
        justifyContent: 'center'
    },

    BoutonConnecter: {
        width: 271,
        lineHeight: 54,
        height: 'auto',
        color: 'white',
        fontSize: 16,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'white',
        textAlign: 'center',
        display: 'flex',
 
    },

    Fond: {
        backgroundColor: '#00B2DD',
        flex: 1,
    },

    Titre: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        width: 320,
        marginLeft: 'auto',
        marginRight: 'auto',
        fontWeight: '900'
    },

    Texte: {
        color: 'white',
        fontSize: 15,
        width: 303,
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    logo: {
        width: 169,
        height: 61,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 35,
        marginTop: 61,

    },

})