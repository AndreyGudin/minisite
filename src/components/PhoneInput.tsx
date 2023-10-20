import { useEffect, useState } from "react";
import type { FC } from "react";

interface PhoneInputProps {
  className?: string;
  value?: string;
}

export const PhoneInput: FC<PhoneInputProps> = ({
  value,
  className = "",
}: PhoneInputProps) => {
  const [phoneNumber, setPhone] = useState("+7(___)___-__-__");

  useEffect(() => {
    if (value && phoneNumber.includes("_")) {
      const currentPhone = phoneNumber;
      let newString = "";
      const currentValues = value?.split("");
      currentValues?.forEach((value) => {
        newString = currentPhone.replace("_", value);
      });
      setPhone(newString);
    }
  }, [value]);

  return (
    <div className={`${className}`}>
      <div className='text-[32px] font-bold'>{phoneNumber}</div>
    </div>
  );
};
