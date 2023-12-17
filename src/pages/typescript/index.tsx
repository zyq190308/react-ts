import { Input } from "antd"
import React, { useCallback, useState } from "react"

interface IProps {
  name: string
  age: number
  style: React.CSSProperties
  children: React.ReactNode
}

const Typescript: React.FC<IProps> = ({ name, age, children, style }) => {
  const [value, setValue] = useState<string>("Change me")
  const [value2, setValue2] = useState<string>("Change me2")
  // usecallback
  const handleChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
    (event) => {
      setValue(event.currentTarget.value)
    },
    [setValue]
  )

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue2(event.currentTarget.value)
  }

  return (
    <div style={style}>
      <div>
        name:{name}/age: {age}
      </div>
      <div>
        value：{value} value2：{value2}
      </div>
      <Input value={value} onChange={handleChange} />
      <Input value={value2} onChange={handleChange2} />
      <div>{children}</div>
    </div>
  )
}

export default Typescript
