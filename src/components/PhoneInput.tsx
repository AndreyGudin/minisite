import { useContext, useEffect } from "react";
import type { FC } from "react";
import { ComponentContext } from "../lib/context/componentContext";

interface PhoneInputProps {
  className?: string;
  value?: string;
  valid?: boolean;
}

export const PhoneInput: FC<PhoneInputProps> = ({
  value,
  valid = true,
  className = "",
}: PhoneInputProps) => {
  const { currentPhone, setCurrentPhone } = useContext(ComponentContext);

  const textColor = valid ? "text-black" : "text-red-600";

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
    <div className={`${className} text-[32px] font-bold`}>
      <span className={`${textColor}`}>{currentPhone}</span>
    </div>
  );
};
