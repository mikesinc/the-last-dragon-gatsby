import React, { useReducer, createContext } from "react"
import { authReducer } from "./reducers/authReducer"

export const AuthContext = createContext()

const initialState = {
  isAuthorised: undefined,
  user: void 0,
}

export const Store = props => {
  const [state, dispatch] = useReducer(authReducer, initialState)

  return (
    <AuthContext.Provider value={[state, dispatch]}>
      {props.children}
    </AuthContext.Provider>
  )
}