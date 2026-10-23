
import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { useAppTheme } from '../ThemeContext';

export default function ProfileImage() {
  const { colors } = useAppTheme();

  return (
    <View
      style={[
        styles.frame,
        { borderColor: colors.cyan },
      ]}
    >
      <Image
        style={styles.image}
        source={{
          uri: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=85',
        }}
        accessibilityLabel="Foto ilustrativa de perfil"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  frame: {
    width: '100%',
    height: 220,
    borderWidth: 2,
    borderRadius: 16,
    padding: 5,
    marginBottom: 23,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 11,
    backgroundColor: '#1B3045',
  },
});
