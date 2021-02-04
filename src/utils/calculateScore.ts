import { colors } from '../styles/theme';

export const calculateScore = (score: number) => {
  if (score > 4.5) {
    return {
      color: colors.primary,
      label: 'Excelente',
      recommended: true,
    };
  }
  if (score > 3.5) {
    return { color: colors.yellow, label: 'Bom', recommended: true };
  }
  if (score > 2.5) {
    return {
      color: colors.orange,
      label: 'Razoável',
      recommended: false,
    };
  }
  if (score > 1) {
    return {
      color: colors.orangeDark,
      label: 'Ruim',
      recommended: false,
    };
  }
  return {
    color: colors.redDark,
    label: 'Péssimo',
    recommended: false,
  };
};
