import React, { useEffect, useState } from 'react'
import { useHttp } from '../../hooks/http.hook'
import Product from './Product'
import Loader from '../Loader'
let counter = 1

function Main() {
  useEffect(() => {
    console.log('render', counter)
    counter++
  }, [])
  const [mainData, setMainData] = useState([])
  const { request } = useHttp()
  const [loading, setLoading] = useState(false)
  async function getterHandler() {
    // URLSearchParams
    try {
      const data = await request('/products', 'GET')

      if (data !== undefined && data !== null && !loading) {
        setMainData(data.products)
      }
    } catch (e) {}
  }

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      getterHandler()
      setLoading(false)
    }, 2000)
  }, [])
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
