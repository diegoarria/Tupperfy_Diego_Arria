import React, { useMemo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { spacing, radius, shadows, AppColors } from '../../theme';
import { useApp } from '../../context/AppContext';

const METHODS = [
  { id: 'card',        icon: 'card-outline',          label: 'Tarjeta de crédito / débito', route: 'AddPayment' },
  { id: 'mercadopago', icon: 'phone-portrait-outline', label: 'Mercado Pago',                route: 'AddPayment' },
  { id: 'cash',        icon: 'cash-outline',           label: 'Efectivo al recibir',          route: 'HomePage' },
];

const PaymentSelectionView = ({ navigation }: { navigation: any }) => {
  const { colors, isDark } = useApp();
  const styles = useMemo(() => makeStyles(colors), [colors]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} backgroundColor={colors.card} />

      <View style={styles.content}>
        <Text style={styles.title}>¿Cómo quieres pagar?</Text>
        <Text style={styles.subtitle}>Elige el método de pago que prefieras</Text>

        {METHODS.map(m => (
          <TouchableOpacity
            key={m.id}
            style={styles.methodCard}
            onPress={() => navigation.navigate(m.route)}
            activeOpacity={0.85}
          >
            <View style={styles.methodIcon}>
              <Icon name={m.icon as any} size={22} color={colors.primary} />
            </View>
            <Text style={styles.methodLabel}>{m.label}</Text>
            <Icon name="chevron-forward" size={18} color={colors.gray400} />
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const makeStyles = (colors: AppColors) => StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.card },
  content: { flex: 1, paddingHorizontal: spacing.lg, paddingTop: spacing.xl, gap: spacing.md },
  title: { fontSize: 24, fontWeight: '700', color: colors.text, marginBottom: 4 },
  subtitle: { fontSize: 15, color: colors.textSecondary, marginBottom: spacing.sm },
  methodCard: {
    flexDirection: 'row', alignItems: 'center', gap: spacing.md,
    backgroundColor: colors.surface,
    borderRadius: radius.lg, padding: spacing.md,
    borderWidth: 1.5, borderColor: colors.border, ...shadows.sm,
  },
  methodIcon: {
    width: 44, height: 44, borderRadius: radius.md,
    backgroundColor: colors.primaryLight,
    justifyContent: 'center', alignItems: 'center',
  },
  methodLabel: { flex: 1, fontSize: 15, fontWeight: '600', color: colors.text },
});

export default PaymentSelectionView;
