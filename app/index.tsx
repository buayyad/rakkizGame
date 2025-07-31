import IntroScreen from "@/components/IntroScreen";
import React, { useState } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <View>
      {showIntro ? (
        <IntroScreen onStart={() => setShowIntro(false)} />
      ) : (
        <Text>rakkiz</Text>
      )}
    </View>
  );
}
