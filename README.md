# Create a New Docusaurus Project
```bash
npx create-docusaurus@latest smart-recruiting-docs classic
```
# Move into the Project Directory
```bash
cd smart-recruiting-docs
```
# Install Required Dependencies
```bash
npm install @easyops-cn/docusaurus-search-local docusaurus-prince-pdf prism-react-renderer @mdx-js/react clsx @docusaurus/module-type-aliases @docusaurus/types --save
```
# Update docusaurus.config.js
```bash
// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Smart_Recruiting Documentation',
  tagline: 'AI-Powered Resume Screening Tool by BintyByte Technologies',
  favicon: 'img/favicon.ico',

  // Deployment config
  url: 'https://smart-recruiting-docs.example.com',
  baseUrl: '/',
  organizationName: 'BintyByte Technologies',
  projectName: 'Smart_Recruiting',

  // Error handling
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',

  // Internationalization
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'hi'], // Add Hindi
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
      },
      hi: {
        label: 'हिन्दी',
        direction: 'ltr',
      },
    },
  },

  // Presets
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/bintybyte/smart-recruiting-docs/tree/main/',
          routeBasePath: '/', // Makes docs the root
        },
        blog: false, // Disable blog
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  // Theme config
  themeConfig: {
    // Metadata
    image: 'img/smart-recruiting-social-card.jpg',

    // Navbar
    navbar: {
      title: 'Smart_Recruiting',
      logo: {
        alt: 'Smart_Recruiting Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          type: 'docsVersionDropdown',
        },
        {
          href: 'https://github.com/bintybyte/smart-recruiting-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    // Footer
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            { label: 'Introduction', to: '/introduction' },
            { label: 'System Requirements', to: '/system_requirements' },
            { label: 'Installation', to: '/installation' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'Stack Overflow', href: 'https://stackoverflow.com/questions/tagged/smart-recruiting' },
            { label: 'Discord', href: 'https://discord.gg/your-invite-link' },
            { label: 'Twitter', href: 'https://twitter.com/bintybyte' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'GitHub', href: 'https://github.com/bintybyte/smart-recruiting-docs' },
            { label: 'Contact Support', href: 'mailto:info@bintybyte.com' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} BintyByte Technologies. Built with Docusaurus.`,
    },

    // Syntax highlighting
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },

  // Plugins
  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexDocs: true,
        indexPages: true,
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 10,
        explicitSearchResultPath: true,
      },
    ],
  ],
};
export default config;
```
# Versioning 
```bash
npm run docusaurus docs:version 1.0.0  # Creates versioned docs (e.g., `versioned_docs/version-1.0.0`)
npm run docusaurus docs:version 1.0.1  # Creates versioned docs (e.g., `versioned_docs/version-1.0.0`)
```
# Run & Build Application
```bash
npx docusaurus clear
npx docusaurus build
npx docusaurus serve
```
# Create Url List File
- urls.txt and urls-1.0.0.txt

# Create PDF File For Different Versioning
```bash
prince --no-warn-css --style=./node_modules/docusaurus-prince-pdf/print.css --input-list=./urls.txt -o ./pdf/my-complete-documentation.pdf

prince --no-warn-css --style=./node_modules/docusaurus-prince-pdf/print.css --input-list=./urls-1.0.0.txt -o ./pdf/my-complete-documentation-1.0.0.pdf
```
