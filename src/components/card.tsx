import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/colors";

type CardProps = { title: string; children: React.ReactNode };

export function Card({ title, children }: CardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title.toUpperCase()}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.card,
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    gap: 12,
    // ombre Android
    elevation: 6,
    // ombre iOS
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  title: {
    color: Colors.text,
    fontSize: 16,
    fontWeight: "500",
    letterSpacing: 0.5,
  },
});
