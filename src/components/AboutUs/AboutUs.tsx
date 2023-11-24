import frame1 from "../../../src/images/Frame 1000002749.png";
import frame2 from "../../../src/images/Frame 1000002750.png";
import frame3 from "../../../src/images/Frame 1000002751.png";
import frame4 from "../../../src/images/Frame 1000002752.png";

const AboutUs = () => {
    const styleP =
        "text-black font-inter font-medium text-3xl leading-140 tracking-wide max-w-[180px] mt-5";
    return (
        <div className="flex mx-auto mt-20 justify-evenly w-5/6 items-center text-center text-3xl ">
            <div className=" ">
                <img src={frame1} alt="" />
                <p className={styleP}>Працюємо щодня</p>
            </div>
            <div className="">
                <img src={frame2} alt="" />

                <p className={styleP}>Оплата при отриманні</p>
            </div>
            <div className="">
                <img src={frame3} alt="" />
                <p className={styleP}>Перевірені продавці</p>
            </div>
            <div className="">
                <img src={frame4} alt="" />
                <p className={styleP}>Великий асортимент</p>
            </div>
        </div>
    );
};

export default AboutUs;
