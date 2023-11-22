import { FC } from "react";
import { SlBasket } from "react-icons/sl";
import { Link } from "react-router-dom";

type Props = {
    name: string;
    thames?: 'FORCATEGORY' | 'BUY' | 'BIG' | 'LOGIN' | 'SIGN';
    link?: string;
    onClick?: () => void;
};

const CustomButton: FC<Props> = ({ name, thames, link, onClick }) => {
    const forCategoryStyleProperty = ' m-2 max-w-[141px] max-h-[88px] px-6 py-2 bg-white  font-medium font-inter ';

    const buyStyleProperty = 'bg-colorYel m-2  px-6 py-2 min-w-[135px] h-[52px]  font-medium font-inter flex justify-between items-center';

    const bigStyleProperty = 'bg-colorYel  min-w-[383px] min-h-[88px] text-3xl font-medium font-inter';

    const loginStyleProperty = 'font-inter text-base font-semibold leading-6 tracking-wide min-w-[137px] min-h-[37px] bg-black text-white'

    const signInStyleProperty = 'font-inter text-base font-semibold leading-6 tracking-wide min-w-[137px] min-h-[37px] bg-white border border-[#3D4551]  text-black'
    let buttonStyle = ``;

    switch (thames) {
        case 'FORCATEGORY':
            buttonStyle = forCategoryStyleProperty;
            break;
        case 'BUY':
            buttonStyle = buyStyleProperty;
            break;
        case 'BIG':
            buttonStyle = bigStyleProperty;
            break;
        case 'LOGIN':
            buttonStyle = loginStyleProperty;
            break;
        case 'SIGN':
            buttonStyle = signInStyleProperty;
            break
        default:
            break;
    }
    return <Link to={link ? link : ''}><button onClick={onClick} className={buttonStyle}>{thames === 'BUY' ? <>{name} <SlBasket size="26" /></> : <>{name}</>}</button>;</Link>
};

export default CustomButton;