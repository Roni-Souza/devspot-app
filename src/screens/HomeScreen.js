
import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Alert,
  Switch,
  Animated,
} from 'react-native';

import Logo from '../components/Logo';
import ProfileImage from '../components/ProfileImage';
import PrimaryButton from '../components/PrimaryButton';
import SocialButton from '../components/SocialButton';
import Footer from '../components/Footer';
import { useAppTheme } from '../ThemeContext';

export default function HomeScreen({ navigation }) {
  const { isDark, toggleTheme, colors } = useAppTheme();

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, slideAnim]);

  function handleSwitch(value) {
    toggleTheme();
    Alert.alert('Alternância', 'Switch pressionado');
  }

  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: colors.background,
    },
    scrollContent: {
      paddingHorizontal: 18,
      paddingTop: 18,
      paddingBottom: 20,
      flexGrow: 1,
    },
    card: {
      backgroundColor: colors.panel,
      borderRadius: 18,
      padding: 20,
      borderWidth: 1,
      borderColor: colors.border,
    },
    headline: {
      color: colors.text,
      fontSize: 25,
      lineHeight: 32,
      fontWeight: '800',
      marginBottom: 14,
    },
    highlight: {
      color: colors.cyan,
    },
    description: {
      color: colors.muted,
      fontSize: 14,
      lineHeight: 22,
      marginBottom: 10,
    },
    sectionTitle: {
      color: colors.text,
      fontSize: 17,
      fontWeight: '800',
      marginTop: 24,
      marginBottom: 8,
    },
    switchRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 8,
    },
    switchLabel: {
      color: colors.text,
      fontSize: 13,
      flex: 1,
      marginRight: 10,
    },
  });

  return (
    <View style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View
          style={{
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          }}
        >
          <View style={styles.card}>
            <Logo />
            <ProfileImage />

            <Text style={styles.headline}>
              Eleve seu negócio digital a outro nível{' '}
              <Text style={styles.highlight}>
                com um Front-end de qualidade!
              </Text>
            </Text>

            <Text style={styles.description}>
              Olá! Sou Joana Santos, desenvolvedora Front-end com
              especialidade em React, HTML e CSS. Ajudo pequenos negócios
              e designers a colocarem em prática boas ideias.
              Vamos conversar?
            </Text>

            <PrimaryButton
              title="Sobre mim"
              onPress={() => navigation.navigate('About')}
            />

            <PrimaryButton
              title="Entre em contato!"
              onPress={() =>
                Alert.alert('Contato', 'Entre em contato')
              }
            />

            <Text style={styles.sectionTitle}>
              Acesse minhas redes:
            </Text>

            <View style={styles.switchRow}>
              <Text style={styles.switchLabel}>
                {isDark ? 'Modo escuro' : 'Modo claro'}
              </Text>

              <Switch
                value={isDark}
                onValueChange={handleSwitch}
                trackColor={{
                  false: '#AAB7C7',
                  true: colors.cyanDark,
                }}
                thumbColor="#FFFFFF"
                accessibilityLabel="Alternar tema claro e escuro"
              />
            </View>

            <SocialButton name="GitHub" />
            <SocialButton name="LinkedIn" />
            <SocialButton name="Instagram" />
            <SocialButton name="Twitch" />
          </View>
        </Animated.View>
      </ScrollView>

      <Footer />
    </View>
  );
}
