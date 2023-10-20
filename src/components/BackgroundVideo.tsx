import { memo } from "react";
import type { FC } from "react";

interface BackgroundVideoProps {
  className?: string;
}

export const BackgroundVideo: FC<BackgroundVideoProps> = memo(
  function BackgroundVideo({ className = "" }: BackgroundVideoProps) {
    return (
      <div className={`${className} absolute top-0 left-0 z-10`}>
        <video
          width={1280}
          height={720}
          id='background-video'
          src='./src/assets/video.mp4'
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
