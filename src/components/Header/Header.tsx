import Logo from "./Logo"
import { SlBasket } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";
import SideBarMenu from "./SideBarMenu";
import { useState } from "react";
import CustomButton from "../Custom/CustomButton/CustomButton";
const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const closeSideBar = () => {
        setIsSidebarOpen(false);
    }
    return (
        <header className="h-16  flex items-center justify-around p-9 shadow-lg">

            <div className="w-16">
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className=" p-2 text-black rounded-lg "
                >
                    <svg
                        className="w-8 h-8"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <span className="sr-only">Open menu</span>
                </button>
            </div>
            <Logo />
            <SideBarMenu isSidebarOpen={isSidebarOpen} closeSideBar={closeSideBar} />


            <input className="w-4/12 h-8 border border-solid border-gray-300" />
            <div className="flex justify-between ">
                <div className="flex justify-between w-32 mr-10">
                    <FaRegHeart size="32" />
                    <SlBasket size="32" />
                </div>
                <div className="flex justify-between w-80">
                    <CustomButton name="Login" themes="LOGIN" />
                    <CustomButton name="Sign up" themes="SIGN" />
                </div>
            </div>

        </header>
    )
}

export default Header
