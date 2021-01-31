module.exports = {
  title: "RealState Wiki",
  tagline: "Projekto sistemų aprašymai",
  url: "https://forumas.realstate.lt",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "RealState", // Usually your GitHub org/user name.
  projectName: "Wiki", // Usually your repo name.
  customFields: {
    ogImage: "img/logo.png",
  },
  themeConfig: {
    navbar: {
      title: "RealState Wiki",
      logo: {
        alt: "Wiki logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Dokumentacija",
          position: "left",
        },
        {
          to: "blog/",
          activeBasePath: "blog",
          label: "Gidai",
          position: "left",
        },
        {
          href: "https://forumas.realstate.lt/",
          label: "RealState Forumas",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Wiki",
          items: [
            {
              label: "Pildymo instrukcija",
              to: "docs/",
            },
            {
              label: "GitHub",
              href: "https://github.com/realstate-lt/wiki",
            },
          ],
        },
        {
          title: "Projektas",
          items: [
            {
              label: "Serveris",
              href: "samp://samp.realstate.lt:7777/",
            },
            {
              label: "Discord",
              href: "https://discord.realstate.lt",
            },
            {
              label: "Forumas",
              href: "https://forumas.realstate.lt/",
            },
          ],
        },
        {
          title: "Kita",
          items: [
            {
              label: "VVP",
              href: "https://vvp.realstate.lt/login",
            },
            {
              label: "Atnaujinimai",
              href: "https://forumas.realstate.lt/forum/7-atnaujinimai/",
            },
            {
              label: "Supergames tema",
              href:
                "https://www.supergames.lt/topic/326203-realstatelt-nemokami-prizai-kas-24val/page/1/",
            },
          ],
        },
      ],
      copyright: `Visos teisės saugomos © ${new Date().getFullYear()} RealState.lt`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/realstate-lt/wiki/tree/master",
        },
        blog: {	
          showReadingTime: true,
          editUrl: "https://github.com/realstate-lt/wiki/tree/master",
          feedOptions: {
            language: 'lt'
          }
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
