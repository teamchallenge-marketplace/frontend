import { FC } from 'react'
import { Category } from '../../../interface/Category';
import ItemCategory from '../CategoryItem/ItemCategory';
import { useNavigate } from "react-router-dom";
import CustomButton from '../../Custom/CustomButton/CustomButton';


type Props = {
    categories: Category[];
}
const CategoryItems: FC<Props> = ({ categories }) => {
    const navigate = useNavigate();


    return (
        <>
            <CustomButton name='⇐ Go back' themes='BACK' onClick={() => navigate(-1)} />
            <ul className="flex flex-wrap justify-center">
                {
                    categories.map((category) => <ItemCategory key={category.id} category={category} />)
                }
            </ul>
        </>

    )
}

export default CategoryItems
