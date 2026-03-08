import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TAGS } from "@/constants/tags";
import { useNotes } from "@/hooks/useNotes";
import { Note } from "@/types";

export default function NotesScreen() {
  const router = useRouter();
  const { notes, loading, togglePin } = useNotes();
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = notes
    .filter((n) => {
      const q = search.toLowerCase();
      return (
        n.title.toLowerCase().includes(q) || n.body.toLowerCase().includes(q)
      );
    })
    .filter((n) => (activeTag ? n.tags.includes(activeTag) : true))
    .sort((a, b) => Number(b.pinned) - Number(a.pinned));

  const renderNote = ({ item }: { item: Note }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        router.push({ pathname: "/note/[id]", params: { id: item.id } })
      }
      activeOpacity={0.75}
    >
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle} numberOfLines={1}>
          {item.pinned ? "📌 " : ""}
          {item.title}
        </Text>
        <TouchableOpacity
          onPress={() => togglePin(item.id)}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <Ionicons
            name={item.pinned ? "bookmark" : "bookmark-outline"}
            size={18}
            color={item.pinned ? "#8b5e1a" : "#bbb"}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.cardBody} numberOfLines={2}>
        {item.body}
      </Text>

      <View style={styles.cardFooter}>
        <View style={styles.tagRow}>
          {item.tags.slice(0, 2).map((t) => (
            <View key={t} style={styles.tag}>
              <Text style={styles.tagText}>{t}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.date}>
          {new Date(item.updatedAt).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          })}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView edges={["top"]} style={styles.safe}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.heading}>✞ Scribe</Text>
        <TouchableOpacity
          style={styles.newBtn}
          onPress={() =>
            router.push({ pathname: "/note/[id]", params: { id: "new" } })
          }
        >
          <Ionicons name="add" size={22} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Search */}
      <View style={styles.searchWrap}>
        <Ionicons
          name="search-outline"
          size={16}
          color="#bbb"
          style={{ marginRight: 6 }}
        />
        <TextInput
          style={styles.search}
          placeholder="Search notes..."
          placeholderTextColor="#bbb"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Tag filter — ScrollView not FlatList, fixes the stretch bug */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ flexGrow: 0 }} // ✅ key fix — don't let it grow to fill space
        contentContainerStyle={styles.tagFilter}
      >
        {["All", ...TAGS].map((t) => {
          const on = t === "All" ? !activeTag : activeTag === t;
          return (
            <TouchableOpacity
              key={t}
              style={[styles.filterChip, on && styles.filterChipOn]}
              onPress={() => setActiveTag(t === "All" ? null : t)}
            >
              <Text style={[styles.filterText, on && styles.filterTextOn]}>
                {t}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* Notes list */}
      {loading ? (
        <View style={styles.emptyWrap}>
          <Text style={styles.empty}>Loading...</Text>
        </View>
      ) : filtered.length === 0 ? (
        <View style={styles.emptyWrap}>
          <Text style={styles.emptyIcon}>✞</Text>
          <Text style={styles.empty}>No notes yet</Text>
          <Text style={styles.emptyHint}>
            &quot;Your word is a lamp for my feet&quot; — Ps 119:105
          </Text>
        </View>
      ) : (
        <FlatList
          data={filtered}
          keyExtractor={(n) => n.id}
          renderItem={renderNote}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#fdf8f0" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  heading: {
    fontSize: 26,
    fontFamily: "PlayfairDisplay_400Regular",
    color: "#2c2416",
    fontWeight: "700",
  },
  newBtn: {
    backgroundColor: "#8b5e1a",
    borderRadius: 10,
    padding: 8,
  },
  searchWrap: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#e8dcc8",
  },
  search: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 14,
    color: "#2c2416",
    fontFamily: "Lora_400Regular",
  },
  tagFilter: {
    paddingHorizontal: 20,
    paddingVertical: 8, // ✅ replaces paddingBottom: 12
    gap: 8,
    alignItems: "center",
    flexDirection: "row",
  },
  filterChip: {
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: "#e8dcc8",
    backgroundColor: "#fff",
    alignSelf: "flex-start", // ✅ key fix — don't stretch to fill height
  },
  filterChipOn: { backgroundColor: "#8b5e1a", borderColor: "#8b5e1a" },
  filterText: {
    fontSize: 12,
    color: "#9c8a6e",
    fontFamily: "Lora_400Regular",
  },
  filterTextOn: { color: "#fff", fontWeight: "600" },
  list: { paddingHorizontal: 20, paddingBottom: 100, gap: 12 },
  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: "#e8dcc8",
    shadowColor: "#8b5e1a",
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: "PlayfairDisplay_400Regular",
    fontWeight: "700",
    color: "#2c2416",
    flex: 1,
  },
  cardBody: {
    fontSize: 13,
    color: "#9c8a6e",
    lineHeight: 20,
    fontFamily: "Lora_400Regular",
    marginBottom: 10,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tagRow: { flexDirection: "row", gap: 6 },
  tag: {
    backgroundColor: "#fdf0d5",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  tagText: { fontSize: 10, color: "#8b5e1a", fontFamily: "Lora_400Regular" },
  date: { fontSize: 11, color: "#bbb", fontFamily: "Lora_400Regular" },
  emptyWrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  emptyIcon: { fontSize: 40, color: "#e8dcc8" },
  empty: { fontSize: 15, color: "#9c8a6e", fontFamily: "Lora_400Regular" },
  emptyHint: {
    fontSize: 12,
    color: "#bbb",
    fontFamily: "Lora_400Regular",
    textAlign: "center",
    paddingHorizontal: 40,
  },
});
