import React, {useEffect,useState} from "react";
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
    z-index: 9999;
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


  ${props => {
    if (props.scroll) {
      return `
        left: 0;
        padding:8px 25px;
        z-index: 95;        
        background: var(--background);
        width:100%;
        position: fixed;
        transition: padding 500ms ease;
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
        transition: height 10s;
      `;
    }
  }}

`;

const SidebarContainer = styled.section`


`;

const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
  color:var(--textSecondary);
`;

function SidebarContents({onSetSidebarOpen}) {
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
            },[scroll])
            
    return (
      <SidebarContainer >
      <Sidebar
        sidebar={<SidebarContents onSetSidebarOpen={onSetSidebarOpen}/>}
        open={sidebarOpen}
        onSetOpen={onSetSidebarOpen}  
           
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
