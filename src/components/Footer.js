
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAppTheme } from '../ThemeContext';

export default function Footer() {
  const { colors } = useAppTheme();

  return (
    <View
      style={[
        styles.footer,
        { backgroundColor: colors.footer },
      ]}
    >
      <Text
        style={[
          styles.text,
          { color: colors.background },
        ]}
      >
        Desenvolvido por Roni de Souza e Pedro Sanches.
      </Text>

      <Text
        style={[
          styles.text,
          { color: colors.background },
        ]}
      >
        Projeto fictício sem fins comerciais.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 10,
    textAlign: 'center',
    lineHeight: 15,
  },
});
