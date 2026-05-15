import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { useApp } from '../../context/AppContext';

export default function LogInView() {
  const { colors } = useApp();
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.card }]}>
      <Text style={{ color: colors.text, fontSize: 20 }}>Log In — próximamente</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, justifyContent: 'center', alignItems: 'center' } });
