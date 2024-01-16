"use client";
import React from "react";
import { Heading } from "../../components/Typography";
import Image from "next/image";

const services = [
    {
        id: 1,
        image: "https://res.cloudinary.com/dgjzygzgx/image/upload/v1704300384/achievement_3_onrpob.jpg",
        name: "Service 1",
        text: [
            "text 1",
            "text 2",
            "text 3",
        ],
    },
    {
        id: 2,
        image: "https://res.cloudinary.com/dgjzygzgx/image/upload/v1704300384/achievement_3_onrpob.jpg",
        name: "Service 2",
        text: [
            "text 1",
            "text 2",
            "text 3",
        ],
    },
    {
        id: 2,
        image: "https://res.cloudinary.com/dgjzygzgx/image/upload/v1704300384/achievement_3_onrpob.jpg",
        name: "Service 2",
        text: [
            "text 1",
            "text 2",
            "text 3",
        ],
    },
    {
        id: 2,
        image: "https://res.cloudinary.com/dgjzygzgx/image/upload/v1704300384/achievement_3_onrpob.jpg",
        name: "Service 2",
        text: [
            "text 1",
            "text 2",
            "text 3",
        ],
    },
    {
        id: 2,
        image: "https://res.cloudinary.com/dgjzygzgx/image/upload/v1704300384/achievement_3_onrpob.jpg",
        name: "Service 2",
        text: [
            "text 1",
            "text 2",
            "text 3",
        ],
    },
    {
        id: 2,
        image: "https://res.cloudinary.com/dgjzygzgx/image/upload/v1704300384/achievement_3_onrpob.jpg",
        name: "Service 2",
        text: [
            "text 1",
            "text 2",
            "text 3",
        ],
    },
    {
        id: 2,
        image: "https://res.cloudinary.com/dgjzygzgx/image/upload/v1704300384/achievement_3_onrpob.jpg",
        name: "Service 2",
        text: [
            "text 1",
            "text 2",
            "text 3",
        ],
    },
    {
        id: 2,
        image: "https://res.cloudinary.com/dgjzygzgx/image/upload/v1704300384/achievement_3_onrpob.jpg",
        name: "Service 2",
        text: [
            "text 1",
            "text 2",
            "text 3",
        ],
    },
    {
        id: 2,
        image: "https://res.cloudinary.com/dgjzygzgx/image/upload/v1704300384/achievement_3_onrpob.jpg",
        name: "Service 2",
        text: [
            "text 1",
            "text 2",
            "text 3",
        ],
    },
    {
        id: 2,
        image: "https://res.cloudinary.com/dgjzygzgx/image/upload/v1704300384/achievement_3_onrpob.jpg",
        name: "Service 2",
        text: [
            "text 1",
            "text 2",
            "text 3",
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
        <div className=" bg-yellow-100 flex flex-wrap gap-x-3 pb-7 px-5 md:px-10">
            {services.map((item) => (
            <div className="w-[270px] h-[300px] text-black mx-auto mt-6 overflow-hidden">
                <Image
                 width={270}
                 height={180}
                 src={item.image}
                 alt=''
                 className="object-cover w-[270px] h-[180px] rounded-sm"
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