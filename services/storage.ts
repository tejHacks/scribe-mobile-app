import AsyncStorage from "@react-native-async-storage/async-storage";
import { Note } from "@/types";

const NOTES_KEY = "scribe_notes";

export async function getNotes(): Promise<Note[]> {
  const raw = await AsyncStorage.getItem(NOTES_KEY);
  return raw ? JSON.parse(raw) : [];
}

export async function saveNotes(notes: Note[]): Promise<void> {
  await AsyncStorage.setItem(NOTES_KEY, JSON.stringify(notes));
}

// AsyncStorage read/write helpers
// export function save(key: string, value: any) {
//   // placeholder
// }

// export function load(key: string) {
//   return null;
// }
