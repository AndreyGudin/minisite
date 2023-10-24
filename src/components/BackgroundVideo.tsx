import { memo, useEffect, useRef } from "react";
import type { FC } from "react";
import Video from "../assets/video.mp4";
interface BackgroundVideoProps {
  className?: string;
  play?: boolean;
}

export const BackgroundVideo: FC<BackgroundVideoProps> = memo(
  function BackgroundVideo({
    className = "",
    play = true,
  }: BackgroundVideoProps) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
      if (play && videoRef.current?.paused) videoRef.current?.play();
      if (!play) videoRef.current?.pause();
    }, [play]);

    return (
      <div className={`${className} absolute top-0 left-0 z-10`}>
        <video
          className='w-[1280px] h-[720px]'
          ref={videoRef}
          width={1280}
          height={720}
          id='background-video'
          src={Video}
          loop
          autoPlay
          muted
        >
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
);
