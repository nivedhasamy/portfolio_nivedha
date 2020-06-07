import React, { useEffect, useState } from "react";
import Sidebar from "react-sidebar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
} from '@fortawesome/free-solid-svg-icons';
import NavLinks from './navLinks';
import Social from '../socialLinks';
import Logo from "./logo";
import { Link } from "gatsby";
import styled from 'styled-components';

import ThemeSwitchButton from './switchTheme';

const MobileNavContainer = styled.section `

text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    background:var(--background);
    padding: 30px 0px;


       
    left: 0;
   width: 75vw;
    height:100vh;
    top: 0px;
    z-index: 100;
    position:relative;
    transition-property: left;
    transition-duration: 0.2s;
    transition-timing-function: linear;
    transform: translate3d(0px, 0px, 0px);
`;




const Links = styled.section `
      padding: 20px 0;
      display: flex;
      align-items: center; 
      flex-grow: 0.5;   
`;

const MobileMenuContainer = styled.section `
  display:flex;
  flex-direction:row;
  align-items: center;  
  justify-content:space-between;
  padding: 10px 20px;
background: var(--background);

        position: fixed;
        top:0;
        left: 0;
z-index: 90; 
width:100%;
height:75px;

  ${props => {
    if (props.scroll) {
      return `
        
        padding:8px 25px;
             height:68px;  
        
        
        transition: 500ms ease;
         &:after{
          
            content: "";
            position: absolute;
            z-index: -1;
            background: var(--myGradient);
            left:0;
            height: 3px;
            top:66px;
            width:100%;
            opacity:.4;
        }
      `;
    } else {
      return `
      transition: 500ms ease;
        position: fixed;
        justify-content:space-between;
        padding: 10px 20px;
        align-items: center;
        background: var(--background);
height:75px;
`;
    }
  }}

`;

const SidebarContainer = styled.section `


`;

const FontAwesomeIconStyled = styled(FontAwesomeIcon)
`
  color:var(--textSecondary);
`;

function SidebarContents({ onSetSidebarOpen }) {
    return (
        <MobileNavContainer  onClick={() => onSetSidebarOpen(false)}>
          <div>
              <Link to="/">
                  <Logo />
              </Link>
          </div>
          <Links>
              <NavLinks />
          </Links>
          <ThemeSwitchButton/>     
      </MobileNavContainer>
    );
}


const MobileNav = () => {


    const [scroll, setScrollState] = useState(false);
    const [sidebarOpen, onSetSidebarOpen] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", function() {
            if (this.scrollY > 0) {
                setScrollState(true);
            } else {
                setScrollState(false);
            }
        });
    }, [scroll])

    return (
        <SidebarContainer >
      <Sidebar
        sidebar={<SidebarContents onSetSidebarOpen={onSetSidebarOpen}/>}
        open={sidebarOpen}
        onSetOpen={onSetSidebarOpen}  
            styles={{
                        sidebar: {
                            zIndex: 101,
                            position: "fixed"
                        },
                        overlay: {
                            zIndex: 100
                        },
                        dragHandle: {
                            position: "fixed",
                            zIndex: "99999"
                        }
                    }}
      > 
      <MobileMenuContainer scroll={scroll}>
      <span  onClick={() => onSetSidebarOpen(true)}>
        <FontAwesomeIconStyled icon={faBars} size="lg"/>
      
</span>
      <Link to="/">
        <Logo />
    </Link>
      <div></div>
</MobileMenuContainer>
      </Sidebar>

</SidebarContainer>

    );
}


export default MobileNav;