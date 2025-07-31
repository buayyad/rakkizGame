import React from "react";
import { StyleSheet, View } from "react-native";

const Card = () => {
  return <View style={styles.card} />;
};

const styles = StyleSheet.create({
  card: {
    width: 80,
    height: 80,
    aspectRatio: 1,
    margin: 4,
    backgroundColor: "#ccc",
  },
});

export default Card;
