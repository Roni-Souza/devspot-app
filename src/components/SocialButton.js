
import React from 'react';
import {
  Pressable,
  Text,
  StyleSheet,
  Linking,
  Alert,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useAppTheme } from '../ThemeContext';

const SOCIALS = {
  GitHub: {
    icon: 'github',
    url: 'https://github.com/',
  },
  LinkedIn: {
    icon: 'linkedin-in',
    url: 'https://www.linkedin.com/',
  },
  Instagram: {
    icon: 'instagram',
    url: 'https://www.instagram.com/',
  },
  Twitch: {
    icon: 'twitch',
    url: 'https://www.twitch.tv/',
  },
};

export default function SocialButton({ name }) {
  const { colors } = useAppTheme();
  const social = SOCIALS[name];

  async function openSocial() {
    try {
      await Linking.openURL(social.url);
    } catch {
      Alert.alert(
        'Não foi possível abrir',
        `Tente acessar ${name} pelo navegador.`
      );
    }
  }

  const styles = StyleSheet.create({
    button: {
      minHeight: 44,
      borderWidth: 1.2,
      borderColor: colors.border,
      borderRadius: 8,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12,
      marginTop: 8,
      paddingHorizontal: 12,
    },
    label: {
      color: colors.text,
      fontSize: 14,
      fontWeight: '600',
    },
  });

  return (
    <Pressable
      onPress={openSocial}
      accessibilityRole="link"
      accessibilityLabel={`Abrir ${name}`}
      style={({ pressed }) => [
        styles.button,
        pressed && {
          backgroundColor: colors.background,
          opacity: 0.75,
        },
      ]}
    >
      <FontAwesome5
        name={social.icon}
        size={17}
        color={colors.cyan}
      />
      <Text style={styles.label}>{name}</Text>
    </Pressable>
  );
}
