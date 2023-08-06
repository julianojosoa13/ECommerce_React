import './shop.styles.scss'

import { Routes, Route } from "react-router-dom";

import Category from '../category/category.component';
import CategoryPreview from "../../routes/categories-preview/categories-preview.component";



const Shop = () => {

    return (
        <Routes>
            <Route index element={<CategoryPreview/>}/>
            <Route path=":category" element={<Category />} />
        </Routes>
    )
}

export default Shop;