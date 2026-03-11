import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
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
import ScripturePicker from "@/components/notes/ScripturePicker";

export default function NoteScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { notes, addNote, updateNote, deleteNote } = useNotes();

  const isNew = id === "new";
  const existing = notes.find((n) => n.id === id);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [pickerVisible, setPickerVisible] = useState(false);

  useEffect(() => {
    if (existing) {
      setTitle(existing.title);
      setBody(existing.body);
      setTags(existing.tags);
    }
  }, [existing?.id]);

  const toggleTag = (t: string) => {
    setTags((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t],
    );
  };

  const handleInsertScripture = (text: string) => {
    setBody((prev) => prev + (prev ? "\n\n" : "") + text);
  };

  const handleSave = async () => {
    if (!title.trim()) {
      Alert.alert("Title required", "Please add a title to your note.");
      return;
    }
    if (isNew) {
      await addNote({ title, body, tags, pinned: false });
    } else if (existing) {
      await updateNote(existing.id, { title, body, tags });
    }
    router.back();
  };

  const handleDelete = () => {
    Alert.alert("Delete Note", "Are you sure you want to delete this note?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: async () => {
          if (existing) await deleteNote(existing.id);
          router.back();
        },
      },
    ]);
  };

  return (
    <SafeAreaView edges={["top"]} style={styles.safe}>
      {/* Toolbar */}
      <View style={styles.toolbar}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.toolBtn}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <Ionicons name="arrow-back" size={22} color="#8b5e1a" />
        </TouchableOpacity>

        <Text style={styles.toolTitle}>{isNew ? "New Note" : "Edit Note"}</Text>

        <View style={styles.toolRight}>
          {!isNew && (
            <TouchableOpacity
              onPress={handleDelete}
              style={styles.toolBtn}
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            >
              <Ionicons name="trash-outline" size={22} color="#c0392b" />
            </TouchableOpacity>
          )}
          <TouchableOpacity
            onPress={() => setPickerVisible(true)}
            style={styles.scriptureBtn}
          >
            <Ionicons name="book-outline" size={15} color="#8b5e1a" />
            <Text style={styles.scriptureTxt}>Scripture</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSave} style={styles.saveBtn}>
            <Text style={styles.saveTxt}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={0}
      >
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Title */}
          <TextInput
            style={styles.titleInput}
            placeholder="Note title..."
            placeholderTextColor="#ccc"
            value={title}
            onChangeText={setTitle}
            multiline
          />

          {/* Tags */}
          <View style={styles.tagSection}>
            <Text style={styles.tagLabel}>Tags</Text>
            <View style={styles.tagRow}>
              {TAGS.map((t) => {
                const on = tags.includes(t);
                return (
                  <TouchableOpacity
                    key={t}
                    style={[styles.tagChip, on && styles.tagChipOn]}
                    onPress={() => toggleTag(t)}
                  >
                    <Text style={[styles.tagTxt, on && styles.tagTxtOn]}>
                      {t}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          <View style={styles.divider} />

          {/* Body */}
          <TextInput
            style={styles.bodyInput}
            placeholder="Write your thoughts, prayers, sermon notes..."
            placeholderTextColor="#ccc"
            value={body}
            onChangeText={setBody}
            multiline
            textAlignVertical="top"
            scrollEnabled={false}
          />
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Scripture Picker Modal */}
      <ScripturePicker
        visible={pickerVisible}
        onClose={() => setPickerVisible(false)}
        onInsert={handleInsertScripture}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#fdf8f0" },
  toolbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#e8dcc8",
    backgroundColor: "#fff",
  },
  toolBtn: { padding: 4 },
  toolTitle: {
    fontFamily: "PlayfairDisplay_400Regular",
    fontSize: 16,
    fontWeight: "700",
    color: "#2c2416",
  },
  toolRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  scriptureBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    borderWidth: 1,
    borderColor: "#e8dcc8",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 7,
    backgroundColor: "#fdf0d5",
  },
  scriptureTxt: {
    fontSize: 12,
    color: "#8b5e1a",
    fontFamily: "Lora_400Regular",
    fontWeight: "600",
  },
  saveBtn: {
    backgroundColor: "#8b5e1a",
    borderRadius: 8,
    paddingHorizontal: 18,
    paddingVertical: 8,
  },
  saveTxt: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
    fontFamily: "Lora_400Regular",
  },
  content: { padding: 20, paddingBottom: 80 },
  titleInput: {
    fontSize: 24,
    fontFamily: "PlayfairDisplay_400Regular",
    fontWeight: "700",
    color: "#2c2416",
    marginBottom: 20,
    lineHeight: 32,
  },
  tagSection: { marginBottom: 16 },
  tagLabel: {
    fontSize: 11,
    color: "#bbb",
    fontFamily: "Lora_400Regular",
    letterSpacing: 1,
    textTransform: "uppercase",
    marginBottom: 8,
  },
  tagRow: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  tagChip: {
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: "#e8dcc8",
    backgroundColor: "#fff",
  },
  tagChipOn: { backgroundColor: "#8b5e1a", borderColor: "#8b5e1a" },
  tagTxt: { fontSize: 12, color: "#9c8a6e", fontFamily: "Lora_400Regular" },
  tagTxtOn: { color: "#fff", fontWeight: "600" },
  divider: { height: 1, backgroundColor: "#e8dcc8", marginBottom: 20 },
  bodyInput: {
    fontSize: 16,
    color: "#2c2416",
    lineHeight: 28,
    fontFamily: "Lora_400Regular",
    minHeight: 300,
  },
});
