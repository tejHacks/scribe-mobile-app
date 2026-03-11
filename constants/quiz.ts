// All quiz questions, static TS file
export interface QuizQuestion {
  q: string;
  options: string[];
  answer: number;
  category: string;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    q: "Who built the ark?",
    options: ["Moses", "Noah", "Abraham", "David"],
    answer: 1,
    category: "Old Testament",
  },
  {
    q: "How many disciples did Jesus have?",
    options: ["10", "11", "12", "13"],
    answer: 2,
    category: "New Testament",
  },
  {
    q: "What is the first book of the Bible?",
    options: ["Exodus", "Genesis", "Psalms", "Matthew"],
    answer: 1,
    category: "Books",
  },
  {
    q: "Who was swallowed by a great fish?",
    options: ["Elijah", "Isaiah", "Jonah", "Ezekiel"],
    answer: 2,
    category: "Old Testament",
  },
  {
    q: "Where was Jesus born?",
    options: ["Jerusalem", "Nazareth", "Bethlehem", "Jericho"],
    answer: 2,
    category: "New Testament",
  },
  {
    q: "Who was the first man according to the Bible?",
    options: ["Cain", "Abel", "Noah", "Adam"],
    answer: 3,
    category: "Old Testament",
  },
  {
    q: "How many days did creation take?",
    options: ["5", "6", "7", "8"],
    answer: 1,
    category: "Old Testament",
  },
  {
    q: "What river was Jesus baptized in?",
    options: ["Nile", "Euphrates", "Jordan", "Galilee"],
    answer: 2,
    category: "New Testament",
  },
  {
    q: "Who wrote most of the Psalms?",
    options: ["Solomon", "Moses", "David", "Isaiah"],
    answer: 2,
    category: "Old Testament",
  },
  {
    q: "What did Jesus turn water into?",
    options: ["Milk", "Wine", "Juice", "Oil"],
    answer: 1,
    category: "New Testament",
  },
  {
    q: "How many books are in the New Testament?",
    options: ["25", "26", "27", "28"],
    answer: 2,
    category: "Books",
  },
  {
    q: "Who betrayed Jesus?",
    options: ["Peter", "Thomas", "John", "Judas"],
    answer: 3,
    category: "New Testament",
  },
  {
    q: "What was Moses' brother's name?",
    options: ["Aaron", "Caleb", "Joshua", "Eli"],
    answer: 0,
    category: "Old Testament",
  },
  {
    q: "Who wrote the book of Revelation?",
    options: ["Paul", "Peter", "John", "James"],
    answer: 2,
    category: "Books",
  },
  {
    q: "How many plagues hit Egypt?",
    options: ["7", "8", "9", "10"],
    answer: 3,
    category: "Old Testament",
  },
  {
    q: "Who was the wisest king in the Bible?",
    options: ["David", "Saul", "Solomon", "Hezekiah"],
    answer: 2,
    category: "Old Testament",
  },
  {
    q: "What fruit is associated with the Garden of Eden?",
    options: ["Apple", "Fig", "Pomegranate", "Forbidden fruit"],
    answer: 3,
    category: "Old Testament",
  },
  {
    q: "How many days was Jesus in the wilderness?",
    options: ["30", "40", "50", "60"],
    answer: 1,
    category: "New Testament",
  },
  {
    q: "Who denied Jesus three times?",
    options: ["John", "James", "Peter", "Andrew"],
    answer: 2,
    category: "New Testament",
  },
  {
    q: "What is the shortest verse in the Bible?",
    options: ["God wept.", "Fear not.", "Jesus wept.", "Rejoice always."],
    answer: 2,
    category: "Books",
  },
  {
    q: "Who was thrown into the lions den?",
    options: ["Shadrach", "Daniel", "Elijah", "Ezekiel"],
    answer: 1,
    category: "Old Testament",
  },
  {
    q: "How many books are in the entire Bible?",
    options: ["60", "64", "66", "68"],
    answer: 2,
    category: "Books",
  },
  {
    q: "Who was the mother of Jesus?",
    options: ["Martha", "Mary", "Elizabeth", "Sarah"],
    answer: 1,
    category: "New Testament",
  },
  {
    q: "What did God create on the first day?",
    options: ["Animals", "Plants", "Light", "Stars"],
    answer: 2,
    category: "Old Testament",
  },
  {
    q: "Which disciple walked on water with Jesus?",
    options: ["John", "James", "Andrew", "Peter"],
    answer: 3,
    category: "New Testament",
  },
];
