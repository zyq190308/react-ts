import { Button } from "antd"
import { useEffect } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"

export default function Home() {
  const navigate = useNavigate()
  const go = () => {
    navigate("/about/1")
  }

  useEffect(() => {
    axios.get("/users").then((res) => {
      console.log(11, res.data)
    })
  }, [])

  return (
    <>
      <ul>
        <li>
          {" "}
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/login">login</Link>
        </li>
        <li>
          <Link to="/query?id=1">query</Link>
        </li>
      </ul>
      <Button onClick={go}>点击跳转about</Button>
    </>
  )
}
