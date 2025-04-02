**Prompt for Building the Naftali Gan Website**

Build a website for Naftali Gan, a nursery in Israel, by following these steps:

1. **Use Yarn as the Package Manager**  
    - Utilize **Yarn** for managing project dependencies and running scripts (e.g., `yarn install`, `yarn build`, `yarn dev`), ensuring a consistent and efficient development workflow.

2. **Implement TypeScript for Type Safety**  
    - Use **TypeScript** throughout the project to add static typing, improving code quality, catching errors early, and enhancing maintainability and developer experience.

3. **Style with Tailwind CSS**  
    - Apply **Tailwind CSS** for a utility-first styling approach, enabling rapid development of a consistent, responsive, and customizable design system.

4. **Develop a Friendly, Light, and Fast Website**  
   - Use **Next.js** with **Static Site Generation (SSG)** to create a user-friendly, lightweight, and high-performance website.  
   - Leverage SSG to pre-render pages at build time for faster load speeds and better SEO.

5. **Optimize for Marketing with SEO**  
   - Implement **search engine optimization (SEO)** techniques, such as meta tags, alt text for images, and keyword-rich content, to improve visibility on search engines and enhance marketing effectiveness.

6. **Support Hebrew and English with RTL/LTR**  
   - Add **multilingual support** for Hebrew (default language) and English.  
   - Ensure proper handling of **right-to-left (RTL)** for Hebrew and **left-to-right (LTR)** for English, adjusting layout and text direction dynamically based on the selected language.

7. **Ensure Mobile Compatibility**  
   - Design a **fully responsive website** that adapts seamlessly to mobile devices, tablets, and desktops, providing an optimal experience across all screen sizes.

8. **Prepare for GitHub Pages Deployment**  
   - Configure the project to be compatible with **GitHub Pages** hosting requirements, such as outputting static files to the correct directory (e.g., `/out` for Next.js SSG).

9. **Incorporate Accessibility Features**  
   - Integrate an **accessibility toolbar** (e.g., from https://www.negishim.org/) to comply with Israeli accessibility laws and ensure the site is usable for people with disabilities.  
   - Include features like keyboard navigation, screen reader support, and adjustable text sizes.

10. **Include Essential Pages**  
   Create the following pages with their respective content:  
   - **Home**: A welcoming introductory page for the nursery.  
   - **About**: Details about Naftali Gan’s mission, values, and history.  
   - **Products**: A showcase of nursery products, such as plants and gardening supplies, with descriptions and images.  
   - **Gallery**: A visual collection of images displaying the nursery’s offerings, facilities, or events.  
   - **Contact**: Contact details including:  
     - Nursery address with an embedded **Google Map**.  
     - Phone number, email, and opening hours.  
     - Any additional relevant information.

11. **Add Subtle Animations**  
   - Incorporate **subtle animations** (e.g., fade-ins, hover effects) to enhance user engagement and experience, ensuring they are lightweight and unobtrusive.

12. **Base Content on Existing Website**  
   - Use the current website at **https://www.naftaligan.co.il/** as a foundation for content, structure, and inspiration, while improving and adapting it as necessary.

13. **Automate Deployment with GitHub Action**  
    - Set up a **GitHub Action** workflow to:  
      - Build the Next.js project using SSG.  
      - Deploy the static files to GitHub Pages automatically upon pushing changes to the repository.

14. **Follow the DRY Principle**  
    - Adhere to the **"Don't Repeat Yourself" (DRY)** principle by:  
      - Creating reusable components (e.g., navigation bar, footer).  
      - Defining shared functions and utilities.  
      - Using Tailwind CSS classes efficiently to avoid redundant styling.
