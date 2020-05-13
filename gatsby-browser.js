// gatsby-browser.js
export const onRouteUpdate = ({ location, prevLocation }) => {
    if (location && location.state)
      location.state.referrer = prevLocation ? prevLocation.pathname : null
  }