import { Ionicons } from "@expo/vector-icons";
import { useState, useMemo } from "react";
import {
  FlatList,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { VERSES, BOOKS, Verse } from "@/constants/verses";

interface Props {
  visible: boolean;
  onClose: () => void;
  onInsert: (text: string) => void;
}

type Mode = "search" | "browse";

export default function ScripturePicker({ visible, onClose, onInsert }: Props) {
  const [mode, setMode] = useState<Mode>("search");
  const [query, setQuery] = useState("");
  const [selectedBook, setSelectedBook] = useState<string | null>(null);

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return VERSES.filter(
      (v) =>
        v.text.toLowerCase().includes(q) ||
        v.book.toLowerCase().includes(q) ||
        `${v.book} ${v.chapter}:${v.verse}`.toLowerCase().includes(q),
    ).slice(0, 20);
  }, [query]);

  const browseVerses = useMemo(() => {
    if (!selectedBook) return [];
    return VERSES.filter((v) => v.book === selectedBook);
  }, [selectedBook]);

  const handleInsert = (v: Verse) => {
    const formatted = `"${v.text}" — ${v.book} ${v.chapter}:${v.verse}`;
    onInsert(formatted);
    onClose();
  };

  const renderVerse = ({ item }: { item: Verse }) => (
    <TouchableOpacity
      style={styles.verseRow}
      onPress={() => handleInsert(item)}
      activeOpacity={0.7}
    >
      <View style={styles.verseRef}>
        <Text style={styles.verseRefTxt}>
          {item.book} {item.chapter}:{item.verse}
        </Text>
      </View>
      <Text style={styles.verseTxt} numberOfLines={3}>
        {item.text}
      </Text>
      <Ionicons name="add-circle-outline" size={20} color="#8b5e1a" />
    </TouchableOpacity>
  );

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <SafeAreaView edges={["top"]} style={styles.safe}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.heading}>Scripture</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
            <Ionicons name="close" size={24} color="#2c2416" />
          </TouchableOpacity>
        </View>

        {/* Mode toggle */}
        <View style={styles.toggle}>
          <TouchableOpacity
            style={[styles.toggleBtn, mode === "search" && styles.toggleOn]}
            onPress={() => setMode("search")}
          >
            <Ionicons
              name="search-outline"
              size={14}
              color={mode === "search" ? "#fff" : "#9c8a6e"}
            />
            <Text
              style={[
                styles.toggleTxt,
                mode === "search" && styles.toggleTxtOn,
              ]}
            >
              Search
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.toggleBtn, mode === "browse" && styles.toggleOn]}
            onPress={() => setMode("browse")}
          >
            <Ionicons
              name="book-outline"
              size={14}
              color={mode === "browse" ? "#fff" : "#9c8a6e"}
            />
            <Text
              style={[
                styles.toggleTxt,
                mode === "browse" && styles.toggleTxtOn,
              ]}
            >
              Browse
            </Text>
          </TouchableOpacity>
        </View>

        {mode === "search" ? (
          <>
            <View style={styles.searchWrap}>
              <Ionicons name="search-outline" size={16} color="#bbb" />
              <TextInput
                style={styles.searchInput}
                placeholder="Search by keyword, book or reference..."
                placeholderTextColor="#bbb"
                value={query}
                onChangeText={setQuery}
                autoFocus
              />
              {query.length > 0 && (
                <TouchableOpacity onPress={() => setQuery("")}>
                  <Ionicons name="close-circle" size={16} color="#bbb" />
                </TouchableOpacity>
              )}
            </View>

            {query.trim() === "" ? (
              <View style={styles.emptyWrap}>
                <Text style={styles.emptyIcon}>📖</Text>
                <Text style={styles.emptyTxt}>
                  Search by keyword, book name, or reference like &quot;John
                  3&quot;
                </Text>
              </View>
            ) : searchResults.length === 0 ? (
              <View style={styles.emptyWrap}>
                <Text style={styles.emptyTxt}>
                  No verses found for &quot;{query}&quot;
                </Text>
              </View>
            ) : (
              <FlatList
                data={searchResults}
                keyExtractor={(v) => `${v.book}${v.chapter}${v.verse}`}
                renderItem={renderVerse}
                contentContainerStyle={styles.list}
                showsVerticalScrollIndicator={false}
              />
            )}
          </>
        ) : (
          <>
            {!selectedBook ? (
              <ScrollView contentContainerStyle={styles.bookGrid}>
                <Text style={styles.browseHint}>Select a book</Text>
                {BOOKS.map((b) => {
                  const count = VERSES.filter((v) => v.book === b).length;
                  if (count === 0) return null;
                  return (
                    <TouchableOpacity
                      key={b}
                      style={styles.bookBtn}
                      onPress={() => setSelectedBook(b)}
                      activeOpacity={0.7}
                    >
                      <Text style={styles.bookTxt}>{b}</Text>
                      <Text style={styles.bookCount}>{count}v</Text>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            ) : (
              <>
                <TouchableOpacity
                  style={styles.backBtn}
                  onPress={() => setSelectedBook(null)}
                >
                  <Ionicons name="arrow-back" size={16} color="#8b5e1a" />
                  <Text style={styles.backTxt}>{selectedBook}</Text>
                </TouchableOpacity>
                <FlatList
                  data={browseVerses}
                  keyExtractor={(v) => `${v.book}${v.chapter}${v.verse}`}
                  renderItem={renderVerse}
                  contentContainerStyle={styles.list}
                  showsVerticalScrollIndicator={false}
                />
              </>
            )}
          </>
        )}
      </SafeAreaView>
    </Modal>
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
    borderBottomWidth: 1,
    borderColor: "#e8dcc8",
  },
  heading: {
    fontSize: 22,
    fontFamily: "PlayfairDisplay_400Regular",
    fontWeight: "700",
    color: "#2c2416",
  },
  closeBtn: { padding: 4 },
  toggle: {
    flexDirection: "row",
    margin: 16,
    backgroundColor: "#f0e8d8",
    borderRadius: 10,
    padding: 3,
  },
  toggleBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    paddingVertical: 8,
    borderRadius: 8,
  },
  toggleOn: { backgroundColor: "#8b5e1a" },
  toggleTxt: {
    fontSize: 13,
    color: "#9c8a6e",
    fontFamily: "Lora_400Regular",
    fontWeight: "600",
  },
  toggleTxtOn: { color: "#fff" },
  searchWrap: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginHorizontal: 16,
    marginBottom: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#e8dcc8",
    gap: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: "#2c2416",
    fontFamily: "Lora_400Regular",
  },
  list: { paddingHorizontal: 16, paddingBottom: 40, gap: 10 },
  verseRow: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: "#e8dcc8",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  verseRef: {
    backgroundColor: "#fdf0d5",
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
    alignSelf: "flex-start",
    minWidth: 70,
  },
  verseRefTxt: {
    fontSize: 10,
    color: "#8b5e1a",
    fontFamily: "Lora_400Regular",
    fontWeight: "600",
  },
  verseTxt: {
    fontSize: 13,
    color: "#2c2416",
    fontFamily: "Lora_400Regular",
    lineHeight: 20,
    flex: 1,
  },
  emptyWrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    padding: 40,
  },
  emptyIcon: { fontSize: 40 },
  emptyTxt: {
    fontSize: 14,
    color: "#9c8a6e",
    fontFamily: "Lora_400Regular",
    textAlign: "center",
    lineHeight: 22,
  },
  bookGrid: { padding: 16, gap: 8 },
  browseHint: {
    fontSize: 12,
    color: "#bbb",
    fontFamily: "Lora_400Regular",
    letterSpacing: 1,
    textTransform: "uppercase",
    marginBottom: 8,
  },
  bookBtn: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 14,
    borderWidth: 1,
    borderColor: "#e8dcc8",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bookTxt: {
    fontSize: 15,
    color: "#2c2416",
    fontFamily: "Lora_400Regular",
    fontWeight: "600",
  },
  bookCount: { fontSize: 11, color: "#bbb", fontFamily: "Lora_400Regular" },
  backBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#e8dcc8",
  },
  backTxt: {
    fontSize: 14,
    color: "#8b5e1a",
    fontFamily: "Lora_400Regular",
    fontWeight: "600",
  },
});
