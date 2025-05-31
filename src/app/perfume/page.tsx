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

const PerfumePage = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');

  const products: Product[] = [
    {
      id: 1,
      name: "Chanel No. 5 Eau de Parfum",
      price: 8500,
      originalPrice: 10000,
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop",
      category: "women",
      rating: 4.8,
      reviews: 523,
      isNew: false,
      isSale: true
    },
    {
      id: 2,
      name: "Dior Sauvage Cologne",
      price: 7200,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=400&h=400&fit=crop",
      category: "men",
      rating: 4.7,
      reviews: 412,
      isNew: true,
      isSale: false
    },
    {
      id: 3,
      name: "Tom Ford Black Orchid",
      price: 12000,
      originalPrice: 14500,
      image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59d32?w=400&h=400&fit=crop",
      category: "unisex",
      rating: 4.9,
      reviews: 298,
      isNew: false,
      isSale: true
    },
    {
      id: 4,
      name: "Marc Jacobs Daisy",
      price: 5800,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1610461888750-10beb8cbc6d7?w=400&h=400&fit=crop",
      category: "women",
      rating: 4.5,
      reviews: 367,
      isNew: false,
      isSale: false
    },
    {
      id: 5,
      name: "Creed Aventus",
      price: 15000,
      originalPrice: 18000,
      image: "https://images.unsplash.com/photo-1594736797933-d0e501ba2fe6?w=400&h=400&fit=crop",
      category: "men",
      rating: 4.9,
      reviews: 187,
      isNew: true,
      isSale: true
    },
    {
      id: 6,
      name: "Jo Malone London Peony",
      price: 6500,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=400&fit=crop",
      category: "women",
      rating: 4.6,
      reviews: 245,
      isNew: false,
      isSale: false
    },
    {
      id: 7,
      name: "Le Labo Santal 33",
      price: 11500,
      originalPrice: 13000,
      image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&h=400&fit=crop",
      category: "unisex",
      rating: 4.7,
      reviews: 156,
      isNew: false,
      isSale: true
    },
    {
      id: 8,
      name: "Versace Bright Crystal",
      price: 4200,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=400&h=400&fit=crop",
      category: "women",
      rating: 4.4,
      reviews: 289,
      isNew: false,
      isSale: false
    }
  ];

  const categories: Category[] = [
    { id: 'all', name: 'All Fragrances' },
    { id: 'women', name: "Women's" },
    { id: 'men', name: "Men's" },
    { id: 'unisex', name: 'Unisex' }
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
            <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
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
          <Heart className="w-4 h-4 text-gray-600 hover:text-pink-500" />
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
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Luxury Fragrances</h1>
              <p className="text-gray-600">Discover captivating scents for every occasion</p>
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

export default PerfumePage;