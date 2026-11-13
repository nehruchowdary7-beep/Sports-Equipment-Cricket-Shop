tailwind.config = {
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'mobile': {'max': '639px'},
      'tablet': {'min': '640px', 'max': '1023px'},
      'desktop': {'min': '1024px', 'max': '1279px'},
      'large': {'min': '1280px'}
    },
    extend: {
      colors: {
        brand: {
          primary: '#0D0D12',
          surface: '#16161D',
          card: '#1E1E26',
          border: '#272732',
          blue: '#2563EB',
          blueHover: '#3B82F6',

          orange: '#2563EB',
          orangeHover: '#3B82F6',
          crimson: '#2563EB',
          crimsonHover: '#3B82F6',
          navyDeep: '#0D0D12',
          navySurface: '#16161D',
          navyCard: '#1E1E26',
          navyBorder: '#272732'
        }
      },
      fontFamily: {
        heading: ['Urbanist', 'sans-serif'],
        sans: ['Urbanist', 'sans-serif'],
        mono: ['Urbanist', 'sans-serif']
      }
    }
  }
};
