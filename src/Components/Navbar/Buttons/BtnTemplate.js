import React from 'react'

export default function BtnTemplate({ styles, funcForClick, id, text }) {
  return (
    <div className={styles} onClick={() => funcForClick(true)}>
      <button id={id}>
        <span>{text}</span>
      </button>
    </div>
  )
}
