import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import { alertAsync } from 'react-native-alert-async';
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import { useApp, } from '../Provider/app.provider.js';

const Connexion = () => {
    const {  setToken, getUser, token} = useApp();
    
    const [Login, onChangeLogin] = React.useState('');
    const [Mdp, onChangeMdp] = React.useState(''); 
    const { navigate } = useNavigation()
    async function showErrorMessage() {
        const result = await alertAsync({
            title: 'Erreur',
            message: 'Email ou mot de passe incorrect',
            buttons: [
                { text: 'OK', onPress: () => { } },
            ],
        });
    }
    const handleLogin = async () => {

        try {
            const response = await axios.post('http://192.168.1.71:3001/user/login', {

                email: Login,
                password: Mdp
            }); 
            if (response) {    
                setToken(response.data.token) 
                console.log('TOOOOKEN', token);
                const config = {
                    headers: { Authorization: `Bearer ${token}` }
                }; 
                await axios.get( 
                  'http://192.168.1.71:3001/user/getUser', 
                  config
                );
                 
                navigate('Accueil');
            }
 
        } catch (error) {
            console.error("----", error);
        }
    };

   
    return (
        <View style={styles.Fond}>
            <Text style={styles.Titre}>CONNEXION</Text>
            <Image
                source={require('../Ressources/waveJaune.png')}
                style={styles.Wave}
            />
            <Text style={styles.Login}>*Email</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeLogin}
                value={Login}
            />
            <Text style={styles.Login}>*Mot de passe</Text>

            <TextInput
                style={styles.input}
                onChangeText={onChangeMdp}
                value={Mdp}
            />

        <View style={{flex:1, marginTop:'70%'}}>
            <TouchableOpacity style={styles.Bouton} onPress={handleLogin }>
                <Text style={styles.BoutonCommencer} >Se connecter</Text>
            </TouchableOpacity>
        </View>
        </View>
    )
}

 
export default Connexion

const styles = StyleSheet.create({
    input: {
        color: 'grey',
        borderColor: '#2D5F74',
        height: 54,
        width: 358,
        borderRadius: 17,
        margin: 12,
        borderWidth: 1,
        padding: 18,
        marginTop: 4,
        fontSize: 15,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 13,
    },

    Fond: {
        backgroundColor: 'white',
        flex: 1,
    },

    Titre: {
        color: '#00A0C6',
        fontSize: 30,
        textAlign: 'center',
        marginTop: 98,
        marginLeft: 'auto',
        marginRight: 'auto',
        fontWeight: '900'
    },
    Wave: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 50.25,

    },

    Login: {
        color: '#2D5F74',
        marginLeft: 36,
        fontSize: 15,
        fontWeight: '600'

    },

    BoutonCommencer: {
        color: 'white',
        fontSize: 16,    
        lineHeight: 54,
        
    },
    Bouton: {

        alignItems: 'center',
        justifyContent: 'center',
     
        height: 'auto',
        width: '70%',
        marginLeft:'auto', 
        marginRight:'auto',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#2D5F74',
        backgroundColor: '#2D5F74',
        textAlign: 'center',
       
    },
})