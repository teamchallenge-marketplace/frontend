import { FC, useEffect, useState } from "react";
import { MyObject } from "../../pages/MainPage";

type Props = {
  arr: MyObject[];
};

const Tabs: FC<Props> = ({ arr }) => {
  const [toggleState, setToggleState] = useState(1);
  const [content, setContent] = useState<MyObject[]>();
  const setToggleTabs = (id: number) => {
    setToggleState(id);
  };
  useEffect(() => {
    setContent(arr.filter((el) => el.id === toggleState));
  }, [arr, toggleState]);

  return (
    <>
      <div>
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 ">
          {arr.map((el) => (
            <li key={el.id}
              onClick={() => setToggleTabs(el.id)}
              className={`mr-2 mt-3 me-2 font-inter text-[26px] cursor-pointer text-black px-6 py-3 bg-[#F5F5F5]
           ${el.id === toggleState
                  ? "inline-block  border-[1px]  border-black "
                  : ""
                }`}
            >
              {el.tabName}
            </li>
          ))}
        </ul>
        <div className="content-tabs">
          {content?.map((el) => (
            <div key={el.id} >{el.content}</div>
          ))}
        </div>
      </div>
    </>

  );
};

export default Tabs;
