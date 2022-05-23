import React, { useEffect, useState } from 'react'
import { useHttp } from '../../hooks/http.hook'
import Product from './Product'
import Loader from '../Loader'
import { initProducts } from '../../redux/productState'
import { useSelector, useDispatch } from 'react-redux'

function Main({ category, posted }) {
  const [mainData, setMainData] = useState([])
  const [loading, setLoading] = useState(false)
  const { request } = useHttp()
  const dispath = useDispatch()
  const productsState = useSelector((state) => {
    return state.productEntity.products
  })

  async function getterHandler() {
    try {
      const data = await request(`/products?category=${category}`, 'GET')
      if (data !== undefined && data !== null) {
        setMainData(data.products)
        dispath(initProducts(data.products))
        // console.log('productsState', productsState)
      }
    } catch (e) {}
  }

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      getterHandler()
      setLoading(false)
    }, 1000)
  }, [posted, category])

  return (
    <div className='main__content' id='root-subMain-right'>
      <div className='container-content'>
        <div className='main__flex'>
          {loading ? (
            <Loader></Loader>
          ) : mainData.length !== 0 ? (
            mainData.map((el) => (
              <Product
                key={el._id}
                id={el._id}
                name={el.name}
                price={el.price}
                description={el.description}
                imageFile={el.imageFile}
              ></Product>
            ))
          ) : (
            <div>
              <span>
                <strong>There are no products!</strong>
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
export default Main
