import React, { useContext } from "react"
import { navigate, Link } from "gatsby"
import { AuthContext } from "../context/Store"

const PrivateRoute = async ({ component: Component, ...rest }) => {
  const [isAuthorised] = useContext(AuthContext)

  return isAuthorised.isAuthorised ? <Component {...rest} /> : navigate("/login")

//   if (isAuthorised.isAuthorised) {
//     console.log('ye')
//     return <Component {...rest} />
//   } else {
//     console.log('na')
//     return navigate("/login")
//   }
// }
}
export default PrivateRoute