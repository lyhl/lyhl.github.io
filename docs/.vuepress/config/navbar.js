export default
  [
    {
      text: '首页',
      link: '/',
    },
    {
      text: '框架',
      children: [
        { text: 'react', link: '/view/frame/react/' },
        { text: 'vue', link: '/view/frame/vue/' },
        { text: 'angular', link: '/view/frame/angular/' },
        { text: 'uniapp', link: '/view/frame/uniapp/' },
        { text: 'electron', link: '/view/frame/electron/' },
        { text: 'spring', link: '/view/frame/spring/' },
        { text: 'express', link: '/view/frame/express/' },
        
      ],
    },
    {
      text: '语言',
      children: [
        { text: 'java', link: '/view/pl/java/' },
        { text: 'mysql', link: '/view/pl/mysql/' },
        { text: 'python', link: '/view/pl/python/' },
        { text: 'javascript', link: '/view/pl/javascript/' },
        { text: 'css', link: '/view/pl/css/' },
        { text: '脚本', link: '/view/pl/script/' },
      ],
    },
    {
      text: '工具',
      children: [
        { text: '在线工具', link: '/view/tool/tools/' },
        { text: 'docker', link: '/view/tool/docker/' },
        { text: 'git', link: '/view/tool/git/' },
        { text: 'nginx', link: '/view/tool/nginx/' },
        { text: 'redis', link: '/view/tool/redis/' },
        { text: 'webpack', link: '/view/tool/webpack/' },
      ],
    },
    {
      text: '书',
      children: [
        { text: '电子书', link: '/view/book/book/' },
        { text: '笔记', link: '/view/book/notes/' },
      ],
    },
    {
      text: '关于我',
      link:'/about/'
    }
  ]