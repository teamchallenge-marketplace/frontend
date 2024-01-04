import { FC } from "react";
import { IoPersonOutline } from "react-icons/io5";
import CustomLink from "../Custom/CustomLink/CustomLink";
import { SlBasket } from "react-icons/sl";
import { LuWallet } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { CiShop } from "react-icons/ci";
import { TfiCommentAlt } from "react-icons/tfi";
import { IoChatbubblesOutline } from "react-icons/io5";
import { GrCatalogOption } from "react-icons/gr";
import './style.css';
type Props = {
    isSidebarOpen: boolean,
    closeSideBar: () => void,
}
const SideBarMenu: FC<Props> = ({ isSidebarOpen, closeSideBar }) => {

    return (
        <>
            {isSidebarOpen && (
                <div className={` sidebar ${isSidebarOpen ? 'open top-2' : ''}`}>
                    {/* Sidebar content */}
                    <button
                        onClick={closeSideBar}
                        className={`absolute top-2 right-2 p-2 text-black focus:outline-none `}
                    >
                        <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path fill="#000000" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <main className="flex flex-col  justify-center flex-1 w-5/6 pl-5 ">


                        <CustomLink path={'myProfile'} name="Мій профіль" line={true} icon={<IoPersonOutline size="23" />} />
                        <CustomLink path={'myOrders'} name="Мої замовлення" icon={<SlBasket size="23" />} />
                        <CustomLink path={'myWishList'} name="Список бажань" icon={<FaRegHeart size="23" />} />

                        <CustomLink path={'myWallet'} name="Мій гаманець" icon={<LuWallet size="23" />} />
                        <CustomLink path={'startSell'} name="Почати продавати на SKY" icon={<CiShop size="23" />} />

                        <CustomLink path={'myMessage'} name="Моє листування" icon={<IoChatbubblesOutline size="23" />} />
                        <CustomLink path={'myResponse'} name="Мої відгуки" line={true} icon={<TfiCommentAlt size="23" />} />
                        <CustomLink path={'catalog'} name="Каталог" line={true} icon={<GrCatalogOption size="23" />} />

                        {/* <CustomLink path={'setting'} name="Налаштування" icon={<IoSettingsOutline size="23" />} /> */}

                    </main>
                </div >
            )}
        </>

    );
}

export default SideBarMenu
