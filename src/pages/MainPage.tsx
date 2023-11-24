import AboutUs from "../components/AboutUs/AboutUs";
import CustomTitle from "../components/Custom/CustomTitle/CustomTitle";
import ScrollSlider from "../components/Custom/ScrollSlider/ScrollSlider";


const MainPage = () => {
    const arr = [{ id: 7, categoryName: 'Кухня', link: '', img: '' },
    { id: 1, categoryName: 'Кухня', link: '', img: '' },
    { id: 2, categoryName: 'Кухня', link: '', img: '' },
    { id: 3, categoryName: 'Побутова техніка', link: '', img: '' }, { id: 6, categoryName: 'Кухня', link: '', img: '' },
    { id: 4, categoryName: 'Кухня', link: '', img: '' },
    { id: 5, categoryName: 'Кухня', link: '', img: '' },
    ]

    return (
        <>
            <h1 className="text-center">Main page</h1>
            <CustomTitle title="Найкращі в категоріях (Бестселлери)" description="Інноваційні товари для сучасного життя. Обирайте якість!" />
            <ScrollSlider category={arr} />
            <AboutUs />
        </>
    );
};

export default MainPage;
