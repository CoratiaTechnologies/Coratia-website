"use client";
import React from "react";
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import ImageSlider from "./ImageSlider";

const data = [
    {
        id: 1,
        name: "Product 1",
        image: "https://wallpaperaccess.com/full/2637581.jpg",
        description: "Description 1",
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
             className="w-[500px] h-[300px] object-cover" />
            <h2 className="text-center text-3xl font-semibold md:ml-10 md:w-[30%]">BEING INSPIRED FROM NATURE WE CREATED {product.name}</h2>
        </div>
        <div className="bg-slate-800 text-white py-10 text-center">
            <h1 className="text-4xl font-bold">{product.name}</h1>
            <p>{product.description}</p>
            <ImageSlider gallery={product.gallery} />
        </div>
        </>
    )
}

export default productPage;