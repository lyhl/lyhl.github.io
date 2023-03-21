import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'
import { searchPlugin } from '@vuepress/plugin-search'
import { prismjsPlugin } from '@vuepress/plugin-prismjs'
export default [
    backToTopPlugin(),
    nprogressPlugin(),
    searchPlugin({
    }),
    prismjsPlugin({
    }),
  ]