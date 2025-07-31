import Card from "@/components/Card";
import IntroScreen from "@/components/IntroScreen";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

const GRID_COLUMNS = 4;
const CARD_SIZE = 80;
const CARD_MARGIN = 4;
const GRID_WIDTH = GRID_COLUMNS * (CARD_SIZE + CARD_MARGIN * 2);

export default function Index() {
  const [showIntro, setShowIntro] = useState(true);
  const cards = Array.from({ length: 16 }, (_, i) => i);

  return (
    <View style={styles.container}>
      {showIntro ? (
        <IntroScreen onStart={() => setShowIntro(false)} />
      ) : (
        <View style={styles.grid}>
          {cards.map((card) => (
            <Card key={card} />
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "flex-start",
    width: GRID_WIDTH,
  },
});
