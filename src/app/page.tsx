import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { books, fashionProducts, featuredCollections, authorBio } from '@/data/mockData';

export const dynamic = 'force-dynamic';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section - Split Screen Design */}
      <section className="w-full min-h-screen flex flex-col md:flex-row mt-16">
        {/* Left Side - Books/Literary */}
        <div className="w-full md:w-1/2 bg-[hsl(var(--cream-bg))] flex items-center justify-center px-6 md:px-12 lg:px-16 py-24 md:py-0">
          <div className="max-w-md text-center fade-in">
            {/* Book Cover */}
            <div className="mb-10">
              <div className="inline-block shadow-book hover-lift">
                <Image
                  src={books[0].coverImage}
                  alt={books[0].title}
                  width={300}
                  height={450}
                  className="w-64 h-auto image-book"
                />
              </div>
            </div>

            {/* Tagline */}
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl mb-4 text-black">
              Stories that inspire
            </h2>
            <div className="section-divider section-divider-dark"></div>
            <p className="text-base text-gray-700 mb-10 font-light leading-relaxed">
              Discover literary works that transport, challenge, and illuminate
            </p>

            {/* CTA */}
            <Link href="/books" className="btn-primary inline-block">
              Explore My Books
            </Link>
          </div>
        </div>

        {/* Right Side - Fashion */}
        <div className="w-full md:w-1/2 bg-black flex items-center justify-center px-6 md:px-12 lg:px-16 py-24 md:py-0 relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/generated/fashion-hero-monochrome.png"
              alt="Fashion"
              fill
              className="object-cover image-bw opacity-60 transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div className="relative z-10 max-w-md text-center text-white fade-in">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              WHERE<br />
              STORYTELLING<br />
              MEETS STYLE
            </h1>

            <div className="section-divider mx-auto" style={{background: 'rgba(255,255,255,0.4)'}}></div>

            <p className="text-lg md:text-xl mb-10 font-light leading-relaxed">
              Designs that express creativity,<br />crafted with intention
            </p>

            <Link href="/fashion" className="btn-primary inline-block border-white text-white hover:bg-white hover:text-black">
              Shop My Clothing Brand
            </Link>
          </div>
        </div>
      </section>

      {/* Tagline Banner */}
      <section className="w-full py-20 md:py-24 bg-white">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">
            Where storytelling meets style
          </h2>
          <div className="section-divider section-divider-dark"></div>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600 leading-relaxed">
            {authorBio.bio}
          </p>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="w-full py-24 md:py-28 bg-white border-t border-[hsl(var(--border))]">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-center mb-4">
            Featured Collections
          </h2>
          <div className="section-divider section-divider-dark"></div>
          <p className="text-center text-gray-600 mb-16 max-w-xl mx-auto">
            Explore curated selections from our literary and fashion collections
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {/* Literary Works */}
            <div className="fade-in">
              <h3 className="text-xs tracking-[0.2em] uppercase font-semibold mb-8 text-center">
                Literary Works
              </h3>
              <div className="space-y-8">
                {books.slice(0, 3).map((book, index) => (
                  <Link key={book.id} href={`/books/${book.id}`} className="block group" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="flex gap-4 items-start transition-smooth">
                      <div className="w-20 flex-shrink-0">
                        <Image
                          src={book.coverImage}
                          alt={book.title}
                          width={80}
                          height={120}
                          className="shadow-book image-book w-full hover-lift"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-serif text-base font-semibold mb-2 group-hover:opacity-70 transition-opacity">
                          {book.title}
                        </h4>
                        <p className="text-sm text-gray-600 mb-3 leading-relaxed">{book.subtitle}</p>
                        <p className="text-sm font-semibold">${book.price}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Custom Edit - Fashion */}
            <div className="fade-in" style={{animationDelay: '0.2s'}}>
              <h3 className="text-xs tracking-[0.2em] uppercase font-semibold mb-8 text-center">
                Custom Edit
              </h3>
              <div className="space-y-8">
                {fashionProducts.slice(0, 2).map((product) => (
                  <Link key={product.id} href={`/fashion/${product.id}`} className="block group">
                    <div className="mb-4 overflow-hidden">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="w-full image-product image-bw transition-all duration-500 group-hover:opacity-80 group-hover:scale-105"
                      />
                    </div>
                    <h4 className="font-sans text-base font-semibold mb-2 text-center group-hover:opacity-70 transition-opacity">
                      {product.name}
                    </h4>
                    <p className="text-sm text-center font-medium">${product.price}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Limited Edition - Fashion */}
            <div className="fade-in" style={{animationDelay: '0.3s'}}>
              <h3 className="text-xs tracking-[0.2em] uppercase font-semibold mb-8 text-center">
                Limited Edition
              </h3>
              <div className="space-y-8">
                {fashionProducts.slice(2, 4).map((product) => (
                  <Link key={product.id} href={`/fashion/${product.id}`} className="block group">
                    <div className="mb-4 overflow-hidden">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="w-full image-product image-bw transition-all duration-500 group-hover:opacity-80 group-hover:scale-105"
                      />
                    </div>
                    <h4 className="font-sans text-base font-semibold mb-2 text-center group-hover:opacity-70 transition-opacity">
                      {product.name}
                    </h4>
                    <p className="text-sm text-center font-medium">${product.price}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Creator */}
      <section className="w-full py-24 md:py-32 bg-[hsl(var(--cream-bg))] border-t border-[hsl(var(--border))]">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-center mb-4">
            About the Creator
          </h2>
          <div className="section-divider section-divider-dark"></div>
          <p className="text-center text-gray-600 mb-16 max-w-xl mx-auto">
            The creative vision behind both literature and fashion
          </p>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="fade-in overflow-hidden">
              <Image
                src={authorBio.image}
                alt={authorBio.name}
                width={500}
                height={500}
                className="w-full image-bw hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="fade-in" style={{animationDelay: '0.2s'}}>
              <h3 className="font-serif text-2xl md:text-3xl mb-3">{authorBio.name}</h3>
              <p className="text-lg md:text-xl mb-6 font-medium text-gray-700">{authorBio.title}</p>
              <div className="w-12 h-px bg-black mb-6"></div>
              <p className="text-gray-700 mb-8 leading-relaxed text-base md:text-lg">
                {authorBio.bio}
              </p>
              <Link href="/about" className="btn-primary inline-block">
                Learn More About My Journey
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
