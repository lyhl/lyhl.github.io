# redux

### reduxjs-toolkit

安装

```js
npm install @reduxjs/toolkit react-redux
```



### 持久化存储

```js

// store/index.js

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./modules/counter"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { combineReducers } from "redux"

const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(
    persistConfig,
    combineReducers({
        counter: counterSlice
    })
)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})
export const persistor = persistStore(store)


```

### 使用方式

```js
import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./router";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { store, persistor } from "./store/";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <Provider store={store}>
    <PersistGate  persistor={persistor}>
      <Router />
    </PersistGate>
  </Provider>
);
```

### 