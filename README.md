# QuickPrompt.xyz Landing Page

A modern landing page for QuickPrompt.xyz built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Modern UI with a clean and professional look
- Optimized for performance and SEO
- Built with the latest web technologies
- Component-based architecture for easy maintenance

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework for production
- [TypeScript](https://www.typescriptlang.org/) - Static type checking
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React](https://reactjs.org/) - JavaScript library for building user interfaces

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/quickprompt-landing.git
cd quickprompt-landing
```

2. Install the dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
├── app/                  # Next.js App Directory
│   ├── components/       # React Components
│   ├── globals.css       # Global Styles
│   ├── layout.tsx        # Root Layout
│   └── page.tsx          # Homepage
├── public/               # Static Assets
├── next.config.js        # Next.js Configuration
├── package.json          # Project Dependencies
├── postcss.config.js     # PostCSS Configuration
├── tailwind.config.js    # Tailwind CSS Configuration
└── tsconfig.json         # TypeScript Configuration
```

## Customization

### Colors

You can customize the color palette by editing the `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#5046e5", // Main color
        // Add more custom colors here
      },
    },
  },
};
```

### Fonts

The project uses Google Fonts (Inter and Poppins). You can change these in the `layout.tsx` file.

## Deployment

The project can be deployed to any hosting platform that supports Next.js, such as:

- [Vercel](https://vercel.com/) (Recommended)
- [Netlify](https://www.netlify.com/)
- [AWS Amplify](https://aws.amazon.com/amplify/)

## License

This project is licensed under the MIT License - see the LICENSE file for details. 