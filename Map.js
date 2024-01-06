//Map.js
import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Menu from './Menu';


export default function Map() {
  const navigation = useNavigation()

  const [isMenuVisible, setMenuVisibility] = useState(false);
  const toggleMenu = () => {
    setMenuVisibility(!isMenuVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Menu isVisible={isMenuVisible} onClose={toggleMenu} />
      <TouchableOpacity style={styles.secondaryButton} onPress={toggleMenu}>
        <Text style={styles.buttonText}>Find Resources</Text>
      </TouchableOpacity>
      <View
        style={{
          borderRadius: 20,
          overflow: "hidden",
          height: '100%',
          width: '100%',
          flex: 1,
          backgroundColor: '#ffaaaa'
        }}
      > 
        <MapView 
          provider={PROVIDER_GOOGLE} // If you want to use Google Maps
          style={styles.map}
          mapType="standard" // Do not use satellite view
          region={{
            latitude: 42.9634,  // Latitude for Grand Rapids
            longitude: -85.6681, // Longitude for Grand Rapids
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>

      <TouchableOpacity style={styles.primaryButton} >
        <Text style={styles.buttonText}>Call Navigator</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  map: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  primaryButton: {
    alignItems: 'center',
    backgroundColor: '#A33636',
    borderRadius: 50,
    width: '80%',
    padding: 18,
    marginVertical: 20,
    position: 'absolute',
    bottom: 10,
    shadowColor: '#A59D95',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.2,
    shadowRadius: 24,
    elevation: 7,
    zIndex: 11,
  },
  secondaryButton: {
    alignItems: 'center',
    backgroundColor: '#222',
    borderRadius: 50,
    width: '85%',
    padding: 18,
    marginVertical: 20,
    position: 'absolute',
    top: 10,
    shadowColor: '#A59D95',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.2,
    shadowRadius: 24,
    elevation: 7,
    zIndex: 11,
  },
  buttonText: {
    fontWeight: '700',
    fontSize: 20,
    color: '#fff',
  },
});