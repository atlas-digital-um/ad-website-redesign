"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { arrow_left, arrow_right } from "../svg";

type Slide = { photo: StaticImageData; event: string, description: string; };

type Experience = {
    name: string;
    slides: Slide[];
};


const MemberExperience = ({ experience }: { experience: Experience }) => {
    const [slideIndex, setSlideIndex] = useState(0);

    // useEffect(() => {
    //     const autoplay = setInterval(() => {
    //         handleRightClick()
    //     }, 5000)

    //     return () => clearInterval(autoplay)
    // })

    const handleLeftClick = () => {
        if (slideIndex == 0) {
            setSlideIndex(experience.slides.length - 1);
            return;
        }
        setSlideIndex((slideIndex - 1) % experience.slides.length);
    };

    const handleRightClick = () => {
        setSlideIndex((slideIndex + 1) % experience.slides.length);
    };

    return (
        <div className="space-y-8" >
            <div className="text-2xl font-bold text-ad-blue uppercase text-center">{experience.name}</div>

            <div className="flex sm:space-x-4 h-[500px] rounded-3xl ">
                <div className="hidden sm:flex items-center">
                    <div className="group hover:cursor-pointer p-2" onClick={handleLeftClick}>{arrow_left}</div>
                </div>

                <div className="relative w-full h-full overflow-hidden rounded-3xl bg-ad-dark shadow-glow">
                    {experience.slides.map((slide, id) => (
                        <div key={id} className={`absolute duration-500 ${id === slideIndex ? "opacity-100" : "opacity-0 -z-10"}`}>
                            <div className="w-full h-[500px] flex justify-center items-center rounded-3xl">
                                <Image
                                    className="flex object-cover h-[500px] rounded-3xl"
                                    src={slide.photo}
                                    alt="headshot"
                                    draggable={false}
                                />
                            </div>
                            <div className="absolute top-0 w-full h-full bg-gradient-to-b rounded-t-3xl from-ad-dark/70 via-ad-dark/10 to-transparent p-8 md:p-12" >
                                <div className="text-white uppercase text-2xl md:text-4xl font-semibold">{experience.slides[slideIndex].event}</div>
                                <div className="text-white mt-1 md:mt-0 uppercase text-xs md:text-sm">{experience.slides[slideIndex].description}</div>
                            </div>
                        </div>
                    ))}
                    <div className="absolute inset-0 sm:hidden hover:cursor-pointer" onClick={handleRightClick} />
                </div>

                <div className="hidden sm:flex items-center">
                    <div className="group hover:cursor-pointer p-2" onClick={handleRightClick}>{arrow_right}</div>
                </div>

            </div>
        </div>
    );
};

export default MemberExperience;