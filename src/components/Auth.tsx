import React from "react"
import { Navigate } from "react-router-dom"

const getToken = () => {
  return "111"
}

interface IProps {
  children: React.ReactNode
}

const Auth: React.FC<IProps> = ({ children }) => {
  const token = getToken()
  if (!token) {
    return <Navigate to="/login" replace={true} />
  }
  return <>{children}</>
}

export default Auth
