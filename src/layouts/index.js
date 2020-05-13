import React from "react"
import NavBar from "../components/NavBar"
import { Store } from "../context/Store"
import "bootstrap/dist/css/bootstrap.min.css"

export default ({ children }) => {
  return (
    <Store>
      <NavBar />
      {children}
    </Store>
  )
}