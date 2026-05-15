import React, { useState, useMemo } from 'react';
import {
  View, Text, StyleSheet, TextInput, TouchableOpacity,
  ScrollView, Alert, KeyboardAvoidingView, Platform, SafeAreaView, StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { spacing, radius, shadows, AppColors } from '../../theme';
import { useApp } from '../../context/AppContext';

const AddPaymentView = ({ navigation }: { navigation: any }) => {
  const { colors, isDark } = useApp();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const formatCardNumber = (input: string) => {
    const cleaned = input.replace(/\D/g, '').slice(0, 16);
    return cleaned.match(/.{1,4}/g)?.join(' ') ?? cleaned;
  };

  const formatExpiry = (input: string) => {
    const cleaned = input.replace(/\D/g, '').slice(0, 4);
    return cleaned.length > 2 ? `${cleaned.slice(0, 2)}/${cleaned.slice(2)}` : cleaned;
  };

  const getCardBrand = () => {
    const num = cardNumber.replace(/\s/g, '');
    if (num.startsWith('4')) return 'VISA';
    if (num.startsWith('5')) return 'MC';
    if (num.startsWith('3')) return 'AMEX';
    return '••••';
  };

  const handleSave = () => {
    if (!cardNumber || !cardName || !expiryDate || !cvv) {
      Alert.alert('Error', 'Por favor completa todos los campos.');
      return;
    }
    Alert.alert('¡Listo!', 'Tarjeta guardada correctamente.', [
      { text: 'OK', onPress: () => navigation.navigate('HomePage') },
    ]);
  };

  const displayNumber = cardNumber || '•••• •••• •••• ••••';
  const displayName   = cardName || 'NOMBRE EN TARJETA';
  const displayExpiry = expiryDate || 'MM/YY';

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} backgroundColor={colors.card} />
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">

          {/* Card preview */}
          <View style={styles.cardPreview}>
            <View style={styles.cardPreviewInner}>
              <View style={styles.cardTop}>
                <Icon name="wifi-outline" size={24} color="rgba(255,255,255,0.8)" style={{ transform: [{ rotate: '90deg' }] }} />
                <Text style={styles.cardBrand}>{getCardBrand()}</Text>
              </View>
              <Text style={styles.cardNumber}>{displayNumber}</Text>
              <View style={styles.cardBottom}>
                <View>
                  <Text style={styles.cardFieldLabel}>TITULAR</Text>
                  <Text style={styles.cardFieldValue} numberOfLines={1}>{displayName}</Text>
                </View>
                <View>
                  <Text style={styles.cardFieldLabel}>VENCE</Text>
                  <Text style={styles.cardFieldValue}>{displayExpiry}</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Form */}
          <View style={styles.formCard}>
            <View style={styles.fieldGroup}>
              <Text style={styles.label}>Número de tarjeta</Text>
              <View style={[styles.inputWrapper, focusedField === 'num' && styles.inputWrapperFocused]}>
                <Icon name="card-outline" size={18} color={colors.gray400} />
                <TextInput
                  style={styles.input}
                  placeholder="1234 5678 9012 3456"
                  placeholderTextColor={colors.textLight}
                  value={cardNumber}
                  onChangeText={t => setCardNumber(formatCardNumber(t))}
                  keyboardType="numeric"
                  maxLength={19}
                  onFocus={() => setFocusedField('num')}
                  onBlur={() => setFocusedField(null)}
                />
              </View>
            </View>

            <View style={styles.fieldGroup}>
              <Text style={styles.label}>Nombre en la tarjeta</Text>
              <View style={[styles.inputWrapper, focusedField === 'name' && styles.inputWrapperFocused]}>
                <Icon name="person-outline" size={18} color={colors.gray400} />
                <TextInput
                  style={styles.input}
                  placeholder="JUAN PÉREZ"
                  placeholderTextColor={colors.textLight}
                  value={cardName}
                  onChangeText={t => setCardName(t.toUpperCase())}
                  autoCapitalize="characters"
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                />
              </View>
            </View>

            <View style={styles.row}>
              <View style={[styles.fieldGroup, { flex: 1 }]}>
                <Text style={styles.label}>Fecha de expiración</Text>
                <View style={[styles.inputWrapper, focusedField === 'exp' && styles.inputWrapperFocused]}>
                  <Icon name="calendar-outline" size={18} color={colors.gray400} />
                  <TextInput
                    style={styles.input}
                    placeholder="MM/YY"
                    placeholderTextColor={colors.textLight}
                    value={expiryDate}
                    onChangeText={t => setExpiryDate(formatExpiry(t))}
                    keyboardType="numeric"
                    maxLength={5}
                    onFocus={() => setFocusedField('exp')}
                    onBlur={() => setFocusedField(null)}
                  />
                </View>
              </View>

              <View style={[styles.fieldGroup, { flex: 1 }]}>
                <Text style={styles.label}>CVV</Text>
                <View style={[styles.inputWrapper, focusedField === 'cvv' && styles.inputWrapperFocused]}>
                  <Icon name="lock-closed-outline" size={18} color={colors.gray400} />
                  <TextInput
                    style={styles.input}
                    placeholder="•••"
                    placeholderTextColor={colors.textLight}
                    value={cvv}
                    onChangeText={t => setCvv(t.replace(/\D/g, '').slice(0, 4))}
                    keyboardType="numeric"
                    maxLength={4}
                    secureTextEntry
                    onFocus={() => setFocusedField('cvv')}
                    onBlur={() => setFocusedField(null)}
                  />
                </View>
              </View>
            </View>

            <TouchableOpacity style={styles.saveBtn} onPress={handleSave} activeOpacity={0.85}>
              <Icon name="checkmark-circle-outline" size={20} color="#FFFFFF" />
              <Text style={styles.saveBtnText}>Guardar tarjeta</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const makeStyles = (colors: AppColors) => StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  scroll: { padding: spacing.lg, paddingBottom: spacing.xxl },
  cardPreview: { marginBottom: spacing.xl, alignItems: 'center' },
  cardPreviewInner: {
    width: '100%', height: 200, borderRadius: radius.xl,
    backgroundColor: colors.primary,
    padding: spacing.lg, justifyContent: 'space-between', ...shadows.lg,
  },
  cardTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  cardBrand: { fontSize: 16, fontWeight: '700', color: '#FFFFFF', letterSpacing: 2 },
  cardNumber: { fontSize: 22, fontWeight: '700', color: '#FFFFFF', letterSpacing: 4, textAlign: 'center' },
  cardBottom: { flexDirection: 'row', justifyContent: 'space-between' },
  cardFieldLabel: { fontSize: 10, color: 'rgba(255,255,255,0.7)', fontWeight: '600', letterSpacing: 1 },
  cardFieldValue: { fontSize: 14, color: '#FFFFFF', fontWeight: '600' },
  formCard: {
    backgroundColor: colors.card, borderRadius: radius.xl,
    padding: spacing.lg, gap: spacing.md, ...shadows.sm,
    borderWidth: 1, borderColor: colors.border,
  },
  fieldGroup: { gap: 6 },
  label: { fontSize: 13, fontWeight: '600', color: colors.textSecondary },
  inputWrapper: {
    flexDirection: 'row', alignItems: 'center', gap: spacing.sm,
    backgroundColor: colors.surface,
    borderRadius: radius.md, borderWidth: 1.5, borderColor: colors.border,
    paddingHorizontal: spacing.md, height: 52,
  },
  inputWrapperFocused: { borderColor: colors.primary },
  input: { flex: 1, fontSize: 15, color: colors.text, padding: 0 },
  row: { flexDirection: 'row', gap: spacing.md },
  saveBtn: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    gap: spacing.sm, backgroundColor: colors.primary,
    borderRadius: radius.md, paddingVertical: 16,
    marginTop: spacing.xs, ...shadows.md,
  },
  saveBtnText: { color: '#FFFFFF', fontSize: 16, fontWeight: '700' },
});

export default AddPaymentView;
