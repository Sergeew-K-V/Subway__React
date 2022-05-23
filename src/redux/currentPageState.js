import { createSlice } from '@reduxjs/toolkit'

export const currentPageState = createSlice({
  name: 'currentPageCounterName',
  initialState: { value: 0 },
  reducers: {
    incrementCurrentPage: (state) => {
      state.value += 1
    },
    decrementCurrentPage: (state) => {
      state.value -= 1
    },
    changeCurrentPageByAmount: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { incrementCurrentPage, decrementCurrentPage, changeCurrentPageByAmount } =
  currentPageState.actions

export default currentPageState.reducer
