import { memo, useContext, useState } from "react";
import type { FC } from "react";
import { PhoneInput } from "./PhoneInput";
import { PhoneKeyboard } from "./PhoneKeyboard";
import { AgreementCheckbox } from "./AgreementCheckbox";
import { ComponentContext } from "../lib/context/componentContext";

interface PhoneCheckerProps {
  className?: string;
}

export const PhoneChecker: FC<PhoneCheckerProps> = memo(
  ({ className = "" }: PhoneCheckerProps) => {
    const [phone, setPhone] = useState("");
    const [agreed, setAgreed] = useState(false);
    const { currentPhone } = useContext(ComponentContext);

    const handleClick = (value: string) => {
      setPhone((state) => state + value);
    };
    const handleCheck = (value: boolean) => {
      setAgreed(value);
    };

    return (
      <div
        className={`${className} w-[380px] min-h-full flex flex-col justify-center items-center gap-[13px] px-[48px] py-[72px] leading-none text-center bg-main`}
      >
        <h2 className='text-[26px]'>Введите ваш номер мобильного телефона</h2>
        <PhoneInput value={phone} />
        <span className='text-[14px]'>
          и с Вами свяжется наш менеждер для дальнейшей консультации
        </span>
        <PhoneKeyboard onClick={handleClick} />
        <AgreementCheckbox onChecked={handleCheck} />
        <button
          disabled={!agreed || currentPhone.endsWith("_")}
          className='w-full h-[52px] text-main bg-black cursor-pointer active:bg-slate-900 disabled:bg-main disabled:border disabled:cursor-not-allowed disabled:border-[#4E4E4E] disabled:text-[#4E4E4E]'
        >
          Подтвердить номер
        </button>
      </div>
    );
  }
);
