import React from 'react'
import ProductCard from '../components/ProductCard'

const productdata =[
    {
        img:"/watch.PNG",
        title:"watch",
        desc:" Smart Watch Virtual Plus",
        rating: 4,
        price: "100.00"
    },
     {
        img:"/watch.PNG",
        title:"watch",
        desc:" Smart Watch Virtual Plus",
        rating: 4,
        price: "100.00"
    },
     {
        img:"/watch.PNG",
        title:"watch",
        desc:" Smart Watch Virtual Plus",
        rating: 4,
        price: "100.00"
    },
     {
        img:"/watch.PNG",
        title:"watch",
        desc:" Smart Watch Virtual Plus",
        rating: 4,
        price: "100.00"
    },
      {
        img:"/watch.PNG",
        title:"watch",
        desc:" Smart Watch Virtual Plus",
        rating: 4,
        price: "100.00"
    },
     {
        img:"/watch.PNG",
        title:"watch",
        desc:" Smart Watch Virtual Plus",
        rating: 4,
        price: "100.00"
    },


]


const NewProducts = () => {
  return (
    // <div >
    //     <div className='container pt-16'>
    //         <h2 className='font-medium text-2xl pb-4 '> New Products </h2>

    //         <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-10 xl:gap-x-20 xl:gap-y-10'>
    //             {productdata.map((item, index) => (<ProductCard
    //             key={index}
    //             img={item.img}
    //             title={item.title}
    //             desc={item.desc}
    //             rating={item.rating}
    //             price={item.price}
    //             />
    //         ))}
    //         </div>


    //     </div>
    // </div>
     <div className="container mx-auto px-4 py-8">
            {/* Section Title */}
            <h2 className="text-3xl font-bold text-gray-800 mb-8">New Products</h2>
            
            {/* Product Grid - 4 items per row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                 {productdata.map((item, index) => (<ProductCard
                key={index}
                img={item.img}
                title={item.title}
                desc={item.desc}
                rating={item.rating}
                price={item.price}
                    />
                ))}
            </div>
        </div>
  )
}

export default NewProducts