import AboutUs from "../components/AboutUs/AboutUs";
import CustomTitle from "../components/Custom/CustomTitle/CustomTitle";
import ScrollSlider from "../components/Custom/ScrollSlider/ScrollSlider";
import MainPageHeader from "../components/MainPageHeader/MainPageHeader";
import Tabs from "../components/Tabs/Tabs";
export type MyObject = {
    id: number;
    tabName: string;
    content: string;
};

const MainPage = () => {
    const arr = [{ id: 7, categoryName: 'Кухня', link: '', img: '' },
    { id: 1, categoryName: 'Кухня', link: '', img: '' },
    { id: 2, categoryName: 'Кухня', link: '', img: '' },
    { id: 3, categoryName: 'Побутова техніка', link: '', img: '' }, { id: 6, categoryName: 'Кухня', link: '', img: '' },
    { id: 4, categoryName: 'Кухня', link: '', img: '' },
    { id: 5, categoryName: 'Кухня', link: '', img: '' },
    ]
    const arr2: MyObject[] = [
        { id: 1, tabName: 'Кухня', content: 'Зміст об\'єкта 1' },
        { id: 2, tabName: 'Робоче місце', content: 'Зміст об\'єкта 2' },
        { id: 3, tabName: 'Смартвони та телефони', content: 'Зміст об\'єкта 3' },
        { id: 4, tabName: 'Робоче місце', content: 'Зміст об\'єкта 2' },
        { id: 5, tabName: 'Смартвони та телефони', content: 'Зміст об\'єкта 3' },
        { id: 6, tabName: 'Робоче місце', content: 'Зміст об\'єкта 2' },
        { id: 7, tabName: 'Смартвони та телефони', content: 'Зміст об\'єкта 3' },
        { id: 8, tabName: 'Робоче місце', content: 'Зміст об\'єкта 2' },
        { id: 9, tabName: 'Смартвони та телефони', content: 'Зміст об\'єкта 3' },
    ];

    return (
        <>
            <MainPageHeader />
            <CustomTitle title="Найкращі в категоріях (Бестселлери)" />
            <ScrollSlider category={arr} />
            <AboutUs />
            <CustomTitle title="Наші рекомендації" />
            <Tabs arr={arr2} />
            <CustomTitle title="Нещодавно переглянуті" />
            <ScrollSlider category={arr} />
        </>
    );
};

export default MainPage;
