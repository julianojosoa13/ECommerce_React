import './shop.styles.scss'

import { Routes, Route } from "react-router-dom";
import CategoryPreview from "../../routes/categories-preview/categories-preview.component";



const Shop = () => {

    return (
        <Routes>
            <Route index element={<CategoryPreview/>}/>
        </Routes>
    )
}

export default Shop;