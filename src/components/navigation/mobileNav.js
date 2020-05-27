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
		height: 100vh;
    align-items: center;
    width: 75vw;
    height:100vh;
    background:var(--background);

`;


const Links = styled.section `
			padding: 20px 0;
			display: flex;
			align-items: center;    
`;

const MobileMenuContainer = styled.section `
  display:flex;
  flex-direction:row;
  align-items: center;  
  justify-content:space-between;
  padding: 10px 40px;


  ${props => {
    if (props.scroll) {
      return `
        left: 0;
        padding:0px 25px;
        z-index: 99;        
        background: var(--background);
        width:100%;
        position: fixed;

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
