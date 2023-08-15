import './category.styles.scss';

import {  Fragment, useContext, useEffect, useState } from 'react';
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
        <Fragment>
            <h2 className='category-title'>{category.toUpperCase()}</h2>
            <div className='category-page-container'>
                {
                    products && products.map((product) =>  <Fragment key={product.id}>{product && <ProductCard product={product}/>}</Fragment>) 
                }
            </div>
        </Fragment>            
    )

}

export default Category;