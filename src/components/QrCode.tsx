import { memo } from "react";
import type { FC } from "react";
import qrCode from "../assets/qr-code.svg";

export const QrCode: FC = memo(function QrCode() {
  return (
    <div
      className={`flex gap-[10px] items-center text-base uppercase self-end ml-auto m-[40px]`}
    >
      <span className='text-base uppercase text-white text-right'>
        Сканируйте QR-код
        <br /> ДЛЯ ПОЛУЧЕНИЯ
        <br /> ДОПОЛНИТЕЛЬНОЙ
        <br /> ИНФОРМАЦИИ
      </span>
      <img className='w-[126px] h-[126px]' src={qrCode} alt='Qr-code' />
    </div>
  );
});
