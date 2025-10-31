import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { authorBio } from '@/data/mockData';

export const dynamic = 'force-dynamic';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="w-full bg-[hsl(var(--cream-bg))] pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-serif text-5xl md:text-6xl mb-6">{authorBio.name}</h1>
          <p className="text-2xl font-light">{authorBio.title}</p>
        </div>
      </section>

      {/* Main Bio Section */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <Image
                src={authorBio.image}
                alt={authorBio.name}
                width={600}
                height={600}
                className="w-full image-bw"
              />
            </div>

            <div>
              <h2 className="font-serif text-3xl mb-6">My Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  {authorBio.bio}
                </p>
                <p>
                  My journey began with words—crafting narratives that explore the human condition,
                  identity, and the spaces between reality and imagination. As my literary work evolved,
                  I discovered that storytelling wasn't limited to the page. Fashion became another medium
                  for expression, a way to bring characters and themes to life in tangible, wearable form.
                </p>
                <p>
                  Today, I bridge these two worlds, creating books that inspire thought and clothing that
                  makes a statement. Both are extensions of a singular creative vision: that art should be
                  lived, not just observed.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="font-serif text-xl mb-4">Achievements</h3>
                <ul className="space-y-2">
                  {authorBio.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[hsl(var(--gold-accent))]">✦</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="w-full py-20 bg-[hsl(var(--cream-bg))]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl mb-8">Creative Philosophy</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-12">
              "Every story deserves to be told in multiple forms. Whether through prose or fabric,
              my work explores themes of identity, transformation, and the beauty found in life's
              complexities. I believe that creativity is not confined to one medium—it flows between
              disciplines, enriching both the writer and the wearer."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-black">
                  <span className="font-serif text-2xl">01</span>
                </div>
                <h3 className="font-serif text-xl mb-3">Authenticity</h3>
                <p className="text-sm text-gray-600">
                  Create from truth, not trends. Every piece reflects genuine creative expression.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-black">
                  <span className="font-serif text-2xl">02</span>
                </div>
                <h3 className="font-serif text-xl mb-3">Craftsmanship</h3>
                <p className="text-sm text-gray-600">
                  Whether words or garments, quality matters. Excellence in execution honors the idea.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-black">
                  <span className="font-serif text-2xl">03</span>
                </div>
                <h3 className="font-serif text-xl mb-3">Connection</h3>
                <p className="text-sm text-gray-600">
                  Art should resonate. My work aims to create meaningful connections with those who encounter it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl mb-6">Explore My Work</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Discover the literary works and fashion collections that bring this creative vision to life.
          </p>

          <div className="flex gap-6 justify-center flex-wrap">
            <Link href="/books" className="btn-primary px-12 py-4 text-base">
              Browse Books
            </Link>
            <Link href="/fashion" className="btn-primary px-12 py-4 text-base">
              Shop Fashion
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
