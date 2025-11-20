
# Next.js Project Setup and Basics

## Introduction

This project covers fundamental concepts from initial setup to building interactive components and fetching data from external APIs. It introduces working with Next.js, TypeScript and TailwindCSS. It features creating a modern web application with reusable components, routing, API integration, and proper project structure. 

## Scaffolding a Next.js project
   Type the command `npx create-next-app@latest` followed with the name of the project.
   Enable TypeScript, ESLint, and TailwindCSS.


## Project Structure
This project is divided into several folders and files, each serving a specific purpose:

1. Root Directory
The root directory contains essential files and folders required to run the project: 
   - `pages/`: Houses all page components. Each file within this directory corresponds to a route in the application .
   - `components/`: Contains reusable components used accross various pages.
   - `public/`: Stores static files like images and icons. 
   - `styles/`: Manages global and component-specific styling with Tailwind CSS. 
   - `utils/`: Contains helper functions that simplifies task like API calls and data formatting. 
   - `hooks/`: Custom React hooks for managing state and reusing logic. 
   - `context/`: Global state management through React context providers.
   - `assets/`: Additional static assets, such as fonts or SVG icons. 

2. Key Folders and Their Roles
- pages/
   * Purpose: Defines the main pages of the application. 
   * Files: 
      * index.tsx: Home - Listing Page displaying all available properties.
      * [slug].tsx: Dynamic route for Detail Page, providing information on a selected listing. 
      * checkout.tsx: Checkout Page where users can review and confirm bookings.

- components/
   * Purpose: Contain modular, reusable components that help build the UI. 
   * Components: 
      * ListingCard.tsx: Displays the property information on the Home Page.
      * Navbar.tsx: & Footer.tsx: Layout component used for navigation and footer content on every page. 
      * DetailView.tsx: Presents detailed information about a specific property
      * CheckoutForm.tsx: form component handling checkout details.
      * ImageGallery.tsx: A gallery for displaying image on the Detail Page.
      * ReviewSection.tsx: Lists reviews on the Detail Page. 

- styles/
   * Purpose: Manages the CSS, utilizing Tailwind CSS for utility-first styling.
   * Files: 
      * globals.css: Global styles and Tailwind CSS configuration.
      * tailwind.config.js and postcss.config.js: Configuration files for Tailwind CSS.

- utils/
   * Purpose: Holds functions for reusable logic.
   * Files: 
      * apiClient.ts: Configurations and functions for API calls. 
      * formatPrice.ts: Formats currency for price display.

- hooks/
   * Purpose: contains custom hooks to manage specific logic.
   * Files:
      * useListings.ts: Manages data fetching for property lisitings. 
      * useCart.ts: Manages state for items added to the cart.

- context/
   * Purpose: Global state management using React Context API.
   * Files: 
      * CartContext.tsx: Provides a context for managing the cart globally.
      * UserContext.tsx: Handles user authentication and state. 

3. Essential Configuraton Files
* tsconfig.json:
   * Purpose: TypeScript configuration file for managing paths and aliases
   * Example Aliases:
      ```
         "paths": {
            "@/components/*
         }
      ```

* tailwind.config.js & postcss.config.js:
   * Purpose: Configures Tailwind CSS for styling and sets up PostCSS for processing CSS