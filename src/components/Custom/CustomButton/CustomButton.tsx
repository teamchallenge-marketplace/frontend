import { FC } from "react";
import { SlBasket } from "react-icons/sl";
import { Link } from "react-router-dom";
import useButton, { Themes } from "../../../hooks/useButton";

type Props = {
    name: string;
    themes: Themes;
    link?: string;
    onClick?: () => void;
};

const CustomButton: FC<Props> = ({ name, themes, link, onClick }) => {
    const buttonStyle = useButton(themes);
    return (
        link ? (
            <Link to={link}>
                <button onClick={onClick} className={buttonStyle}>
                    {themes === "BUY" ? (
                        <>
                            {name} <SlBasket size="26" />
                        </>
                    ) : (
                        <>{name}</>
                    )}
                </button>
            </Link>
        ) : (
            <button onClick={onClick} className={buttonStyle}>
                {themes === "BUY" ? (
                    <>
                        {name} <SlBasket size="26" />
                    </>
                ) : (
                    <>{name}</>
                )}
            </button>
        )
    );

};

export default CustomButton;
