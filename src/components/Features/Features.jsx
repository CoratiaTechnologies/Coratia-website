import React, { useState, useEffect } from "react";
import { Heading } from "../Typography";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import Background from "./Background";

const featureImage =
  "https://res.cloudinary.com/dgjzygzgx/image/upload/v1715323801/jalasimha.jpg";

const content = [
  "Integrated workspace with cameras, multibeam sonar and GPS position",
  "Compact hydronomic design",
  "Stereo Vision",
  "SAR capability",
  "Dual Camera with 4K",
  "Auto-Navigation with GPS",
  "Visibility in turbid water",
  "Unlimited power Supply",
  "6 degrees of freedom",
  "Integrated GPS, USBL & DVL for accurate positioning",
  "300+ meter depth rating",
  "Robotic arm with multiple effectors",
];

const Features = () => {
  const [isVisible, setIsVisible] = useState(
    new Array(content.length).fill(false)
  );
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prevState) => {
            const newState = [...prevState];
            newState[parseInt(entry.target.dataset.index, 10)] =
              entry.isIntersecting;
            return newState;
          });
        });
      },
      { threshold: 1 }
    );

    const targets = document.querySelectorAll(".feature-item");
    targets.forEach((target) => {
      observer.observe(target);
    });
    return () => {
      targets.forEach((target) => {
        observer.unobserve(target);
      });
    };
  }, []);

  return (
    <div className="hidden sm:block">
      <div className="text-center md:pt-32 pt-16 pb-10 bg-gradient-to-t from-[#acacac] to-white">
        <Heading>Product Features</Heading>
      </div>
      <div className="w-full relative bg-white">
        <div className="flex justify-center items-end">
          <Background className="w-full h-full" />
          <div className="absolute top-0 left-0 w-full h-full grid grid-cols-2 grid-rows-6 gap-x-8 px-10 gap-y-1 z-1">
            {content.map((item, index) => {
              switch ((index + 1) % 2) {
                case 1:
                  return (
                    <motion.div
                      key={index}
                      data-index={index}
                      className={`flex items-center text-black justify-center gap-1 text-center font-bold transition-opacity duration-500 feature-item`}
                      initial={{ opacity: 0 }}
                      animate={
                        isVisible[index] ? { opacity: 1 } : { opacity: 0 }
                      }
                      transition={{ duration: 2 }}
                    >
                      <p>{item}</p>
                      <Image
                        src="https://res.cloudinary.com/dgjzygzgx/image/upload/v1712803851/node-line_hkfwzq.svg"
                        alt=""
                        height={15}
                        width={200}
                        className="rotate-180 w-[150px] md:w-[200px]"
                      />
                    </motion.div>
                  );
                case 0:
                  return (
                    <motion.div
                      key={index}
                      data-index={index}
                      className={`flex items-center text-black justify-center text-center gap-1 font-bold transition-opacity duration-500 feature-item`}
                      initial={{ opacity: 0 }}
                      animate={
                        isVisible[index] ? { opacity: 1 } : { opacity: 0 }
                      }
                      transition={{ duration: 2 }}
                    >
                      <Image
                        src="https://res.cloudinary.com/dgjzygzgx/image/upload/v1712803851/node-line_hkfwzq.svg"
                        alt=""
                        height={15}
                        width={200}
                        className=" w-[150px] md:w-[200px]"
                      />
                      <p>{item}</p>
                    </motion.div>
                  );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
