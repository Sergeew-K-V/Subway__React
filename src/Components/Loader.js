import React from 'react'
import '../css/loader.css'

export default function Loader() {
  return (
    <div className='loader__wrapper'>
      <div className='lds-dual-ring'></div>
    </div>
  )
}
