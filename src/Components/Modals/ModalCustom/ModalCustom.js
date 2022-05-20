import React, { useEffect, useState } from 'react'
import { useHttp } from '../../../hooks/http.hook'
import { mapping, navbarItems } from './staticOfModalCustom'
import NavbarItem from './items/NavbarItem'
import ModalLoader from './items/ModalLoader'
import ModalCustomCard from './items/ModalCustomCard'
import ModalCustomTotal from './items/ModalCustomTotal'
import ModalCustomFooterDefault from './items/ModalCustomFooterDefault'
import ModalCustomFooterTotal from './items/ModalCustomFooterTotal'
import chevronLeft from '../../../img/chevron-left-solid.svg'
import chevronRight from '../../../img/chevron-right-solid.svg'
import '../../../css/modal.css'

function ModalCustom({ setModalCustomActive }) {
  const id = Date.now().toString().slice(7, 14)
  const [name, setName] = useState(`Custom-product-${id}`)
  const [price, setPrice] = useState(0)
  const [quantity, setQuantity] = useState(0)

  const [size, setSize] = useState([])
  const [bread, setBread] = useState([])
  const [vegetables, setVegetables] = useState([])
  const [sauce, setSauces] = useState([])
  const [fillings, setFillings] = useState([])

  const { request } = useHttp()

  const [arrayOfCards, setArrayOfCards] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [categoryFillings, setCategoryFillings] = useState('size')
  const [loading, setLoading] = useState(false)

  const [customProduct, setCustomProduct] = useState({
    id,
    name,
    price,
    quantity,
    size,
    bread,
    sauce,
    vegetables,
    fillings,
  })

  /**
   * @enum
   * @readonly
   */

  const compareCatAndCP = () => {
    setCategoryFillings(mapping[currentPage])
  }

  // useEffect(() => {
  //   setLoading(true)
  //   setTimeout(() => {
  //     getCards()
  //     setLoading(false)
  //   }, 1000)
  // }, [])

  useEffect(() => {
    compareCatAndCP()
  }, [currentPage])

  useEffect(() => {
    if (currentPage !== 5) {
      setLoading(true)
      setTimeout(() => {
        getCards()
        setLoading(false)
      }, 1000)
    }
  }, [categoryFillings])

  const getCards = async () => {
    try {
      const data = await request(`/fillings?category=${categoryFillings}`, 'GET')
      if (data !== undefined && data !== null) {
        setArrayOfCards(data.fillings)
      }
    } catch (error) {}
  }

  return (
    <div className='modal-overlay' id='modal-overlay'>
      <div className='modal'>
        <div className='container-modal'>
          <div className='modal__block' id='modal-block'>
            <div className='modal__header'>
              <span>Выберите размер сендвича</span>
              <div className='modal__close' onClick={() => setModalCustomActive(false)}>
                <span></span>
              </div>
            </div>
            <div className='modal__body' id='place-for-modal-content'>
              <div className='body__navbar'>
                <ul className='body__navbar-section'>
                  {navbarItems.map((el) => (
                    <NavbarItem
                      key={el.counter}
                      text={el.text}
                      counter={el.counter}
                      currentPage={currentPage}
                      setCurrentPage={setCurrentPage}
                    ></NavbarItem>
                  ))}
                </ul>
              </div>
              <div
                className={
                  currentPage === 0
                    ? 'modal__btn-list hiddenBack'
                    : 'modal__btn-list' && currentPage === 5
                    ? 'modal__btn-list hiddenNext'
                    : 'modal__btn-list'
                }
              >
                <button
                  className={currentPage === 0 ? 'modal__btn hidden' : 'modal__btn '}
                  onClick={(e) => {
                    setCurrentPage(currentPage - 1)
                  }}
                  id='btn-back'
                >
                  <img
                    src={chevronLeft}
                    alt={'chevronLeft'}
                    className='fa-arrow fa-chevron-left'
                  ></img>
                  <span>Назад</span>
                </button>
                <button
                  className={currentPage === 5 ? 'modal__btn hidden' : 'modal__btn '}
                  onClick={(e) => {
                    setCurrentPage(currentPage + 1)
                  }}
                  id='btn-next'
                >
                  <span>Вперед</span>
                  <img
                    src={chevronRight}
                    alt={'chevronRight'}
                    className='fa-arrow fa-angle-right'
                  ></img>
                </button>
              </div>
              <div className='modal__content' id='content-card-root'>
                {currentPage === 5 ? (
                  loading ? (
                    <ModalLoader></ModalLoader>
                  ) : (
                    <ModalCustomTotal customProduct={customProduct}></ModalCustomTotal>
                  )
                ) : loading ? (
                  <ModalLoader></ModalLoader>
                ) : arrayOfCards.length !== 0 ? (
                  arrayOfCards.map((el) => (
                    <ModalCustomCard
                      key={el._id}
                      id={el._id}
                      name={el.name}
                      price={el.price}
                      imageFile={el.imageFile}
                    ></ModalCustomCard>
                  ))
                ) : (
                  <div>
                    <span>
                      <strong>There are no fillings!</strong>
                    </span>
                  </div>
                )}
              </div>
            </div>

            {currentPage !== 5 ? (
              <ModalCustomFooterDefault customProduct={customProduct}></ModalCustomFooterDefault>
            ) : (
              <ModalCustomFooterTotal
                customProduct={customProduct}
                setQuantity={setQuantity}
              ></ModalCustomFooterTotal>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalCustom
