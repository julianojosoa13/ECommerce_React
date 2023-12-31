import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import NavigationBar from "./routes/navigation/navigation.component";
import Shop from "./routes/shop/shop.component";
import Authentication from "./routes/authentication/authentication.component";
import CheckoutPage from "./routes/checkout/checkout.component";

const App=() => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar/>}>
        <Route index element={<Home/>} />
        <Route path="shop/*" element={<Shop/>}/>
        <Route path="sign-in" element={<Authentication/>}/>
        <Route path='checkout' element={<CheckoutPage/>} />
      </Route>
    </Routes>
  )
}
export default App;