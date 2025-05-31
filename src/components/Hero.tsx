"use client"

import React from 'react'
import Slider from "react-slick";
import Slide from '../components/Slide';

const Hero =() => {

    var settting = {
        dots : true,
        Infinite: true,
        slidesToShow:1,
        autoplay:true,
        pauseOnHover:false,
    };

   const slideData = [
    {
        id: 0,
        img: "/1.PNG",  // Remove "/public" from the path
        title: "Trending Item",
        mainTitle: "WOMEN'S LATEST FASHION SALE",
        price: "Rs.20"
    },
    {
        id: 1,
        img: "/1.PNG",  // Remove "/public" from the path
        title: "Trending Item",
        mainTitle: "WOMEN'S LATEST FASHION SALE",
        price: "Rs.20"
    },
    {
        id: 2,
        img: "/1.PNG",  // Remove "/public" from the path
        title: "Trending Item",
        mainTitle: "WOMEN'S LATEST FASHION SALE",
        price: "Rs.20"
    },
    {
        id: 3,
        img: "/1.PNG",  // Remove "/public" from the path
        title: "Trending Item",
        mainTitle: "WOMEN'S LATEST FASHION SALE",
        price: "Rs.20"
    }
];

  return (
    <div>
    <div className='container pt-6 lg:pt-0'>
     <Slider {...settting}>
        {slideData.map((item) => (
            <Slide
                key={item.id}
                img={item.img}
                title={item.title}
                price={item.price} 
                maintitle={item.mainTitle}        
                />
                ))}
     </Slider>

    </div>
    </div>
  )
}

export default Hero