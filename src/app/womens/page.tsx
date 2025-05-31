"use client";

import React, { useState } from 'react';
import { Heart, ShoppingCart, Star, Filter, Grid, List } from 'lucide-react';

// Define product type
interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number | null;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  isNew: boolean;
  isSale: boolean;
}

// Define category type
interface Category {
  id: string;
  name: string;
}

const WomensPage = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');

  const products: Product[] = [
    {
      id: 1,
      name: "Floral Summer Dress",
      price: 2800,
      originalPrice: 3500,
      image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=400&h=400&fit=crop",
      category: "dresses",
      rating: 4.7,
      reviews: 142,
      isNew: false,
      isSale: true
    },
    {
      id: 2,
      name: "High-Waist Jeans",
      price: 3400,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=400&fit=crop",
      category: "pants",
      rating: 4.4,
      reviews: 96,
      isNew: true,
      isSale: false
    },
    {
      id: 3,
      name: "Leather Crossbody Bag",
      price: 5200,
      originalPrice: 6500,
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=400&fit=crop",
      category: "accessories",
      rating: 4.8,
      reviews: 187,
      isNew: false,
      isSale: true
    },
    {
      id: 4,
      name: "Cashmere Sweater",
      price: 4500,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=400&h=400&fit=crop",
      category: "tops",
      rating: 4.5,
      reviews: 134,
      isNew: false,
      isSale: false
    },
    {
      id: 5,
      name: "Elegant Blouse",
      price: 2200,
      originalPrice: 2900,
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=400&fit=crop",
      category: "tops",
      rating: 4.3,
      reviews: 87,
      isNew: false,
      isSale: true
    },
    {
      id: 6,
      name: "Wool Coat",
      price: 7800,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?w=400&h=400&fit=crop",
      category: "outerwear",
      rating: 4.6,
      reviews: 112,
      isNew: true,
      isSale: false
    },
    {
      id: 7,
      name: "Ankle Strap Heels",
      price: 4900,
      originalPrice: 5800,
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop",
      category: "shoes",
      rating: 4.5,
      reviews: 154,
      isNew: false,
      isSale: true
    },
    {
      id: 8,
      name: "Silk Scarf",
      price: 1800,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop",
      category: "accessories",
      rating: 4.2,
      reviews: 98,
      isNew: false,
      isSale: false
    }
  ];

  const categories: Category[] = [
    { id: 'all', name: 'All Items' },
    { id: 'dresses', name: 'Dresses' },
    { id: 'tops', name: 'Tops' },
    { id: 'pants', name: 'Pants' },
    { id: 'outerwear', name: 'Outerwear' },
    { id: 'shoes', name: 'Shoes' },
    { id: 'accessories', name: 'Accessories' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const ProductCard = ({ product }: { product: Product }) => (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
              NEW
            </span>
          )}
          {product.isSale && (
            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
              SALE
            </span>
          )}
        </div>
        <button className="absolute top-3 left-3 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
          <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
        </button>
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
            <ShoppingCart className="w-4 h-4" />
            Quick Add
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
        
        <div className="flex items-center gap-1 mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
              />
            ))}
          </div>
          <span className="text-sm text-gray-500">({product.reviews})</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg text-gray-900">Rs. {product.price.toLocaleString()}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">Rs. {product.originalPrice.toLocaleString()}</span>
            )}
          </div>
          {product.originalPrice && (
            <span className="text-sm font-semibold text-green-600">
              {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
            </span>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Women's Fashion</h1>
              <p className="text-gray-600">Discover the latest trends in women's clothing and accessories</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-pink-100 text-pink-600' : 'text-gray-500 hover:bg-gray-100'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-pink-100 text-pink-600' : 'text-gray-500 hover:bg-gray-100'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-8">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="w-5 h-5 text-gray-600" />
                <h2 className="font-semibold text-gray-900">Filters</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Categories</h3>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          selectedCategory === category.id
                            ? 'bg-pink-100 text-pink-600 font-medium'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>

                
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>
            </div>

            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No products found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WomensPage;