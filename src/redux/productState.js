import { createSlice } from '@reduxjs/toolkit'

export const productState = createSlice({
  name: 'productStateName',
  initialState: {
    products: [],
    // quantity: 0,
    //
    // selectedCategory: '',
    // basket: {},
  },
  reducers: {
    initProducts: (state, action) => {
      console.log(state.products, 'state.products')
      console.log(action.payload, 'action.payload')
      return { ...state, products: [...state.products] }
      // const newProducts = [...state.products.map((item) => ({ ...item }))]
      // action.payload.forEach((element) => {
      //   const includedElement = state.products.some((el) => element._id === el._id)
      //   if (!includedElement) {
      //     newProducts.push(element)
      //   }
      // })

      // state.products = newProducts
      // state.products = [...state.products, ...action.payload]
      // state.products = action.payload
      // action.payload.forEach((element) => {
      //   const includedElement = state.products.some((el) => el._id === element._id)
      //   if (!includedElement) {
      //     state.products = [...state.products, element]
      //   }
      // })

      // state.products = action.payload

      // const newProducts = [...state.products.map((item) => ({ ...item }))]
      // action.payload.forEach((element) => {
      //   const includedElement = state.products.some((el) => element._id === el._id)

      //   if (!includedElement) {
      //     newProducts.push(element)
      //   }
      // })
      // state.products = [...state.products]
    },
    incrementQuantity: (state, action) => {
      // if
      // state.products[quantity] += 1
      console.log(action.payload, 'action.payload')
    },
    decrementQuantity: (state, action) => {
      // state.quantity -= 1
      console.log(action.payload, 'action.payload')
    },
    changeQuantityByInput: (state, action) => {
      // state.quantity = action.payload
    },
  },
})
export const { incrementQuantity, decrementQuantity, changeQuantityByInput, initProducts } =
  productState.actions

export default productState.reducer
