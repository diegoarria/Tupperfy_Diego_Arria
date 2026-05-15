import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { useApp } from '../../context/AppContext';

export default function CreateAccountView() {
  const { colors } = useApp();
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.card }]}>
      <Text style={{ color: colors.text, fontSize: 20 }}>Crear cuenta — próximamente</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, justifyContent: 'center', alignItems: 'center' } });
