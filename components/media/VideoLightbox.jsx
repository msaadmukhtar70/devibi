// /components/media/VideoLightbox.jsx
"use client";
import { useState } from "react";
import Image from "next/image";
import FsLightbox from "fslightbox-react";

export default function VideoLightbox() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="relative overflow-hidden rounded-[30px] lg:rounded-[50px]">
        <Image
          src="/assets/img_placeholder/th-1/funfact-image.jpg"
          alt="Behind the design"
          width={721}
          height={784}
          className="h-80 w-full object-cover object-center lg:h-[35rem] xl:h-full"
        />
        <button
          className="absolute left-1/2 top-1/2 z-[1] -translate-x-1/2 -translate-y-1/2"
          aria-label="Play video"
          onClick={() => setOpen(true)}
        >
          <div className="relative flex h-[120px] w-[120px] items-center justify-center rounded-full border-[3px] border-black text-lg font-bold backdrop-blur-[2px] transition-all duration-300 hover:bg-colorOrangyRed hover:text-white">
            Play
            <div className="absolute -z-[1] h-[110%] w-[110%] animate-[ping_1.5s_ease-in-out_infinite] rounded-full bg-gray-600 opacity-30"></div>
          </div>
        </button>
      </div>
      <FsLightbox toggler={open} sources={["https://www.youtube.com/watch?v=3nQNiWdeH2Q"]} />
    </>
  );
}
