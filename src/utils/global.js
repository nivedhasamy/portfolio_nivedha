import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `

    html {     
      box-sizing: border-box;
      line-height: 1.15;     
    }

    * {
      outline: none;
      box-sizing: inherit;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    *,
    *::before,
    *::after {
      box-sizing: inherit;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    ::selection {
        background: var(--primary-lighter); /* WebKit/Blink Browsers */
      }

    .animateBottomToTop  {
      animation: animatebottom 1s ;
      @keyframes animatebottom { 
        from{ margin-bottom:-100px; opacity:0;  } 
        to{  }
      }
    }


.animateLeftToRight {

animation: left_to_right 1s ease;
@keyframes left_to_right {
  from {    margin-left: -3em;  }
  to {    margin-left: 0;  }
}
}


.animateRightToLeft {
animation: right_to_left 1s ease;
@keyframes right_to_left {
  from {    margin-right: -3em;  }
  to {    margin-right: 0;  }
}
}

.animateTopToBottom {
animation: animatetop 2s ;
@keyframes animatetop { 
  from{ margin-top:100%; opacity:0;  } 
  to{ }
}
}
    body {
      font-family: 'Work Sans', sans-serif;
      margin: 0;
      width: 100%;
      height: 100%;
      overflow: visible;
      --primary: ${props => props.theme.colors.main};
      --primary-light: ${props => props.theme.colors.light};
      --primary-lighter: ${props => props.theme.colors.lighter};
      --navbar: rgba(255, 255, 255, 0.95);
      --text: ${props => props.theme.colors.lightTheme.text};
      --text-highlight: ${props => props.theme.colors.lightTheme.textHighlight};
      --background: ${props => props.theme.colors.lightTheme.background};
      --white: #fff;
      --shadow-btn: rgba(7, 49, 69, .1);
      --shadow-color: rgba(0, 0, 0, 0.1);
      background-color: var(--background);
      --primaryColor: '#fc0142';
      --myGradient: linear-gradient(to right, #fc0142, #9A19FF);
      --secondaryColor: '#9A19FF';
      --textBlue:  ${props => props.theme.colors.textBlue};
      --navHightlight:'#B75492';      
      --textPrimary: ${props => props.theme.colors.darkTheme.textPrimary};
      --textSecondary: ${props => props.theme.colors.darkTheme.textSecondary};
      --textTertiary: ${props => props.theme.colors.darkTheme.textTertiary};
      --titleColor: ${props => props.theme.colors.darkTheme.titleColor};
      --opacity:${props => props.theme.colors.darkTheme.opacity};
      &.light-mode {
      --navbar: rgba(255, 255, 255, 0.95);
      --text: ${props => props.theme.colors.lightTheme.text};
      --text-highlight: ${props => props.theme.colors.lightTheme.textHighlight};
      --background: ${props => props.theme.colors.lightTheme.background};
      --textPrimary: ${props => props.theme.colors.lightTheme.textPrimary};
      --textSecondary: ${props => props.theme.colors.lightTheme.textSecondary};
      --textTertiary: ${props => props.theme.colors.lightTheme.textTertiary};
      --titleColor: ${props => props.theme.colors.lightTheme.titleColor};
      --opacity:${props => props.theme.colors.lightTheme.opacity};
      }

      &.dark-mode {
        --navbar: rgba(33, 33, 33, 0.95);
        --text: ${props => props.theme.colors.darkTheme.text};
        --text-highlight: ${props =>
          props.theme.colors.darkTheme.textHighlight};
        --background: ${props => props.theme.colors.darkTheme.background};
        --textPrimary: ${props => props.theme.colors.darkTheme.textPrimary};
        --textSecondary: ${props => props.theme.colors.darkTheme.textSecondary};
        --textTertiary: ${props => props.theme.colors.darkTheme.textTertiary};
      }
    }

    p{
      font-size: 1.1rem;
    }

    form,
    input,
    textarea,
    button,
    select,
    a {
      -webkit-tap-highlight-color: rgba(0,0,0,0);
    }
`;