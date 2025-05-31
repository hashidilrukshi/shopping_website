// import React from 'react'
// import ProductCard from '../components/ProductCard'

// const productdata =[
//     {
//         img:"/watch.PNG",
//         title:"watch",
//         desc:" Smart Watch Virtual Plus",
//         rating: 4,
//         price: "100.00"
//     },
//      {
//         img:"/watch.PNG",
//         title:"watch",
//         desc:" Smart Watch Virtual Plus",
//         rating: 4,
//         price: "100.00"
//     },
//      {
//         img:"/watch.PNG",
//         title:"watch",
//         desc:" Smart Watch Virtual Plus",
//         rating: 4,
//         price: "100.00"
//     },
//      {
//         img:"/watch.PNG",
//         title:"watch",
//         desc:" Smart Watch Virtual Plus",
//         rating: 4,
//         price: "100.00"
//     },
//       {
//         img:"/watch.PNG",
//         title:"watch",
//         desc:" Smart Watch Virtual Plus",
//         rating: 4,
//         price: "100.00"
//     },
//      {
//         img:"/watch.PNG",
//         title:"watch",
//         desc:" Smart Watch Virtual Plus",
//         rating: 4,
//         price: "100.00"
//     },


// ]


// const NewProducts = () => {
//   return (
//     // <div >
//     //     <div className='container pt-16'>
//     //         <h2 className='font-medium text-2xl pb-4 '> New Products </h2>

//     //         <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-10 xl:gap-x-20 xl:gap-y-10'>
//     //             {productdata.map((item, index) => (<ProductCard
//     //             key={index}
//     //             img={item.img}
//     //             title={item.title}
//     //             desc={item.desc}
//     //             rating={item.rating}
//     //             price={item.price}
//     //             />
//     //         ))}
//     //         </div>


//     //     </div>
//     // </div>
//      <div className="container mx-auto px-4 py-8">
//             {/* Section Title */}
//             <h2 className="text-3xl font-bold text-gray-800 mb-8">New Products</h2>
            
//             {/* Product Grid - 4 items per row */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                  {productdata.map((item, index) => (<ProductCard
//                 key={index}
//                 img={item.img}
//                 title={item.title}
//                 desc={item.desc}
//                 rating={item.rating}
//                 price={item.price}
//                     />
//                 ))}
//             </div>
//         </div>
//   )
// }

// export default NewProducts

"use client";

import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Star, ChevronLeft, ChevronRight, Filter, Grid, List } from 'lucide-react';

const productdata = [
  {
    id: 1,
    img: "/watch.PNG",
    title: "Smart Watch Pro",
    desc: "Premium smartwatch with AMOLED display and advanced health tracking",
    rating: 4.5,
    price: 6999.99,
    originalPrice: 249.99,
    isNew: true,
    colors: ["black", "silver", "gold"],
    reviews: 128
  },
  {
    id: 2,
    img: "/frock.PNG",
    title: "Women Frock",
    desc: "Elegant floral summer dress with comfortable cotton fabric",
    rating: 4.2,
    price: 3529.99,
    originalPrice: 159.99,
    isNew: false,
    colors: ["black", "blue"],
    reviews: 86
  },
  {
    id: 3,
    img: "/menjacket.PNG",
    title: "Men's Jacket",
    desc: "Stylish leather jacket with premium stitching and inner lining",
    rating: 4.8,
    price: 3499.99,
    originalPrice: null,
    isNew: true,
    colors: ["black", "brown"],
    reviews: 215
  },
  {
    id: 4,
    img: "/menperf.PNG",
    title: "Men's Perfume",
    desc: "Long-lasting woody fragrance with citrus top notes",
    rating: 4.3,
    price: 5779.99,
    originalPrice: 199.99,
    isNew: false,
    colors: ["black", "green", "orange"],
    reviews: 64
  },
  {
    id: 5,
    img: "/neck.PNG",
    title: "Women's Necklace",
    desc: "925 sterling silver necklace with zirconia stones",
    rating: 4.0,
    price: 2199.99,
    originalPrice: 129.99,
    isNew: true,
    colors: ["silver", "gold"],
    reviews: 42
  },
  {
    id: 6,
    img: "/ring.PNG",
    title: "Women's Ring",
    desc: "Elegant gold-plated ring with intricate design",
    rating: 4.6,
    price: 529.99,
    originalPrice: null,
    isNew: false,
    colors: ["gold", "rose-gold"],
    reviews: 173
  },
  {
    id: 7,
    img: "/saree.PNG",
    title: "Silk Saree",
    desc: "Traditional handwoven silk saree with zari border",
    rating: 4.4,
    price: 4599.99,
    originalPrice: 179.99,
    isNew: true,
    colors: ["red", "blue", "green"],
    reviews: 97
  },
  {
    id: 8,
    img: "/womenper.PNG",
    title: "Women's Perfume",
    desc: "Floral bouquet fragrance with vanilla base notes",
    rating: 4.9,
    price: 4399.99,
    originalPrice: 449.99,
    isNew: false,
    colors: ["pink", "gold"],
    reviews: 56
  }
];

const NewProducts = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('featured');
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  
  const productsPerPage = 8;
  const totalPages = Math.ceil(productdata.length / productsPerPage);

  // Filter and sort products
  const filteredProducts = selectedColor 
    ? productdata.filter(product => product.colors.includes(selectedColor))
    : productdata;

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch(sortBy) {
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      case 'rating': return b.rating - a.rating;
      case 'newest': return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      default: return 0; // featured - no sorting
    }
  });

  // Pagination
  const currentProducts = sortedProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const availableColors = Array.from(
    new Set(productdata.flatMap(product => product.colors))
  );

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Section Header with Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">New Arrivals</h2>
            <p className="text-gray-600 mt-2">Discover our latest products</p>
          </div>
          
          <div className="flex flex-wrap items-center gap-4">
         
            {/* <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700">Color:</span>
              <div className="flex gap-1">
                {availableColors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(selectedColor === color ? null : color)}
                    className={`w-6 h-6 rounded-full border-2 ${
                      selectedColor === color 
                        ? 'border-gray-900' 
                        : 'border-transparent'
                    }`}
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
            </div> */}
            
          
            
            {/* View Toggle */}
            <div className="flex items-center gap-1 bg-white rounded-lg p-1 border border-gray-300">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-500'}`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-500'}`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Product Grid */}
        <div className={`mb-8 ${
          viewMode === 'grid' 
            ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'
            : 'space-y-4'
        }`}>
          {currentProducts.map((product) => (
            <ProductCard
                  key={product.id}
                  img={product.img}
                  title={product.title}
                  desc={product.desc}
                  rating={product.rating} 
                  price={product.price}            //  price={product.price}
            //   originalPrice={product.originalPrice}
            //   isNew={product.isNew}
            //   reviews={product.reviews}
            //   colors={product.colors}
            //   layout={viewMode}
            />
          ))}
        </div>
        
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-full border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`w-10 h-10 rounded-full ${
                  currentPage === index + 1
                    ? 'bg-blue-600 text-white'
                    : 'border border-gray-300 hover:bg-gray-100'
                }`}
              >
                {index + 1}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-full border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
        
        {/* Results Count */}
        <div className="mt-4 text-center text-sm text-gray-500">
          Showing {currentProducts.length} of {filteredProducts.length} products
          {selectedColor && ` (filtered by ${selectedColor})`}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;