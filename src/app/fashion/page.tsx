'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { fashionProducts } from '@/data/mockData';

export default function FashionPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Men', 'Women', 'Accessories', 'Collections'];

  const filteredProducts = selectedCategory === 'All'
    ? fashionProducts
    : fashionProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="w-full bg-black text-white pt-32 pb-20 relative">
        <div className="absolute inset-0">
          <Image
            src="/generated/fashion-hero-monochrome.png"
            alt="Fashion Collection"
            fill
            className="object-cover image-bw opacity-40"
          />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="font-serif text-5xl md:text-6xl mb-6">Fashion Collection</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Wearable narratives for the modern creative. Where literary inspiration meets timeless design.
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="w-full py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex justify-center gap-6 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`
                  text-xs tracking-[0.2em] uppercase font-medium transition-all px-4 py-2
                  ${selectedCategory === category
                    ? 'border-b-2 border-black'
                    : 'opacity-60 hover:opacity-100'
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/fashion/${product.id}`}
                className="group"
              >
                <div className="mb-4 overflow-hidden">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full image-product image-bw group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="text-center">
                  <h3 className="font-sans text-sm font-semibold mb-1 group-hover:opacity-70 transition-opacity">
                    {product.name}
                  </h3>
                  {product.collection && (
                    <p className="text-xs text-gray-500 mb-2">{product.collection}</p>
                  )}
                  <p className="text-lg font-serif">${product.price}</p>
                </div>
              </Link>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* The Story Behind the Brand */}
      <section className="w-full py-20 bg-[hsl(var(--cream-bg))]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl mb-6">The Story Behind the Brand</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Every piece in our collection tells a story. Inspired by the characters, themes, and emotions
              from my literary works, each design bridges the gap between narrative and fashion. This is more
              than clothing—it's a wearable expression of creativity, designed for those who see fashion as
              an extension of their identity and artistic vision.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div>
                <h3 className="font-serif text-xl mb-3">Literary Inspired</h3>
                <p className="text-sm text-gray-600">
                  Each collection draws inspiration from themes and characters in my novels.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-3">Timeless Design</h3>
                <p className="text-sm text-gray-600">
                  Classic silhouettes with modern details that transcend seasonal trends.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-3">Ethical Production</h3>
                <p className="text-sm text-gray-600">
                  Sustainably crafted with attention to quality, comfort, and conscious creation.
                </p>
              </div>
            </div>

            <Link href="/about" className="btn-primary inline-block mt-12">
              Discover the Vision
            </Link>
          </div>
        </div>
      </section>

      {/* Limited Edition Notice */}
      <section className="w-full py-20 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl mb-4">Limited Edition Drops</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Sign up for early access to exclusive story-inspired clothing drops and limited edition pieces
            that connect directly to upcoming book releases.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 text-black"
            />
            <button type="submit" className="btn-primary bg-white text-black hover:bg-gray-100 px-8 py-3">
              Notify Me
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
