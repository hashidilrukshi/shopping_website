// import Link from 'next/link'
// import React from 'react'

// const NavBar =() => {
//   return (
//     <div className='hidden lg:block'>
//         <div className='container'>
//         <div className='flex w-fit gap-10 mx-auto font-medium py-4 text-blackish'>

//             <Link className='navbar__link relative' href="0">HOME</Link>
    

//             <Link className='navbar__link relative' href="0">CATEGORIES</Link>
       

//             <Link className='navbar__link relative' href="0">MEN'S</Link>
   

//             <Link className='navbar__link relative' href="0">WOMEN'S</Link>
        
//             <Link className='navbar__link relative' href="0">JEWELRY</Link>
       

//             <Link className='navbar__link relative' href="0">PREFUME</Link>
     

//             <Link className='navbar__link relative' href="0">GLOG</Link>
       

//             <Link className='navbar__link relative' href="0">HOT OFFER</Link>
//         </div>
//         </div>
//     </div>
//   )
// }

// export default NavBar


"use client"

import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import React from 'react'

const NavBar = () => {
  const router = useRouter()
  const pathname = usePathname()
  
  const navItems = [
    { name: 'HOME', href: '/' },

    { name: "MEN'S", href: '/mens' },
    { name: "WOMEN'S", href: '/womens' },
    { name: 'JEWELRY', href: '/jewelry' },
    { name: 'PERFUME', href: '/perfume' },
    { name: 'HOT OFFERS', href: '/hot-offers' }
  ]

  return (
    <div className='hidden lg:block'>
      <div className='container'>
        <div className='flex w-fit gap-10 mx-auto font-medium py-4 text-blackish'>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`navbar__link relative hover:text-pink-500 transition-colors duration-300 cursor-pointer ${
                pathname === item.href 
                  ? 'text-pink-500 after:w-full' 
                  : 'after:w-0 hover:after:w-full'
              } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-pink-500 after:transition-all after:duration-300`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NavBar