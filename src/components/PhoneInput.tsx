import { useContext, useEffect } from "react";
import type { FC } from "react";
import { ComponentContext } from "../lib/context/componentContext";

interface PhoneInputProps {
  className?: string;
  value?: string;
}

export const PhoneInput: FC<PhoneInputProps> = ({
  value,
  className = "",
}: PhoneInputProps) => {
  const { currentPhone, setCurrentPhone } = useContext(ComponentContext);

  useEffect(() => {
    if ((value && currentPhone.includes("_")) || value?.includes("_")) {
      const phone = currentPhone;
      let newString = "";
      const currentValues = value?.split("");
      currentValues?.forEach((value) => {
        const match = phone.match(/\d(?=\D*$)/);
        if (value === "_" && match?.index !== 1) {
          newString = phone.replace(/\d(?=\D*$)/, "_");
        } else newString = phone.replace("_", value);
      });
      setCurrentPhone(newString);
    }
  }, [value]);

  return (
    <div className={`${className}`}>
      <div className='text-[32px] font-bold'>{currentPhone}</div>
    </div>
  );
};
