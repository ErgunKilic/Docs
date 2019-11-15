module.exports = {
  title: 'Documentation',
  description: 'Just playing around',
  base: '/Docs/',
  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css' }],
	  ['link', {href: 'https://fonts.googleapis.com/icon?family=Material+Icons', rel :'stylesheet'}]
  ],
  markdown: {
    lineNumbers: true,
    extendMarkdown: md => {
      md.use(require("markdown-it-katex"))
      md.use(require("markdown-it-plantuml"))
    }
  },
  themeConfig: {
    displayAllHeaders: true, // Default: false
    sidebar: [
      ['/', 'Home'],
      {
        type: 'group',
        title: 'Cours',
        collapsable: true,
        children: [
          ['/cours/android/', 'Android'],
          ['/cours/jee/', 'Java Entreprise Edition']
        ]
      }
    ]

  }
}
