import { Routes, Route } from "react-router-dom";

import Category from '../category/category.component';
import CategoryPreview from "../../routes/categories-preview/categories-preview.component";
import { useEffect } from "react";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategories } from "../../store/categories/category.action";
import { useDispatch } from "react-redux";



const Shop = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        const getCategoriesArray = async () => {
            const categoriesArray = await getCategoriesAndDocuments();
            dispatch(setCategories(categoriesArray));
            // console.log(categoriesArray)
        }
        getCategoriesArray();
    }, []);

    return (
        <Routes>
            <Route index element={<CategoryPreview/>}/>
            <Route path=":category" element={<Category />} />
        </Routes>
    )
}

export default Shop;