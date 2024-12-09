import React from "react";
import Link from "next/link";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <div className='relative z-10 flex flex-col lg:flex-row lg:mx-[248px] lg:justify-between'>
        <div className="w-full md:w-auto justify-center md:h-screen flex flex-row md:flex-col items-center text-center space-x-4 md:space-y-4">
          <div className="w-20 md:w-px h-px md:h-20  bg-white"></div>
          <Link href="#" className="social-icon">
            <FaFacebookF />
          </Link>
          <Link href="#" className="social-icon">
            <TiSocialTwitter />
          </Link>
          <Link href="#" className="social-icon">
            <FaPinterestP />
          </Link>
          <div className="w-20 md:w-px h-px md:h-20  bg-white"></div>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <p className="w-full lg:w-[249px] text-[32px] leading-10 text-[#FF9F0D]">
            Its Quick & Amusing!
          </p>
          <h1 className="w-full lg:w-[472px] font-bold text-[60px] leading-[68px] text-[#FF9F0D] ">
            Th<span className="text-white">e Art of speed food Quality</span>{" "}
          </h1>
          <p className="w-full lg:w-[418px] text-base font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue
          </p>
          <Button
            variant="outline"
            className="w-[190px] h-[60px] rounded-[30px] bg-[#FF9F0D] font-normal"
          >
            See Menu
          </Button>
        </div>
        <div className="flex">
          <Image
            src="/images/restaurant/Hero/Image.svg"
            alt="Hero-Image"
            width={877.8}
            height={670}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
