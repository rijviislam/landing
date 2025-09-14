import * as motion from "motion/react-client";
import DeleveryIcon from "../icons/DeleveryIcon";
import DesignIcon from "../icons/DesignIcon";
import PricingIcon from "../icons/PricingIcon";
import ResultsIcon from "../icons/ResultsIcon";
import RevisionIcon from "../icons/RevisionIcon";
import RocketIcon from "../icons/RocketIcon";
import SectionHeader from "./SectionHeader";
import SectionPtext from "./SectionPtext";

export default function Designs() {
  const cardItem = [
    {
      id: 1,
      icons: <RocketIcon />,
      title: "Proven Conversion Framework",
      subtitle:
        "Designs based on 100+ tested layouts that actually convert visitors into customers.",
    },
    {
      id: 1,
      icons: <DesignIcon />,
      title: "Agency Level Design",
      subtitle:
        "Modern, premium, and tailored for your brand - without the agency price tag. ",
    },
    {
      id: 1,
      icons: <DeleveryIcon />,
      title: "5-day Guaranteed Delivery",
      subtitle:
        "With a highly professional team, we deliver on time, everytime.",
    },
    {
      id: 1,
      icons: <PricingIcon />,
      title: "Transparent Pricing",
      subtitle:
        "No hidden fees, just clear value. What you see is what you pay. ",
    },
    {
      id: 1,
      icons: <RevisionIcon />,
      title: "Revisions Until You're Happy",
      subtitle:
        "We keep working until it's right. Your satisfaction is guaranteed. ",
    },
    {
      id: 1,
      icons: <ResultsIcon />,
      title: "Results That Speak",
      subtitle:
        "Our pages consistently outperform industry averages for conversions.",
    },
  ];
  return (
    <section className="w-full mx-auto ">
      <div className="max-w-[1200px] w-full mx-auto py-30">
        {/* TITLE AND SUBTITLE  */}
        <div className="flex flex-col gap-2 mx-5">
          <SectionHeader
            title={"Why Businesses"}
            spanItem={" Trust Us"}
            title2={" With Their Designs"}
            className="text-center lg:text-5xl text-4xl"
          />
          <SectionPtext
            text={
              "We combine proven conversion frameworks with agency-level design to deliver results that matter."
            }
            className="text-center "
          />
        </div>
        {/* GRID BOX  */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-9 gap-5 mt-12 lg:mx-0 md:mx-16 mx-5">
          {cardItem.map((card, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className=" p-6 bg-card rounded-sm flex flex-col gap-9"
            >
              <div>{card.icons}</div>
              <div>
                <h3 className="text-text-light font-medium font-manrope">
                  {card.title}
                </h3>
                <p className="text-text-secondary-light text-sm font-general">
                  {card.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
