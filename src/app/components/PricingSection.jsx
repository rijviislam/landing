"use client";
import { useState } from "react";
import DeleveryIcon from "../icons/DeleveryIcon";
import RightArrowIcon from "../icons/RightArrowIcon";
import Button from "./Button";
import SectionHeader from "./SectionHeader";
import SectionPtext from "./SectionPtext";

const pricingCard = [
  {
    title: "Basic",
    subTitle: "Perfect for solopreneurs",
    price: "$200",
    list: [
      "1 Landing Page (Design + Development)",
      "Hosting Deployment",
      "5-Day Delivery",
      "Basic Support",
    ],
    btnContent: "Start my project",
  },
  {
    title: "Standard",
    subTitle: "Best balance of value & features",
    price: "$300",
    list: [
      "Everything in Basic",
      "Extra Custom Section",
      "Free Hosting Setup",
      "Free Consultation Call",
      "Priority Support",
    ],
    btnContent: "Priority Support",
  },
  {
    title: "Premium",
    subTitle: "For brands & agencies",
    price: "$500",
    list: [
      "Everything in Standard",
      "Advanced Animations",
      "Priority Delivery (3 Days)",
      "6 Months Free Support",
      "Performance Optimization",
    ],
    btnContent: "Priority Support",
  },
];

export default function PricingSection() {
  const [active, setActive] = useState(1);
  return (
    <section className="bg-background-dark flex flex-col items-center justify-center w-full pb-30 ">
      <div className="max-w-[1200px] w-full">
        <div className="flex gap-2 flex-col mx-5 md:mx-16 lg:mx-5">
          <SectionHeader
            className="text-5xl"
            title={"Simple, Transparent Pricing — "}
            spanItem={"Choose Your Plan"}
          />
          <SectionPtext
            text={
              "No hidden fees, no surprises. Just premium landing pages at unbeatable prices."
            }
          />

          <div className="my-12 grid grid-cols-1  lg:grid-cols-3 gap-12 ">
            {pricingCard?.map((card, idx) => {
              const isActive = active === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActive(idx)}
                  className={`p-9 rounded-2xl flex flex-col justify-between transition-all duration-300 relative cursor-pointer
              ${
                isActive
                  ? "border-2 border-primary bg-card"
                  : "border border-stroke bg-card"
              }`}
                >
                  {isActive ? (
                    <button className="text-primary font-general text-xs px-3 py-[6px] rounded-full absolute border-2 -top-5 left-3 border-primary bg-background">
                      Most popular
                    </button>
                  ) : (
                    ""
                  )}
                  <div className="flex justify-between border-b border-stroke pb-9">
                    <div className="flex items-start flex-col gap-2">
                      <h6 className="font-manrope text-text-light text-2xl">
                        {card.title}
                      </h6>
                      <p className="text-sm font-general text-text-light">
                        {card.subTitle}
                      </p>
                    </div>
                    <p className="font-bold text-primary text-2xl">
                      {card.price}
                    </p>
                  </div>
                  <ul className="flex flex-col gap-3 my-12">
                    {card?.list?.map((li, liIdx) => (
                      <li
                        key={liIdx}
                        className="flex items-center gap-2 text-text-secondary-light font-general text-xs"
                      >
                        <div className="bg-primary w-[6px] h-[6px] rounded-full"></div>
                        {li}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`flex items-center !shadow-none !w-full transition-colors duration-300
                ${
                  isActive
                    ? "!bg-primary !shadow-shadow-button"
                    : "!bg-foreground !text-primary-light"
                }`}
                  >
                    {card.btnContent} <RightArrowIcon />
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className=" w-full max-w-[1200px] flex flex-col px-5 md:px-16 lg:px-5 xl:px-0">
        <div className="flex gap-5 my-12 ">
          <DeleveryIcon />
          <div className="">
            <SectionHeader
              title={"Limited Availability"}
              className="font-bold text-2xl"
            />
            <SectionPtext
              text={
                "We only onboard 5 new clients per month. 2 spots left for this month — secure yours today."
              }
              className="!text-text-secondary-light"
            />
          </div>
        </div>
        <div className="bg-card py-12 w-full rounded-2xl flex flex-col items-center ">
          <div className="flex flex-col gap-2 items-center px-5">
            <SectionHeader
              className="text-5xl text-center"
              title={"Special Offer For Early Clients"}
            />
            <SectionPtext
              text={"Get 10% OFF + Free Hosting Setup when you book this week."}
              className="text-center"
            />
          </div>
          <Button className="mt-12">Claim my 10% discount</Button>
        </div>
      </div>
    </section>
  );
}
