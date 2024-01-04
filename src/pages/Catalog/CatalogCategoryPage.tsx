import { useParams } from "react-router-dom";
import CustomTitle from "../../components/Custom/CustomTitle/CustomTitle";
import CategoryItems from "../../components/Category/CategoryItems/CategoryItems";
import { useEffect, useState } from "react";
import { Category } from "../../interface/Category";

const CatalogCategoryPage = () => {
    const { category } = useParams();
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/v1/categories");
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();

                setCategories(data.payload);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [category]);

    const fill = categories.filter((cat) => cat.parent === category);
    return (
        <div>
            <div className="text-center">
                <CustomTitle title={`${category}`} titleSize="text-[40px]" />
            </div>
            <CategoryItems categories={fill} />

            {/* <ul>

                <Link to={`/catalog/${category}/${'навушники від зара'}`}>{category}</Link>

            </ul> */}
        </div>
    );
};

export default CatalogCategoryPage;
