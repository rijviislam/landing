import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/Logo.svg";
import BannerIcon from "../icons/BannerIcon";
import CallIcon from "../icons/CallIcon";
import LockIcon from "../icons/LockIcon";
import MailIcon from "../icons/MailIcon";
import RightArrowIcon from "../icons/RightArrowIcon";
import RightIcon from "../icons/RightIcon";
import StarIcon from "../icons/StarIcon";
import UserIcon from "../icons/UserIcon";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="relative flex flex-col items-center justify-center  max-w-[1200px] w-full px-16">
        <div className="bg-primary rounded-[816px] w-full max-w-[816px] h-[250px]  absolute -top-32 left-1/2 -translate-x-1/2 opacity-20 blur-[175.7px] z-0"></div>
        <Link href="/">
          <Image src={Logo} alt="Logo" className="mt-6" />
        </Link>
        {/* BADGE LARGE  */}
        <p className="border-t text-text-secondary-light text-xs bg-card border-primary rounded-full inline-flex gap-2 items-center justify-center py-2 px-4 md:mt-10 lg:mt-56 mt-8 font-general mx-auto text-center">
          <BannerIcon /> Trusted by 30+ startups & entrepreneurs worldwide
        </p>
        <div className="mt-6">
          <h1 className="font-bold  md:text-6xl text-4xl lg:text-7xl text-text-light text-center">
            Strategic Landing Pages That Convert From Just{" "}
            <span className="text-primary">$200</span>
          </h1>
          <p className="text-text-light font-general text-lg text-center my-3 lg:px-18 px-0">
            Stop wasting traffic on generic pages. We deliver premium,
            conversion-focused landing pages designed, developed, and launched
            in just 5 days.
          </p>
        </div>
        <div className="border border-stroke shadow-shadow-box p-5 md:p-8 rounded-sm flex gap-5 flex-col items-center">
          <div className="flex md:flex-nowrap flex-wrap items-center justify-center gap-2">
            <div className="border-2 rounded-sm gap-2 border-stroke p-5 flex items-center  w-full ">
              <UserIcon className="text-primary " />
              <input
                type="text"
                placeholder="Your name"
                className="outline-none  text-text-secondary-light text-xs font-general"
              />
            </div>
            <div className="border-2 rounded-sm gap-2 border-stroke p-5 flex items-center  w-full">
              <MailIcon className="text-primary " />
              <input
                type="email"
                placeholder="Your name"
                className="outline-none  text-text-secondary-light text-xs font-general"
              />
            </div>
            <div className="border-2 rounded-sm gap-2 border-stroke p-5 flex items-center  w-full">
              <CallIcon className="text-primary " />
              <input
                type="number"
                placeholder="Your name"
                className="outline-none  text-text-secondary-light text-xs font-general"
              />
            </div>
          </div>
          <button className="text-primary-dark text-xs font-general bg-primary rounded-sm shadow-shadow-button w-full px-8 py-4 flex gap-2 items-center justify-center cursor-pointer">
            Get my high-converting landing page <RightArrowIcon />
          </button>
        </div>
        <div className="mt-4 flex items-center md:gap-16 gap-6  md:flex-nowrap flex-wrap justify-center">
          <p className="text-text-secondary-light font-general text-xs flex items-center gap-2 justify-center">
            <LockIcon /> SSL secure
          </p>
          <p className="text-text-secondary-light font-general text-xs flex items-center gap-2 justify-center">
            <RightIcon className="size-4" /> Money-back guaranteed
          </p>
          <p className="text-text-secondary-light font-general text-xs flex items-center gap-2 justify-center">
            <StarIcon /> Satisfaction guaranteed
          </p>
        </div>
      </div>
    </section>
  );
}
