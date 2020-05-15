import React, { useContext } from "react"
import { navigate } from "gatsby"
import { AuthContext } from "../context/Store"

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [isAuthorised] = useContext(AuthContext)

  if (isAuthorised.isAuthorised === true) {
    return <Component {...rest} />
  } else {
    navigate("/login")
    return null
  }
}
export default PrivateRoute