import { Pressable } from 'react-native';
import { useNavigation, DrawerActions } from 'expo-router/react-navigation';
import { Ionicons } from '@expo/vector-icons';

export default function BurgerButton() {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
      <Ionicons name="menu" size={28} color="white" />
    </Pressable>
  );
}