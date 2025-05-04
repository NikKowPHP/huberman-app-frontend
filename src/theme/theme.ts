import { Theme } from '@fluentui/react-native';

// Define base theme aligned with Fluent UI principles and potential Figma styles
const theme: Theme = {
  colors: {
    // Fluent UI Neutral Colors
    neutralForeground1: '#201F1E',
    neutralForeground2: '#484644',
    neutralForeground3: '#605E5C',
    neutralForeground4: '#797775',
    neutralForegroundDisabled: '#A19F9D',

    neutralBackground1: '#FFFFFF',
    neutralBackground2: '#F5F5F5',
    neutralBackground3: '#E1DFDE',
    neutralBackground4: '#D2D0CE',
    neutralBackgroundDisabled: '#E1DFDE',

    brandForeground1: '#0078D4',
    brandForeground2: '#106EBE',
    brandForeground3: '#005A9E',
    brandForeground4: '#193B5B',

    brandBackground1: '#0078D4',
    brandBackground2: '#106EBE',
    brandBackground3: '#005A9E',
    brandBackground4: '#193B5B',

    // Add more colors based on Figma and Fluent UI palette as needed
    // Example: Status colors, accent colors, etc.
    statusDangerBackground1: '#D13438',
    statusSuccessBackground1: '#107D0A',
    statusWarningBackground1: '#F7630C',
  },
  typography: {
    // Fluent UI Typography Scale
    sizes: {
      caption2: 10,
      caption1: 12,
      body2: 14,
      body1: 16,
      subheading2: 18,
      subheading1: 20,
      heading2: 24,
      heading1: 28,
      display: 32,
    },
    weights: {
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    // Define specific text styles based on the scale
    caption2: {
      fontSize: 10,
      fontWeight: '400',
    },
    caption1: {
      fontSize: 12,
      fontWeight: '400',
    },
    body2: {
      fontSize: 14,
      fontWeight: '400',
    },
    body1: {
      fontSize: 16,
      fontWeight: '400',
    },
    subheading2: {
      fontSize: 18,
      fontWeight: '600',
    },
    subheading1: {
      fontSize: 20,
      fontWeight: '600',
    },
    heading2: {
      fontSize: 24,
      fontWeight: '700',
    },
    heading1: {
      fontSize: 28,
      fontWeight: '700',
    },
    display: {
      fontSize: 32,
      fontWeight: '700',
    },
    // Add more typography styles as needed
  },
  spacing: {
    // Fluent UI Spacing Scale (based on 4px grid)
    s1: 4,
    s2: 8,
    s3: 12,
    s4: 16,
    s5: 20,
    s6: 24,
    s7: 28,
    s8: 32,
    s9: 36,
    s10: 40,
    // Add more spacing units as needed
  },
  // Add other theme properties like borderRadius, etc.
  borderRadius: {
    none: 0,
    small: 2,
    medium: 4,
    large: 8,
    xLarge: 12,
    circle: 999, // Example for a fully rounded shape
  },
};

export default theme;
