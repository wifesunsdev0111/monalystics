import React from "react";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface MobileModalProps {
  setIsOpen: (state: boolean) => void;
}

const MobileMenu = ({ setIsOpen }: MobileModalProps) => {
  const router = useRouter();
  return (
    <div className="bg-themeWhite border shadow-2xl shadow-themeGrayShadow px-10 py-5 rounded-xl w-52  absolute top-5 right-5 l">
      <IoMdClose
        className="text-3xl absolute right-5"
        onClick={() => setIsOpen(false)}
      />
      <ul className="flex flex-col mt-10 font-medium hover:cursor-pointer">
        <Link href="../">
          <li className="hover:text-slate-500">Home</li>
        </Link>

        <Link href="../#features">
          <li className="hover:text-slate-500">Features</li>
        </Link>

        <Link href="../#contacts">
          <li className="hover:text-slate-500">Contacts</li>
        </Link>
      </ul>
      <br />
      <div className="flex flex-col gap-3 items-start">
        <button
          className="bg-transparent border border-themeBlack px-6 py-2 rounded-3xl text-themeBlack  hover:bg-themeBlack hover:text-themeWhite w-full"
          onClick={() => router.push("/auth/sign-in")}
        >
          Sign In
        </button>
        <button
          className="bg-themeBlack px-6 py-2 rounded-3xl text-themeWhite  hover:bg-slate-700 w-full"
          onClick={() => router.push("/auth/sign-up")}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
