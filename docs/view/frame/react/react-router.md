# Router

```js
import App from "../App";
import Home from "../view/Home";
import About from "../view/About";
import Page1 from "../view/Page1";
import Page2 from "../view/Page2";
import Page3 from "../view/Page3";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const baseRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Navigate to="/Home" />}></Route>
        <Route path="/Home" element={<Home />}>
          <Route path="/Home/page1" element={<Page1 />}></Route>
          <Route path="/Home/page2" element={<Page2 />}></Route>
          <Route path="/Home/page3" element={<Page3 />}></Route>
        </Route>
        <Route path="/About" element={<About></About>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
export default baseRouter;
```

路由出口

```js
import { Outlet } from "react-router-dom";

<Outlet></Outlet>
```

