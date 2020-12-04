module.exports = {
  title: 'E-Onlineshop Help Center',
  tagline: 'ศูนย์ช่วยเหลือระบบ E-Onlineshop',
  url: 'https://eonlineshop.net',
  baseUrl: '/helpcenter/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon-eonlineshop.png',
  organizationName: 'IARC', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Help Center',
      logo: {
        alt: 'My Site Logo',
        src: 'img/favicon-eonlineshop.png',
      },
      items: [
        {
          href: 'https://eonlineshop.net/',
          label: 'ระบบ E-Onlineshop',
          position: 'left',
        },
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'วิธีการใช้งาน',
          position: 'left',
        },
        { to: 'blog', label: 'อัพเดทข่าวสาร', position: 'left' },
        {
          href: 'https://facebook.com/iarc.psu',
          label: 'IARC@PSU',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      // links: [
      //   {
      //     title: 'Docs',
      //     items: [
      //       {
      //         label: 'Style Guide',
      //         to: 'docs/',
      //       },
      //       {
      //         label: 'Second Doc',
      //         to: 'docs/doc2/',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'Community',
      //     items: [
      //       {
      //         label: 'Stack Overflow',
      //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //       },
      //       {
      //         label: 'Discord',
      //         href: 'https://discordapp.com/invite/docusaurus',
      //       },
      //       {
      //         label: 'Twitter',
      //         href: 'https://twitter.com/docusaurus',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'More',
      //     items: [
      //       {
      //         label: 'Blog',
      //         to: 'blog',
      //       },
      //       {
      //         label: 'GitHub',
      //         href: 'https://github.com/facebook/docusaurus',
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} E-Onlineshop, ศูนย์ส่งเสริมอุตสาหกรรมภาค 11 และ ศูนย์วิจัยระบบอัตโนมัติอัจฉริยะ มหาวิทยาลัยสงขลานครินทร์ Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
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
}
