import './category.styles.scss';

import {  useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { CategoriesContext } from '../../contexts/categories.context';

import ProductCard from '../../components/product-card/product-card.component';

const Category = () => {
    const {category} = useParams();

    const {categories} = useContext(CategoriesContext)
    
    const [products, setProducts] = useState([categories[category]]);

    useEffect(()=>{
        setProducts(categories[category]);
    }, [category, categories])

    return (
        <div className='category-page-container'>
            {
                products && products.map((product) =>  product && <ProductCard key={product.id} product={product}/>)
            }
        </div>
    )

}

export default Category;