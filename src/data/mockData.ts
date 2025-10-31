// Mock data for the Author + Fashion Brand Hybrid Website

export interface Book {
  id: string;
  title: string;
  subtitle?: string;
  author: string;
  price: number;
  rating: number;
  coverImage: string;
  description: string;
  purchaseLinks: {
    amazon?: string;
    bookshop?: string;
    gumroad?: string;
  };
}

export interface FashionProduct {
  id: string;
  name: string;
  category: 'Men' | 'Women' | 'Accessories' | 'Collections';
  collection?: string;
  price: number;
  images: string[];
  description: string;
  sizes?: string[];
  colors?: string[];
}

export const books: Book[] = [
  {
    id: 'book-1',
    title: 'The Veiled City',
    subtitle: 'A tale of urban mystique',
    author: 'Isabella Wren',
    price: 24.99,
    rating: 4.8,
    coverImage: '/generated/book-cover-veiled-city.png',
    description: 'Stories that inspire against a bond. A literary journey through the hidden corners of metropolitan life, where secrets and revelations intertwine.',
    purchaseLinks: {
      amazon: 'https://amazon.com',
      bookshop: 'https://bookshop.org',
    },
  },
  {
    id: 'book-2',
    title: "The Creative's Dilemma",
    author: 'Isabella Wren',
    price: 19.99,
    rating: 4.7,
    coverImage: '/generated/book-cover-veiled-city.png',
    description: 'A profound exploration of the artistic process and the challenges faced by modern creators.',
    purchaseLinks: {
      amazon: 'https://amazon.com',
      gumroad: 'https://gumroad.com',
    },
  },
  {
    id: 'book-3',
    title: 'Urban Poetry Collection',
    author: 'Isabella Wren',
    price: 15.99,
    rating: 4.9,
    coverImage: '/generated/book-cover-veiled-city.png',
    description: 'A curated collection of contemporary poetry capturing the essence of city life.',
    purchaseLinks: {
      amazon: 'https://amazon.com',
      bookshop: 'https://bookshop.org',
    },
  },
  {
    id: 'book-4',
    title: 'Design Thinking for Writers',
    author: 'Isabella Wren',
    price: 22.99,
    rating: 4.6,
    coverImage: '/generated/book-cover-veiled-city.png',
    description: 'Bridging the gap between literary craft and design principles for the modern author.',
    purchaseLinks: {
      amazon: 'https://amazon.com',
      gumroad: 'https://gumroad.com',
    },
  },
];

export const fashionProducts: FashionProduct[] = [
  {
    id: 'fashion-1',
    name: 'The Hemingway Coat',
    category: 'Collections',
    collection: 'Literary Legends',
    price: 245,
    images: ['/generated/fashion-hero-monochrome.png'],
    description: 'Timeless elegance inspired by classic American literature. A statement piece for the modern creative.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Charcoal', 'Cream'],
  },
  {
    id: 'fashion-2',
    name: 'Virginia Woolf Silk Dress',
    category: 'Women',
    collection: 'Literary Legends',
    price: 189,
    images: ['/generated/fashion-hero-monochrome.png'],
    description: 'Flowing sophistication meets literary inspiration. Designed for the thoughtful, fashion-forward woman.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Midnight Blue', 'Cream', 'Sage'],
  },
  {
    id: 'fashion-3',
    name: "Writer's Blazer",
    category: 'Men',
    collection: 'Noir Collection',
    price: 189,
    images: ['/generated/fashion-collection-1.png'],
    description: 'Minimalist pieces inspired by literary heroines. Clean lines for the creative professional.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Navy'],
  },
  {
    id: 'fashion-4',
    name: 'Story Teller Scarf',
    category: 'Accessories',
    collection: 'Everyday Essentials',
    price: 65,
    images: ['/generated/fashion-collection-1.png'],
    description: 'Luxurious silk accessory featuring literary quotes and elegant design.',
    sizes: ['One Size'],
    colors: ['Black', 'Cream', 'Gold'],
  },
  {
    id: 'fashion-5',
    name: "Minimalist Writer's Uniform Set",
    category: 'Collections',
    collection: 'Everyday Essentials',
    price: 129,
    images: ['/generated/fashion-collection-1.png'],
    description: 'Complete ensemble for the creative mind. Comfort meets style in this versatile collection.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Gray'],
  },
];

export const featuredCollections = [
  {
    id: 'collection-1',
    name: 'Literary Works',
    items: books.slice(0, 3),
    type: 'books' as const,
  },
  {
    id: 'collection-2',
    name: 'Custom Edit',
    items: fashionProducts.slice(0, 2),
    type: 'fashion' as const,
  },
  {
    id: 'collection-3',
    name: 'Limited Edition',
    items: fashionProducts.slice(2, 4),
    type: 'fashion' as const,
  },
];

export const authorBio = {
  name: 'Isabella Wren',
  title: 'Writer. Visionary. Designer.',
  bio: 'Isabella Wren is an award-winning novelist turned fashion visionary, creating wearable narratives for the modern creative. Her work bridges the gap between storytelling and style, offering a unique perspective on personal expression through both literature and design.',
  image: '/generated/author-portrait.png',
  achievements: [
    'Award-winning novelist',
    'Fashion designer',
    '3 bestselling books',
    'Featured in Vogue, Elle, NYT',
  ],
};
