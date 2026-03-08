// Note, Verse, QuizQuestion interfaces
// export interface Note {}

export interface Note {
  id: string;
  title: string;
  body: string;
  tags: string[];
  pinned: boolean;
  createAt: Date;
  updatedAt: Date;
}
export interface Verse {}
export interface QuizQuestion {}
