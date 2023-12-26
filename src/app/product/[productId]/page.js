"use client";
import React from "react";
import { useRouter, usePathname} from 'next/navigation';
import ImageSlider from "./ImageSlider";

const data = [
    {
        id: 1,
        name: "Product 1",
        image: "https://wallpaperaccess.com/full/2637581.jpg",
        description: "Description 1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure eos, expedita recusandae tenetur blanditiis saepe ipsa? Quo eveniet totam dolore hic praesentium accusamus adipisci quos nam libero ratione, porro beatae? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure eos, expedita recusandae tenetur blanditiis saepe ipsa? Quo eveniet totam dolore hic praesentium accusamus adipisci quos nam libero ratione, porro beatae?",
        gallery: [
            {id:0,value:"https://wallpaperaccess.com/full/2637581.jpg"},
            {id:1,value:"https://source.unsplash.com/user/c_v_r/1900x800"},
            {id:2,value:"https://source.unsplash.com/user/c_v_r/100x100"},
          ],
    },
    {
        id: 2,
        name: "Product 2",
        image: "",
        description: "Description 2",
        gallery: [
            {id:0,value:"https://wallpaperaccess.com/full/2637581.jpg"},
            {id:1,value:"https://source.unsplash.com/user/c_v_r/1900x800"},
            {id:2,value:"https://source.unsplash.com/user/c_v_r/100x100"},
          ],
    },
];

function productPage() {
    const pathname = usePathname()
    const productId = pathname.substring(9)
    var product = data.find(item => item.id.toString() === productId)

    return(
        <>
        <div className="md:flex items-center justify-center pt-20 pb-5 px-5 md:px-10 text-black">
            <img
             src={product.image}
             className="w-[500px] h-[300px] mx-auto md:mx-0 object-cover" />
            <h2 className="text-center text-3xl font-semibold mt-3 md:mt-0 md:ml-10 md:w-[30%]">BEING INSPIRED FROM NATURE WE CREATED {product.name}</h2>
        </div>
        <div className="pb-5 text-center">
            <h1 className="bg-slate-900 text-white text-5xl py-5 font-bold">{product.name}</h1>
            <p className="text-black py-5 px-4 md:px-28 sm:px-14 md:text-lg text-base">{product.description}</p>
            <ImageSlider gallery={product.gallery} />
        </div>
        </>
    )
}

export default productPage;