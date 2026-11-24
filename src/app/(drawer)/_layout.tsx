import { Drawer } from "expo-router/drawer";
import { DrawerContent } from "@/components/drawer/drawerContent";

export default function DrawerLayout() {
  return (
    <Drawer
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: { width: 260, backgroundColor: "transparent" },
      }}
    >
      <Drawer.Screen name="(tabs)" />
    </Drawer>
  );
}