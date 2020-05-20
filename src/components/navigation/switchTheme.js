import React, { useContext, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThemeContext } from 'styled-components';
import {
    faSun,
    faMoon,
  } from '@fortawesome/free-solid-svg-icons';
  import useDarkMode from 'use-dark-mode';

  
const ThemeSwitchButton = () => {
   
    const darkMode = useDarkMode(false);
   
        return (
            <React.Fragment>
           
                    <div
                        className="theme-switch-button"
                    >
                        <div
                            title="Switch to Dark Mode"
                            data-switch-to="dark"
                            style={{display:`${darkMode.value? 'none' : 'block'}`}}                            
                            onClick={darkMode.toggle}
                        >
                            <FontAwesomeIcon style={{color:'orange'}} icon={faSun} size="lg"/>
                        </div>
                        <div
                            title="Switch to Light Mode"
                            data-switch-to="light"
                            style={{display:`${darkMode.value? 'block' : 'none'}`}}                            
                            onClick={darkMode.toggle}
                        >
                            <FontAwesomeIcon style={{color:'#FAF7FF'}} icon={faMoon} size="lg"/>
                        </div>
                    </div>

            </React.Fragment>
        );
}

export default ThemeSwitchButton;