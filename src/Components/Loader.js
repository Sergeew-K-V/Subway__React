import React from 'react'
import classNames from 'classnames'
import '../css/loader.css'

export default function Loader() {
  return (
    <div className={classNames({ loader__wrapper: true })}>
      <div className={classNames({ ldsDualRing: true })}></div>
    </div>
  )
}
