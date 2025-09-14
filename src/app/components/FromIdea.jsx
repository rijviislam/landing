import * as motion from "motion/react-client";
import DesignIcon from "../icons/DesignIcon";
import RocketIcon from "../icons/RocketIcon";
import UserIcon2 from "../icons/UserIcon2";
import SectionHeader from "./SectionHeader";
import SectionPtext from "./SectionPtext";

const fromCard = [
  {
    badge: "Day 1",
    icon: <UserIcon2 className="size-12" />,
    title: "Book Your Project",
    sybTitle: "Fill out a short form and we'll get started immediately.",
  },
  {
    badge: "Day 2",
    icon: <DesignIcon />,
    title: "Design & Development",
    sybTitle: "Unlimited revisions until perfect. You're involved every step. ",
  },
  {
    badge: "Day 3",
    icon: <RocketIcon />,
    title: "Launch",
    sybTitle: "Fully deployed on your hosting and ready to convert visitors. ",
  },
];

export default function FromIdea() {
  return (
    <section className="flex items-center justify-center  ">
      <div className="max-w-[1200px] w-full  py-32 relative">
        <div className="w-[204px] h-[204px] bg-primary rounded-full absolute top-1/2 -translate-y-1/2 blur-[300px]"></div>
        <div className="flex flex-col gap-2 text-center items-center mx-4">
          <SectionHeader
            className="text-4xl lg:text-5xl  text-center"
            title={"From Idea to Live Landing Page in "}
            spanItem={"Just 5 Days"}
          />
          <SectionPtext
            text={
              "Our streamlined process ensures fast delivery without compromising quality."
            }
            className=" text-center"
          />
        </div>
        <div className="flex items-center lg:flex-row flex-col gap-6 mt-12 justify-center mx-4 lg:mx-0">
          {fromCard?.map((card, idx) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-9  bg-card flex-col flex items-center lg:max-w-[305px] w-full"
              key={idx}
            >
              <button className="px-2 rounded-full absolute border border-primary text-primary -top-3  left-1/2 -translate-x-1/2">
                {card.badge}
              </button>
              <div className="bg-foreground rounded-full p-6 inline-flex ">
                {card.icon}
              </div>
              <h5 className="text-text-light font-general text-center text-lg mt-9 mb-2 font-medium">
                {card.title}
              </h5>
              <p className="text-text-secondary-light text-sm font-general text-center">
                {card.sybTitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
