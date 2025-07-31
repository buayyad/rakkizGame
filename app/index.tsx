import Card from "@/components/Card";
import IntroScreen from "@/components/IntroScreen";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

const GRID_COLUMNS = 4;
const CARD_SIZE = 80;
const CARD_MARGIN = 4;
const GRID_WIDTH = GRID_COLUMNS * (CARD_SIZE + CARD_MARGIN * 2);

const shuffle = (array: number[]): number[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const createCardPairs = (): number[] => {
  const firstSet = [0, 1, 2, 3, 4, 5, 6, 7];
  const secondSet = [0, 1, 2, 3, 4, 5, 6, 7];
  const combined = [...firstSet, ...secondSet];
  return shuffle(combined);
};

export default function Index() {
  const [showIntro, setShowIntro] = useState(true);
  const [flipped, setFlipped] = useState<boolean[]>(Array(16).fill(false));
  const [cards] = useState<number[]>(() => createCardPairs());
  const handleCardPress = (index: number) => {
    if (flipped[index]) {
      return;
    }
    const newFlipped = [...flipped];
    newFlipped[index] = true;
    setFlipped(newFlipped);
  };

  return (
    <View style={styles.container}>
      {showIntro ? (
        <IntroScreen onStart={() => setShowIntro(false)} />
      ) : (
        <View style={styles.grid}>
          {cards.map((card, index) => (
            <Card
              key={index}
              isFlipped={flipped[index]}
              value={card}
              onPress={() => handleCardPress(index)}
            />
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
