import { defineUserConfig, defaultTheme } from 'vuepress'
import navbar from './config/navbar'
import sidebar from './config/sidebar'
import plugins from './config/plugins'

export default defineUserConfig({
  lang: 'zh-CN',
  plugins: plugins,
  theme: defaultTheme({
    // 在这里进行配置
    navbar: navbar,
    sidebar: sidebar,
    // lastUpdatedText: '最后更新于',
    // contributorsText: '',
    lastUpdated:false,
    contributors: false,
    activeHeaderLinks: true,
  }),
})