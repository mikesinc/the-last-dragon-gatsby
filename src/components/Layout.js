import React, { useState, useEffect, useContext } from "react"
import NavBar from "./NavBar"
import "bootstrap/dist/css/bootstrap.min.css"
import checkAuth from "../services/helper"
import Loading from "../pages/loading"
import { AuthContext } from "../context/Store"

const Layout = ({ children }) => {
  const [isChecking, setIsChecking] = useState(true)
  const [, setIsAuthorised] = useContext(AuthContext)

  useEffect(() => {
    const authorise = async () => {
      const valid = await checkAuth.authorise()
      if (valid !== null) {
        if (valid) {
          setIsAuthorised({ type: "LOGIN", payload: [true, checkAuth.userID] })
        } else {
          setIsAuthorised({ type: "LOGIN", payload: [false, void 0] })
        }
        setIsChecking(false)
      }
    }
    authorise()
  }, [setIsAuthorised])

  if (isChecking) {
    return <Loading />
  } else {
    return (
      <>
        <NavBar />
        {children}
      </>
    )
  }
}

export default Layout
