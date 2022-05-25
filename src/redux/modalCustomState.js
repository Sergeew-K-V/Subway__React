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
      console.log('id card ', action.payload._id)
      const currentCard = state.arrayOfCards.find((el) => el._id === action.payload._id)
      currentCard.selected = !currentCard.selected
      switch (action.payload.fillingsType) {
        case 'size':
          if (currentCard.selected) {
            state.customProduct.sizeId = action.payload._id
            state.customProduct.size = action.payload.name
          } else {
            state.customProduct.sizeId = ''
            state.customProduct.size = ''
          }
          break
        case 'bread':
          if (currentCard.selected) {
            state.customProduct.breadId = action.payload._id
            state.customProduct.bread = action.payload.name
          } else {
            state.customProduct.breadId = ''
            state.customProduct.bread = ''
          }
          break
        case 'vegetables':
          if (currentCard.selected) {
            state.customProduct.vegetablesId.push(action.payload._id)
            state.customProduct.vegetables.push(action.payload)
          } else {
            state.customProduct.vegetables = state.customProduct.vegetablesId.filter(
              (el) => el !== action.payload._id
            )
            state.customProduct.vegetables = state.customProduct.vegetables.filter(
              (el) => el !== action.payload
            )
          }
          break
        case 'sauces':
          if (currentCard.selected) {
            if (
              state.customProduct.saucesId.length === 3 &&
              !state.customProduct.saucesId.includes(action.payload._id)
            ) {
              alert('Вы выбрали максимальное кол-во соусов')
              break
            }
            state.customProduct.saucesId.push(action.payload._id)
            state.customProduct.sauces.push(action.payload)
          } else {
            state.customProduct.saucesId = state.customProduct.saucesId.filter(
              (el) => el !== action.payload._id
            )
            state.customProduct.sauces = state.customProduct.sauces.filter(
              (el) => el !== action.payload
            )
          }
          break
        case 'fillings':
          if (currentCard.selected) {
            state.customProduct.fillingsId.push(action.payload._id)
            state.customProduct.fillings.push(action.payload)
          } else {
            state.customProduct.fillingsId = state.customProduct.fillingsId.filter(
              (el) => el !== action.payload._id
            )
            state.customProduct.fillings = state.customProduct.fillings.filter(
              (el) => el !== action.payload
            )
          }
          break
      }
      // console.log('1', state.customProduct.size)
      // console.log('2', state.customProduct.bread)
      // console.log('3', state.customProduct.vegetables)
      // console.log('4', state.customProduct.sauces)
      // console.log('5', state.customProduct.fillings)
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
