import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import GorgeousHeader from "react-native-gorgeous-header";

export default class Header extends React.Component {
  render(){
  return (
    <SafeAreaView style={styles.container}>
    <GorgeousHeader
      menuImageSource={require("../assets/menu.png")}
      searchImageSource={require("../assets/search.png")}
      title = "Sports News for you!"
      subtitle = "Your Daily Shop for Sports News"
      searchInputStyle = {styles.searchInput}
      profileImageSource={{
        uri:
          "https://icons.iconarchive.com/icons/yingfengling-fl/i-love-sports/256/soccer-icon.png",
      }}
    />
  </SafeAreaView>
  );
  }
}

const styles = StyleSheet.create({
  container: {},
  searchInput:{
    display: 'none'
  }
});