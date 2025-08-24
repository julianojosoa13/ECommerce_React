import { Routes, Route } from "react-router-dom";

import Category from "../category/category.component";
import CategoryPreview from "../../routes/categories-preview/categories-preview.component";
import { useEffect } from "react";
import { fetchCategories } from "../../store/categories/category.thunk";
import { useDispatch } from "react-redux";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoryPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
