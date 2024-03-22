import Container from "./layouts/Container";
import India from "../assets/India.png";
import Usa from "../assets/USA.png";
import Uae from "../assets/UAE.png";
import Rwanda from "../assets/Rwanda.png";
import SouthAfrica from "../assets/SouthAfrica.png";
import France from "../assets/France.png";
import Image from "next/image";

const Countries = () => {
  return (
    <Container className="py-8 px-4  lg:p-16 mb-5">
      <div className="flex flex-col gap-14">
        <p className="font-bold text-3xl  sm:text-[2.8rem]">
          Global Presence
        </p>
        <div className="flex flex-col gap-5 xl:flex-row xl:justify-between hover:cursor-pointer">
          <div className="flex gap-3 justify-start items-center border-2  border-gray-300 py-5 px-6 rounded-md">
            <Image
              src={SouthAfrica}
              alt="flag"
              height={10}
              width={50}
              loading="lazy"
              className="rounded-md border "
            />
            <p className="text-xl font-bold">South Africa</p>
          </div>

          <div className="flex gap-3 items-center border-2   border-gray-300 py-5 px-6  rounded-md">
            <Image
              src={Rwanda}
              alt="flag"
              height={10}
              width={50}
              loading="lazy"
              className="rounded-md border "
            />
            <p className="text-xl font-bold">Rwanda</p>
          </div>

          <div className="flex gap-3 items-center border-2  border-gray-300 py-5 px-6   rounded-md">
            <Image
              src={India}
              alt="flag"
              height={10}
              width={50}
              loading="lazy"
              className="rounded-md border "
            />
            <p className="text-xl font-bold">India</p>
          </div>

          <div className="flex gap-3 items-center border-2   border-gray-300 py-5 px-6  rounded-md">
            <Image
              src={France}
              alt="flag"
              height={10}
              width={50}
              loading="lazy"
              className="rounded-md border "
            />
            <p className="text-xl font-bold">France</p>
          </div>

          <div className="flex gap-3 items-center border-2  border-gray-300 py-5 px-6   rounded-md">
            <Image
              src={Usa}
              alt="flag"
              height={10}
              width={50}
              loading="lazy"
              className="rounded-md border "
            />
            <p className="text-xl font-bold">USA</p>
          </div>

          <div className="flex gap-3 items-center border-2   border-gray-300 py-5 px-6 rounded-md">
            <Image
              src={Uae}
              alt="flag"
              height={10}
              width={50}
              loading="lazy"
              className="rounded-md border "
            />
            <p className="text-xl font-bold">UAE</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Countries;
