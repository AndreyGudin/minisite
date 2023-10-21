import { memo } from "react";
import type { FC } from "react";

interface BannerProps {
  className?: string;
}

export const Banner: FC<BannerProps> = memo(function Banner({
  className = "",
}: BannerProps) {
  return (
    <div
      className={`${className} w-[250px] h-[357px] flex flex-col gap-5 items-center bg-main px-[10px] pt-[20px] pb-[10px] z-20 ml-auto`}
    >
      <span className='text-base uppercase text-center leading-4'>
        ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША!
        <br /> ПОДАРИТЕ ЕМУ СОБАКУ!
      </span>
      <img
        className='w-[126px] h-[126px]'
        src='./src/assets/qr-code.svg'
        alt='Qr-code'
      />
      <span className='text-sm text-center leading-4'>
        Сканируйте QR-код
        <br /> или нажмите ОК
      </span>
      <button
        onClick={() => console.log("click")}
        className='w-[156px] h-[52px] text-main bg-black cursor-pointer'
      >
        OK
      </button>
    </div>
  );
});
