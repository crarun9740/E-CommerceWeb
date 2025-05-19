import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { categoryName } = useParams();

  return <h1>Showing products for category: {categoryName}</h1>;
};
