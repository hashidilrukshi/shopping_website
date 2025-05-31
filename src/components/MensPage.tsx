import React from 'react'
import Head from 'next/head'

const MensPage = () => {
  return (
    <>
      <Head>
        <title>Men's Fashion - StyleHub</title>
        <meta name="description" content="Shop the latest men's fashion" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Men's Fashion</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Product cards will go here */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-4">
              <h3 className="font-semibold">Men's Shirt</h3>
              <p className="text-gray-600">Rs. 2,500</p>
            </div>
          </div>
          {/* Add more product cards */}
        </div>
      </div>
    </>
  )
}

export default MensPage