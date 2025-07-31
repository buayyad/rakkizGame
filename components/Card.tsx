import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface CardProps {
  isFlipped: boolean;
  onPress: () => void;
  value: number;
}
const CARD_SIZE = 80;
const CARD_MARGIN = 4;

const cardEmojis = ["🎈", "🌟", "🎯", "🎨", "🎵", "🎪", "🎭", "🎲"];

const Card = ({ isFlipped, onPress, value }: CardProps) => {
  const emoji = cardEmojis[value];
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.card, isFlipped && styles.flipped]}>
        {isFlipped && <Text style={styles.emoji}>{emoji}</Text>}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    width: CARD_SIZE,
    height: CARD_SIZE,
    margin: CARD_MARGIN,
    backgroundColor: "#ccc",
  },
  flipped: {
    backgroundColor: "#4CAF50",
  },
  emoji: {
    fontSize: 30,
    textAlign: "center",
    lineHeight: CARD_SIZE, // This centers it vertically
  },
});

export default Card;
