import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { books, authorBio } from '@/data/mockData';
import { Star } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default function BooksPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="w-full bg-[hsl(var(--cream-bg))] pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-serif text-5xl md:text-6xl mb-6">Literary Works</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-700 leading-relaxed">
            Discover stories that inspire, challenge, and transform.
            Each book is a journey through the landscapes of imagination and human experience.
          </p>
        </div>
      </section>

      {/* Books Collection Grid */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {books.map((book) => (
              <div key={book.id} className="group">
                <Link href={`/books/${book.id}`} className="block">
                  <div className="mb-6">
                    <div className="flex justify-center">
                      <Image
                        src={book.coverImage}
                        alt={book.title}
                        width={300}
                        height={450}
                        className="shadow-book image-book group-hover:scale-105 transition-transform duration-300 w-64"
                      />
                    </div>
                  </div>
                </Link>

                <div className="text-center">
                  <h3 className="font-serif text-2xl mb-2 group-hover:opacity-70 transition-opacity">
                    <Link href={`/books/${book.id}`}>{book.title}</Link>
                  </h3>
                  {book.subtitle && (
                    <p className="text-sm text-gray-600 mb-3">{book.subtitle}</p>
                  )}

                  {/* Rating */}
                  <div className="flex items-center justify-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={i < Math.floor(book.rating) ? 'fill-black' : 'fill-gray-300'}
                      />
                    ))}
                    <span className="text-sm ml-2">({book.rating})</span>
                  </div>

                  <p className="text-gray-700 mb-4 leading-relaxed line-clamp-3">
                    {book.description}
                  </p>

                  <p className="text-2xl font-serif mb-4">${book.price}</p>

                  {/* Purchase Links */}
                  <div className="flex gap-3 justify-center flex-wrap">
                    {book.purchaseLinks.amazon && (
                      <a
                        href={book.purchaseLinks.amazon}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-xs px-4 py-2"
                      >
                        Buy on Amazon
                      </a>
                    )}
                    {book.purchaseLinks.bookshop && (
                      <a
                        href={book.purchaseLinks.bookshop}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-xs px-4 py-2"
                      >
                        Buy on Bookshop
                      </a>
                    )}
                    {book.purchaseLinks.gumroad && (
                      <a
                        href={book.purchaseLinks.gumroad}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-xs px-4 py-2"
                      >
                        Buy eBook
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Author Bio Section */}
      <section className="w-full py-20 bg-[hsl(var(--cream-bg))]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl text-center mb-12">About the Author</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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
                <h3 className="font-serif text-3xl mb-4">{authorBio.name}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {authorBio.bio}
                </p>

                <div className="space-y-2 mb-6">
                  {authorBio.achievements.map((achievement, index) => (
                    <p key={index} className="text-sm">
                      ✓ {achievement}
                    </p>
                  ))}
                </div>

                <Link href="/about" className="btn-primary inline-block">
                  Read My Story
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-4xl mb-4">Stay Updated</h2>
            <p className="text-lg text-gray-600 mb-8">
              First access to new releases and limited fashion drops
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 border border-gray-300 focus:border-black focus:outline-none"
              />
              <button type="submit" className="btn-primary px-8 py-3">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
