import { createSlice } from '@reduxjs/toolkit'

export const modalCustomState = createSlice({
  name: 'currentPageCounterName',
  initialState: {
    currentPage: 0,
    arrayOfCards: [],
    customProduct: {
      id: 'customProduct-' + `${Date.now()}`,
      name: 'Product-' + `${Date.now()}`.slice(7, 14),
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
    initCards: (state, action) => {
      const newCards = [...state.arrayOfCards.map((item) => ({ ...item }))]
      action.payload.forEach((element) => {
        const includedElement = state.arrayOfCards.some((el) => element._id === el._id)
        if (!includedElement) {
          newCards.push({ ...element })
          debugger
        }
      })
      state.arrayOfCards = newCards
    },
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

export const { incrementCurrentPage, decrementCurrentPage, changeCurrentPageByAmount, initCards } =
  modalCustomState.actions

export default modalCustomState.reducer
