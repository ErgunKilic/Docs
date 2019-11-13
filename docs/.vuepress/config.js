module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  base: '/Docs/',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    displayAllHeaders: true, // Default: false
    nav: [{
      text: 'Home',
      link: '/'
    }],
    sidebar: [{
      type: 'group',
      title: '1.1',
      collapsable: true,
      children: [
        ['/', '1.1.1'],
        ['/guide/', '1.1.2']
      ]
    }]

  }
}
