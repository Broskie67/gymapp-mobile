import { View, StyleSheet } from 'react-native';
import { Image } from 'expo-image';

const PlaceholderImage = require('@/assets/images/logo_app.png');

export default function Logo() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  
  image: {
    width: 160,
    height: 220,
    borderRadius: 18,
  },
});