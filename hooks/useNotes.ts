// CRUD + AsyncStorage hooks for notes

import { useEffect, useState } from "react";
import { Note } from "@/types";
import { getNotes, saveNotes } from "@/services/storage";

export function useNotes() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNotes().then((n) => {
      setNotes(n);
      setLoading(false);
    });
  }, []);

  const persist = async (updated: Note[]) => {
    setNotes(updated);
    await saveNotes(updated);
  };

  const addNote = async (
    note: Omit<Note, "id" | "createdAt" | "updatedAt">,
  ) => {
    const newNote: Note = {
      ...note,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    await persist([newNote, ...notes]);
    return newNote;
  };

  const updateNote = async (id: string, changes: Partial<Note>) => {
    const updated = notes.map((n) =>
      n.id === id
        ? { ...n, ...changes, updatedAt: new Date().toISOString() }
        : n,
    );
    await persist(updated);
  };

  const deleteNote = async (id: string) => {
    await persist(notes.filter((n) => n.id !== id));
  };

  const togglePin = async (id: string) => {
    const updated = notes.map((n) =>
      n.id === id ? { ...n, pinned: !n.pinned } : n,
    );
    await persist(updated);
  };

  return { notes, loading, addNote, updateNote, deleteNote, togglePin };
}
