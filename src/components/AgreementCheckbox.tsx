import { memo } from "react";
import type { FC } from "react";
import { Checkbox } from "./Checkbox";

interface AgreementCheckboxProps {
  className?: string;
  onChecked: (value: boolean) => void;
  checked?: boolean;
}

export const AgreementCheckbox: FC<AgreementCheckboxProps> = memo(
  ({ onChecked, checked = false, className = "" }: AgreementCheckboxProps) => {
    return (
      <div className={`${className} flex gap-[20px]`}>
        <Checkbox
          checked={checked}
          onCheckedChange={(checked) => {
            if (checked) onChecked(true);
            else onChecked(false);
          }}
          id='chkbx1'
        />
        <label htmlFor='chkbx1' className='text-sm font-[#565656] text-left'>
          Согласие на обработку персональных данных
        </label>
      </div>
    );
  }
);
