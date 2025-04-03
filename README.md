# Naftali Gan Website

Website for Naftali Gan, a nursery providing quality plants and gardening products since 2000.

## Features

- Bilingual support (Hebrew and English)
- Accessibility features (font size adjustment, high contrast mode)
- Responsive design
- Static site generation for fast loading
- GitHub Pages deployment

## Implementation Notes

- The site uses Next.js's static export feature for GitHub Pages deployment
- Internationalization is handled through separate directories for each language (he/, en/)
- RTL support is built-in for Hebrew content
- Accessibility toolbar provides font size adjustment and high contrast mode

## Getting Started

### Prerequisites

- Node.js 16+
- Yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/naftali-gan/naftali-gan.github.io.git
   cd naftali-gan.github.io
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Start the development server:
   ```bash
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
yarn build
```

The static site will be generated in the `out` directory.

## Deployment

The website is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

## Built With

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library

## License

This project is licensed under the MIT License - see the LICENSE file for details.
