import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import MapView from 'react-native-maps';

export default function App() {
  const [location, setLocation] = useState({
    latitude: 49.2919339,
    longitude: -123.1378654,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  });

  function changeLocation(lat, long) {
    setLocation({
      ...location,
      latitude: lat,
      longitude: long
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>City Switcher</Text>
      <Text style={styles.text2}>Click to change to the available cities</Text>

      <View style={styles.button}>
        <Button
        title='New York'
        color='tomato'
        onPress={() => changeLocation(40.6976701, -74.2598758)}
        />

        <Button
        title='Tokyo'
        color='tomato'
        onPress={() => changeLocation(35.6684415, 139.6007804)}
        />

        <Button
        title='Vancouver'
        color='tomato'
        onPress={() => changeLocation(49.2919339, -123.1378654)}
        />
      </View>

      <Text style={styles.location}>{location.latitude} | {location.longitude}</Text>
      <MapView
        region={location}
        style={styles.map}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7159ca'
  },
  text: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold'
  },
  text2: {
    color: '#fff',
    fontSize: 18,
    fontStyle: "italic",
    marginBottom: 8
  },
  map: {
    flex: 1,
    width: 400,
  },
  button: {
    marginBottom: 8,
    flexDirection: 'row',
    width: 75,
    justifyContent: 'space-evenly',
    width: '100%'
  },
  location: {
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#fff',
    marginBottom: 16
  }
});