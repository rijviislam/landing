import CallIcon from "../icons/CallIcon";
import LockIcon from "../icons/LockIcon";
import MailIcon from "../icons/MailIcon";
import RightArrowIcon from "../icons/RightArrowIcon";
import RightIcon from "../icons/RightIcon";
import StarIcon from "../icons/StarIcon";
import UserIcon from "../icons/UserIcon";
import Button from "./Button";

export default function RealCustomer() {
  return (
    <section className="flex items-center justify-center bg-background-dark relative overflow-x-hidden">
      <div className="w-[204px] h-[204px] bg-primary rounded-full absolute top-1/2 -translate-y-1/2 blur-[300px] -left-28"></div>
      <div className="w-[204px] h-[204px] bg-primary rounded-full absolute top-1/2 -translate-y-1/2 blur-[300px] -right-28"></div>
      <div className="max-w-[950px] w-full flex items-center justify-center py-12">
        <div className="flex flex-col items-center text-center">
          <div className="flex flex-col ">
            <h2 className="font-bold  md:text-6xl lg:text-7xl text-4xl tracking-[-4px] lg:leading-[72px] text-text-light text-center  ">
              Ready to Turn Visitors Into
            </h2>
            <span className="text-primary md:text-6xl lg:text-7xl text-4xl font-bold">
              Real Customers?
            </span>
          </div>
          <p className="text-text-light mt-2 font-general text-lg text-center">
            Don't settle for an average page. Get a premium, conversion-focused{" "}
            <br /> landing page that pays for itself.
          </p>

          <div className="mt-12">
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
              <Button icon={<RightArrowIcon />} className="!w-full">
                Get my high-converting landing page
              </Button>
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
        </div>
      </div>
    </section>
  );
}
