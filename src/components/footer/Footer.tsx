import React from "react";

import Logo from "../Header/Logo";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import frame from "../../images/Frame.png"
import frame2 from "../../images/Frame2.svg"


const Footer = () => {
    return (
        <footer className="border-t-2 border-solid border-t-[#909DA2] mb-2">
            <div className="pt-[90px] pr-[140px] pb-[30px] pl-[140px] flex justify-around ">
                <div>
                    <Logo />
                </div>
                <div className="flex flex-col ">
                    <div className="flex justify-between w-[450px] mx-auto" >
                        <div>
                            <p className="font-inter text-base font-medium leading-[120%] tracking-[0.56px] text-[#909DA2] pb-4">
                                SERVICES
                            </p>
                        </div>
                        <div>
                            <p className="font-inter text-base font-medium leading-[120%] tracking-[0.56px] text-[#909DA2]">
                                RESOURCES
                            </p>
                        </div>
                        <div>
                            <p className="font-inter text-base font-medium leading-[120%] tracking-[0.56px] text-[#909DA2]">
                                SUPPORT
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-between w-[450px] mx-auto">
                        <div>
                            <p>About</p>
                            <p>Contact Us</p>
                            <p>Features</p>
                            <p>Blog</p>
                        </div>
                        <div>
                            <p>Apps</p>
                            <p>Developer</p>
                            <p>Integration</p>
                            <p>Pricing</p>
                        </div>
                        <div>
                            <p>License</p>
                            <p>Get Started</p>
                            <p>Affiliate</p>
                            <p>FAQs</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-evenly w-52">
                    <FaTwitter size="28px" className="text-[#909DA2]" />
                    <FaFacebookF size="28px" className="text-[#909DA2]" />
                    <FaInstagram size="28px" className="text-[#909DA2]" />
                </div>
            </div>
            <div className="mx-auto border-b-4 w-[70%] h-2 border-solid border-t-[#909DA2] pt-10 mb-10"></div>
            <div className="flex justify-around">
                <div>
                    <div><p className="text-[#909DA2] font-inter text-base font-medium leading-[140%] tracking-[0.32px]">©2022 All right reserved</p></div>
                    <div className="flex ">
                        <p>Privacy Policy</p>
                        <p className="mr-3 ml-3">Terms of Use</p>
                        <p>Cookies</p>
                    </div>
                </div>
                <div className="flex ">
                    <img src={frame} alt="" />
                    <img src={frame2} alt="" />
                </div>
            </div>

        </footer>
    );
};

export default Footer;
