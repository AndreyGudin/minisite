import { memo, useContext, useState } from "react";
import type { FC } from "react";
import { PhoneInput } from "./PhoneInput";
import { PhoneKeyboard } from "./PhoneKeyboard";
import { AgreementCheckbox } from "./AgreementCheckbox";
import { ComponentContext } from "../lib/context/componentContext";
import { PhoneCheckingResponse } from "../lib/types/PhoneCheckingResponse";
import { usePhoneInputsControls } from "../lib/hooks/usePhoneInputsControls";
import { useInactivityRedirect } from "../lib/hooks/useInactivityRedirect";

interface PhoneCheckerProps {
  className?: string;
  refs: React.RefObject<HTMLButtonElement>[];
}

export const PhoneChecker: FC<PhoneCheckerProps> = memo(
  ({ className = "", refs }: PhoneCheckerProps) => {
    const [phone, setPhone] = useState("");
    const [agreed, setAgreed] = useState(false);
    const { currentPhone, valid, setValid, setComponent } =
      useContext(ComponentContext);

    usePhoneInputsControls({ callback: setPhone });

    useInactivityRedirect("banner");

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
        .map((c) => {
          const temp = Number(c);
          if (!Number.isNaN(temp)) {
            return c;
          }
          return "";
        })
        .join("");
      fetch(
        `https://api.numlookupapi.com/v1/validate/+${phoneToValidate}?apikey=num_live_uNUwMhW6DDfFIW3DIYLUsxGexQfe27pwfO5MLoM9`
      )
        .then((res) => res.json())
        .then((result: PhoneCheckingResponse) => {
          console.log(result);
          setValid(result.valid);
          if (result.valid) setComponent("final");
        });
    };

    return (
      <div
        className={`${className} w-[380px] min-h-full flex flex-col justify-center items-center gap-[13px] px-[48px] py-[72px] leading-none text-center bg-main`}
      >
        <h2 className='text-[26px]'>Введите ваш номер мобильного телефона</h2>
        <PhoneInput value={phone} valid={valid} />
        <span className='text-[14px]'>
          и с Вами свяжется наш менеджер для дальнейшей консультации
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
