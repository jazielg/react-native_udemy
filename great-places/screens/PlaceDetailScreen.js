import React from "react";
import { StyleSheet, Text, View } from "react-native";

const PlaceDetailScreen = (props) => {
  return (
    <View>
      <Text>PlaceDetailScreen</Text>
    </View>
  );
};

PlaceDetailScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam("placeItem"),
  };
};

const styles = StyleSheet.create({});

export default PlaceDetailScreen;
