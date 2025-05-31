import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Newsletter Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Stay In Style
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about new collections, exclusive offers, and fashion trends.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-pink-400 transition-colors"
            />
            <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <h3 className="text-xl font-bold">StyleHub</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your ultimate destination for fashion-forward clothing and accessories. Discover your unique style with our curated collections.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.739.099.120.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.738-1.378 0 0-.599 2.282-.744 2.840-.282 1.092-1.045 2.456-1.549 3.235C9.584 23.815 10.77 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.165 21.667c-1.605 0-3.165-.748-4.156-2.059-.574-.759-.594-1.687-.594-2.585V9.465c0-.898.02-1.826.594-2.585.991-1.311 2.551-2.059 4.156-2.059s3.165.748 4.156 2.059c.574.759.594 1.687.594 2.585v7.558c0 .898-.02 1.826-.594 2.585-.991 1.311-2.551 2.059-4.156 2.059zm0-1.414c1.165 0 2.293-.574 2.917-1.496.311-.461.394-1.001.394-1.734V9.465c0-.733-.083-1.273-.394-1.734C14.458 6.809 13.33 6.235 12.165 6.235s-2.293.574-2.917 1.496c-.311.461-.394 1.001-.394 1.734v7.558c0 .733.083 1.273.394 1.734.624.922 1.752 1.496 2.917 1.496z"/>
                  <path d="M18.406 4.594c.39.39.39 1.024 0 1.414l-1.4 1.4c-.39.39-1.024.39-1.414 0-.39-.39-.39-1.024 0-1.414l1.4-1.4c.39-.39 1.024-.39 1.414 0zM8.008 15.008c.39.39.39 1.024 0 1.414l-1.4 1.4c-.39.39-1.024.39-1.414 0-.39-.39-.39-1.024 0-1.414l1.4-1.4c.39-.39 1.024-.39 1.414 0z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-pink-400">Quick Links</h4>
            <ul className="space-y-2">
              {['New Arrivals', 'Best Sellers', 'Sale Items', 'Gift Cards', 'Size Guide'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-purple-400">Categories</h4>
            <ul className="space-y-2">
              {['Women\'s Fashion', 'Men\'s Fashion', 'Accessories', 'Shoes', 'Bags'].map((category) => (
                <li key={category}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-400">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <span className="text-gray-400">Colombo, Sri Lanka</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <span className="text-gray-400">+94 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <span className="text-gray-400">hello@stylehub.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <p className="text-gray-400">© 2024 StyleHub. All rights reserved.</p>
            <div className="flex space-x-4 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
          
          {/* Payment Methods */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-400 text-sm">We Accept:</span>
            <div className="flex space-x-2">
              {['VISA', 'MC', 'AMEX', 'PP'].map((payment) => (
                <div key={payment} className="w-10 h-6 bg-white/10 rounded flex items-center justify-center text-xs font-bold">
                  {payment}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animated Wave Effect */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
        <div className="h-full bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 animate-pulse"></div>
      </div>
    </footer>
  )
}

export default Footer