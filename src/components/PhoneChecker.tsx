import { memo, useContext, useState } from "react";
import type { FC } from "react";
import { PhoneInput } from "./PhoneInput";
import { PhoneKeyboard } from "./PhoneKeyboard";
import { AgreementCheckbox } from "./AgreementCheckbox";
import { ComponentContext } from "../lib/context/componentContext";
import { PhoneCheckingResponse } from "../lib/types/PhoneCheckingResponse";

interface PhoneCheckerProps {
  className?: string;
  refs: React.RefObject<HTMLButtonElement>[];
}

export const PhoneChecker: FC<PhoneCheckerProps> = memo(
  ({ className = "", refs }: PhoneCheckerProps) => {
    const [phone, setPhone] = useState("");
    const [agreed, setAgreed] = useState(false);

    const { currentPhone, valid, setValid } = useContext(ComponentContext);

    const handleClick = (value: string) => {
      setPhone((state) => state + value);
      if (value.includes("_")) setValid(true);
    };
    const handleCheck = (value: boolean) => {
      setAgreed(value);
    };

    const handleValidate = () => {
      const phoneToValidate = currentPhone
        .split("")
        .map((c, i) => {
          const temp = Number(c);
          if (!Number.isNaN(temp) && i !== 1) {
            return c;
          }
          return "";
        })
        .join("");
      fetch(
        `http://apilayer.net/api/validate?access_key=fb5b33e5f65657455a579b9d41effee4&number=${phoneToValidate}&country_code=RU&format=1`
      )
        .then((res) => res.json())
        .then((result: PhoneCheckingResponse) => setValid(result.valid));
    };

    return (
      <div
        className={`${className} w-[380px] min-h-full flex flex-col justify-center items-center gap-[13px] px-[48px] py-[72px] leading-none text-center bg-main`}
      >
        <h2 className='text-[26px]'>Введите ваш номер мобильного телефона</h2>
        <PhoneInput value={phone} valid={valid} />
        <span className='text-[14px]'>
          и с Вами свяжется наш менеждер для дальнейшей консультации
        </span>
        <PhoneKeyboard refs={refs} onClick={handleClick} />
        {valid ? (
          <AgreementCheckbox onChecked={handleCheck} checked={agreed} />
        ) : (
          <span className='flex items-center h-[52px] text-red-600 uppercase'>
            Неверно введён номер
          </span>
        )}
        <button
          ref={refs[11]}
          onClick={handleValidate}
          disabled={!agreed || currentPhone.endsWith("_") || !valid}
          className='w-full h-[52px] text-main bg-black cursor-pointer active:bg-slate-900 disabled:bg-main disabled:border disabled:cursor-not-allowed disabled:border-[#4E4E4E] disabled:text-[#4E4E4E]'
        >
          Подтвердить номер
        </button>
      </div>
    );
  }
);
