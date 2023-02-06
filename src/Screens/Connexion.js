import { StyleSheet, Text, View, Image, TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Connexion = () => {
    const [Login, onChangeLogin] = React.useState('exemple@exemple.com');
    const [Mdp, onChangeMdp] = React.useState('**** **** ****');
    const { navigate } = useNavigation()

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
            <TouchableOpacity style={styles.Bouton} onPress={() => navigate('Accueil')}>
                <Text style={styles.BoutonCommencer} >Se connecter</Text>
            </TouchableOpacity>
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