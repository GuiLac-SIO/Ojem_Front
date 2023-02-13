import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Bottom from '../Route/Bottom';
import { useNavigation } from '@react-navigation/native';
import HeaderBar from '../Components/HeaderBar';
import CheckBox from '../Components/CheckBox';
import axios from "axios";


const AddEnfant = () => {
  const [Nom, onChangeNom] = React.useState('');
  const [Prenom, onChangePrenom] = React.useState('');
  const [Naissance, onChangeNaissance] = React.useState('');
  const [Sexe, onChangeSexe] = React.useState('');
  const { navigate } = useNavigation()
  const navigation = useNavigation();


  const handleInscription = async () => {

    try {
       if(Nom && Prenom && Naissance && Sexe){
        const response = await axios.post('http://192.168.1.71:3001/user/inscriptionEnfant', {

        nom: Nom,
        prenom: Prenom,
        sexe: Naissance,
        datenaissance: Sexe,
        removed: 'Non'
        
        });
        console.log(response);
        if (response) {
            console.log('1');  
            navigate('Accueil');
        }
      }
    } catch (error) {
        console.error("----", error);
    }
     
};
  return (
    <>
      <View style={styles.Fond}>
        <HeaderBar destination={'Accueil'} />
        <Text style={styles.Titre}>Renseignez les informations de votre enfant :</Text>

        <Text style={styles.Login}>Nom :</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNom}
                value={Nom}
        />
        <Text style={styles.Login}>Prénom :</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangePrenom}
                value={Prenom}
        />
        <Text style={styles.Login}>Naissance :</Text>
        <TextInput
         style={styles.input}
         onChangeText={onChangeNaissance}
               value={Naissance}
        />
        <Text style={styles.Login}>Sexe :</Text>
        <View style={styles.checkbox} >
          <CheckBox Taille={20} onPress={()=>onChangeSexe('Femme')}/>
          <Text style={styles.text}>Féminin</Text>
          <CheckBox Taille={20} onPress={()=>onChangeSexe('Homme')} />
          <Text style={styles.text}>Masculin</Text>
          <CheckBox Taille={20} onPress={()=>onChangeSexe('Non mentionné')}/>
          <Text style={styles.text}>Ne souhaite pas mentionner</Text>
        </View>
        <TouchableOpacity style={styles.Bouton} onPress={() => handleInscription()}>
                <Text style={styles.BoutonCommencer} >Valider</Text>
            </TouchableOpacity>
      </View>
      <Bottom />
    </>
  )
}

export default AddEnfant

const styles = StyleSheet.create({

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
    marginTop: 52, 
},
Bouton: {

    alignItems: 'center',
    justifyContent: 'center'
},

  checkbox: {
    paddingTop: 20,
    alignItems: 'center',
    flexDirection: 'row', 
    marginLeft:20,
    width: '100%',
    marginBottom: 20,
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
    marginLeft: 20,
    marginRight: 20,
    fontWeight: '900',
    marginBottom: 50

  },
  Login: {
    color: '#2D5F74',
    marginLeft: 36,
    fontSize: 15,
    fontWeight: '600'

  },
  input: {
    color: 'grey',
    
    backgroundColor: '#F7F7F9',
    height: 47,
    width: 358,
    borderRadius: 17, 
    paddingLeft: 20,
    marginTop: 4,
    fontSize: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 13,
  },

  text:{
    marginLeft:5,
    color :'#2D5F74',
    fontSize : 11,
    marginRight: 25
  },

})