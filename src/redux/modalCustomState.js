import { createSlice } from '@reduxjs/toolkit'

export const modalCustomState = createSlice({
  name: 'currentPageCounterName',
  initialState: {
    currentPage: 0,
    customProduct: {
      name: '',
      price: 0,
      quantity: 0,
      size: '',
      sizeId: '',
      bread: '',
      breadId: '',
      vegetables: [],
      vegetablesId: [],
      sauces: [],
      saucesId: [],
      fillings: [],
      fillingsId: [],
    },
  },
  reducers: {
    incrementCurrentPage: (state) => {
      state.currentPage += 1
    },
    decrementCurrentPage: (state) => {
      state.currentPage -= 1
    },
    changeCurrentPageByAmount: (state, action) => {
      state.currentPage = action.payload
    },
  },
})

export const { incrementCurrentPage, decrementCurrentPage, changeCurrentPageByAmount } =
  modalCustomState.actions

export default modalCustomState.reducer
