import { forwardRef } from "react";
import { XIcon } from "lucide-react";

interface ClosePhoneCheckerProps {
  onClick?: () => void;
}

export const ClosePhoneChecker = forwardRef<
  HTMLButtonElement,
  ClosePhoneCheckerProps
>((props, ref) => {
  return (
    <button
      onClick={props.onClick}
      ref={ref}
      className={`w-[88px] h-[52px] bg-white ml-auto self-start flex justify-center items-center border-2 border-black hover:bg-slate-100 active:bg-main`}
    >
      <XIcon width={40} height={40} />
    </button>
  );
});
