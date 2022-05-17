import React, { useEffect, useState } from 'react'
import { useHttp } from '../../hooks/http.hook'
import Product from './Product'
import Loader from '../Loader'
let counter = 1

function Main({ category, posted }) {
  useEffect(() => {
    console.log('Render', counter)
    counter++
  })
  const [mainData, setMainData] = useState([])
  const { request } = useHttp()
  const [loading, setLoading] = useState(false)

  const params = new URLSearchParams('cat')
  console.log('params', params)

  //Взять и делать фильтр в URL ?pizza and e.t.c, и в req  я буду получать  paramas or code?  и по ним отдавать данные из бд - как то так? и стоит ли добавлять реакт роутер дом чтобы URL изначально сопадал с URL запросом?

  async function getterHandler() {
    // URLSearchParams
    try {
      const data = await request(`/products/?${category}`, 'GET')
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
  }, [posted])

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
