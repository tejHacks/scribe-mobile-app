import { Tabs } from "expo-router";
import Navbar from "@/components/ui/Navbar";

export default function TabLayout() {
  return (
    <Tabs tabBar={() => <Navbar />} screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="notes" />
      <Tabs.Screen name="verse" />
      <Tabs.Screen name="quiz" />
    </Tabs>
  );
}
