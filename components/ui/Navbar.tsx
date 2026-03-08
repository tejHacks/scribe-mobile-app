import { Ionicons } from "@expo/vector-icons";
import { useRouter, useSegments } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface NavItem {
  label: string;
  icon: React.ComponentProps<typeof Ionicons>["name"];
  route: string;
}

const items: NavItem[] = [
  { label: "Notes", icon: "document-text-outline", route: "/(tabs)/notes" },
  { label: "Quiz", icon: "help-circle-outline", route: "/(tabs)/quiz" },
  { label: "Verse", icon: "leaf-outline", route: "/(tabs)/verse" },
];

export default function Navbar() {
  const router = useRouter();
  const segments = useSegments();
  const active = segments[segments.length - 1];

  return (
    <SafeAreaView edges={["bottom"]} style={styles.safe}>
      <View style={styles.container}>
        {items.map((item) => {
          const isActive = active === item.route.split("/").pop();
          return (
            <TouchableOpacity
              key={item.label}
              style={styles.button}
              onPress={() => router.replace(item.route as any)}
              activeOpacity={0.7}
            >
              <Ionicons
                name={item.icon}
                size={24}
                color={isActive ? "#8b5e1a" : "#aaa"}
              />
              <Text style={[styles.label, isActive && styles.activeLabel]}>
                {item.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#e8dcc8",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#fff",
  },
  button: {
    alignItems: "center",
    flex: 1,
  },
  label: {
    fontSize: 12,
    color: "#aaa",
    marginTop: 3,
    fontFamily: "Lora_400Regular",
  },
  activeLabel: {
    color: "#8b5e1a",
    fontWeight: "600",
  },
});
