# QuickCart E-Commerce Prototype

A modern, fast, & responsive e-commerce web application built using Next.js (App Router), TypeScript, Zustand, & Axios. This project was developed as a technical assessment for an offline interview process, prioritizing strict separation of concerns, optimized user experience, and robust error handling.

##  Tech Stack & Ecosystem

- **Framework:** Next.js (App Router) — Leverages hybrid architecture with Server Components for structural data loading and Client Components for modular interactivity.
- **State Management:** Zustand — Boilerplate-free global state engine with integrated middleware for seamless session-based persistence.
- **Data Fetching:** Axios — Configured with an isolated global instance wrapper to centralize HTTP headers, timeout logic, and API base environments.
- **Styling:** Tailwind CSS — Employs a utility-first approach to create a premium, fluid, and minimalist theme with zero runtime style bundle inflation.
- **Language:** TypeScript — Strict typing enforced across all service layers, global states, and UI prop boundaries.



## Features Beyond the Core Requirements

While the assessment outline requested a baseline application, this repository includes several critical production-grade additions to demonstrate clean system design:

- **Native Streaming & Skeleton Loaders:** Implemented `loading.tsx` wrappers across route segments utilizing Tailwind's `animate-pulse` utilities to maximize perceived loading performance.
- **Fault-Tolerant Error Boundaries:** Configured Next.js global `error.tsx` client catch boundaries and mapped broken/malformed API query parameters cleanly to semantic `notFound()` 404 pages.
- **In-Cart Quantity Mutations:** Extended the cart domain beyond simple add/remove mechanics to feature complex inline item count increments/decrements with self-filtering zero-index boundaries.
- **Hydration Shift Safeguards:** Shielded the layout against server/client string synchronization conflicts (caused by initial browser `localStorage` retrieval) using controlled state-mounting flags.

## 🛠️ Getting Started & Installation

Follow these steps to spin up the environment locally:

### 1. Prerequisites
Ensure you have Node.js (v18.x or later) and your preferred package manager npm/pnmp/yarn installed.

### 2. Set Up Environment Variables
`npm install` 

### 3. Run the Local Development Environment
`npm run dev` 

Open http://localhost:3000 in your browser to inspect the application.

### 4. Build Compiling
```pnpm build```


## **📐 Directory Layout & System Architecture**
The project structures absolute separation of concerns. UI blocks are contextually completely agnostic of how the data layers resolve their asynchronous tasks.

```
src/
├── app/                          # Next.js App Router (Routing, Data Fetching Orchestration)
│   ├── cart/                     # Client- hydrated Shopping Cart view
│   ├── products/[id]/            # Async dynamic routing details page
│   ├── error.tsx                 # App-wide visual error recovery boundary
│   └── layout.tsx                # Application layout master shell
│   └── not-found.tsx             # 404 Not Found Page
│   └── page.tsx                  # Public Page Route
├── components/                   # Isolated Reusable UI Elements (Pure Presentation)
│   ├── AddToCartButton.tsx       # Local timeout state interaction button
│   ├── CartItem.tsx              # Individual inline checkout modifier card
│   ├── Header.tsx                # Nav frame with layout-shift prevention count badge
│   └── ProductCard.tsx           # Scalable catalog card block
├── constants/                    # Immutable Frozen Application Configurations
│   ├── apiEndpoints.js           # Centralized remote target mapping rules
│   └── appConfig.js              # General currency indicators & application text constants
├── services/                     # Central Axios Communication Pipeline
│   ├── axiosInstance.ts          # Core instance module with global header parameters
│   └── productService.ts         # Strictly-typed promise resolution services
├── store/                        # Central State Architecture
│   └── useCartStore.ts           # Global Zustand slice with localStorage sync engine
└── types/                        # Global Type-Safety Definitions
    └── product.ts                # Rigid data structures mapping remote structures
```


## **⚖️ Engineering Trade-offs & Architecture Decisions**
**Zustand over React Context**
* While standard React Context API could handle a small cart state, it forces component re-renders down its node tree on any property adjustment unless meticulously optimized.
* Zustand decouples global state entirely from the React component tree, utilizes an efficient publish-subscribe model, handles action dispatches natively without provider nesting hell, and offers atomic value selection out of the box.

**Dynamic Layout Data Partitioning**
* The application treats route endpoints inside src/app/ as infrastructure coordinators. For instance, the Product Detail View pulls parameters natively on the server architecture, validates item range limits, and handles secure fetching over Axios.
* It then simply passes immutable primitives into presentation components. This significantly slims down the browser's initial bundle processing load.

## **⚠️ Known Limitations & Future Roadmap**
* **Server-Side Pagination**: The home page currently consumes the initial pool response returned by the /products route. For production use, this pipeline would be optimized to intercept parameters using search query configurations (?limit=20&skip=20) to hook up a virtualized viewport or a structural pagination row.

* **Client-Side Image Security**: Remote image asset pointers are whitelisted inside next.config.ts matching cdn.dummyjson.com. If the api dynamically alters target host CDNs, those configurations will require corresponding pattern additions.

* **Advanced State Rehydration Skeletons**: While the mounted logic cleanly prevents layout shift warnings, a secondary roadmap evolution would involve rendering custom empty skeleton blocks matching exactly the dimensions of the final counter badges.