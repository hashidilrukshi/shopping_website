import React from 'react'
import Head from 'next/head'

const JewelryPage = () => {
  return (
    <>
      <Head>
        <title>Jewelry - StyleHub</title>
        <meta name="description" content="Beautiful jewelry collection" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Jewelry Collection</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Jewelry items will go here */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-4">
              <h3 className="font-semibold">Gold Necklace</h3>
              <p className="text-gray-600">Rs. 15,000</p>
            </div>
          </div>
          {/* Add more jewelry items */}
        </div>
      </div>
    </>
  )
}

export default JewelryPage