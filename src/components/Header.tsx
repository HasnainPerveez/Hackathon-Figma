import React from "react";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { PiHandbag } from "react-icons/pi";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { Button } from "@/components/ui/button";
import Image from "next/image";



export default function Header() {
  return (
    <div className='h-full lg:h-[950px]  relative bg-[url("/images/restaurant/Hero/unsplash_qom5MPOER-I.svg")] bg-cover bg-center'>
      <div className="absolute h-full inset-0 bg-[rgba(13,13,13,0.95)]"></div>
    <div className="relative z-10 w-full h-[87px] pt-[45px] md:px-[50px] lg:px-[100px]  xl:px-[200px] 2xl:px-[300px] justify-center items-center">
      <div className="flex justify-center items-center text-2xl font-bold">
        <span className="text-[#ff9f0d]">Food</span>
        <span>tuck</span>
      </div>
      <nav className="flex justify-center md:justify-between items-center text-center text-base font-normal">
        <div className="hidden md:flex">
          <ul className="flex gap-5 text-base font-normal ">
            <li className="items-center text-center">
              <Link href="#">
                Home
                <p className="w-[7px] h-[7px] rounded-[50%] bg-[#ff9f0d] ml-[17px]"></p>
              </Link>
            </li>
            <li className="">
              <Link href="#">Menu</Link>
            </li>
            <li className="">
              <Link href="#">Blog</Link>
            </li>
            <li className="">
              <Link href="#">Pages</Link>
            </li>
            <li className="flex items-center text-center">
              <Link href="#">About</Link>
              <span>
                <FaAngleDown className=" w-3 h-3" />
              </span>
            </li>
            <li className="">
              <Link href="#">Shop</Link>
            </li>
            <li className="">
              <Link href="#">Contact </Link>
            </li>
          </ul>
        </div>
        <div className="w-full justify-center flex items-center md:flex md:w-auto ">
          <section className="flex items-center text-center w-[310px] h-[54px] p-4 border border-[#FF9F0D] rounded-[27px]">
            <input
              className="w-full h-full bg-transparent border-none px-8 py-6 rounded-full "
              type="text"
              placeholder="Search..."
            />
            <Button
              className="bg-transparent border-none hover:bg-transparent hover:text-[#FF9F0D]"
              variant="outline"
            >
              <IoSearch className="w-[24px] h-[24px]" />
            </Button>
          </section>
          <PiHandbag className="flex w-[24px] h-[24px] ml-3 hover:text-[#FF9F0D] cursor-pointer" />
        </div>
      </nav>
    </div>
    <section className="flex mt-20 overflow-scroll">
      <div className='relative z-10 w-full h-full flex flex-col lg:flex-row lg:justify-between lg:items-center lg:mx-[100px] 2xl:mx-[248px]'>
      <div className='lg:flex'>
          <div className="hidden md:h-[492px] md:w-[25.28] xl:flex flex-row lg:flex-col justify items-center xl:gap-7">
            {/* <hr className="mx-9 w-[158px] h-3 bg-[rgba(255, 255, 255, 1)] rotation-0 md:rotate-90"/> */}
            <div className="w-px h-[158px] bg-white space-y-2"></div>
            <Link href="#" className="social-icon">
              <FaFacebookF />
            </Link>
            <Link href="#" className="social-icon">
              <TiSocialTwitter />
            </Link>
            <Link href="#" className="social-icon">
              <FaPinterestP />
            </Link>
            {/* <hr className="mx-9 w-[158px] h-3 bg-[rgba(255, 255, 255, 1)] rotation-0 md:rotate-90"/> */}
            <div className="w-px h-[158px] bg-white space-y-2"></div>
          </div>
          <div className="mx-6 xl:ml-20 items-center justify-center text-center md:text-left space-y-5">
            <p className="w-full lg:w-[472px] text-[32px] leading-10 text-[#FF9F0D]">
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
              className="w-[190px] h-[60px] rounded-[30px] bg-[#FF9F0D] hover:text-[#FF9F0D] font-normal"
            >
              See Menu
            </Button>
          </div>
          </div>
        <div className="lg:flex">
          <Image 
            className="w-full object-contain"
            src="/images/restaurant/Hero/Image.svg"
            alt="Hero-Image"
            width={877.8}
            height={670}
          />
        </div>
      </div>
    </section>
    </div>
  );
}
