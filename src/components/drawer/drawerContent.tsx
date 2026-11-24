import { LinearGradient } from "expo-linear-gradient";
import { DrawerContentScrollView, type DrawerContentComponentProps } from "expo-router/drawer";
import { StyleSheet, Text, View } from "react-native";
import { useAuthStore } from "@/store/authStore";
import { Colors } from "@/constants/colors";
import { Button } from "../common/button";

const SECTIONS = [
  {
    title: "Analytics & Tracking",
    items: ["Progress", "Workout History", "Weekly Overview"],
  },
  {
    title: "Account",
    items: ["Profile", "Personal info", "Change Password"],
  },
  {
    title: "App settings",
    items: ["Notifications", "Theme", "Units (kg/lb)"],
  },
];

export function DrawerContent(props: DrawerContentComponentProps) {
  const currentUser = useAuthStore((s) => s.currentUser);
  const logout = useAuthStore((s) => s.logout);

  return (
    <LinearGradient
      colors={[Colors.gradientStart, Colors.gradientEnd]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{ flex: 1 }}
    >
      <DrawerContentScrollView {...props} contentContainerStyle={styles.content}>
        <View style={styles.userRow}>
          <View style={styles.avatar} />
          <View>
            <Text style={styles.name}>{currentUser?.username}</Text>
            <Text style={styles.email}>{currentUser?.email}</Text>
          </View>
        </View>

        {SECTIONS.map((section) => (
          <View key={section.title} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            {section.items.map((item) => (
              <Text key={item} style={styles.item}>{item}</Text>
            ))}
          </View>
        ))}

        <Button 
          title="Logout"
          onPress={logout} 
          variant="light"
          style={styles.logout}
        />
    
      </DrawerContentScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  content: { flexGrow: 1, paddingHorizontal: 20 },
  userRow: { flexDirection: "row", alignItems: "center", gap: 20, marginBottom: 40 },
  avatar: { width: 56, height: 56, borderRadius: 28, backgroundColor: "#d9d9d9" },
  name: { color: Colors.text, fontSize: 14, marginBottom: 8 },
  email: { color: Colors.text, fontSize: 13 },
  section: { marginBottom: 24 },
  sectionTitle: { color: Colors.text, fontFamily: "Inter_700Bold", fontSize: 18, marginBottom: 8 },
  item: { color: Colors.text, fontSize: 14, paddingVertical: 8, paddingLeft: 12 },
  logout: { marginTop: "auto", marginBottom: 24, width: 225 }
});