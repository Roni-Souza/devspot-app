
import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Animated,
} from 'react-native';

import Logo from '../components/Logo';
import ProfileImage from '../components/ProfileImage';
import PrimaryButton from '../components/PrimaryButton';
import Footer from '../components/Footer';
import { useAppTheme } from '../ThemeContext';

export default function AboutScreen({ navigation }) {
  const { colors } = useAppTheme();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

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
    title: {
      color: colors.text,
      fontSize: 27,
      fontWeight: '800',
      marginBottom: 15,
    },
    paragraph: {
      color: colors.muted,
      fontSize: 14,
      lineHeight: 23,
      marginBottom: 17,
      textAlign: 'left',
    },
  });

  return (
    <View style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View style={{ opacity: fadeAnim }}>
          <View style={styles.card}>
            <Logo />
            <ProfileImage />

            <Text style={styles.title}>Sobre mim</Text>

            <Text style={styles.paragraph}>
              Sou Joana Santos, desenvolvedora Front-end apaixonada
              por transformar ideias em interfaces funcionais,
              acessíveis e bem pensadas. Trabalho principalmente
              com React, HTML e CSS, criando experiências digitais
              que não só funcionam bem, mas também fazem sentido
              para quem usa.
            </Text>

            <Text style={styles.paragraph}>
              Gosto de colaborar de perto com pequenos negócios,
              designers e times criativos, ajudando a tirar projetos
              do papel e levá-los para a web de forma prática e
              eficiente. Acredito que um bom produto nasce do
              equilíbrio entre código bem escrito, atenção aos
              detalhes e comunicação clara.
            </Text>

            <Text style={styles.paragraph}>
              Estou sempre buscando evoluir, aprender novas
              tecnologias e aprimorar minhas soluções, seja
              otimizando performance, melhorando a usabilidade
              ou explorando novas formas de construir interfaces.
              Se você tem uma ideia e quer transformá-la em algo
              real, vamos conversar!
            </Text>

            <PrimaryButton
              title="Voltar para Home"
              onPress={() => navigation.navigate('Home')}
            />
          </View>
        </Animated.View>
      </ScrollView>

      <Footer />
    </View>
  );
}
