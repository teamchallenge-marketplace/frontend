import { FC } from 'react'
import { Link } from 'react-router-dom';
import { Category } from '../../../interface/Category';
import { useNavigate } from "react-router-dom";

type Props = {
    category: Category
}
const ItemCategory: FC<Props> = ({ category }) => {
    const navigate = useNavigate();
    <button onClick={() => navigate(-1)}>Go back</button>
    return (
        <Link className="m-10" to={`/catalog/${category.categoryName}`}>
            <div className="w-[385px] h-[535px] relative ">
                <img src={category.categoryImage} className="" />
                <div className="">
                    <p className=" bg-white  w-[100%] h-16 bottom-[100px]  absolute font-inter text-2xl font-normal pl-9 pt-1 ">
                        {category.categoryName}
                    </p>
                </div>

            </div>
        </Link>
    )
}

export default ItemCategory
