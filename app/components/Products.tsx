"use client";
import bg from "@/public/home bg.png";
import CountUp from "react-countup";
import Alameed from "@/public/ameed.png";
import egy from "@/public/egy.png";
import cola from "@/public/cola.png";
import Image from "next/image";
import {
    Camera,
    MapPin,
    Phone,
    ArrowRight,
} from "lucide-react";

export default function Footer() {

    const brands = [
        {
            title: "بن العميد",
            description: "The authentic taste of Arabic coffee since 1960.",
            image: Alameed,
        },
        {
            title: "Nutty",
            description: "A wide range of nuts and roasted snacks.",
            image: "/brands/nutty.webp",
        },
        {
            title: "Bakalland",
            description: "Healthy choices for a better lifestyle.",
            image: "/brands/bakalland.webp",
        },
        {
            title: "Mc Sauce",
            description: "Delicious sauces for every taste and every meal.",
            image: "/brands/mcsauce.webp",
        },
        {
            title: "V7",
            description: "Refreshing drinks for every moment.",
            image: cola,
        },
    ];
    return <>
        <div className="flex px-15 flex-wrap w-full justify-between items-center gap-8 bg-gray-100 h-full" >

            {/* Head  */}
            <div className="flex w-full flex-col justify-center items-start">
                <h6 className="text-2xl font-bold text-[#C9A227]  pt-15">
                    Our Brands
                </h6>
                <h3 className="pt-2 font-bold text-4xl leading-tight text-black md:text-4xl">
                    Quality Brands,
                </h3>
                <h3 className="font-bold text-4xl leading-tight text-black md:text-4xl">
                    Trusted by Millions
                </h3>
            </div>

            {/* List  */}

            <section className="relative bg-gray-100 pb-20">
                <div className="mx-auto max-w-7xl px-4">
                    <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
                        {brands.map((brand) => (
                            <div
                                key={brand.title}
                                className="group overflow-hidden rounded-[24px] bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >
                                <div className="relative h-[200px]">
                                    <Image
                                        src={brand.image}
                                        alt={brand.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                                <div className="flex flex-col p-5">
                                    <h3 className="mb-2 text-xl font-semibold text-[#1F1F1F]">
                                        {brand.title}
                                    </h3>

                                    <p className="min-h-[30px] text-sm leading-6 text-gray-600">
                                        {brand.description}
                                    </p>

                                    <div className=" flex justify-end">
                                        <ArrowRight
                                            size={28}
                                            className="text-[#C9A227] transition-transform duration-300 group-hover:translate-x-2"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>

    </>;
}