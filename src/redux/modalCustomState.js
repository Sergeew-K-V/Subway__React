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
    // priceChecking: (state,action)=>{
    // }
    selectCard: (state, action) => {
      console.log('id card ', action.payload._id)
      const currentCard = state.arrayOfCards.find((el) => el._id === action.payload._id)
      currentCard.selected = !currentCard.selected
      switch (currentCard.fillingsType) {
        case 'size':
          if (currentCard.selected) {
            state.customProduct.sizeId = currentCard._id
            state.customProduct.size = currentCard.name
            state.customProduct.price += currentCard.price
          } else {
            state.customProduct.sizeId = ''
            state.customProduct.size = ''
            state.customProduct.price -= currentCard.price
          }
          break
        case 'bread':
          if (currentCard.selected) {
            state.customProduct.breadId = currentCard._id
            state.customProduct.bread = currentCard.name
            state.customProduct.price += currentCard.price
          } else {
            state.customProduct.breadId = ''
            state.customProduct.bread = ''
            state.customProduct.price -= currentCard.price
          }
          break
        case 'vegetables':
          if (currentCard.selected) {
            state.customProduct.vegetablesId.push(currentCard._id)
            state.customProduct.vegetables.push(currentCard)
            state.customProduct.price += currentCard.price
          } else {
            state.customProduct.vegetables = state.customProduct.vegetablesId.filter(
              (el) => el !== currentCard._id
            )
            state.customProduct.vegetables = state.customProduct.vegetables.filter(
              (el) => el !== currentCard
            )
            state.customProduct.price -= currentCard.price
          }
          break
        case 'sauces':
          if (currentCard.selected) {
            if (
              state.customProduct.saucesId.length === 3 &&
              !state.customProduct.saucesId.includes(currentCard._id)
            ) {
              alert('Вы выбрали максимальное кол-во соусов')
              break
            }
            state.customProduct.saucesId.push(currentCard._id)
            state.customProduct.sauces.push(currentCard)
            state.customProduct.price += currentCard.price
          } else {
            state.customProduct.saucesId = state.customProduct.saucesId.filter(
              (el) => el !== currentCard._id
            )
            state.customProduct.sauces = state.customProduct.sauces.filter(
              (el) => el !== currentCard
            )
            state.customProduct.price -= currentCard.price
          }
          break
        case 'fillings':
          if (currentCard.selected) {
            state.customProduct.fillingsId.push(currentCard._id)
            state.customProduct.fillings.push(currentCard)
            state.customProduct.price += currentCard.price
          } else {
            state.customProduct.fillingsId = state.customProduct.fillingsId.filter(
              (el) => el !== currentCard._id
            )
            state.customProduct.fillings = state.customProduct.fillings.filter(
              (el) => el !== currentCard
            )
            state.customProduct.price -= currentCard.price
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
