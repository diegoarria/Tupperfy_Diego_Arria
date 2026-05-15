import { TextStyle } from 'react-native';

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const radius = {
  sm: 6,
  md: 10,
  lg: 16,
  xl: 24,
  full: 999,
};

export const shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.16,
    shadowRadius: 16,
    elevation: 8,
  },
};

export const typography = {
  h1: { fontSize: 32, fontWeight: '700', letterSpacing: -0.5 } as TextStyle,
  h2: { fontSize: 24, fontWeight: '700', letterSpacing: -0.3 } as TextStyle,
  h3: { fontSize: 20, fontWeight: '600', letterSpacing: -0.2 } as TextStyle,
  h4: { fontSize: 17, fontWeight: '600' } as TextStyle,
  body: { fontSize: 15, fontWeight: '400', lineHeight: 22 } as TextStyle,
  bodySmall: { fontSize: 13, fontWeight: '400', lineHeight: 18 } as TextStyle,
  caption: { fontSize: 11, fontWeight: '400' } as TextStyle,
  label: { fontSize: 13, fontWeight: '600' } as TextStyle,
};

export interface AppColors {
  primary: string;
  primaryLight: string;
  secondary: string;
  warning: string;
  error: string;
  success: string;
  background: string;
  surface: string;
  card: string;
  text: string;
  textLight: string;
  textSecondary: string;
  gray300: string;
  gray400: string;
  gray600: string;
  border: string;
  white: string;
  black: string;
}

export const lightColors: AppColors = {
  primary: '#0047AB',
  primaryLight: '#EBF1FF',
  secondary: '#2CB67D',
  warning: '#FFD166',
  error: '#EF4444',
  success: '#10B981',
  background: '#F8F7F4',
  surface: '#F5F5F5',
  card: '#FFFFFF',
  text: '#1A1A1A',
  textLight: '#8E8E93',
  textSecondary: '#6B7280',
  gray300: '#D1D5DB',
  gray400: '#9CA3AF',
  gray600: '#52525B',
  border: '#E5E5EA',
  white: '#FFFFFF',
  black: '#000000',
};

export const darkColors: AppColors = {
  primary: '#0047AB',
  primaryLight: '#0A1F3D',
  secondary: '#2CB67D',
  warning: '#FFD166',
  error: '#EF4444',
  success: '#10B981',
  background: '#0F0F0F',
  surface: '#2C2C2E',
  card: '#1C1C1E',
  text: '#F2F2F7',
  textLight: '#8E8E93',
  textSecondary: '#AEAEB2',
  gray300: '#48484A',
  gray400: '#636366',
  gray600: '#AEAEB2',
  border: '#38383A',
  white: '#FFFFFF',
  black: '#000000',
};
