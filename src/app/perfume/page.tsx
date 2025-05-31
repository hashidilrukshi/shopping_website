import React from 'react'
import Head from 'next/head'

const PerfumePage = () => {
  return (
    <>
      <Head>
        <title>Perfume - StyleHub</title>
        <meta name="description" content="Luxury fragrances collection" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Perfume Collection</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Perfume items will go here */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-4">
              <h3 className="font-semibold">Luxury Fragrance</h3>
              <p className="text-gray-600">Rs. 8,500</p>
            </div>
          </div>
          {/* Add more perfume items */}
        </div>
      </div>
    </>
  )
}

export default PerfumePage