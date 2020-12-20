import React from 'react'
import Spinner from 'react-loader-spinner'

const Loader = () => {
  return (
    <div className='loader'>
      <Spinner type="Bars" color="#00BFFF" height={80} width={80} />
    </div>
  )
}

export default Loader;