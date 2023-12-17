import { useDispatch, useSelector } from "react-redux"

import { incremented, decremented, asyncAdd } from "@/store"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { Button } from "antd"

export default function Counter() {
  const dispatch = useAppDispatch()
  const count = useAppSelector((state) => state.value)

  const increment = () => {
    dispatch(incremented())
  }

  const decrement = () => {
    dispatch(decremented())
  }

  const incrementAsync = () => {
    dispatch(asyncAdd(2))
  }

  return (
    <div>
      <p>{count}</p>
      <Button onClick={increment}>+</Button>
      <Button onClick={decrement}>-</Button>
      <Button onClick={incrementAsync}>async</Button>
    </div>
  )
}
