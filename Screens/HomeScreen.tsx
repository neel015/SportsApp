import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '../components/Header';

export default class HomeScreen extends React.Component {
  render(){
  return (
    <View style={styles.container}>
        <Header title="Sports App"></Header>
        <TouchableOpacity style={styles.button} onPress={()=>{
            this.props.navigation.navigate("CricketScreen")
        }}>
            <Text>Cricket</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={()=>{
            this.props.navigation.navigate("FootballScreen")
        }}>
            <Text>Football</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={()=>{
            this.props.navigation.navigate("HockeyScreen")
        }}>
            <Text>Hockey</Text>
        </TouchableOpacity>
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
    button: {
      marginTop: "3%",
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10
    }
});
  