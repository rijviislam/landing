"use client";
import S3 from "@/assets/slide3.png";
import S1 from "@/assets/slider1.png";
import S2 from "@/assets/slider2.png";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";

export default function PortfolioSlider() {
  const [sliderRef] = useKeenSlider(
    {
      slides: {
        perView: 2,
        spacing: 16,
      },
      loop: true,
      breakpoints: {
        "(min-width: 360px)": {
          slides: {
            perView: 1.5,
            spacing: 16,
          },
        },
        "(min-width: 768px)": {
          slides: {
            perView: 2,
            spacing: 16,
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
          }, 2000);
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
    <div ref={sliderRef} className="keen-slider ">
      <div className="keen-slider__slide number-slide1 rounded-xl relative">
        <div className="linear-bg h-full w-full absolute "></div>

        <Image src={S1} alt="Slider1" />
      </div>
      <div className="keen-slider__slide number-slide1 rounded-xl relative">
        <div className="linear-bg h-full w-full absolute "></div>
        <Image src={S2} alt="Slider1" />
      </div>
      <div className="keen-slider__slide number-slide1 rounded-xl relative">
        <div className="linear-bg h-full w-full absolute "></div>
        <Image src={S3} alt="Slider1" />
      </div>
      <div className="keen-slider__slide number-slide1 rounded-xl relative">
        <div className="linear-bg h-full w-full absolute "></div>
        <Image src={S2} alt="Slider1" />
      </div>
    </div>
  );
}
