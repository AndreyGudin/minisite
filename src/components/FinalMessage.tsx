import { memo } from "react";
import type { FC } from "react";

export const FinalMessage: FC = memo(function FinalMessage() {
  return (
    <div className='w-[380px] h-full py-[18px] bg-main flex flex-col gap-[15px] justify-center items-center text-center'>
      <span className='text-[32px] leading-[37.5px] font-bold uppercase'>
        Заявка
        <br /> принята
      </span>
      <span className='text-sm leading-[16px]'>
        Держите телефон под рукой.
        <br /> Скоро с вами свяжется наш менеджер
      </span>
    </div>
  );
});
