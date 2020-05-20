
import React,{useEffect, useState} from "react";
import { Link } from "gatsby";
import NavLinks from "./navLinks";
import Logo from "./logo";
import ThemeSwitchButton from './switchTheme';
import styled from 'styled-components';

const NavContainer = styled.section `
display: flex;
position: fixed;
top:0;
width: 100%;
justify-content: space-between;
padding: 8px 44px;
align-items: center;
transition: height .25s;

background: var(--background);
  @media ${props => props.theme.mediaQueries.small} {
    display:none;
  }

  
${props => {
    if (props.scroll) {
      return `
        left: 0;
        padding:0px 15px;
        z-index: 99;        
        
         &:after{
            content: "";
            position: absolute;
            z-index: -1;
            background: var(--myGradient);
            left:0;
            height: 3px;
            top:97%;
            width:100%;
            opacity:.4;
        }
      `;
    } else {
      return `
        position: fixed;
        padding: 8px 44px;
        align-items: center;
        transition: height 10s;
      `;
    }
  }}

`;

const NavLinksDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Navbar = ({theme}) => {
    const [scroll, setScrollState] = useState(false);
    
    useEffect(() => {
        window.addEventListener("scroll", function() {
                    if (this.scrollY > 0) {
                        setScrollState(true);
                    } else {
                        setScrollState(false);
                    }
                });
            },[scroll])

    return (
        <NavContainer scroll={scroll} >
            <div >
                <Link to="/">
                    <Logo />
                </Link>
            </div>
           < NavLinksDiv>
                <NavLinks />  
                <ThemeSwitchButton/>
            </NavLinksDiv>     
        </NavContainer>
    );
}


export default Navbar;

