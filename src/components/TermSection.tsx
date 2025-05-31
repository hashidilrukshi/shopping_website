import React from 'react'
import Image from 'next/image'

const TestimonialSection = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className='container mx-auto px-4 pt-16 pb-16'>
        <h2 className='font-medium text-2xl pb-8 text-gray-800'>Testimonials</h2>
        
        <div className='grid lg:grid-cols-[300px,1fr] gap-8 items-center'>
          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-sm mx-auto lg:mx-0">
            {/* Profile Image */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full border-4 border-pink-200 overflow-hidden">
                <Image
                  src="/1.PNG"
                  alt="Elsa Doe"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Name and Title */}
            <div className="text-center mb-6">
              <h3 className="font-semibold text-lg text-gray-800">Elsa Doe</h3>
              <p className="text-gray-600 text-sm">CEO & Founder Invision</p>
            </div>
            
            {/* Quote Icon */}
            <div className="flex justify-center mb-4">
              <div className="text-4xl text-pink-400">"</div>
            </div>
            
            {/* Testimonial Text */}
            <p className="text-gray-600 text-center leading-relaxed">
              Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit amet.
            </p>
            
            {/* Rating Stars */}
            <div className="flex justify-center mt-4 gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">★</span>
              ))}
            </div>
          </div>
          
          {/* Summer Collection Banner */}
          <div className="relative bg-gradient-to-r from-pink-100 via-orange-50 to-pink-200 rounded-3xl overflow-hidden min-h-[400px] flex items-center">
            {/* Decorative Elements */}
            <div className="absolute top-8 right-8 opacity-30">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 10C25 15 20 20 15 30C20 35 25 40 30 50C35 40 40 35 45 30C40 20 35 15 30 10Z" fill="#ff6b6b" fillOpacity="0.3"/>
              </svg>
            </div>
            
            <div className="absolute bottom-8 right-12 opacity-40">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 5L45 25L65 30L45 35L40 55L35 35L15 30L35 25L40 5Z" fill="#ff9999" fillOpacity="0.4"/>
              </svg>
            </div>
            
            {/* Hat Image */}
            <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
              <div className="w-48 h-48 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full flex items-center justify-center shadow-xl">
                <div className="w-32 h-20 bg-gradient-to-r from-orange-300 to-yellow-200 rounded-full relative">
                  <div className="absolute top-2 left-4 w-24 h-4 bg-black rounded-full"></div>
                  <div className="absolute -top-8 left-2 w-28 h-16 bg-gradient-to-r from-orange-300 to-yellow-200 rounded-t-full"></div>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 ml-auto mr-16 max-w-md">
              {/* Discount Badge */}
              <div className="inline-block bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                25% DISCOUNT
              </div>
              
              {/* Title */}
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Summer Collection
              </h3>
              
              {/* Price and CTA */}
              <div className="flex items-center gap-4">
                <span className="text-gray-600">Starting @ $20</span>
                <button className="bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gray-700 transition-colors font-medium">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialSection