# pinia

[pinia官网](https://pinia.vuejs.org/zh/getting-started.html)







### 持久化存储

```js
//https://seb-l.github.io/pinia-plugin-persist/advanced/custom-key.html

import { createPinia } from 'pinia'
import piniaPluginpersistedstate from 'pinia-plugin-persist'

//main.ts
const pinia = createPinia()
pinia.use(piniaPluginpersistedstate)

// 因为状态管理使用的是setup的方式构建所以我们重写一个$reset并挂载到pinia中
pinia.use(({ store }) => {
    const initialState = JSON.parse(JSON.stringify(store.$state));
    store.$reset = () => {
        store.$patch(initialState);
    }
})
const app = createApp(App)
app.use(pinia)
```

