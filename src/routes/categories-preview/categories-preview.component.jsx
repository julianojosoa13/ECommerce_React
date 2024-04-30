import './categories-preview.styles.scss';

import CategoryPreview from "../../components/category-preview/category-preview.component";
import { useDispatch, useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/category.selector';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { setCategoriesMap } from '../../store/categories/category.action';
import { useEffect } from 'react';


const CategoriesPreview = () => {
    // const {categories} = useContext(CategoriesContext)
    const dispatch = useDispatch()
    const categories = useSelector(selectCategoriesMap)

    useEffect(()=>{
        const getCategoriesMap = async () => {
            const categoriesMap = await getCategoriesAndDocuments();
            dispatch(setCategoriesMap(categoriesMap));
        }
        getCategoriesMap();
    }, []);

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