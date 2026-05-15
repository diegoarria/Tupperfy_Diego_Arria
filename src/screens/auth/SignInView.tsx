import React, { useMemo } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { spacing, radius, shadows, typography, AppColors } from '../../theme';
import { useApp } from '../../context/AppContext';

const SignInView = ({ navigation }: { navigation: any }) => {
  const { colors, isDark } = useApp();
  const styles = useMemo(() => makeStyles(colors), [colors]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} backgroundColor={colors.card} />

      <View style={styles.heroSection}>
        <Image
          style={styles.logo}
          source={require('../../../assets/adaptive-icon.png')}
          resizeMode="contain"
        />
        <Text style={styles.tagline}>Tranqui, dejale tus tuppers a Tupperfy</Text>
        <View style={styles.badge}>
          <Icon name="restaurant-outline" size={14} color={colors.primary} />
          <Text style={styles.badgeText}>Comida casera a domicilio</Text>
        </View>
      </View>

      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate('LogIn')} activeOpacity={0.85}>
          <Text style={styles.primaryButtonText}>Iniciar sesión</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.navigate('CreateAccount')} activeOpacity={0.85}>
          <Text style={styles.secondaryButtonText}>Crear una cuenta</Text>
        </TouchableOpacity>

        <Text style={styles.termsText}>
          Al continuar aceptas nuestros{' '}
          <Text style={styles.termsLink}>Términos de uso</Text>
          {' '}y{' '}
          <Text style={styles.termsLink}>Política de privacidad</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const makeStyles = (colors: AppColors) => StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.card },
  heroSection: {
    flex: 1, justifyContent: 'center', alignItems: 'center',
    paddingHorizontal: spacing.xl, paddingTop: spacing.xxl,
  },
  logo: { width: '75%', height: 180, marginBottom: spacing.lg },
  tagline: {
    ...typography.h3, textAlign: 'center', color: colors.gray600,
    fontWeight: '400', lineHeight: 26, marginBottom: spacing.lg,
  },
  badge: {
    flexDirection: 'row', alignItems: 'center', gap: 6,
    backgroundColor: colors.primaryLight, borderRadius: radius.full,
    paddingHorizontal: spacing.md, paddingVertical: spacing.xs,
  },
  badgeText: { color: colors.primary, fontSize: 13, fontWeight: '600' },
  bottomSection: { paddingHorizontal: spacing.lg, paddingBottom: spacing.xl, gap: spacing.sm },
  primaryButton: {
    backgroundColor: colors.primary, borderRadius: radius.lg,
    paddingVertical: 16, alignItems: 'center', ...shadows.md,
  },
  primaryButtonText: { color: colors.white, fontSize: 16, fontWeight: '700' },
  secondaryButton: {
    backgroundColor: colors.card, borderRadius: radius.lg,
    paddingVertical: 16, alignItems: 'center',
    borderWidth: 1.5, borderColor: colors.border,
  },
  secondaryButtonText: { color: colors.text, fontSize: 16, fontWeight: '600' },
  termsText: {
    textAlign: 'center', fontSize: 12, color: colors.textLight,
    marginTop: spacing.sm, lineHeight: 18,
  },
  termsLink: { color: colors.primary, fontWeight: '600' },
});

export default SignInView;
