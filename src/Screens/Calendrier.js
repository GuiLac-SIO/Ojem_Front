import { Modal, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Bottom from '../Route/Bottom';
import { useState } from 'react';
import HeaderBar from '../Components/HeaderBar';
import { FontAwesome5 } from '@expo/vector-icons';
import { CalendarList, LocaleConfig } from 'react-native-calendars';
import { useEffect } from 'react';

const Calendrier = () => {
  const { navigate } = useNavigation()
  const [debut, setDebut] = useState(null);
  const [fin, setFin] = useState(null);
  const [jour, setJour] = useState(null);

  LocaleConfig.locales['fr'] = {
    monthNames: [
      'Janvier',
      'Février',
      'Mars',
      'Avril',
      'Mai',
      'Juin',
      'Juillet',
      'Août',
      'Septembre',
      'Octobre',
      'Novembre',
      'Décembre'
    ],
    monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
    dayNames: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
    dayNamesShort: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
    today: "Aujourd'hui",
  };
  LocaleConfig.defaultLocale = 'fr';
  const [markedDates, setMarkedDates] = useState({});


  const updateMarkedDates = () => {
    if (debut && fin) {
      let markedDatesObj = {};

      let startDate = new Date(debut);
      let endDate = new Date(fin);
      while (startDate <= endDate) {
        let dateKey = startDate.toISOString().split("T")[0];
        console.log(dateKey);
        if (dateKey == debut) {
          markedDatesObj[dateKey] = { startingDay:true, selected: true, selectedColor: "#F4C644" }
        }
        else if (dateKey == fin) {
          markedDatesObj[dateKey] = {endingDay: true, selected: true, selectedColor: "#F4C644" }
        }
        else {
          markedDatesObj[dateKey] = { selected: false, selectedColor: '#F4C644' }
        }
        startDate.setDate(startDate.getDate() + 1);
      }

      setMarkedDates(markedDatesObj);
    }
  };

  useEffect(() => {
    updateMarkedDates();
  }, [debut, fin]);


  return (
    <>
      <View style={styles.Fond}>

        <HeaderBar destination={'Accueil'} />
        <Text style={styles.Titre}>Pour quelle période ?</Text>

        <View style={styles.ridesFriends}>
          <View>
            <Text style={styles.text}>Début</Text>
            <Text >{debut} </Text>
          </View>

          <FontAwesome5 name="arrow-right" size={15} color="#F0B444" />
          <View>
            <Text style={styles.text}>Fin</Text>
            <Text >{fin}</Text>
          </View>
        </View>

        <View style={styles.verticleLine}></View>


        <CalendarList
          dayComponent={
            (e) => {
              if (markedDates[e.date.dateString] != undefined) {
                return (
                  <View
                    style={{
                      position: "relative",
                    }}
                  >                  
                  <TouchableOpacity
                    style={{
                      backgroundColor: markedDates[e.date.dateString].selected
                        ? '#F4C644'
                        : 'rgba(244, 198, 68, 0.3)',
                      height: 41,
                      width: 56,
                      alignItems: "center",
                      justifyContent: "center",
                      borderTopRightRadius: markedDates[e.date.dateString].endingDay
                        ? 56
                        : 0,
                      borderTopLeftRadius: markedDates[e.date.dateString].startingDay
                        ? 56
                        : 0,
                      borderBottomLeftRadius: markedDates[e.date.dateString]
                        .startingDay
                        ? 56
                        : 0,
                      borderBottomRightRadius: markedDates[e.date.dateString]
                        .endingDay
                        ? 56
                        : 0,
                    
                      overflow: "hidden",
                    }}
                    onPress={() => {
                      //onDayPress(e.date);
                    }}
                    onLongPress={() => {
                      // marked[e.date.dateString].startingDay ||
                      // marked[e.date.dateString].endingDay
                      //   ? setDisplayModificationDate({
                      //       id: e.date.timestamp,
                      //       state: true,
                      //     })
                      //   : null;
                    }}
                  >                    
                  <Text
                    style={{
                      textAlign: "center",
                      color: markedDates[e.date.dateString].selected
                        ? "white"
                        : 'black',
                      fontSize: 16,
                    }}

                  >
                        {e.date.day}
                      </Text>
                    </TouchableOpacity>
                  </View>)
              }
             else {
              return (
                <TouchableOpacity
                  style={{
                    height: 41,
                    width: 41,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  disabled={e.state === "disabled"}
                  onPress={() => {
                    // if (!debut) {
                    //   setDebut(day.dateString);
                    // } else if (!fin) {
                    //   setFin(day.dateString);
                    // } else {
                    //   setDebut(day.dateString);
                    //   setFin(null);
                    // }
                    if (!debut) {
                      setDebut(e.date.dateString);
                    } else if (!fin) {
                      setFin(e.date.dateString);
                    } else {
                      setDebut(e.date.dateString);
                      setFin(null);
                    }
                  }}
                >                  
                <Text
                    style={{
                      textAlign: "center",
                      color: e.state === "disabled" ? "#AAAAAA" : "black",
                      fontSize: 16,
                    }}
                  >                    {e.date.day}
                 </Text>                
                </TouchableOpacity>              
                  );
            }
            }}
          minDate={Date()}
          showScrollIndicator={true}
          firstDay={1}
          onDayPress={(day) => {
            if (!debut) {
              setDebut(day.dateString);
            } else if (!fin) {
              setFin(day.dateString);
            } else {
              setDebut(day.dateString);
              setFin(null);
            }
          }}
          markedDates={markedDates}
          theme={{
            textSectionTitleColor: "#131115",
            textDayHeaderFontWeight: "800",
            textMonthFontWeight: "900",
            monthTextColor: "#009FC8",
            textDayFontSize: 16,
            textMonthFontSize: 20,
            textDayHeaderFontSize: 16,
          }}
          style={{ height: 400 }}
        />





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
    bottom: 10,
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
    bottom: 40,
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