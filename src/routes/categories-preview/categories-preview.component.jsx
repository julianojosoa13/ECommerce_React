import './categories-preview.styles.scss';

import { useContext } from "react";

import { CategoriesContext } from "../../contexts/categories.context";

import CategoryPreview from "../../components/category-preview/category-preview.component";


const CategoriesPreview = () => {
    const {categories} = useContext(CategoriesContext)
    return (
        <div className="categories-preview-container">
        {
            Object.keys(categories).map( title => {
                const products = categories[title]
                return (<CategoryPreview key={title} title={title} products={products} />)
                }
            )
        }
        </div>
    );
}

export default CategoriesPreview;