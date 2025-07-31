import React from "react";
import { Pressable, Text, View } from "react-native";

interface IntroScreenProps {
  onStart: () => void;
}

const IntroScreen = ({ onStart }: IntroScreenProps) => {
  return (
    <View>
      <Pressable onPress={onStart}>
        <Text>Start</Text>
      </Pressable>
    </View>
  );
};

export default IntroScreen;
