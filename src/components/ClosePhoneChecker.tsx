import { memo } from "react";
import type { FC } from "react";
import { XIcon } from "lucide-react";

export const ClosePhoneChecker: FC = memo(() => {
  return (
    <button className='w-[88px] h-[52px] bg-white ml-auto self-start flex justify-center items-center border-2 border-black hover:bg-slate-100 active:bg-main'>
      <XIcon width={40} height={40} />
    </button>
  );
});
