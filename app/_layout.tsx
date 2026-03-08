import { Lora_400Regular } from "@expo-google-fonts/lora";
import { PlayfairDisplay_400Regular } from "@expo-google-fonts/playfair-display";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function RootLayout() {
  const [splashVisible, setSplashVisible] = useState(true);

  const [fontsLoaded] = useFonts({
    // make sure the font files exist in assets/fonts/ and are linked via expo
    Scribe: require("../assets/fonts/Scribe.ttf"),
    PlayfairDisplay_400Regular,
    Lora_400Regular,
  });

  useEffect(() => {
    if (fontsLoaded) {
      const timer = setTimeout(() => setSplashVisible(false), 7000); // show splash 7s
      return () => clearTimeout(timer);
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  if (splashVisible) {
    return (
      <View style={styles.splashContainer}>
        <Text style={styles.title}>Scribe</Text>
        <Text style={styles.verse}>
          Habakkuk 2:1{`\n`}I will stand at my watch and station myself on the
          ramparts; I will look to see what he will say to me, and what answer I
          am to give to this complaint.
        </Text>
      </View>
    );
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "Scribe",
    fontSize: 48,
    fontWeight: "bold",
    color: "brown",
  },
  verse: {
    position: "absolute",
    bottom: 40,
    textAlign: "center",
    color: "brown",
    paddingHorizontal: 20,
    fontSize: 16,
  },
});
