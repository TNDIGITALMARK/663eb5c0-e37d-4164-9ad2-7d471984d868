import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const dynamic = 'force-dynamic';

export default function BlogPage() {
  // Mock blog posts - can be replaced with real data later
  const blogPosts = [
    {
      id: '1',
      title: 'The Intersection of Fashion and Literature',
      excerpt: 'Exploring how storytelling principles inform design choices and create wearable narratives.',
      date: '2024-03-15',
      category: 'Fashion & Design',
    },
    {
      id: '2',
      title: 'Writing Process: From Concept to Completion',
      excerpt: 'A behind-the-scenes look at how my novels come to life, from the first spark of an idea to the final page.',
      date: '2024-03-10',
      category: 'Writing',
    },
    {
      id: '3',
      title: 'Building a Creative Brand in the Modern Age',
      excerpt: 'Lessons learned from merging two creative disciplines into one cohesive personal brand.',
      date: '2024-03-05',
      category: 'Business & Creativity',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="w-full bg-[hsl(var(--cream-bg))] pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-serif text-5xl md:text-6xl mb-6">Blog</h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-700">
            Thoughts on writing, design, and the creative life
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            {blogPosts.map((post) => (
              <article key={post.id} className="border-b border-gray-200 pb-12 last:border-0">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs tracking-[0.2em] uppercase font-medium text-gray-500">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-400">•</span>
                  <time className="text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </div>

                <h2 className="font-serif text-3xl mb-4">
                  <Link href={`/blog/${post.id}`} className="hover:opacity-70 transition-opacity">
                    {post.title}
                  </Link>
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.id}`}
                  className="text-sm font-medium tracking-wide uppercase hover:opacity-70 transition-opacity"
                >
                  Read More →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="w-full py-20 bg-[hsl(var(--cream-bg))]">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-4xl mb-4">Never Miss a Post</h2>
            <p className="text-lg text-gray-700 mb-8">
              Get new articles and updates delivered directly to your inbox.
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
