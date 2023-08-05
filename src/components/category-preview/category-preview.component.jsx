import ProductCard from '../product-card/product-card.component';
import './category-preview.styles.scss';

const CategoryPreview = ({title, products}) => {
    return (
        <div className='category-preview-container'>
            <div className='title-container'>
                <span className='category-title'>{title.toUpperCase()}</span><span className='show-more'>Show more...</span>
            </div>
            <div className='preview'>
                {
                    products
                        .filter((_, idx) => idx < 4 )
                        .map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))  
                }
            </div>
        </div>
    )
}

export default CategoryPreview