# Velvet Pour - Cocktail Bar Website ![Velvet Pour Logo](/public/images/logo.png)

## Overview

**Velvet Pour** is a modern, interactive website for a cocktail bar located in Los Angeles. The site showcases the
bar's  
cocktails, ambiance, menu, and contact information with elegant animations and a fully responsive design.

## Deployment

The project is deployed on vercel.

[Live Demo](https://velvet-pour-five.vercel.app)

## Features

- **Interactive UI** – Smooth scrolling and animations powered by GSAP
- **Responsive Design** – Fully responsive layout for all screen sizes
- **Multiple Sections**:
    - Hero section with an eye-catching introduction
    - Cocktails showcase with detailed descriptions
    - About Us section highlighting the bar's story
    - The Art section showcasing bartending expertise
    - Menu with cocktails and mocktails
    - Contact section with location and hours

## Technologies Used

- **React 19** – Latest version for building interactive UI
- **GSAP (GreenSock Animation Platform)** – Smooth animations and transitions
- **Tailwind CSS v4** – Utility-first CSS framework for responsive design
- **Vite** – Fast build tool and development server

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or pnpm package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/JeetDas5/velvet-pour
   cd velvet-pour
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   pnpm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. Open your browser and navigate to [http://localhost:5173](http://localhost:5173)

## Build for Production

To build the project for production:

```bash
npm run build
# or
pnpm build
```

## Project Structure

```bash
velvet-pour/
├── public/              # Static assets
│   └── images/          # Image assets
├── src/
│   ├── components/      # React components
│   │   ├── About.jsx
│   │   ├── Art.jsx
│   │   ├── Cocktails.jsx
│   │   ├── Contact.jsx
│   │   ├── Hero.jsx
│   │   ├── Menu.jsx
│   │   └── Navbar.jsx
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── constants/           # Application constants and data
│   └── index.js
└── ...                  # Other configuration files
```

## Author Details

[Visit my website](https://jeetdas.tech)
