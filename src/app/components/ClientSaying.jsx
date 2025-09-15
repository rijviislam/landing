"use client";
import StartGrp from "@/assets/Star.png";
import Profile from "@/assets/profile.svg";
import Profile2 from "@/assets/profile2.svg";
import Profile3 from "@/assets/profile3.svg";
import Profile4 from "@/assets/profile4.svg";

import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import SectionPtext from "./SectionPtext";

const clientRwview = [
  {
    img: [StartGrp, StartGrp, StartGrp, StartGrp, StartGrp],
    subTitle:
      "They delivered a landing page better than agencies charging 10x more. My conversion rate doubled within the first week!",
    profile: {
      img: Profile,
      name: "Sarah Johnson",
      designation: "SaaS Founder",
    },
  },
  {
    img: [StartGrp, StartGrp, StartGrp, StartGrp, StartGrp],
    subTitle:
      "“Fast, reliable, and professional. My conversions doubled and I'm getting more quality leads than ever before.",
    profile: {
      img: Profile2,
      name: "Sarah Johnson",
      designation: "SaaS Founder",
    },
  },
  {
    img: [StartGrp, StartGrp, StartGrp, StartGrp, StartGrp],
    subTitle:
      "They delivered a landing page better than agencies charging 10x more. My conversion rate doubled within the first week!",
    profile: {
      img: Profile3,
      name: "Sarah Johnson",
      designation: "SaaS Founder",
    },
  },
  {
    img: [StartGrp, StartGrp, StartGrp, StartGrp, StartGrp],
    subTitle:
      "They delivered a landing page better than agencies charging 10x more. My conversion rate doubled within the first week!",
    profile: {
      img: Profile4,
      name: "Sarah Johnson",
      designation: "SaaS Founder",
    },
  },
];
export default function ClientSaying() {
  const [sliderRef] = useKeenSlider(
    {
      slides: {
        perView: 4,
        spacing: 24,
      },
      loop: true,
      breakpoints: {
        "(min-width: 360px)": {
          slides: {
            perView: 1.4,
            spacing: 24,
          },
        },
        "(min-width: 768px)": {
          slides: {
            perView: 4,
            spacing: 24,
          },
        },
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;

        function clearNextTimeout() {
          clearTimeout(timeout);
        }

        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 3000);
        }

        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });

        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <section className="flex items-center justify-center  w-full overflow-x-hidden">
      <div className="max-w-[1250px] w-full py-32">
        <div className="flex gap-2 flex-col mx-4 md:mx-16 lg:mx-5">
          <SectionHeader
            className="text-4xl lg:text-5xl text-text-light"
            title={"What Our Clients Are Saying "}
            spanItem={"About Us"}
          />
          <SectionPtext
            text={
              "Real feedback from real businesses who've seen real results."
            }
          />
        </div>

        <div ref={sliderRef} className="keen-slider mt-9 md:mt-12 mx-4">
          {clientRwview?.map((card, idx) => (
            <div
              className=" p-6 bg-card rounded-xl keen-slider__slide number-slide1"
              key={idx}
            >
              <div className="flex gap-1">
                {card?.img?.map((star, idx) => (
                  <Image key={idx} src={star} alt={`Star Img ${idx}`} />
                ))}
              </div>

              <p className="text-text-light font-general mb-9 mt-6">
                {card.subTitle}
              </p>

              <div className="flex gap-3">
                <Image src={card.profile.img} alt="profile" />
                <div className="flex flex-col">
                  <h6 className="text-text-light font-general font-medium">
                    {card.profile.name}
                  </h6>
                  <p className="text-text-light font-general text-xs">
                    {card.profile.designation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-5 mt-12 hidden">
          {clientRwview?.map((card, idx) => (
            <div className=" p-6 bg-card rounded-xl" key={idx}>
              <div className="flex gap-1">
                {card?.img?.map((star, idx) => (
                  <Image key={idx} src={star} alt={`Star Img ${idx}`} />
                ))}
              </div>

              <p className="text-text-light font-general mb-9 mt-6">
                {card.subTitle}
              </p>

              <div className="flex gap-3">
                <Image src={card.profile.img} alt="profile" />
                <div className="flex flex-col">
                  <h6 className="text-text-light font-general font-medium">
                    {card.profile.name}
                  </h6>
                  <p className="text-text-light font-general text-xs">
                    {card.profile.designation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
