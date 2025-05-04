
import { TextStyle } from 'react-native';

// Define a specific type for fontWeight based on TextStyle['fontWeight']
type FontWeight = TextStyle['fontWeight'];

// Define base theme aligned with Fluent UI principles and potential Figma styles
export interface Theme {
  colors: {
    neutralForeground1: string;
    neutralForeground2: string;
    neutralForeground3: string;
    neutralForeground4: string;
    neutralForegroundDisabled: string;

    neutralBackground1: string;
    neutralBackground2: string;
    neutralBackground3: string;
    neutralBackground4: string;
    neutralBackgroundDisabled: string;

    brandForeground1: string;
    brandForeground2: string;
    brandForeground3: string;
    brandForeground4: string;

    brandBackground1: string;
    brandBackground2: string;
    brandBackground3: string;
    brandBackground4: string;

    statusDangerBackground1: string;
    statusSuccessBackground1: string;
    statusWarningBackground1: string;
    primary: string;
    secondary: string;
  };
  typography: {
    sizes: {
      caption2: number;
      caption1: number;
      body2: number;
      body1: number;
      subheading2: number;
      subheading1: number;
      heading2: number;
      heading1: number;
      display: number;
    };
    weights: {
      regular: FontWeight;
      medium: FontWeight;
      semibold: FontWeight;
      bold: FontWeight;
    };
    caption2: {
      fontSize: number;
      fontWeight: FontWeight;
    };
    caption1: {
      fontSize: number;
      fontWeight: FontWeight;
    };
    body2: {
      fontSize: number;
      fontWeight: FontWeight;
    };
    body1: {
      fontSize: number;
      fontWeight: FontWeight;
    };
    subheading2: {
      fontSize: number;
      fontWeight: FontWeight;
    };
    subheading1: {
      fontSize: number;
      fontWeight: FontWeight;
    };
    heading2: {
      fontSize: number;
      fontWeight: FontWeight;
    };
    heading1: {
      fontSize: number;
      fontWeight: FontWeight;
    };
    display: {
      fontSize: number;
      fontWeight: FontWeight;
    };
  };
  spacing: {
    s1: number;
    s2: number;
    s3: number;
    s4: number;
    s5: number;
    s6: number;
    s7: number;
    s8: number;
    s9: number;
    s10: number;
    medium: number;
    large: number;
  };
  borderRadius: {
    none: number;
    small: number;
    medium: number;
    large: number;
    xLarge: number;
    circle: number;
  };
}

const theme: Theme = {
  colors: {
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

    statusDangerBackground1: '#D13438',
    statusSuccessBackground1: '#107D0A',
    statusWarningBackground1: '#F7630C',
    primary: '#0078D4',
    secondary: '#106EBE',
  },
  typography: {
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
      regular: '400' as FontWeight,
      medium: '500' as FontWeight,
      semibold: '600' as FontWeight,
      bold: '700' as FontWeight,
    },
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
  },
  spacing: {
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
    medium: 4,
    large: 8,
  },
  borderRadius: {
    none: 0,
    small: 2,
    medium: 4,
    large: 8,
    xLarge: 12,
    circle: 999,
  },
};

export default theme;
