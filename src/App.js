import Home from "./routes/home/home.component";
import NavigationBar from "./routes/navigation/navigation.component";
import { Routes, Route } from "react-router-dom";
import Shop from "./routes/shop/shop.component";

const App=() => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar/>}>
        <Route index element={<Home/>} />
        <Route path="shop" element={<Shop/>}/>
      </Route>
    </Routes>
  )
}
export default App;