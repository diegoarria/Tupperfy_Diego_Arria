import React, { useState, useEffect } from 'react';
import { Modal, View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

interface Props {
  modal?: boolean;
  open: boolean;
  mode?: 'date' | 'time' | 'datetime';
  date: Date;
  maximumDate?: Date;
  minimumDate?: Date;
  onConfirm: (date: Date) => void;
  onCancel: () => void;
}

export default function DatePicker({ open, date, maximumDate, minimumDate, onConfirm, onCancel, mode = 'date' }: Props) {
  const [tempDate, setTempDate] = useState(date);

  useEffect(() => { setTempDate(date); }, [date]);

  if (!open) return null;

  if (Platform.OS === 'ios') {
    return (
      <Modal transparent visible={open} animationType="slide">
        <View style={styles.backdrop}>
          <View style={styles.sheet}>
            <View style={styles.toolbar}>
              <TouchableOpacity onPress={onCancel}>
                <Text style={styles.cancelBtn}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onConfirm(tempDate)}>
                <Text style={styles.doneBtn}>Listo</Text>
              </TouchableOpacity>
            </View>
            <DateTimePicker
              value={tempDate}
              mode={mode}
              maximumDate={maximumDate}
              minimumDate={minimumDate}
              display="spinner"
              onChange={(_, selected) => { if (selected) setTempDate(selected); }}
            />
          </View>
        </View>
      </Modal>
    );
  }

  return (
    <DateTimePicker
      value={tempDate}
      mode={mode}
      maximumDate={maximumDate}
      minimumDate={minimumDate}
      display="default"
      onChange={(_, selected) => {
        if (selected) onConfirm(selected);
        else onCancel();
      }}
    />
  );
}

const styles = StyleSheet.create({
  backdrop: { flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.4)' },
  sheet: { backgroundColor: '#fff', borderTopLeftRadius: 16, borderTopRightRadius: 16 },
  toolbar: {
    flexDirection: 'row', justifyContent: 'space-between',
    paddingHorizontal: 16, paddingVertical: 12,
    borderBottomWidth: 1, borderBottomColor: '#E5E5EA',
  },
  cancelBtn: { fontSize: 16, color: '#8E8E93' },
  doneBtn: { fontSize: 16, color: '#FF5A1F', fontWeight: '600' },
});
