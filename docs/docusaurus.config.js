const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const config = {
  title: 'Reactive Resume',
  tagline: 'A free and open source resume builder.',
  url: 'https://docs.rxresu.me',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'favicon.ico',
  organizationName: 'AmruthPillai',
  projectName: 'Reactive-Resume',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: false,
        docs: {
          routeBasePath: '/',
          editUrl: 'https://github.com/AmruthPillai/Reactive-Resume/tree/main/docs',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
        theme: {
          customCss: require.resolve('./styles/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Reactive Resume',
        logo: {
          alt: 'Reactive Resume',
          src: 'logo.svg',
        },
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Sections',
            items: [
              {
                label: 'Tutorial',
                to: '/tutorial',
              },
              {
                label: 'Source Code',
                to: '/source-code',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/AmruthPillai/Reactive-Resume',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/AmruthPillai',
              },
            ],
          },
          {
            title: 'Support',
            items: [
              {
                label: 'Donate',
                href: 'https://paypal.me/RajaRajanA',
              },
              {
                label: 'Translate',
                href: 'https://translate.rxresu.me',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Amruth Pillai. Licensed under MIT. Built with Docusaurus.`,
      },
      metadata: [
        {
          name: 'keywords',
          content: [
            'reactive resume',
            'resume builder',
            'free resumes',
            'resume templates',
            'free resume templates',
            'open source resume builder',
            'resume builder source code',
          ].join(', '),
        },
      ],
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
