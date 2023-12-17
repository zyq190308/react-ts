import React from "react"
import { Navigate } from "react-router-dom"

const getCode = () => {
  return "403"
}

interface IProps {
  children: React.ReactNode
}

const Forbidden: React.FC<IProps> = ({ children }) => {
  const code = getCode()
  if (code === "403") {
    return <Navigate to="/403" />
  }
  return <>{children}</>
}

export default Forbidden
