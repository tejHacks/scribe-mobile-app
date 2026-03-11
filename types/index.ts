// Note, Verse, QuizQuestion interfaces
// export interface Note {}

export interface Note {
  id: string;
  title: string;
  body: string;
  tags: string[];
  pinned: boolean;
  createdAt: string;
  updatedAt: string;
}
export interface Verse {
  book: string;
  chapter: number;
  verse: number;
  text: string;
}
export interface QuizQuestion {
  q: string;
  options: string[];
  answer: number;
  category: string;
}
