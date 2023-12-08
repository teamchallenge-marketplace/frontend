import mainImg from "../../images/main/Main Photo.jpg";
import CustomButton from "../Custom/CustomButton/CustomButton";
import CustomTitle from "../Custom/CustomTitle/CustomTitle";

const MainPageHeader = () => {
    return (
        <div className="flex mb-[90px]">
            <div className="w-1/2  flex items-center ">
                <div>
                    <CustomTitle
                        title="Комфорт та інновації у кожному замовленні" titleSize="text-[50px]" descriptionSize="text-[30px]" description="Досліджуйте, обирайте, вражайтеся"
                    />
                    <CustomButton name="Каталог" themes="BIG" />
                </div>
            </div>
            <div className="w-1/2    -mt-10">
                <img
                    src={mainImg}
                    alt={"mainPage"}
                    loading="lazy"
                    className="w-full h-auto object-cover"
                />
            </div>
        </div>
    );
};

export default MainPageHeader;
