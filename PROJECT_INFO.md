# Aurora & Sage - Author + Fashion Brand Hybrid Website

## Project Overview

This is a sophisticated personal brand hub that seamlessly merges literary and fashion identities into one cohesive digital experience. The site embodies the tagline "Where storytelling meets style."

## Design System

### Color Palette
- **Primary Black**: `#000000` - Header, footer, buttons
- **Cream/Beige**: `#F5F3EF` - Hero backgrounds, section highlights
- **Pure White**: `#FFFFFF` - Main background
- **Gold Accent**: `#D4AF37` - Decorative elements
- **Text Dark**: `#333333` - Body text

### Typography
- **Serif Font**: Playfair Display - Brand name, headings, literary sections
- **Sans-Serif Font**: Inter - Navigation, body text, fashion sections

### Key Features Implemented

1. **Split-Screen Hero Section**
   - Left side: Literary focus with book cover
   - Right side: Fashion focus with monochrome photography
   - Exact design replication from reference

2. **Three Core Pages**
   - **Home Page**: Brand story hub with split hero, featured collections, and author intro
   - **Books Page**: Complete literary collection with purchase links and author bio
   - **Fashion Page**: Editorial-style product grid with category filters

3. **Additional Pages**
   - **About Page**: Complete author bio, philosophy, and achievements
   - **Blog Page**: Content hub for articles and updates
   - **Contact Page**: Form and contact information

4. **Reusable Components**
   - Header with elegant navigation
   - Footer with social links and newsletter signup
   - Consistent button styling matching reference design

## Mock Data Structure

All content is stored in `src/data/mockData.ts` including:
- Books collection with metadata, pricing, and purchase links
- Fashion products with categories, collections, and pricing
- Author biography and achievements
- Featured collections organization

## Visual Assets

Generated AI images matching the design reference:
- Book cover: "The Veiled City" with ornate gold frame
- Fashion hero: Black and white editorial photography
- Author portrait: Professional B&W headshot
- Fashion collection items: Minimalist product photography

All assets maintain exact aspect ratios and styling from the design reference.

## Design Principles Applied

1. **Pixel-Perfect Replication**: Colors, fonts, spacing, and layout exactly match the design reference
2. **Responsive Design**: Mobile-first approach with breakpoints for all screen sizes
3. **Editorial Aesthetic**: Clean, sophisticated styling with generous white space
4. **Dual Identity**: Seamless integration of literary and fashion elements
5. **Professional Quality**: Production-ready code following best practices

## Technical Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS 4 with custom design system
- **Typography**: Google Fonts (Playfair Display + Inter)
- **Components**: React 19 with TypeScript
- **Icons**: Lucide React
- **Image Generation**: Banana Nano MCP for AI-generated assets

## File Structure

```
src/
├── app/
│   ├── page.tsx          # Home page with split hero
│   ├── books/page.tsx    # Books collection
│   ├── fashion/page.tsx  # Fashion store
│   ├── about/page.tsx    # Author biography
│   ├── blog/page.tsx     # Blog listing
│   ├── contact/page.tsx  # Contact form
│   └── globals.css       # Design system & custom styles
├── components/
│   └── layout/
│       ├── Header.tsx    # Site navigation
│       └── Footer.tsx    # Site footer
└── data/
    └── mockData.ts       # Mock content and products

public/generated/         # AI-generated image assets
```

## Key Design Decisions

1. **Font System**: Imported exact fonts (Playfair Display for elegance, Inter for modern clarity)
2. **Color Variables**: HSL color system for Tailwind integration
3. **Button Style**: Border outline design matching reference (transparent with black border)
4. **Image Treatment**: Grayscale filter on fashion photography for editorial aesthetic
5. **Spacing System**: Exact measurements extracted from design reference

## Future Enhancements

- E-commerce integration (Shopify Lite or Stripe)
- Blog CMS integration
- Newsletter management (Mailchimp/ConvertKit)
- Product detail pages with size selection
- Shopping cart functionality
- User authentication for orders
- SEO optimization for combined author/fashion keywords

## Brand Messaging

**Taglines**:
- "Where storytelling meets style"
- "Stories that inspire. Designs that express."
- "Writer. Visionary. Designer."

**Target Audience**: Literary enthusiasts who appreciate fashion, fashion-forward readers, and supporters of independent creators who value artistic authenticity.
