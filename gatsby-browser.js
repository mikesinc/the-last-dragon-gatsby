// gatsby-browser.js
import React from "react"
import { Store } from "./src/context/Store"

//Allow reference to previous URL for login page
export const onRouteUpdate = ({ location, prevLocation }) => {
  if (location && location.state)
    location.state.referrer = prevLocation ? prevLocation.pathname : null
}

//wrap whole website in store
export const wrapRootElement = ({ element }) => {
  return <Store>{element}</Store>
}
