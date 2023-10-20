import { memo } from "react";
import type { FC } from "react";

interface PhoneKeyboardProps {
  className?: string;
  onClick: (value: string) => void;
}

export const PhoneKeyboard: FC<PhoneKeyboardProps> = memo(
  function PhoneKeyboard({ className = "", onClick }: PhoneKeyboardProps) {
    const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "Стереть", "0"];
    return (
      <div
        className={`${className} w-[284px] h-[278px] flex gap-[10px] flex-wrap`}
      >
        {keys.map((key) => {
          const width = key === "Стереть" ? "min-w-[126px]" : "min-w-[28px]";
          return (
            <button
              key={key}
              onClick={() => onClick(key)}
              className='text-base px-[28px] py-[10px] border-[2px] border-black hover:bg-black hover:text-white active:bg-slate-900'
            >
              <span className={`block ${width} h-[28px]`}>{key}</span>
            </button>
          );
        })}
      </div>
    );
  }
);
