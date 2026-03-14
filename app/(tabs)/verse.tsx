import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  DAILY_PSALMS,
  VERSES,
  MORNING_PRAYERS,
  EVENING_VERSES,
} from "@/constants/verses";

const getDayIndex = (arr: any[]) => {
  const start = new Date(2024, 0, 1).getTime();
  const today = new Date().setHours(0, 0, 0, 0);
  const diff = Math.floor((today - start) / (1000 * 60 * 60 * 24));
  return diff % arr.length;
};

const today = new Date();
const dateStr = today.toLocaleDateString("en-US", {
  weekday: "long",
  month: "long",
  day: "numeric",
});

export default function VerseScreen() {
  const psalm = DAILY_PSALMS[getDayIndex(DAILY_PSALMS)];
  const verseOfDay = VERSES[getDayIndex(VERSES)];
  const prayer = MORNING_PRAYERS[getDayIndex(MORNING_PRAYERS)];
  const evening = EVENING_VERSES[getDayIndex(EVENING_VERSES)];

  return (
    <SafeAreaView edges={["top"]} style={styles.safe}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.heading}>Daily Word</Text>
        <Text style={styles.date}>{dateStr}</Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Verse of the Day */}
        <Section
          icon="sunny-outline"
          label="Verse of the Day"
          color="#c9a227"
          bgColor="#fffbf0"
          borderColor="#f0d98a"
        >
          <Text style={styles.ref}>✞ {verseOfDay.ref}</Text>
          <Text style={styles.verseText}>&quot;{verseOfDay.text}&quot;</Text>
        </Section>

        {/* Daily Psalm */}
        <Section
          icon="musical-notes-outline"
          label="Psalm of the Day"
          color="#8b5e1a"
          bgColor="#fdf8f0"
          borderColor="#e8dcc8"
        >
          <Text style={styles.ref}>✞ {psalm.ref}</Text>
          <Text style={styles.verseText}>&quot;{psalm.text}&quot;</Text>
        </Section>

        {/* Morning Prayer */}
        <Section
          icon="hand-right-outline"
          label="Prayer of the Day"
          color="#4a7c59"
          bgColor="#f0f8f2"
          borderColor="#b8dcc4"
        >
          <Text style={styles.prayerTitle}>{prayer.title}</Text>
          <Text style={styles.prayerText}>{prayer.text}</Text>
        </Section>

        {/* Evening Verse */}
        <Section
          icon="moon-outline"
          label="Evening Verse"
          color="#4a5568"
          bgColor="#f5f5fb"
          borderColor="#c8c8e0"
        >
          <Text style={styles.ref}>✞ {evening.ref}</Text>
          <Text style={styles.verseText}>&quot;{evening.text}&quot;</Text>
        </Section>

        <Text style={styles.footer}>
          &quot;His mercies are new every morning&quot; — Lam 3:23
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

// reusable section card
function Section({
  icon,
  label,
  color,
  bgColor,
  borderColor,
  children,
}: {
  icon: any;
  label: string;
  color: string;
  bgColor: string;
  borderColor: string;
  children: React.ReactNode;
}) {
  return (
    <View style={[styles.card, { backgroundColor: bgColor, borderColor }]}>
      <View style={styles.cardHeader}>
        <View style={[styles.iconWrap, { backgroundColor: color + "22" }]}>
          <Ionicons name={icon} size={16} color={color} />
        </View>
        <Text style={[styles.cardLabel, { color }]}>{label}</Text>
      </View>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#fdf8f0" },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  heading: {
    fontSize: 26,
    fontFamily: "PlayfairDisplay_400Regular",
    color: "#2c2416",
    fontWeight: "700",
  },
  date: {
    fontSize: 13,
    color: "#9c8a6e",
    fontFamily: "Lora_400Regular",
    marginTop: 2,
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 100,
    gap: 16,
  },
  card: {
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 14,
  },
  iconWrap: {
    width: 30,
    height: 30,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  cardLabel: {
    fontSize: 11,
    fontFamily: "Lora_400Regular",
    fontWeight: "700",
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
  ref: {
    fontSize: 12,
    color: "#c9a227",
    fontFamily: "Lora_400Regular",
    fontWeight: "600",
    letterSpacing: 0.5,
    marginBottom: 10,
  },
  verseText: {
    fontSize: 16,
    color: "#2c2416",
    fontFamily: "Lora_400Regular",
    fontStyle: "italic",
    lineHeight: 26,
  },
  prayerTitle: {
    fontSize: 15,
    color: "#2c2416",
    fontFamily: "PlayfairDisplay_400Regular",
    fontWeight: "700",
    marginBottom: 10,
  },
  prayerText: {
    fontSize: 15,
    color: "#3a4a3e",
    fontFamily: "Lora_400Regular",
    lineHeight: 26,
  },
  footer: {
    textAlign: "center",
    fontSize: 12,
    color: "#bbb",
    fontFamily: "Lora_400Regular",
    fontStyle: "italic",
    paddingBottom: 20,
  },
});
