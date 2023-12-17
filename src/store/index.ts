import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit"

// 从 store 本身推断出 `RootState` 和 `AppDispatch` 类型
export type RootState = ReturnType<typeof store.getState>
// 推断出类型: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
interface State {
  value: number
}

// 使用该类型定义初始 state
const initialState: State = {
  value: 0,
}

const counterSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    incremented: (state) => {
      // Redux Toolkit 允许在 reducers 中编写 "mutating" 逻辑。
      // 它实际上并没有改变 state，因为使用的是 Immer 库，检测到“草稿 state”的变化并产生一个全新的
      // 基于这些更改的不可变的 state。
      state.value += 1
    },
    decremented: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const { incremented, decremented, incrementByAmount } =
  counterSlice.actions

export const asyncAdd = (amount: number) => {
  return (dispatch: AppDispatch) => {
    setTimeout(() => {
      dispatch(incrementByAmount(amount))
    }, 3000)
  }
}

const store = configureStore({
  reducer: counterSlice.reducer,
})

export default store
