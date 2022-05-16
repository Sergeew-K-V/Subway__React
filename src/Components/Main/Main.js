import React, { useEffect, useState } from 'react'
import { useHttp } from '../../hooks/http.hook'
import Product from './Product'

function Main() {
  const [mainData, setMainData] = useState([])
  const { request, loading } = useHttp()

  async function getterHandler() {
    // URLSearchParams
    try {
      const data = await request('/products', 'GET')

      if (data !== undefined && data !== null && !loading) {
        // for (const key in data.products) {
        // console.log(data.products[key])
        // setMainData(mainData.push(data.products[key]))
        // }
        setMainData(data.products)
      }
      // data.then((value) => {
      //   // console.log(value.products, 'value.products')
      //   for (const key in value.products) {
      //     console.log(value.products[key])
      //   }
      // console.log(value, 'value')
      // })
    } catch (e) {}
  }

  useEffect(() => {
    getterHandler()
  }, [])

  return (
    <div className='main__content' id='root-subMain-right'>
      <div className='container-content'>
        <div className='main__flex'>
          {console.log('mainData', mainData)}

          {mainData.length !== 0 &&
            mainData.map((el) => (
              <Product
                key={el._id}
                id={el._id}
                name={el.name}
                price={el.price}
                description={el.description}
                imageFile={el.imageFile}
              ></Product>
            ))}
        </div>
      </div>
    </div>
  )
}
export default Main
