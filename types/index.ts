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
export interface Verse {}
export interface QuizQuestion {}
