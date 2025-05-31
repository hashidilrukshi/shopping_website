import React from 'react'
import Head from 'next/head'

const CategoriesPage = () => {
  return (
    <>
      <Head>
        <title>Categories - StyleHub</title>
        <meta name="description" content="Browse all product categories" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">All Categories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Category cards will go here */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Women's Fashion</h2>
            <p className="text-gray-600">Discover the latest trends in women's clothing</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Men's Fashion</h2>
            <p className="text-gray-600">Stylish clothing for modern men</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Accessories</h2>
            <p className="text-gray-600">Complete your look with our accessories</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default CategoriesPage