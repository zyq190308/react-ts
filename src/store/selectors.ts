import { RootState } from "."

// 选择器等其他代码可以使用导入的 `RootState` 类型
export const selectCount = (state: RootState) => state.value
