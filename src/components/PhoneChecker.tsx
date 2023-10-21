import { memo, useState } from "react";
import type { FC } from "react";
import { PhoneInput } from "./PhoneInput";
import { PhoneKeyboard } from "./PhoneKeyboard";

interface PhoneCheckerProps {
  className?: string;
}

export const PhoneChecker: FC<PhoneCheckerProps> = memo(
  ({ className = "" }: PhoneCheckerProps) => {
    const [phone, setPhone] = useState("");
    const handleClick = (value: string) => {
      setPhone((state) => state + value);
    };
    return (
      <div className={`${className} bg-main`}>
        <PhoneInput value={phone} />
        <PhoneKeyboard onClick={handleClick} />
      </div>
    );
  }
);
