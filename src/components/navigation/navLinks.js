import React from "react";
import NavItem from './navItem';
import styled from 'styled-components';

const NavLinksContainer = styled.div `
 
align-self: center;

a {
    margin: 0 10px;
    position: relative;            
    color: var(--textBlue);
    text-decoration: none;
    text-transform: uppercase;
    &:before {
        content: "";
        position: absolute;
        width: 36px;
        height: 36px;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%) scale(0);
        border-radius: 50%;
        opacity: 0.2;
        transition: transform 0.25s;
        background: red;
    }

    &.active:before,
    &:focus:before,
    &:hover:before {
        transform: translate(-50%,-50%) scale(1);
    }

    span {
        position: relative;
        z-index: 2;
    }
}


@media ${props => props.theme.mediaQueries.small} {
    display:flex;
    flex-direction:column;
    line-height: 2rem;
  }


`;

 const NavLinks = () =>  {
   
    const items = ['home', 'about', 'portfolio', 'blogs', 'contact'];

    let list = [];
    list = items.map((item, i) => <NavItem key={item + "-" + i} data={item} />);
    
    return <NavLinksContainer>{list}</NavLinksContainer>;
}

export default NavLinks;