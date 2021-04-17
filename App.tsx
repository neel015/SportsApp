
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import React from 'react';
import HomeScreen from './Screens/HomeScreen';
import FootballScreen from './Screens/FootballScreen';
import CricketScreen from './Screens/CricketScreen';
import HockeyScreen from './Screens/HockeyScreen';


export default class App extends React.Component {
  render(){
  return (
   <AppContainer/>    
  );
  }
}

const Navigator = createSwitchNavigator({
  HomeScreen: { screen: HomeScreen },
  FootballScreen: { screen: FootballScreen },
  HockeyScreen: { screen: HockeyScreen },
  CricketScreen: { screen: CricketScreen }
});

var AppContainer = createAppContainer(Navigator);


