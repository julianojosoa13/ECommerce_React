import './categories-preview.styles.scss';

import CategoryPreview from "../../components/category-preview/category-preview.component";
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/category.selector';


const CategoriesPreview = () => {
    // const {categories} = useContext(CategoriesContext)
    const categoriesMap = useSelector(selectCategoriesMap)


    return (
        <div className="categories-preview-container">
        {
            Object.keys(categoriesMap).map( title => {
                const products = categoriesMap[title]
                return (<CategoryPreview key={title} title={title} products={products} />)
                }
            )
        }
        </div>
    );
}

export default CategoriesPreview;