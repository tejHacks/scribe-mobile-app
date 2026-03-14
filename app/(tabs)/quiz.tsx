import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { QUIZ_QUESTIONS } from "@/constants/quiz";

const TOTAL = 15;

type Status = "idle" | "playing" | "done";

export default function QuizScreen() {
  const [status, setStatus] = useState<Status>("idle");
  const [questions, setQuestions] = useState(() =>
    [...QUIZ_QUESTIONS].sort(() => Math.random() - 0.5).slice(0, TOTAL),
  );
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);

  const q = questions[current];

  const start = () => {
    const shuffled = [...QUIZ_QUESTIONS]
      .sort(() => Math.random() - 0.5)
      .slice(0, TOTAL);
    setQuestions(shuffled);
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setAnswers([]);
    setStatus("playing");
  };

  const handleAnswer = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    const correct = idx === q.answer;
    if (correct) setScore((s) => s + 1);
    setAnswers((a) => [...a, correct]);

    setTimeout(() => {
      if (current + 1 >= TOTAL) {
        setStatus("done");
      } else {
        setCurrent((c) => c + 1);
        setSelected(null);
      }
    }, 1000);
  };

  const percent = Math.round((score / TOTAL) * 100);

  const resultEmoji =
    percent === 100 ? "🏆" : percent >= 80 ? "⭐" : percent >= 60 ? "📖" : "🙏";
  const resultMsg =
    percent === 100
      ? "Perfect! You know the Word!"
      : percent >= 80
        ? "Excellent! Keep studying the Scriptures."
        : percent >= 60
          ? "Good effort! The Word transforms daily."
          : "Keep reading! Every chapter counts.";

  // idle screen
  if (status === "idle") {
    return (
      <SafeAreaView edges={["top"]} style={styles.safe}>
        <View style={styles.header}>
          <Text style={styles.heading}>Bible Quiz</Text>
        </View>
        <ScrollView contentContainerStyle={styles.idleContent}>
          <Text style={styles.idleIcon}>✞</Text>
          <Text style={styles.idleTitle}>Test Your Knowledge</Text>
          <Text style={styles.idleSub}>
            {TOTAL} questions · Old & New Testament
          </Text>

          <View style={styles.categoryRow}>
            {["Old Testament", "New Testament", "Books"].map((c) => (
              <View key={c} style={styles.categoryChip}>
                <Text style={styles.categoryTxt}>{c}</Text>
              </View>
            ))}
          </View>

          <TouchableOpacity style={styles.startBtn} onPress={start}>
            <Text style={styles.startTxt}>Start Quiz</Text>
            <Ionicons name="arrow-forward" size={18} color="#fff" />
          </TouchableOpacity>

          <Text style={styles.verse}>
            &quot;Your word is a lamp for my feet, a light on my path.&quot;{" "}
            {"\n"}— Psalm 119:105
          </Text>
        </ScrollView>
      </SafeAreaView>
    );
  }

  // done screen
  if (status === "done") {
    return (
      <SafeAreaView edges={["top"]} style={styles.safe}>
        <View style={styles.header}>
          <Text style={styles.heading}>Results</Text>
        </View>
        <ScrollView contentContainerStyle={styles.idleContent}>
          <Text style={{ fontSize: 64, marginBottom: 8 }}>{resultEmoji}</Text>
          <Text style={styles.scoreText}>
            {score}/{TOTAL}
          </Text>
          <Text style={styles.percentText}>{percent}%</Text>
          <Text style={styles.resultMsg}>{resultMsg}</Text>

          {/* Score bar */}
          <View style={styles.barWrap}>
            <View style={[styles.barFill, { width: `${percent}%` as any }]} />
          </View>

          {/* Answer review */}
          <View style={styles.reviewWrap}>
            <Text style={styles.reviewTitle}>Review</Text>
            {questions.map((q, i) => (
              <View key={i} style={styles.reviewRow}>
                <Ionicons
                  name={answers[i] ? "checkmark-circle" : "close-circle"}
                  size={18}
                  color={answers[i] ? "#4caf50" : "#e74c3c"}
                />
                <Text style={styles.reviewQ} numberOfLines={1}>
                  {q.q}
                </Text>
              </View>
            ))}
          </View>

          <TouchableOpacity style={styles.startBtn} onPress={start}>
            <Text style={styles.startTxt}>Try Again</Text>
            <Ionicons name="refresh" size={18} color="#fff" />
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }

  // playing screen
  return (
    <SafeAreaView edges={["top"]} style={styles.safe}>
      <View style={styles.header}>
        <Text style={styles.heading}>Bible Quiz</Text>
        <Text style={styles.counter}>
          {current + 1}/{TOTAL}
        </Text>
      </View>

      {/* Progress bar */}
      <View style={styles.progressWrap}>
        <View
          style={[
            styles.progressFill,
            { width: `${((current + 1) / TOTAL) * 100}%` as any },
          ]}
        />
      </View>

      <ScrollView contentContainerStyle={styles.playContent}>
        {/* Category badge */}
        <View style={styles.badge}>
          <Text style={styles.badgeTxt}>{q.category}</Text>
        </View>

        {/* Question */}
        <Text style={styles.question}>{q.q}</Text>

        {/* Options */}
        <View style={styles.options}>
          {q.options.map((opt, i) => {
            const isSelected = selected === i;
            const isCorrect = i === q.answer;
            const showResult = selected !== null;

            let optStyle = styles.option;
            let txtStyle = styles.optionTxt;

            if (showResult) {
              if (isCorrect) {
                optStyle = { ...styles.option, ...styles.optionCorrect };
                txtStyle = { ...styles.optionTxt, color: "#fff" };
              } else if (isSelected && !isCorrect) {
                optStyle = { ...styles.option, ...styles.optionWrong };
                txtStyle = { ...styles.optionTxt, color: "#fff" };
              }
            } else if (isSelected) {
              optStyle = { ...styles.option, ...styles.optionSelected };
            }

            return (
              <TouchableOpacity
                key={i}
                style={optStyle}
                onPress={() => handleAnswer(i)}
                activeOpacity={0.7}
                disabled={selected !== null}
              >
                <View style={styles.optionLabel}>
                  <Text style={styles.optionLetter}>
                    {["A", "B", "C", "D"][i]}
                  </Text>
                </View>
                <Text style={[txtStyle, { flex: 1 }]}>{opt}</Text>
                {showResult && isCorrect && (
                  <Ionicons name="checkmark-circle" size={20} color="#fff" />
                )}
                {showResult && isSelected && !isCorrect && (
                  <Ionicons name="close-circle" size={20} color="#fff" />
                )}
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Score tracker */}
        <View style={styles.scoreRow}>
          <Text style={styles.scoreLive}>
            Score: {score}/{current + (selected !== null ? 1 : 0)}
          </Text>
        </View>
      </ScrollView>
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
  counter: {
    fontSize: 14,
    color: "#9c8a6e",
    fontFamily: "Lora_400Regular",
  },
  progressWrap: {
    height: 4,
    backgroundColor: "#e8dcc8",
    marginHorizontal: 20,
    borderRadius: 2,
    marginBottom: 8,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#8b5e1a",
    borderRadius: 2,
  },

  // idle + done
  idleContent: {
    alignItems: "center",
    padding: 32,
    paddingBottom: 80,
    gap: 16,
  },
  idleIcon: { fontSize: 48, color: "#e8dcc8" },
  idleTitle: {
    fontFamily: "PlayfairDisplay_400Regular",
    fontSize: 24,
    fontWeight: "700",
    color: "#2c2416",
    textAlign: "center",
  },
  idleSub: {
    fontSize: 14,
    color: "#9c8a6e",
    fontFamily: "Lora_400Regular",
    textAlign: "center",
  },
  categoryRow: {
    flexDirection: "row",
    gap: 8,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  categoryChip: {
    backgroundColor: "#fdf0d5",
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 5,
  },
  categoryTxt: {
    fontSize: 12,
    color: "#8b5e1a",
    fontFamily: "Lora_400Regular",
  },
  startBtn: {
    backgroundColor: "#8b5e1a",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 40,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 8,
  },
  startTxt: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Lora_400Regular",
  },
  verse: {
    fontSize: 13,
    color: "#bbb",
    fontFamily: "Lora_400Regular",
    textAlign: "center",
    lineHeight: 20,
    marginTop: 8,
    fontStyle: "italic",
  },

  // result
  scoreText: {
    fontFamily: "PlayfairDisplay_400Regular",
    fontSize: 48,
    fontWeight: "700",
    color: "#2c2416",
  },
  percentText: {
    fontSize: 18,
    color: "#8b5e1a",
    fontFamily: "Lora_400Regular",
    fontWeight: "600",
  },
  resultMsg: {
    fontSize: 15,
    color: "#9c8a6e",
    fontFamily: "Lora_400Regular",
    textAlign: "center",
    lineHeight: 22,
  },
  barWrap: {
    width: "100%",
    height: 8,
    backgroundColor: "#e8dcc8",
    borderRadius: 4,
    overflow: "hidden",
  },
  barFill: {
    height: "100%",
    backgroundColor: "#8b5e1a",
    borderRadius: 4,
  },
  reviewWrap: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: "#e8dcc8",
    gap: 10,
  },
  reviewTitle: {
    fontFamily: "PlayfairDisplay_400Regular",
    fontSize: 16,
    fontWeight: "700",
    color: "#2c2416",
    marginBottom: 4,
  },
  reviewRow: { flexDirection: "row", alignItems: "center", gap: 8 },
  reviewQ: {
    fontSize: 13,
    color: "#9c8a6e",
    fontFamily: "Lora_400Regular",
    flex: 1,
  },

  // playing
  playContent: { padding: 20, paddingBottom: 80, gap: 20 },
  badge: {
    backgroundColor: "#fdf0d5",
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 5,
    alignSelf: "flex-start",
  },
  badgeTxt: { fontSize: 12, color: "#8b5e1a", fontFamily: "Lora_400Regular" },
  question: {
    fontFamily: "PlayfairDisplay_400Regular",
    fontSize: 22,
    fontWeight: "700",
    color: "#2c2416",
    lineHeight: 32,
  },
  options: { gap: 12 },
  option: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: "#e8dcc8",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  optionSelected: { borderColor: "#8b5e1a", backgroundColor: "#fdf0d5" },
  optionCorrect: { backgroundColor: "#4caf50", borderColor: "#4caf50" },
  optionWrong: { backgroundColor: "#e74c3c", borderColor: "#e74c3c" },
  optionLabel: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#fdf0d5",
    alignItems: "center",
    justifyContent: "center",
  },
  optionLetter: { fontSize: 12, fontWeight: "700", color: "#8b5e1a" },
  optionTxt: { fontSize: 15, color: "#2c2416", fontFamily: "Lora_400Regular" },
  scoreRow: { alignItems: "center" },
  scoreLive: { fontSize: 13, color: "#9c8a6e", fontFamily: "Lora_400Regular" },
});
