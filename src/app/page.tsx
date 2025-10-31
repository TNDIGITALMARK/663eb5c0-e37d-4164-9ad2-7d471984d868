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

      {/* Hero Section - Unified Centered Design */}
      <section className="w-full min-h-screen flex items-center justify-center bg-[hsl(var(--cream-bg))] mt-16 px-6 py-24 md:py-32">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center fade-in">
            {/* Main Headline */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl mb-8 leading-tight tracking-tight">
              WHERE STORYTELLING<br />
              MEETS STYLE
            </h1>

            {/* Elegant Divider */}
            <div className="section-divider section-divider-dark mx-auto"></div>

            {/* Tagline */}
            <p className="text-lg md:text-xl lg:text-2xl mb-16 font-light leading-relaxed max-w-3xl mx-auto" style={{color: 'hsl(var(--text-on-cream))'}}>
              Discover literary works that transport and illuminate, alongside fashion designs that express creativity crafted with intention
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
              <Link href="/books" className="btn-primary inline-block min-w-[220px]">
                Explore My Books
              </Link>
              <Link href="/fashion" className="btn-primary inline-block min-w-[220px]">
                Shop My Fashion
              </Link>
            </div>

            {/* Visual Showcase - Unified Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto mt-16">
              {/* Featured Book */}
              <div className="fade-in group" style={{animationDelay: '0.2s'}}>
                <div className="mb-6 inline-block">
                  <Image
                    src={books[0].coverImage}
                    alt={books[0].title}
                    width={280}
                    height={420}
                    className="w-56 h-auto image-book shadow-book hover-lift mx-auto"
                  />
                </div>
                <h3 className="font-serif text-xl mb-2" style={{color: 'hsl(var(--text-on-cream))'}}>
                  Latest Literary Work
                </h3>
                <p className="text-sm font-medium opacity-80" style={{color: 'hsl(var(--text-on-cream))'}}>
                  {books[0].title}
                </p>
              </div>

              {/* Brand Philosophy - Center */}
              <div className="fade-in flex flex-col justify-center" style={{animationDelay: '0.3s'}}>
                <div className="py-8">
                  <div className="w-12 h-12 border-2 border-black flex items-center justify-center mx-auto mb-6">
                    <span className="font-serif text-lg">AS</span>
                  </div>
                  <h3 className="font-serif text-2xl mb-4" style={{color: 'hsl(var(--text-on-cream))'}}>
                    Aurora & Sage
                  </h3>
                  <p className="text-sm leading-relaxed" style={{color: 'hsl(var(--text-on-cream))'}}>
                    A unified creative vision blending the art of storytelling with contemporary fashion design
                  </p>
                </div>
              </div>

              {/* Featured Fashion */}
              <div className="fade-in group" style={{animationDelay: '0.4s'}}>
                <div className="mb-6 overflow-hidden">
                  <Image
                    src={fashionProducts[0].images[0]}
                    alt={fashionProducts[0].name}
                    width={280}
                    height={280}
                    className="w-56 h-56 image-product image-bw shadow-md hover-lift mx-auto transition-all duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-xl mb-2" style={{color: 'hsl(var(--text-on-cream))'}}>
                  Fashion Collection
                </h3>
                <p className="text-sm font-medium opacity-80" style={{color: 'hsl(var(--text-on-cream))'}}>
                  {fashionProducts[0].name}
                </p>
              </div>
            </div>
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
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed" style={{color: 'hsl(var(--muted-foreground))'}}>
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
          <p className="text-center mb-16 max-w-xl mx-auto" style={{color: 'hsl(var(--muted-foreground))'}}>
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
                        <p className="text-sm mb-3 leading-relaxed" style={{color: 'hsl(var(--muted-foreground))'}}>{book.subtitle}</p>
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
          <p className="text-center mb-16 max-w-xl mx-auto" style={{color: 'hsl(var(--text-on-cream))'}}>
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
              <p className="text-lg md:text-xl mb-6 font-medium" style={{color: 'hsl(var(--text-on-cream))'}}>{authorBio.title}</p>
              <div className="w-12 h-px bg-black mb-6"></div>
              <p className="mb-8 leading-relaxed text-base md:text-lg" style={{color: 'hsl(var(--text-on-cream))'}}>
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
