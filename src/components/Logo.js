
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAppTheme } from '../ThemeContext';

export default function Logo() {
  const { colors } = useAppTheme();

  return (
    <View style={styles.container} accessibilityLabel="DEV.SPOT">
      <Text style={[styles.word, { color: colors.text }]}>
        DEV.SPOT
      </Text>
      <Text style={[styles.spark, { color: colors.cyan }]}>
        ✧
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    marginBottom: 22,
  },
  word: {
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 1.2,
  },
  spark: {
    fontSize: 31,
    lineHeight: 34,
  },
});
