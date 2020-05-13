import React from "react"
import { navigate } from "gatsby"
import checkAuth from "../services/helper"

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = checkAuth.authorise()

  if (isLoggedIn) {
    return <Component {...rest} />
  } else {
    navigate("/login")
    return null
  }
}

export default PrivateRoute