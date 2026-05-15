import React, { useMemo } from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { spacing, AppColors } from '../../theme';
import { useApp } from '../../context/AppContext';

const HomePageView = ({ navigation }: { navigation: any }) => {
  const { colors, isDark } = useApp();
  const styles = useMemo(() => makeStyles(colors), [colors]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} backgroundColor={colors.card} />
      <View style={styles.content}>
        <Icon name="home" size={64} color={colors.primary} />
        <Text style={styles.title}>¡Bienvenido a Tupperfy!</Text>
        <Text style={styles.subtitle}>Home Page — próximamente</Text>
      </View>
    </SafeAreaView>
  );
};

const makeStyles = (colors: AppColors) => StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: spacing.md },
  title: { fontSize: 22, fontWeight: '700', color: colors.text },
  subtitle: { fontSize: 15, color: colors.textSecondary },
});

export default HomePageView;
