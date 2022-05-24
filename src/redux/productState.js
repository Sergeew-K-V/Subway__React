import { createSlice } from '@reduxjs/toolkit'

export const productState = createSlice({
  name: 'productStateName',
  initialState: {
    products: [],
  },
  reducers: {
    initProducts: (state, action) => {
      const newProducts = [...state.products.map((item) => ({ ...item }))]
      action.payload.forEach((element) => {
        const includedElement = state.products.some((el) => element._id === el._id)
        if (!includedElement) {
          newProducts.push({ ...element, quantity: 0 })
        }
      })
      state.products = newProducts
      console.log(state.products, 'state.products')
    },
    incrementQuantity: (state, action) => {
      state.products.find((el) => (el._id === action.payload.id ? (el.quantity += 1) : false))
      console.log(state.products, 'state.products')
      console.log(action.type)
    },
    decrementQuantity: (state, action) => {
      state.products.find((el) => (el._id === action.payload.id ? (el.quantity -= 1) : false))
      console.log(state.products, 'state.products')
      console.log(action.type)
    },
    changeQuantityByInput: (state, action) => {
      state.products.find((el) =>
        el._id === action.payload.id ? (el.quantity = action.payload.value) : false
      )
      console.log(state.products, 'state.products')
      console.log(action.type)
    },
  },
})
export const { incrementQuantity, decrementQuantity, changeQuantityByInput, initProducts } =
  productState.actions

export default productState.reducer
