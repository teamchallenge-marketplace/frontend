import { FC } from "react";

type Props = {
    title: string;
    description?: string;
    titleSize?: string;
    descriptionSize?: string;
};
const CustomTitle: FC<Props> = ({
    title,
    description,
    titleSize = "text-3xl", // Default to text-2xl if not provided
    descriptionSize = "text-2xl",
}) => {
    return (
        <div className="mb-[60px] mt-[40px]">
            <h3 className={`${titleSize} font-inter font-[700]`}>{title}</h3>
            <p className={`${descriptionSize} font-inter font-normal`}>
                {description}
            </p>
        </div>
    );
};

export default CustomTitle;
