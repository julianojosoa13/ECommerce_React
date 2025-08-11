import {
  BackgroundImage,
  CategoryBodyContainer,
  CategoryContainer,
} from "./category-item.styles.jsx";
import { useNavigate } from "react-router-dom";

const CategoryItem = ({ category }) => {
  const { title, imageUrl, route } = category;

  const navigate = useNavigate();

  const onNavigateHandler = () => {
    navigate(route);
  };
  return (
    <CategoryContainer onClick={onNavigateHandler}>
      <BackgroundImage imageurl={imageUrl} />
      <CategoryBodyContainer>
        <h2>{title}</h2>
        <p>Shop now</p>
      </CategoryBodyContainer>
    </CategoryContainer>
  );
};

export default CategoryItem;
