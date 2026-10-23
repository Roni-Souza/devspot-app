
import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { useAppTheme } from '../ThemeContext';

export default function PrimaryButton({
  title,
  onPress,
  outlined = false,
}) {
  const { colors } = useAppTheme();

  const styles = StyleSheet.create({
    button: {
      minHeight: 47,
      borderRadius: 12,
      backgroundColor: colors.cyan,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 16,
      marginTop: 9,
    },
    outlined: {
      backgroundColor: 'transparent',
      borderWidth: 1.4,
      borderColor: colors.cyan,
    },
    label: {
      color: colors.background,
      fontSize: 15,
      fontWeight: '800',
    },
    outlinedLabel: {
      color: colors.text,
    },
  });

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      style={({ pressed }) => [
        styles.button,
        outlined && styles.outlined,
        pressed && {
          opacity: 0.72,
          transform: [{ scale: 0.985 }],
        },
      ]}
    >
      <Text
        style={[
          styles.label,
          outlined && styles.outlinedLabel,
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
}
