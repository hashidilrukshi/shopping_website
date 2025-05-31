import React from 'react'
import Image from 'next/image';

interface Product {
  
    img: string;
    title: string;
    desc: string;
    rating: number;
    price: number;
}

const ProductCard: React.FC<Product> = ({ img, title, desc, rating, price }) => {
    return (
        <div className='p-4 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow duration-300 bg-white'>
            {/* Product Image */}
            <div className="mb-4">
                <Image 
                    className="w-full h-48 rounded-lg object-cover"
                    src={img} 
                    width={200} 
                    height={200} 
                    alt={title}
                />
            </div>
            
            {/* Product Info */}
            <div className="space-y-3">
                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
                    {title}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-gray-600 line-clamp-2">
                    {desc}
                </p>
                
                {/* Rating */}
                <div className="flex items-center gap-1">
                    <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                            <span key={i} className={i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"}>
                                ★
                            </span>
                        ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-1">
                        {/* ({rating}) */}
                    </span>
                </div>

                <div className='font-bold flex gap-4'>
                       Rs. {price}
                </div>
                
                {/* Price and Add to Cart */}
                {/* <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-pink-600">
                        {price}
                    </span>
                    <button className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors text-sm font-medium">
                        Add to Cart
                    </button>
                </div> */}
            </div>
        </div>
    )
}

export default ProductCard