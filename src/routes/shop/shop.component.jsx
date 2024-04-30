import { Routes, Route } from "react-router-dom";

import Category from '../category/category.component';
import CategoryPreview from "../../routes/categories-preview/categories-preview.component";
import { useEffect } from "react";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategoriesMap } from "../../store/categories/category.action";
import { useDispatch } from "react-redux";



const Shop = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        const getCategoriesMap = async () => {
            const categoriesMap = await getCategoriesAndDocuments();
            dispatch(setCategoriesMap(categoriesMap));
        }
        getCategoriesMap();
    }, []);

    return (
        <Routes>
            <Route index element={<CategoryPreview/>}/>
            <Route path=":category" element={<Category />} />
        </Routes>
    )
}

export default Shop;