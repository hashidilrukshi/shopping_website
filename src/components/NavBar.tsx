import Link from 'next/link'
import React from 'react'

const NavBar =() => {
  return (
    <div className='hidden lg:block'>
        <div className='container'>
        <div className='flex w-fit gap-10 mx-auto font-medium py-4 text-blackish'>

            <Link className='navbar__link relative' href="0">HOME</Link>
    

            <Link className='navbar__link relative' href="0">CATEGORIES</Link>
       

            <Link className='navbar__link relative' href="0">MEN'S</Link>
   

            <Link className='navbar__link relative' href="0">WOMEN'S</Link>
        
            <Link className='navbar__link relative' href="0">JEWELRY</Link>
       

            <Link className='navbar__link relative' href="0">PREFUME</Link>
     

            <Link className='navbar__link relative' href="0">GLOG</Link>
       

            <Link className='navbar__link relative' href="0">HOT OFFER</Link>
        </div>
        </div>
    </div>
  )
}

export default NavBar