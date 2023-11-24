import CustomButton from "../CustomButton/CustomButton"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './swiper-navigation.css'
import './swiper-scroll.css'
import 'swiper/css/free-mode'
import { FC } from "react";

type Props = {
    category: { id: number, categoryName: string; link: string; img: string; }[]
}
const ScrollSlider: FC<Props> = ({ category }) => {
    //useEffect sliderPerView
    return (
        <Swiper
            className="pb-5"
            modules={[Scrollbar, Navigation]}
            spaceBetween={80}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            freeMode
        >
            {category.map((el) =>
                <SwiperSlide className="min-w-[300px] p-4 bg-gray-700 rounded flex items-end justify-center h-[400px]" key={el.id}>
                    <CustomButton name={el.categoryName} themes="FORCATEGORY" />
                </SwiperSlide>
            )}

        </Swiper>
    )
}

export default ScrollSlider
