import React from 'react'

interface propsType {
    img:string;
    title:string;
    maintitle:string;
    price:string;
}

const Slide:React.FC<propsType> =({img, title, maintitle, price})  => {
  return (
    <div className='outline-none border-none relative'> 36.48</div>
  )
}

export default Slide