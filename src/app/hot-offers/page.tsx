"use client";

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { ShoppingCart, Clock, Tag, Heart, ArrowRight } from 'lucide-react';

interface Offer {
  id: number;
  title: string;
  description: string;
  discount: string;
  category: string;
  expiry: string;
  image: string;
  originalPrice?: number;
  offerPrice: number;
  isFavorite: boolean;
}

const HotOffersPage = () => {
  const [offers, setOffers] = useState<Offer[]>([
    {
      id: 1,
      title: "Summer Collection Blowout",
      description: "All summer dresses, swimwear, and accessories at unbelievable prices",
      discount: "50% OFF",
      category: "Women's Fashion",
      expiry: "2025-08-31T23:59:59",
      image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=600&h=400&fit=crop",
      originalPrice: 4999,
      offerPrice: 2499,
      isFavorite: false
    },
    {
      id: 2,
      title: "Flash Sale: Limited Time",
      description: "Selected items at 70% off for the next 6 hours only!",
      discount: "70% OFF",
      category: "All Categories",
      expiry: "2025-04-15T18:00:00",
      image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=600&h=400&fit=crop",
      originalPrice: 8999,
      offerPrice: 2699,
      isFavorite: true
    },
    {
      id: 3,
      title: "New Customer Exclusive",
      description: "Special 30% off your first order with code WELCOME30",
      discount: "30% OFF",
      category: "First Order",
      expiry: "2025-12-31T23:59:59",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=400&fit=crop",
      offerPrice: 0, // This is a coupon, no specific price
      isFavorite: false
    },
    {
      id: 4,
      title: "Buy One Get One Free",
      description: "Select footwear - buy one pair, get second pair of equal or lesser value free",
      discount: "BOGO",
      category: "Footwear",
      expiry: "2025-09-15T23:59:59",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=400&fit=crop",
      originalPrice: 7999,
      offerPrice: 7999,
      isFavorite: false
    },
    {
      id: 5,
      title: "Clearance Sale",
      description: "Last season's styles at up to 60% off original prices",
      discount: "60% OFF",
      category: "Men & Women",
      expiry: "2025-08-20T23:59:59",
      image: "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?w=600&h=400&fit=crop",
      originalPrice: 6599,
      offerPrice: 2639,
      isFavorite: false
    },
    {
      id: 6,
      title: "Weekend Special",
      description: "Extra 15% off already reduced prices this weekend only",
      discount: "EXTRA 15%",
      category: "Weekend Deal",
      expiry: "2025-08-13T23:59:59",
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=400&fit=crop",
      originalPrice: 4599,
      offerPrice: 3909,
      isFavorite: true
    }
  ]);

  const [timeRemaining, setTimeRemaining] = useState<{[key: number]: string}>({});

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeRemaining: {[key: number]: string} = {};
      offers.forEach(offer => {
        const expiryDate = new Date(offer.expiry).getTime();
        const now = new Date().getTime();
        const distance = expiryDate - now;
        
        if (distance < 0) {
          newTimeRemaining[offer.id] = "Expired";
        } else {
          const days = Math.floor(distance / (1000 * 60 * 60 * 24));
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);
          
          newTimeRemaining[offer.id] = `${days}d ${hours}h ${minutes}m ${Math.floor(seconds)}s`;
        }
      });
      setTimeRemaining(newTimeRemaining);
    }, 1000);

    return () => clearInterval(timer);
  }, [offers]);

  const toggleFavorite = (id: number) => {
    setOffers(offers.map(offer => 
      offer.id === id ? {...offer, isFavorite: !offer.isFavorite} : offer
    ));
  };

  return (
    <>
      <Head>
        <title>Hot Offers - StyleHub</title>
        <meta name="description" content="Special deals and discounts" />
      </Head>
      
      <div className="bg-gradient-to-r from-red-50 to-pink-50 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">🔥 Hot Offers</h1>
              <p className="text-lg text-gray-600">Limited-time deals you won't want to miss</p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Tag className="w-5 h-5 text-red-500" />
              <span className="font-medium">Active Offers: {offers.filter(o => new Date(o.expiry) > new Date()).length}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offers.map(offer => {
              const isExpired = new Date(offer.expiry) < new Date();
              const discountValue = offer.discount.includes('%') 
                ? parseInt(offer.discount.replace('% OFF', '')) 
                : offer.discount === 'BOGO' ? 50 : 0;

              return (
                <div 
                  key={offer.id} 
                  className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 ${
                    isExpired 
                      ? 'border-gray-300 opacity-70' 
                      : discountValue > 50 
                        ? 'border-red-500' 
                        : 'border-pink-500'
                  }`}
                >
                  <div className="relative">
                    <img 
                      src={offer.image} 
                      alt={offer.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-0 right-0 p-2">
                      <button 
                        onClick={() => toggleFavorite(offer.id)}
                        className={`p-2 rounded-full ${offer.isFavorite ? 'bg-red-100 text-red-500' : 'bg-white/80 text-gray-600'}`}
                      >
                        <Heart className={`w-5 h-5 ${offer.isFavorite ? 'fill-current' : ''}`} />
                      </button>
                    </div>
                    {!isExpired && (
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <div className="flex items-center text-white">
                          <Clock className="w-4 h-4 mr-2" />
                          <span className="text-sm font-medium">
                            {timeRemaining[offer.id] || 'Loading...'}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        isExpired 
                          ? 'bg-gray-200 text-gray-600' 
                          : discountValue > 50 
                            ? 'bg-red-100 text-red-600' 
                            : 'bg-pink-100 text-pink-600'
                      }`}>
                        {offer.category}
                      </span>
                      {isExpired ? (
                        <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold">
                          EXPIRED
                        </span>
                      ) : (
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          discountValue > 50 
                            ? 'bg-red-500 text-white' 
                            : 'bg-pink-500 text-white'
                        }`}>
                          {offer.discount}
                        </span>
                      )}
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 mb-2">{offer.title}</h2>
                    <p className="text-gray-600 mb-4">{offer.description}</p>

                    {offer.originalPrice && (
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-lg font-bold text-gray-900">
                          Rs. {offer.offerPrice.toLocaleString()}
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                          Rs. {offer.originalPrice.toLocaleString()}
                        </span>
                        {!isExpired && (
                          <span className="text-sm font-semibold text-green-600">
                            {Math.round((1 - offer.offerPrice / offer.originalPrice) * 100)}% OFF
                          </span>
                        )}
                      </div>
                    )}

                    <div className="flex justify-between items-center">
                      <button 
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-colors ${
                          isExpired
                            ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                            : discountValue > 50
                              ? 'bg-red-500 hover:bg-red-600 text-white'
                              : 'bg-pink-500 hover:bg-pink-600 text-white'
                        }`}
                        disabled={isExpired}
                      >
                        <ShoppingCart className="w-4 h-4" />
                        {isExpired ? 'Offer Ended' : 'Shop Now'}
                      </button>
                      <button className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900">
                        View Details <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {offers.filter(o => new Date(o.expiry) < new Date()).length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Expired Offers</h2>
              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="text-gray-600 mb-4">
                  These offers have ended, but check back soon for new deals!
                </p>
                <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                  View Current Offers
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HotOffersPage;