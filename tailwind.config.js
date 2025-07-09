module.exports = {
  content: ["./pages/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Cybersecurity trust and digital depth
        primary: {
          DEFAULT: "#0F4C75", // slate-800
          50: "#F1F5F9", // slate-50
          100: "#E2E8F0", // slate-200
          200: "#CBD5E1", // slate-300
          300: "#94A3B8", // slate-400
          400: "#64748B", // slate-500
          500: "#475569", // slate-600
          600: "#334155", // slate-700
          700: "#1E293B", // slate-800
          800: "#0F172A", // slate-900
          900: "#020617", // slate-950
        },
        // Secondary Colors - Learning progression and growth
        secondary: {
          DEFAULT: "#3282B8", // blue-600
          50: "#EFF6FF", // blue-50
          100: "#DBEAFE", // blue-100
          200: "#BFDBFE", // blue-200
          300: "#93C5FD", // blue-300
          400: "#60A5FA", // blue-400
          500: "#3B82F6", // blue-500
          600: "#2563EB", // blue-600
          700: "#1D4ED8", // blue-700
          800: "#1E40AF", // blue-800
          900: "#1E3A8A", // blue-900
        },
        // Accent Colors - Urgent alerts and achievement celebrations
        accent: {
          DEFAULT: "#FF6B6B", // red-400
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          200: "#FECACA", // red-200
          300: "#FCA5A5", // red-300
          400: "#F87171", // red-400
          500: "#EF4444", // red-500
          600: "#DC2626", // red-600
          700: "#B91C1C", // red-700
          800: "#991B1B", // red-800
          900: "#7F1D1D", // red-900
        },
        // Background and Surface
        background: "#F8FAFC", // slate-50
        surface: "#E2E8F0", // slate-200
        // Text Colors
        text: {
          primary: "#1E293B", // slate-800
          secondary: "#64748B", // slate-500
        },
        // Status Colors
        success: {
          DEFAULT: "#10B981", // emerald-500
          50: "#ECFDF5", // emerald-50
          100: "#D1FAE5", // emerald-100
          200: "#A7F3D0", // emerald-200
          300: "#6EE7B7", // emerald-300
          400: "#34D399", // emerald-400
          500: "#10B981", // emerald-500
          600: "#059669", // emerald-600
          700: "#047857", // emerald-700
          800: "#065F46", // emerald-800
          900: "#064E3B", // emerald-900
        },
        warning: {
          DEFAULT: "#F59E0B", // amber-500
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
          200: "#FDE68A", // amber-200
          300: "#FCD34D", // amber-300
          400: "#FBBF24", // amber-400
          500: "#F59E0B", // amber-500
          600: "#D97706", // amber-600
          700: "#B45309", // amber-700
          800: "#92400E", // amber-800
          900: "#78350F", // amber-900
        },
        error: {
          DEFAULT: "#EF4444", // red-500
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          200: "#FECACA", // red-200
          300: "#FCA5A5", // red-300
          400: "#F87171", // red-400
          500: "#EF4444", // red-500
          600: "#DC2626", // red-600
          700: "#B91C1C", // red-700
          800: "#991B1B", // red-800
          900: "#7F1D1D", // red-900
        },
        // Cyber Confidence Palette
        teal: {
          DEFAULT: "#14B8A6", // teal-500
          50: "#F0FDFA", // teal-50
          100: "#CCFBF1", // teal-100
          200: "#99F6E4", // teal-200
          300: "#5EEAD4", // teal-300
          400: "#2DD4BF", // teal-400
          500: "#14B8A6", // teal-500
          600: "#0D9488", // teal-600
          700: "#0F766E", // teal-700
          800: "#115E59", // teal-800
          900: "#134E4A", // teal-900
        },
        "electric-blue": {
          DEFAULT: "#0EA5E9", // sky-500
          50: "#F0F9FF", // sky-50
          100: "#E0F2FE", // sky-100
          200: "#BAE6FD", // sky-200
          300: "#7DD3FC", // sky-300
          400: "#38BDF8", // sky-400
          500: "#0EA5E9", // sky-500
          600: "#0284C7", // sky-600
          700: "#0369A1", // sky-700
          800: "#075985", // sky-800
          900: "#0C4A6E", // sky-900
        },
        coral: "#FF7F7F", // Custom coral
        lime: {
          DEFAULT: "#84CC16", // lime-500
          50: "#F7FEE7", // lime-50
          100: "#ECFCCB", // lime-100
          200: "#D9F99D", // lime-200
          300: "#BEF264", // lime-300
          400: "#A3E635", // lime-400
          500: "#84CC16", // lime-500
          600: "#65A30D", // lime-600
          700: "#4D7C0F", // lime-700
          800: "#365314", // lime-800
          900: "#1A2E05", // lime-900
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        jetbrains: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      boxShadow: {
        'cyber': '0 4px 6px -1px rgba(15, 76, 117, 0.1), 0 2px 4px -1px rgba(15, 76, 117, 0.06)',
        'cyber-lg': '0 10px 15px -3px rgba(15, 76, 117, 0.1), 0 4px 6px -2px rgba(15, 76, 117, 0.05)',
        'cyber-xl': '0 20px 25px -5px rgba(15, 76, 117, 0.1), 0 10px 10px -5px rgba(15, 76, 117, 0.04)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-subtle': 'bounceSubtle 0.6s ease-in-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      transitionDuration: {
        'micro': '200ms',
        'state': '300ms',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
}