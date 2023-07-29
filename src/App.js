import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import NavigationBar from "./routes/navigation/navigation.component";
import Shop from "./routes/shop/shop.component";
import Authentication from "./routes/authentication/authentication.component";
import { ProductsProvider } from "./contexts/products.context";

const App=() => {
  return (
    <ProductsProvider>
      <Routes>
        <Route path="/" element={<NavigationBar/>}>
          <Route index element={<Home/>} />
          <Route path="shop" element={<Shop/>}/>
          <Route path="sign-in" element={<Authentication/>}/>
        </Route>
      </Routes>
    </ProductsProvider>
  )
}
export default App;