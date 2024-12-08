import React from "react";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { PiHandbag } from "react-icons/pi";

export default function Header() {
  return (
    <div className="w-full h-[87px] mt-[45px] md:px-[50px] lg:px-[100pxpx]  xl:px-[200px] 2xl:px-[300px] justify-center items-center">
      <div className="flex justify-center items-center text-2xl font-bold">
        <span className="text-[#ff9f0d]">Food</span>
        <span>tuck</span>
      </div>
      <nav className="flex justify-center md:justify-between items-center text-center text-base font-normal">
        <div className="hidden md:flex">
          <ul className="flex gap-5 text-base font-normal">
            <li className="items-center text-center">
              <Link href="#">Home
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
            <li className="flex items-center">
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
              className="w-full h-full bg-transparent border-none "
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
          <PiHandbag className="flex w-[24px] h-[24px] ml-3"/>
        </div>
      </nav>
    </div>
  );
}
