import React from "react"
import { useLocation } from "react-router-dom"

export default function Query() {
  const { search } = useLocation()
  const id = new URLSearchParams(search).get("id")

  return <div>Query {id}</div>
}
