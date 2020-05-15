import React from "react"
import { Store } from "./src/context/Store"

//wrap whole website in store
export const wrapRootElement = ({ element }) => {
    return <Store>{element}</Store>
  }