const theme = {
  gradientBgMixin: (primaryColor,secondaryColor) => `
  background: ${primaryColor};  
  background: -webkit-linear-gradient(to right , ${primaryColor}, ${secondaryColor}); 
  background: linear-gradient(to right , ${primaryColor}, ${secondaryColor});
`,
gradientTextMixin: (primaryColor,secondaryColor) => `
  background: ${primaryColor};  
  background: -webkit-linear-gradient(to right , ${primaryColor}, ${secondaryColor}); 
  background: linear-gradient(to right , ${primaryColor}, ${secondaryColor});
  -webkit-background-clip: text;
     -webkit-text-fill-color: transparent;
`,
    colors: {
      main: '#127EB1',
      light: '#089ECA',
      lighter: '#36A6BA',
      primaryColor: '#fc0142',
      secondaryColor: '#9A19FF',
      textBlue: '#6888df',
      navHightlight:'#B75492',
      
      lightTheme: {
        background: '#fff',
        textPrimary: "#000",
        textSecondary: "#4e4c4c",
        textTertiary: "#85878c",
        titleColor: '#28161C',
        opacity:0.8,      
      },
      darkTheme: {
        background: '#171B27',
        textPrimary:'#5E5E5E',
        textSecondary:  "#B9B9B9",
        textTertiary:"#919191",
        titleColor: '#C6C6C6',
        opacity:0.6,
      },
    },
    mediaQueries: {
      smallest: `only screen and (max-width: 25em)`,
      smaller: 'only screen and (max-width: 31.25em)',
      small: 'only screen and (max-width: 37.5em)',
      medium: 'only screen and (max-width: 56.25em)',
      large: 'only screen and (max-width: 80em)',
      larger: 'only screen and (max-width: 90em)',
      largest: 'only screen and (max-width: 97em)',
    },
  };
  
  export default theme;
  