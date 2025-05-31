import React from 'react'
import Head from 'next/head'

const HotOffersPage = () => {
  return (
    <>
      <Head>
        <title>Hot Offers - StyleHub</title>
        <meta name="description" content="Special deals and discounts" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-red-600">🔥 Hot Offers</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Offer cards will go here */}
          <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-2">50% OFF</h2>
            <p className="mb-4">Summer Collection Sale</p>
            <button className="bg-white text-red-500 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Shop Now
            </button>
          </div>
          {/* Add more offer cards */}
        </div>
      </div>
    </>
  )
}

export default HotOffersPage