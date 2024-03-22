import Container from "./layouts/Container";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import HeroImage from "../assets/hero-image.png";

const Hero = () => {
  return (
    <Container className="mt-16 flex flex-col items-center gap-8 py-8 px-4 mx-auto max-w-screen-xl   text-start sm:text-center lg:py-16 lg:px-1">
      <div className="text-4xl font-black tracking-tight leading-none text-themeBlack md:text-5xl lg:text-6xl">
        <p>We Help With Your Organizations</p>
        <p> Growth</p>
      </div>
      <p className="text-lg font-normal text-themeGrayText lg:text-xl sm:px-16 xl:px-48">
        Harness the Power of Social Media Insights, Forge Lucrative Influencer
        Partnerships, and Outsmart Your Competitors. Let us redefine success
        together!
      </p>

      <button className="flex  justify-center items-center gap-3 bg-themeYellow w-max px-4 py-[0.4rem] medium:px-8 medium:py-[0.7rem] small:px-7  small:py-[0.6rem]  lg:px-7 lg:py-[0.8rem] rounded-[2rem] text-themeBlack font-bold">
        GET STARTED
        <FaArrowRight className="bg-themeWhite text-themeBlack p-3 text-4xl rounded-full" />
      </button>

      <Image src={HeroImage} alt="hero-image" loading="lazy" />
    </Container>
  );
};

export default Hero;
