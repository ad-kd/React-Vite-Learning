import React from 'react'
import './title.css'

const title = ({subTitle, Title}) => {
  return (
    <div className='title'>
        <p>{subTitle}</p>
        <h2>{Title}</h2>
    </div>
  )
}

export default title