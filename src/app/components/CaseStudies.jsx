"use client";

import Slider1 from "@/assets/slider01.png";
import Slider2 from "@/assets/slider02.png";
import Slider3 from "@/assets/slider03.png";

import Image from "next/image";
import RightIcon from "../icons/RightIcon";
import SectionHeader from "./SectionHeader";
import SectionPtext from "./SectionPtext";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import RightArrowIcon from "../icons/RightArrowIcon";
import Button from "./Button";

const sliderArray = [
  {
    img: Slider1,
    title: "Flowpilot",
    btn1: "20% high conversion than average in first week",
    btn2: "Clean and modern design with clear CTA",
  },
  {
    img: Slider3,
    title: "Flowpilot",
    btn1: "20% high conversion than average in first week",
    btn2: "Clean and modern design with clear CTA",
  },
  {
    img: Slider2,
    title: "Flowpilot",
    btn1: "20% high conversion than average in first week",
    btn2: "Clean and modern design with clear CTA",
  },
  {
    img: Slider1,
    title: "Flowpilot",
    btn1: "20% high conversion than average in first week",
    btn2: "Clean and modern design with clear CTA",
  },
  {
    img: Slider3,
    title: "Flowpilot",
    btn1: "20% high conversion than average in first week",
    btn2: "Clean and modern design with clear CTA",
  },
  {
    img: Slider2,
    title: "Flowpilot",
    btn1: "20% high conversion than average in first week",
    btn2: "Clean and modern design with clear CTA",
  },
];

export default function CaseStudies() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 16,
      origin: "center",
    },
    loop: true,
    centered: true,
    breakpoints: {
      "(min-width: 360px)": {
        slides: {
          perView: 1.5,
          spacing: 16,
          origin: "center",
        },
        centered: true,
      },
      "(min-width: 768px)": {
        slides: {
          perView: 2.5,
          spacing: 16,
          origin: "center",
        },
        centered: true,
      },
    },
  });

  return (
    <section className="bg-background-dark">
      <div className="py-32 flex-col flex items-center">
        <div className="flex flex-col gap-2 items-center">
          <SectionHeader
            title={"Case Studies"}
            className="text-text-light text-5xl"
          />
          <SectionPtext text={"See the designs that delivered results"} />
        </div>

        <div ref={sliderRef} className="keen-slider my-12">
          {sliderArray?.map((slider, index) => (
            <div
              key={index}
              className="keen-slider__slide p-3 border border-stroke  bg-background rounded-lg hidden sm:flex flex-col gap-2 relative "
            >
              <div className="bg-bg-lineaer-bg-seconday absolute"></div>
              <Image src={slider.img} alt="Slider Img" />
              <div className="flex justify-between gap-3">
                <h5 className="text-text-light font-manrope text-2xl font-bold">
                  {slider.title}
                </h5>
                <div className="inline-flex items-end flex-col gap-2">
                  <button className="text-text-secondary-light font-general text-xs px-4 py-2 rounded-full inline-flex items-center gap-2 bg-foreground w-max text-wrap">
                    <RightIcon className="text-primary" />
                    {slider.btn1}
                  </button>
                  <button className="text-text-secondary-light font-general text-xs px-4 py-2 rounded-full inline-flex items-center gap-2 bg-foreground w-max text-wrap">
                    <RightIcon className="text-primary" />
                    {slider.btn2}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-5 mx-5">
          {sliderArray?.map((card, idx) => (
            <div
              key={idx}
              className="keen-slider__slide p-3 border border-stroke  bg-background rounded-lg flex sm:hidden flex-col gap-2 relative "
            >
              <div className="bg-bg-lineaer-bg-seconday absolute"></div>
              <Image src={card.img} alt="Slider Img" />
              <div className="flex flex-col items-start justify-start gap-3">
                <h5 className="text-text-light font-manrope text-2xl font-bold">
                  {card.title}
                </h5>
                <div className="inline-flex items-start flex-col gap-2">
                  <button className="text-text-secondary-light font-general text-xs px-4 py-2 rounded-full inline-flex items-center gap-2 bg-foreground w-max text-wrap">
                    <RightIcon className="text-primary" />
                    {card.btn1}
                  </button>
                  <button className="text-text-secondary-light font-general text-xs px-4 py-2 rounded-full inline-flex items-center gap-2 bg-foreground w-max text-wrap">
                    <RightIcon className="text-primary" />
                    {card.btn2}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Button icon={<RightArrowIcon />}>I want similar results</Button>
      </div>
    </section>
  );
}
