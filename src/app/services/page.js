"use client";
import React from "react";
import { Heading } from "../../components/Typography";
import Image from "next/image";

const services = [
    {
        id: 1,
        image: "https://res.cloudinary.com/dgjzygzgx/image/upload/v1704300384/achievement_3_onrpob.jpg",
        name: "UNMANNED SURVEILLANCE",
        text: [
            "Ocean topography monitoring",
            "Submerged pipeline survey",
            "Subsea cable inspection",
        ],
    },
    {
        id: 2,
        image: "https://res.cloudinary.com/dgjzygzgx/image/upload/v1704300384/achievement_3_onrpob.jpg",
        name: "SEARCH & RESCUE",
        text: [
            "Identification of desired targets",
            "Relocation of subjects of interest",
        ],
    },
    {
        id: 3,
        image: "https://res.cloudinary.com/dgjzygzgx/image/upload/v1704300384/achievement_3_onrpob.jpg",
        name: "ROBOTIC CLEANING",
        text: [
            "Remote ship hull cleaning",
            "Marine growth removal",
        ],
    },
    {
        id: 4,
        image: "https://res.cloudinary.com/dgjzygzgx/image/upload/v1704300384/achievement_3_onrpob.jpg",
        name: "AI BASED NDT INSPECTION",
        text: [
            "Realtime defect identification",
            "Image and video enhancement",
            "Defect quantification",
        ],
    },
    {
        id: 5,
        image: "https://res.cloudinary.com/dgjzygzgx/image/upload/v1704300384/achievement_3_onrpob.jpg",
        name: "FOR SHIPS & PORTS",
        text: [
            "Sonar survey",
            "Bathymetry & hydrography survey",
            "Computational fluid dynamics",
            "Visual inspection of ship hulls, propellers and steel structures",
        ],
    },
    {
        id: 6,
        image: "https://res.cloudinary.com/dgjzygzgx/image/upload/v1704300384/achievement_3_onrpob.jpg",
        name: "FOR BRIDGES",
        text: [
            "Real time visual inspection",
            "Structural NDT",
            "Scouring analysis",
            "Predictive Study",
            "Comparison assessment",
        ],
    },
    {
        id: 7,
        image: "https://res.cloudinary.com/dgjzygzgx/image/upload/v1704300384/achievement_3_onrpob.jpg",
        name: "FOR DAMS",
        text: [
            "Visual inspection of sluice gates, concrete & steel structures",
            "Structural NDT",
            "Bathymetry & hydrography survey",
            "Predictive analysis",
        ],
    },
    {
        id: 8,
        image: "https://res.cloudinary.com/dgjzygzgx/image/upload/v1704300384/achievement_3_onrpob.jpg",
        name: "FOR PIPELINE & INDUSTRIES",
        text: [
            "Visual inspection of pipelines & tanks",
            "Defect identification",
            "Corrosion monitoring",
            "Health assessment",
        ],
    },
];

export default function Services(){
    return(
        <>
        <div className="absolute bg-white top-0 left-0 h-[520px] w-full -z-30"></div>
        <Heading className="mt-14 bg-white text-center">
            Solutions We Offer
        </Heading>
        <div className=" bg-yellow-100 flex flex-wrap gap-x-3 pt-4 pb-7 px-5 md:px-10">
            {services.map((item) => (
            <div className="w-[300px] h-[320px] text-black mx-auto mt-2 overflow-hidden">
                <Image
                 width={300}
                 height={180}
                 src={item.image}
                 alt=''
                 className="object-cover w-[300px] h-[180px] rounded-lg"
                />

                <h1 className="text-center text-lg font-semibold">{item.name}</h1>
                <ul className="list-disc text-sm px-8">
                {item.text.map((point, index) => (
                    <li key={index}>
                        {point}
                    </li>
                ))}
                </ul>
            </div>
            ))}
        </div>
        </>
    )
}