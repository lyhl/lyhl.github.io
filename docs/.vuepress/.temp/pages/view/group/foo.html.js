export const data = JSON.parse("{\"key\":\"v-5aa16274\",\"path\":\"/view/group/foo.html\",\"title\":\"foo\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"foo\"},\"headers\":[{\"level\":3,\"title\":\"foo\",\"slug\":\"foo\",\"link\":\"#foo\",\"children\":[]},{\"level\":3,\"title\":\"foo\",\"slug\":\"foo-1\",\"link\":\"#foo-1\",\"children\":[]},{\"level\":3,\"title\":\"foo\",\"slug\":\"foo-2\",\"link\":\"#foo-2\",\"children\":[]}],\"git\":{\"updatedTime\":null},\"filePathRelative\":\"view/group/foo.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
