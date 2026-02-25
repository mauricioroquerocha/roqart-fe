# Roqart 3D Printing E-Commerce: Project Plan

This document outlines the tasks needed to complete the frontend application for the Roqart 3D printing store. The project uses a modern headless e-commerce stack: Next.js 15, React 19, TailwindCSS, Drizzle ORM, Redux Toolkit, and Medusa.js for the backend.

## 1. Project Setup & Configuration
- [x] Initial Next.js App Router setup
- [x] Integrate TailwindCSS, PostCSS, and Prettier/ESLint (with shadcn/ui)
- [x] Set up Redux Toolkit state management
- [x] Configure Docker environments
- [x] Update `.gitignore` and developer toolchain (Node v22, `pnpm`)
- [x] Implement robust error boundaries and global error handling
- [x] Setup API client architecture (fetch wrappers or MedusaJS JS client)

## 2. Authentication & User Accounts (`next-auth`)
- [x] Configure `next-auth` providers (Credentials, Google/GitHub OAuth)
- [x] Implement `Sign In` / `Sign Up` forms with `zod` validation
- [ ] Create `User Dashboard` (Order history, saved addresses, payment methods)
- [ ] Create `Creator/Designer Profile` pages

## 3. Product Catalog & Storefront (`app/(store)`)
- [ ] Implement Product listing page with advanced filtering (Categories, Filaments, Resins, 3D Printers, Digital Models)
- [ ] Implement pagination & sorting logic
- [ ] Create high-quality Product Detail Pages (PDP)
- [ ] **Feature:** Integrate a 3D Model viewer (e.g., using `@react-three/fiber` for digital product previews like `.stl` / `.obj` files)
- [ ] Setup image carousels for products using `embla-carousel-react`

## 4. Shopping Cart & Checkout Flow
- [ ] Implement global Redux cart state + persistent local storage
- [ ] Slide-out / Modal Cart UI using Radix UI
- [ ] Integrate Medusa backend cart and checkout API endpoints
- [ ] Build multi-step Checkout process (Shipping, Delivery, Payment, Review)
- [ ] Integrate Payment Gateways (e.g., Stripe)

## 5. Medusa.js Backend Integration
- [ ] Connect strictly to `NEXT_PUBLIC_API_URL=http://medusa_server:9000`
- [ ] Wire up Medusa products endpoints
- [ ] Wire up Medusa regions & shipping options
- [ ] Implement Webhooks listener logic if required in backend

## 6. Content & Marketing Pages
- [ ] **Home Page:** Hero section, Featured 3D prints, Top creators, Latest printers
- [ ] **About Us:** Company mission, background on sustainable printing
- [ ] **Designers:** Showcase of professional 3D modelers and their portfolios
- [ ] **Blog/News:** (Optional) SEO optimized content pages

## 7. UI/UX & Design Polish
- [ ] Design System validation (colors, typographies, Radix primitives via `components/ui`)
- [ ] Implement dark mode toggle
- [ ] Add loading skeletons and micro-animations with `tailwindcss-animate`
- [ ] Make the web app fully responsive and mobile-friendly

## 8. Deployment and SEO CI/CD
- [ ] Setup dynamic `<title>` and `<meta>` tags for SEO (important for e-commerce)
- [ ] Configure `next-sitemap`
- [ ] CI/CD pipeline setup (e.g., GitHub Actions to Vercel/Docker Swarm)
- [ ] End-to-end testing setup (Playwright or Cypress)
