module.exports = {
  title: 'RealState Wiki',
  tagline: 'Projekto sistemų aprašymai',
  url: 'https://forumas.realstate.lt',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'RealState', // Usually your GitHub org/user name.
  projectName: 'Wiki', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'RealState Wiki',
      logo: {
        alt: 'Wiki logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Wiki',
          items: [
            {
              label: 'Pildymo instrukcija',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Projektas',
          items: [
            {
              label: 'Serveris',
              href: 'samp://samp.realstate.lt:7777/',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/CpMkRxC3sF',
            },
            {
              label: 'Forumas',
              href: 'https://forumas.realstate.lt/',
            },
          ],
        },
        {
          title: 'Kita',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/realstate-lt/wiki',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} RealState`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
