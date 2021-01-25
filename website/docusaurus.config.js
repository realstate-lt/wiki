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
          label: 'Dokumentacija',
          position: 'left',
        },
        {to: 'blog', label: 'Blogas', position: 'left'},
        {
          href: 'https://forumas.realstate.lt/',
          label: 'RealState Forumas',
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
            {
              label: 'GitHub',
              href: 'https://github.com/realstate-lt/wiki',
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
              label: 'VVP',
              href: 'https://vvp.realstate.lt/login',
            },
            {
              label: 'Atnaujinimai',
              href: 'https://forumas.realstate.lt/forum/7-atnaujinimai/',
            },
            {
              label: 'Supergames tema',
              href: 'https://www.supergames.lt/topic/326203-realstatelt-nemokami-prizai-kas-24val/page/1/',
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
          editUrl:
            'https://github.com/realstate-lt/wiki/website',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/realstate-lt/wiki/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
