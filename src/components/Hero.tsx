import React from 'react'

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
            id:0,
            img:"/public/1.PNG",
            title:"Trending Item",
            mainTitle: "WOMEN'S LATEST FASHION SALE",
            price:"Rs.20"
        },
         {
            id:1,
            img:"/public/1.PNG",
            title:"Trending Item",
            mainTitle: "WOMEN'S LATEST FASHION SALE",
            price:"Rs.20"
        },
           {
            id:2,
            img:"/public/1.PNG",
            title:"Trending Item",
            mainTitle: "WOMEN'S LATEST FASHION SALE",
            price:"Rs.20"
        },
           {
            id:3,
            img:"/public/1.PNG",
            title:"Trending Item",
            mainTitle: "WOMEN'S LATEST FASHION SALE",
            price:"Rs.20"
        },
        
        
        

    ]

  return (
    <div>Hero</div>
  )
}

export default Hero