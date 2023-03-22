export default
  [
    {
      text: '首页',
      link: '/',
    },
    {
      text: '前端',
      children: [
        { text: 'react', link: '/view/fe/react/' },
        { text: 'vue', link: '/view/fe/vue/' },
        { text: 'angular', link: '/view/fe/angular/' },
        { text: 'uniapp', link: '/view/fe/uniapp/' },
        { text: 'electron', link: '/view/fe/electron/' },
      ],
    },
    {
      text: '后端',
      children: [
        { text: 'go', link: '/view/be/go/' },
        { text: 'java', link: '/view/be/java/' },
        { text: 'mysql', link: '/view/be/mysql/' },
        { text: 'node', link: '/view/be/node/' },
        { text: 'php', link: '/view/be/php/' },
        { text: 'python', link: '/view/be/python/' },

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
        { text: '脚本', link: '/view/tool/script/' },
        { text: 'webpack', link: '/view/tool/webpack/' },

      ],
    },
    {
      text: 'utils',
      children: [
        { text: 'Javascript', link: '/view/utils/Javascript/' },
        { text: 'css', link: '/view/utils/css/' },
        { text: 'vue', link: '/view/utils/vue/' },
      ],
    },
    {
      text: '书',
      children: [
        { text: '电子书', link: '/view/book/book/' },
      ],
    },
    {
      text: '关于我',
      link:'/about/'
    }
  ]