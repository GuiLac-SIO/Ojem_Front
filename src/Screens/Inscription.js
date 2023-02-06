import { StyleSheet, Text, View, Image, TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Inscription = () => {
    const [Login, onChangeLogin] = React.useState('');
    const [Mdp, onChangeMdp] = React.useState('');
    const [MdpConf, onChangeMdpConf] = React.useState('');
    const { navigate } = useNavigation()

    return (
        <View style={styles.Fond}>
            <Text style={styles.Titre}>INSCRIPTION</Text>
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
              <Text style={styles.Login}>*Confirmez le mot de passe</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeMdpConf}
                value={MdpConf}
            />
              <TouchableOpacity style={styles.Bouton} onPress={() => navigate('Accueil')}>
                <Text style={styles.BoutonCommencer} >S'inscrire</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Inscription

const styles = StyleSheet.create({
    suivant:{
        position: 'absolute',
        bottom: 54,
        right:40,


    },
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
        marginTop: 252, 
    },
    Bouton: {

        alignItems: 'center',
        justifyContent: 'center'
    },
})