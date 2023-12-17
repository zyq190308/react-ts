import { useEffect, useState } from "react"

import store, { incremented, decremented } from "../../store"
import { Button } from "antd"

export default function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    store.subscribe(() => {
      const state:any = store.getState()
      console.log("state", state)
      setCount(state.value)
    })
  }, [])

  const increment = () => {
    store.dispatch(incremented())
  }

  const decrement = () => {
    store.dispatch(decremented())
  }

  return (
    <div>
      <p>{count}</p>
      <Button onClick={increment}>+</Button>
      <Button onClick={decrement}>-</Button>
    </div>
  )
}
