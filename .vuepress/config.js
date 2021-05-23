module.exports = {
  title: "M3k Studio Documentations",
  description: "Documentations of all M3K Studio's Projects",
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/favicons/apple-touch-icon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicons/favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicons/favicon-16x16.png"}],
    ['link', { rel: "manifest", href: "/favicons/site.webmanifest"}],
    ['link', { rel: "mask-icon", href: "/favicons/safari-pinned-tab.svg", color: "#3a0839"}],
    ['link', { rel: "shortcut icon", href: "/favicons/favicon.ico"}],
    ['meta', { name: "msapplication-TileColor", content: "#3a0839"}],
    ['meta', { name: "msapplication-config", content: "/favicons/browserconfig.xml"}],
    ['meta', { name: "theme-color", content: "#ffffff"}],
  ],
  themeConfig: {
    nav: [
      {text: 'Home', link: "/"},
      {text: 'Games', arialLabel: 'Games Menu',
      items: [
        {text: 'Better Mine', arialLabel: 'better mine',
      items: [
        {text: '1.0.0', link: "/bettermine/1.0.0"}
      ]}
      ]},
      {text: 'M3K Studio', link: "https://m3kstudio.dtayrone1.repl.co"}
    ]
  },
  dest: 'public',
}