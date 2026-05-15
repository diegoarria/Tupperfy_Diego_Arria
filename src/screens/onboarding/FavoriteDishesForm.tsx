import React, { useState, useMemo } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, ScrollView,
  TextInput, SafeAreaView, StatusBar, KeyboardAvoidingView, Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BackHeader from '../../components/ui/BackHeader';
import { spacing, radius, shadows, AppColors } from '../../theme';
import { useApp } from '../../context/AppContext';

const DISHES = [
  { name: 'Milanesa de Pollo',        emoji: '🍗' },
  { name: 'Carne Asada',              emoji: '🥩' },
  { name: 'Enchiladas',               emoji: '🌮' },
  { name: 'Tacos',                    emoji: '🌮' },
  { name: 'Chiles Rellenos',          emoji: '🫑' },
  { name: 'Pozole',                   emoji: '🍲' },
  { name: 'Tamales',                  emoji: '🫔' },
  { name: 'Quesadillas',              emoji: '🧀' },
  { name: 'Sopes',                    emoji: '🫓' },
  { name: 'Pasta',                    emoji: '🍝' },
  { name: 'Pizza Margarita',          emoji: '🍕' },
  { name: 'Sushi de Salmón',          emoji: '🍣' },
  { name: 'Hamburguesa con Queso',    emoji: '🍔' },
  { name: 'Pasta Alfredo',            emoji: '🍝' },
  { name: 'Paella',                   emoji: '🥘' },
  { name: 'Curry de Pollo',           emoji: '🍛' },
  { name: 'Lasaña',                   emoji: '🫕' },
  { name: 'Filete de Salmón',         emoji: '🐟' },
  { name: 'Pollo a la Parrilla',      emoji: '🍗' },
  { name: 'Risotto de Champiñones',   emoji: '🍄' },
  { name: 'Tostadas de Aguacate',     emoji: '🥑' },
  { name: 'Sopa de Tomate',           emoji: '🍅' },
  { name: 'Pad Thai',                 emoji: '🍜' },
  { name: 'Pescado a la Parrilla',    emoji: '🐠' },
  { name: 'Fajitas de Res',           emoji: '🌯' },
  { name: 'Burritos',                 emoji: '🌯' },
  { name: 'Tarta de Queso',           emoji: '🍰' },
  { name: 'Bistec con Puré',          emoji: '🥩' },
  { name: 'Sopa de Lentejas',         emoji: '🍲' },
  { name: 'Espagueti Boloñesa',       emoji: '🍝' },
];

const FavoriteDishesForm = ({ navigation }: { navigation: any }) => {
  const { colors, isDark } = useApp();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [search, setSearch] = useState('');

  const filtered = search.trim()
    ? DISHES.filter(d => d.name.toLowerCase().includes(search.toLowerCase()))
    : DISHES;

  const toggle = (name: string) =>
    setSelected(prev => {
      const next = new Set(prev);
      next.has(name) ? next.delete(name) : next.add(name);
      return next;
    });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} backgroundColor={colors.card} />
      <BackHeader onPress={() => navigation.goBack()} />
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>

        <View style={styles.header}>
          <Text style={styles.title}>¿Qué te gusta comer?</Text>
          <Text style={styles.subtitle}>
            Selecciona tus platillos favoritos para personalizar tu experiencia
          </Text>
          <View style={styles.searchRow}>
            <Icon name="search-outline" size={17} color={colors.gray400} />
            <TextInput
              style={styles.searchInput}
              placeholder="Buscar platillo..."
              placeholderTextColor={colors.textLight}
              value={search}
              onChangeText={setSearch}
            />
            {search.length > 0 && (
              <TouchableOpacity onPress={() => setSearch('')}>
                <Icon name="close-circle" size={17} color={colors.gray400} />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.chipsWrap}
          keyboardShouldPersistTaps="handled"
        >
          {filtered.map(dish => {
            const active = selected.has(dish.name);
            return (
              <TouchableOpacity
                key={dish.name}
                style={[styles.chip, active && styles.chipActive]}
                onPress={() => toggle(dish.name)}
                activeOpacity={0.75}
              >
                <Text style={styles.chipEmoji}>{dish.emoji}</Text>
                <Text style={[styles.chipText, active && styles.chipTextActive]}>{dish.name}</Text>
                {active && <Icon name="checkmark" size={14} color="#FFFFFF" />}
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        <View style={styles.bottomBar}>
          {selected.size > 0 && (
            <Text style={styles.selectedCount}>{selected.size} seleccionados</Text>
          )}
          <TouchableOpacity
            style={[styles.btn, selected.size === 0 && styles.btnDisabled]}
            onPress={() => navigation.navigate('AddPaymentMethod')}
            activeOpacity={0.85}
          >
            <Text style={styles.btnText}>{selected.size === 0 ? 'Omitir por ahora' : 'Continuar'}</Text>
            <Icon name="arrow-forward" size={18} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const makeStyles = (colors: AppColors) => StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.surface },
  header: {
    backgroundColor: colors.card,
    paddingHorizontal: spacing.md, paddingTop: spacing.md, paddingBottom: spacing.sm,
    borderBottomWidth: 1, borderBottomColor: colors.border, gap: spacing.sm,
  },
  title: { fontSize: 22, fontWeight: '700', color: colors.text },
  subtitle: { fontSize: 14, color: colors.textSecondary, lineHeight: 20 },
  searchRow: {
    flexDirection: 'row', alignItems: 'center', gap: spacing.sm,
    backgroundColor: colors.surface,
    borderRadius: radius.md, borderWidth: 1.5, borderColor: colors.border,
    paddingHorizontal: spacing.md, height: 44,
  },
  searchInput: { flex: 1, fontSize: 15, color: colors.text, padding: 0 },
  chipsWrap: { flexDirection: 'row', flexWrap: 'wrap', padding: spacing.md, gap: spacing.sm },
  chip: {
    flexDirection: 'row', alignItems: 'center', gap: 6,
    backgroundColor: colors.card,
    borderRadius: radius.full,
    paddingHorizontal: spacing.md, paddingVertical: 9,
    borderWidth: 1.5, borderColor: colors.border,
  },
  chipActive: { backgroundColor: colors.primary, borderColor: colors.primary },
  chipEmoji: { fontSize: 15 },
  chipText: { fontSize: 13, fontWeight: '500', color: colors.text },
  chipTextActive: { color: '#FFFFFF', fontWeight: '600' },
  bottomBar: {
    paddingHorizontal: spacing.md, paddingVertical: spacing.md,
    backgroundColor: colors.card,
    borderTopWidth: 1, borderTopColor: colors.border, gap: spacing.sm,
  },
  selectedCount: { fontSize: 13, color: colors.textSecondary, fontWeight: '600', textAlign: 'center' },
  btn: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    gap: spacing.sm, backgroundColor: colors.primary,
    borderRadius: radius.md, paddingVertical: 15, ...shadows.sm,
  },
  btnDisabled: { backgroundColor: colors.gray400 },
  btnText: { color: '#FFFFFF', fontSize: 16, fontWeight: '700' },
});

export default FavoriteDishesForm;
