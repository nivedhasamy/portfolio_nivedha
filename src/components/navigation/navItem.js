import React from "react"
import { Location } from "@reach/router"

const NavItem = ({ data }) => {
  return (
    <Location>
      {({ location }) => {
        return (
          <span>
            <a
              onClick={() => {
                document
                  .getElementById(`${data}`)
                  .scrollIntoView({ block: "start", behavior: "smooth" })
              }}
              smooth={true}
              className={
                "/" + location.pathname.split("/")[1] === `#${data}`
                  ? "active"
                  : ""
              }
            >
              <span>{data}</span>
            </a>
          </span>
        )
      }}
    </Location>
  )
}

export default NavItem
