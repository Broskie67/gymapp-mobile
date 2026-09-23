import { StyleSheet, Text } from "react-native";
import { Card } from "../../components/card";
import { GradientBackground } from "../../components/gradientBackground";
import { Greeting } from "../../components/greeting";
import { TextLink } from "../../components/textLink";
import { Colors } from "../../constants/colors";

export default function Index() {
  return (
    <GradientBackground>
      <Greeting name="Nathan" />
      <Card title="Your personal selection of the day">
        <Text style={styles.body}>No custom selection</Text>
        <Text style={styles.body}>
          Create new lists or add week's day to your existing workout
        </Text>
        <TextLink href="/workoutScreen">See workouts →</TextLink>
      </Card>
      <Card title="Upcoming">
        <Text style={styles.body}>No upcoming</Text>
      </Card>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  body: {
    color: Colors.text,
    fontSize: 16,
  },
});
