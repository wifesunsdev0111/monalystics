"use client";
import Container from "./layouts/Container";
import { RiMenu3Fill } from "react-icons/ri";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "../assets/logo.png";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <Container className="relative px-4 sm:px-16">
      <nav className="flex justify-between items-center pt-5">
        <Image
          src={Logo}
          alt="logo"
          height={50}
          width={100}
          onClick={() => router.push("/")}
        />

        <ul className="hidden lg:flex md:gap-8 md:font-bold md:hover:cursor-pointer">
          <Link href="../">
            <li className=" hover:text-slate-500">Home</li>
          </Link>

          <Link href="../#features">
            <li className=" hover:text-slate-500">Features</li>
          </Link>

          <Link href="../#contacts">
            <li className=" hover:text-slate-500">Contact</li>
          </Link>
        </ul>

        <div className="hidden lg:flex md:gap-8">
          <button
            className="hover:text-slate-500"
            onClick={() => router.push("/auth/sign-in")}
          >
            Sign In
          </button>
          <button
            className="bg-themeBlack px-6 py-2 rounded-3xl text-themeWhite  hover:bg-slate-700"
            onClick={() => router.push("/auth/sign-up")}
          >
            Sign Up
          </button>
        </div>

        <RiMenu3Fill
          className="lg:hidden text-xl"
          onClick={() => setIsOpen(true)}
        />
        {isOpen && <MobileMenu setIsOpen={setIsOpen} />}
      </nav>
    </Container>
  );
};

export default Navbar;
