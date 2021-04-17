import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import Header from '../components/Header';

export default class FootballScreen extends React.Component {
  render(){
  return (
    <View style={styles.container}>
       <Header title="Sports App"></Header>
          <Text>Welcome to Cricket!</Text>
        <Image
          style={styles.logo}
          source={{uri: 'https://icons.iconarchive.com/icons/icons-land/metro-raster-sport/256/Soccer-Ball-icon.png'}} />
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 80,
    height: 80,
  }
});

