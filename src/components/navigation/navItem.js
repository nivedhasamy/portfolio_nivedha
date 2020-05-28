import React from "react";
import Link from "../utils/link";
import { Location } from "@reach/router";

const NavItem = ({data}) => {
    const anchorAttrs = {
        href: `#${data}`,
        title: data
    };
    console.log(data)
    return (
        <Location>
            {({ location }) => {
                return (
                    <span>
                        <a onClick={() => {document.getElementById(`${data}`).scrollIntoView({ block: 'start',  behavior: 'smooth' })}}
                            //to={`#${data}`}
                            smooth={true}
                            //{...anchorAttrs}
                            className={
                                "/" + location.pathname.split("/")[1] ===
                                `#${data}`
                                    ? "active"
                                    : ""
                            }
                        >
                            <span>{data}</span>
                        </a>
                    </span>
                );
            }}
        </Location>
    );
}

export default NavItem;