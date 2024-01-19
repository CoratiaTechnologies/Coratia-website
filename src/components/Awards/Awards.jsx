import React from "react";
import { awards } from "../../../config/content/Awards";
import Image from "next/image";
import {Heading} from "../Typography";

const awardImage = 'https://res.cloudinary.com/dq9gdlbls/image/upload/f_auto,q_auto/wqxnvms0gwbuyfxao7x6';

export default function Awards(){
    return(
        <div className="bg-white pt-16 hidden md:block">
        <Heading className="text-center mb-7">Awards & Recognition</Heading>
        <div className="flex flex-wrap px-14 gap-x-12 gap-y-5 justify-evenly">
        {awards.map(item => (
            <div className="w-[200px] h-[160px]">
                <Image
                 height={100}
                 width={100}
                 src={awardImage}
                 alt=""
                 className="mx-auto w-[100px] h-[100px] object-cover"
                />
                <p className="text-black text-center">{item.text}</p>
                <p className="text-black text-center">{item.year}</p>
            </div>
        ))}
        </div>
        </div>
    )
}