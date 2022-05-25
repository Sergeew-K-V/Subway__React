import { createSlice } from '@reduxjs/toolkit'

export const modalCustomState = createSlice({
  name: 'currentPageCounterName',
  initialState: {
    currentPage: 0,
    arrayOfCards: [],
    customProduct: {
      id: 'customProduct-' + `${Date.now()}`,
      name: 'Product-' + `${Date.now()}`.slice(7, 14),
      price: 10,
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
          newCards.push({ ...element, selected: false })
        }
      })
      state.arrayOfCards = newCards
    },
    incrementQuantity: (state) => {
      state.customProduct.quantity += 1
    },
    decrementQuantity: (state) => {
      state.customProduct.quantity -= 1
    },
    changeQuantityByAmount: (state, action) => {
      state.customProduct.quantity = action.payload
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
    getTotalPriceOnSending: (state) => {
      if (state.customProduct.quantity !== 0) {
        const calculatedPrice = state.customProduct.price * state.customProduct.quantity
        state.customProduct.price = calculatedPrice
        console.log('getTotalPrice of modal')
      }
    },
    selectCard: (state, action) => {
      switch (action.payload.fillingsType) {
        case 'size':
          break
        case 'bread':
          break
        case 'vegetables':
          break
        case 'sauces':
          break
        case 'fillings':
          break
      }
    },
  },
})

export const {
  initCards,
  incrementCurrentPage,
  decrementCurrentPage,
  changeCurrentPageByAmount,
  incrementQuantity,
  decrementQuantity,
  changeQuantityByAmount,
  getTotalPriceOnSending,
  selectCard,
} = modalCustomState.actions

export default modalCustomState.reducer
