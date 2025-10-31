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
        <div className="w-full md:w-1/2 bg-[hsl(var(--cream-bg))] flex items-center justify-center px-6 md:px-12 py-20 md:py-0">
          <div className="max-w-md text-center">
            {/* Book Cover */}
            <div className="mb-8">
              <div className="inline-block shadow-book">
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
            <h2 className="font-serif text-2xl md:text-3xl mb-3 text-black">
              Stories that inspire
            </h2>
            <p className="text-sm text-gray-700 mb-8">against a bond</p>

            {/* CTA */}
            <Link href="/books" className="btn-primary inline-block">
              Explore My Books
            </Link>
          </div>
        </div>

        {/* Right Side - Fashion */}
        <div className="w-full md:w-1/2 bg-black flex items-center justify-center px-6 md:px-12 py-20 md:py-0 relative">
          <div className="absolute inset-0">
            <Image
              src="/generated/fashion-hero-monochrome.png"
              alt="Fashion"
              fill
              className="object-cover image-bw opacity-60"
            />
          </div>

          <div className="relative z-10 max-w-md text-center text-white">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight">
              WHERE<br />
              STORYTELLING<br />
              MEETS STYLE
            </h1>

            <p className="text-lg md:text-xl mb-8 font-light">
              Designs that<br />express
            </p>

            <Link href="/fashion" className="btn-primary inline-block border-white text-white hover:bg-white hover:text-black">
              Shop My Clothing Brand
            </Link>
          </div>
        </div>
      </section>

      {/* Tagline Banner */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            Where storytelling meets style
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            {authorBio.bio}
          </p>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">
            Featured Collections
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Literary Works */}
            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase font-semibold mb-6 text-center">
                Literary Works
              </h3>
              <div className="space-y-6">
                {books.slice(0, 3).map((book) => (
                  <Link key={book.id} href={`/books/${book.id}`} className="block group">
                    <div className="flex gap-4 items-start">
                      <div className="w-20 flex-shrink-0">
                        <Image
                          src={book.coverImage}
                          alt={book.title}
                          width={80}
                          height={120}
                          className="shadow-book image-book w-full"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-serif text-sm font-semibold mb-1 group-hover:opacity-70 transition-opacity">
                          {book.title}
                        </h4>
                        <p className="text-xs text-gray-600 mb-2">{book.subtitle}</p>
                        <p className="text-sm font-semibold">${book.price}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Custom Edit - Fashion */}
            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase font-semibold mb-6 text-center">
                Custom Edit
              </h3>
              <div className="space-y-6">
                {fashionProducts.slice(0, 2).map((product) => (
                  <Link key={product.id} href={`/fashion/${product.id}`} className="block group">
                    <div className="mb-3">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="w-full image-product image-bw group-hover:opacity-80 transition-opacity"
                      />
                    </div>
                    <h4 className="font-sans text-sm font-semibold mb-1 text-center">
                      {product.name}
                    </h4>
                    <p className="text-sm text-center">${product.price}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Limited Edition - Fashion */}
            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase font-semibold mb-6 text-center">
                Limited Edition
              </h3>
              <div className="space-y-6">
                {fashionProducts.slice(2, 4).map((product) => (
                  <Link key={product.id} href={`/fashion/${product.id}`} className="block group">
                    <div className="mb-3">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="w-full image-product image-bw group-hover:opacity-80 transition-opacity"
                      />
                    </div>
                    <h4 className="font-sans text-sm font-semibold mb-1 text-center">
                      {product.name}
                    </h4>
                    <p className="text-sm text-center">${product.price}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Creator */}
      <section className="w-full py-20 bg-[hsl(var(--cream-bg))]">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">
            About the Creator
          </h2>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src={authorBio.image}
                alt={authorBio.name}
                width={400}
                height={400}
                className="w-full image-bw"
              />
            </div>

            <div>
              <h3 className="font-serif text-2xl mb-3">{authorBio.name}</h3>
              <p className="text-lg mb-4 font-semibold">{authorBio.title}</p>
              <p className="text-gray-700 mb-6 leading-relaxed">
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
