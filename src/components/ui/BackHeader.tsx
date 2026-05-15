import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useApp } from '../../context/AppContext';

interface Props {
  onPress: () => void;
}

export default function BackHeader({ onPress }: Props) {
  const { colors } = useApp();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.btn, { backgroundColor: colors.surface, borderColor: colors.border }]}
        activeOpacity={0.7}
        hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
      >
        <Icon name="arrow-back" size={20} color={colors.text} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 16, paddingTop: 8, paddingBottom: 4 },
  btn: {
    width: 40, height: 40, borderRadius: 20,
    justifyContent: 'center', alignItems: 'center',
    borderWidth: 1,
  },
});
