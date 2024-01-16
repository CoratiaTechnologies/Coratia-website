"use client";
import React from "react";
import "./services.css";
import { Heading } from "../../components/Typography";
import Image from "next/image";
import {services} from "../../../config/content/Services";


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