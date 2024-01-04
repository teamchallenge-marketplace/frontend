import CustomTitle from "../../components/Custom/CustomTitle/CustomTitle";
import { useEffect, useState } from "react";
import { Category } from "../../interface/Category";
import CategoryItems from "../../components/Category/CategoryItems/CategoryItems";
import { useNavigate } from "react-router-dom";

const CatalogPage = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/v1/categories");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const filteredCategories = data.payload.filter(
          (category: Category) => category.parent === null
        );
        setCategories(filteredCategories);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(navigate);
  console.log(location);
  return (
    <>
      <div className="text-center">
        <CustomTitle
          title="Каталог товарів"
          titleSize="text-[40px]"
          descriptionSize="text-[26px]"
          description="Інноваційні товари для сучасного життя. Обирайте якість!"
        />
      </div>
      <div className="">
        <CategoryItems categories={categories} />
      </div>
    </>
  );
};

export default CatalogPage;
