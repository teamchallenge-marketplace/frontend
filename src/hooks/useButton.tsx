
export type Themes = 'FORCATEGORY' | 'BUY' | 'BIG' | 'LOGIN' | 'SIGN';

const useButton = (themes: Themes) => {

    const forCategoryStyleProperty = ' m-2 max-w-[141px] max-h-[88px] px-6 py-2 bg-white  font-medium font-inter ';

    const buyStyleProperty = 'bg-colorYel m-2  px-6 py-2 min-w-[135px] h-[52px]  font-medium font-inter flex justify-between items-center';

    const bigStyleProperty = 'bg-colorYel  min-w-[383px] min-h-[88px] text-3xl font-medium font-inter';

    const loginStyleProperty = 'font-inter text-base font-semibold leading-6 tracking-wide min-w-[137px] min-h-[37px] bg-black text-white'

    const signInStyleProperty = 'font-inter text-base font-semibold leading-6 tracking-wide min-w-[137px] min-h-[37px] bg-white border border-[#3D4551]  text-black'

    const themeStyles = {
        FORCATEGORY: forCategoryStyleProperty,
        BUY: buyStyleProperty,
        BIG: bigStyleProperty,
        LOGIN: loginStyleProperty,
        SIGN: signInStyleProperty,
    };

    return themeStyles[themes];



}

export default useButton
