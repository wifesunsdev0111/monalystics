import Image1 from "../assets/image-1.png";
import Image2 from "../assets/image-2.png";
import Image from "next/image";
import Container from "./layouts/Container";
import { FaAngleRight } from "react-icons/fa6";

const Services = () => {
  return (
    <Container className=" flex flex-col gap-20 md:gap-28 py-8 px-4 lg:p-16 ">
      <div
        className="flex flex-col items-center  gap-16  lg:flex-row lg:items-center "
        id="services"
      >
        <Image
          src={Image1}
          alt="image-one"
          className="w-[30rem] lg:h-[30rem] lg:w-[48rem]"
          loading="lazy"
        />
        <div className="flex flex-col items-center gap-8 lg:items-start">
          <div className="flex flex-col  gap-3 text-4xl font-bold tracking-tight leading-none text-themeBlack md:text-[2.8rem]">
            <p>Strategically Connect with </p>
            <p>Audiences Across the Globe</p>
          </div>

          <p className="text-themeGrayText font-medium text-center lg:text-start">
            No matter where your business sets its sights, connect with
            authentic voices that resonate with your target audience.
            Collaborate with Instagram influencers with bloggers, YouTubers, ,
            and more.
          </p>

          <div className="flex flex-col gap-5 items-center lg:items-start">
            <button className="flex gap-3  items-center bg-themeYellow px-4 py-[0.7rem] medium:px-8 medium:py-[0.7rem] small:px-7  small:py-[0.6rem]  lg:px-7 lg:py-[0.8rem] rounded-[2rem] font-bold w-max">
              Get Started
              <FaAngleRight />
            </button>

            <p className="text-themeGrayText font-medium">
              No credit card needed! Free 14 days trial
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-16  lg:flex-row lg:items-center">
        <div className="flex flex-col items-center gap-8 lg:items-start">
          <div className="flex flex-col items-center gap-3 text-4xl font-bold tracking-tight leading-none text-themeBlack md:text-[2.8rem] lg:items-start">
            <p>Track analytics</p>
            <p>thats guide your</p>
            <p>decision-making</p>
          </div>

          <p className="text-themeGrayText font-medium text-center lg:text-start">
            Track competitor analysis, customer trends, and industry shifts, all
            in one place.Get customized dashboards and reports to track what
            matters most to your business.
          </p>

          <div className="flex flex-col gap-5 items-center lg:items-start">
            <button className="flex gap-3 items-center bg-themeYellow px-4 py-[0.7rem] medium:px-8 medium:py-[0.7rem] small:px-7  small:py-[0.6rem]  lg:px-7 lg:py-[0.8rem] rounded-[2rem] font-bold w-max">
              Get Started
              <FaAngleRight />
            </button>

            <p className="text-themeGrayText font-medium text-center lg:text-start">
              No credit card needed! Free 14 days trial
            </p>
          </div>
        </div>

        <Image
          src={Image2}
          alt="image-one"
          className="w-[30rem]  lg:h-[26rem] lg:w-[48rem]"
          loading="lazy"
        />
      </div>
    </Container>
  );
};

export default Services;
