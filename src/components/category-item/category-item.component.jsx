import { BackgroundImage, CategoryBodyContainer, CategoryContainer} from './category-item.styles.jsx'

const CategoryItem = ({category}) => {
    const {title, imageUrl} = category
    return (
        <CategoryContainer>
          <BackgroundImage imageUrl={imageUrl} />
          <CategoryBodyContainer>
            <h2>{title}</h2>
            <p>Shop now</p>
          </CategoryBodyContainer>
        </CategoryContainer>
    );
}

export default CategoryItem;