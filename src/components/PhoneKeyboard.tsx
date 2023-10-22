import { memo, useContext } from "react";
import type { FC } from "react";
import { ComponentContext } from "../lib/context/componentContext";

interface PhoneKeyboardProps {
  className?: string;
  onClick: (value: string) => void;
  refs?: React.RefObject<HTMLButtonElement>[];
}

export const PhoneKeyboard: FC<PhoneKeyboardProps> = memo(
  function PhoneKeyboard({
    className = "",
    onClick,
    refs,
  }: PhoneKeyboardProps) {
    const { currentPhone } = useContext(ComponentContext);
    const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "Стереть", "0"];

    return (
      <div className={`${className} w-[284px] py-5 flex gap-[10px] flex-wrap`}>
        {keys.map((key, i) => {
          const width = key === "Стереть" ? "min-w-[126px]" : "min-w-[28px]";
          return (
            <button
              key={key}
              ref={refs![i]}
              disabled={
                currentPhone.split("")[currentPhone.length - 1] !== "_" &&
                key !== "Стереть"
              }
              onClick={() => onClick(key === "Стереть" ? "_" : key)}
              className='text-base px-[28px] py-[10px] border-[2px] border-black hover:bg-black hover:text-white active:bg-slate-900 disabled:bg-slate-500 disabled:hover:text-black'
            >
              <span className={`block ${width} h-[28px]`}>{key}</span>
            </button>
          );
        })}
      </div>
    );
  }
);
