"use client";
import { useState, useEffect, useRef } from "react";
import { arrow_left, arrow_right } from "./svg";
import Image, { StaticImageData } from "next/image";


type Testimonial = {
    name: string,
    testimonial: string,
    photo: StaticImageData
}

const Testimonial = ({ testimonials, height, circle }: { testimonials: Testimonial[], height: string, circle: boolean }) => {
    const [testimonialIndex, setTestimonialIndex] = useState(0);
    const [maxHeight, setMaxHeight] = useState(400);
    const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {

        const updateHeight = () => {
            const heights = testimonialRefs.current.map(ref => ref?.clientHeight || 0);
            setMaxHeight(Math.max(...heights) + 64);
        };
        updateHeight();

        window.addEventListener('resize', updateHeight);
        return () => window.removeEventListener('resize', updateHeight);

    }, [testimonials]);

    const handleLeftClick = () => {
        if (testimonialIndex == 0) {
            setTestimonialIndex(testimonials.length - 1);
            return;
        }
        setTestimonialIndex((testimonialIndex - 1) % testimonials.length);
    };

    const handleRightClick = () => {
        setTestimonialIndex((testimonialIndex + 1) % testimonials.length);
    };

    const handleDotClick = (index: number) => {
        if (index === testimonialIndex) {
            return;
        }

        setTestimonialIndex(index);
    };

    return (
        <div className="space-y-16">
            <div
                className={`w-full rounded-3xl shadow-glow flex overflow-hidden bg-ad-dark bg-opacity-50`}
                style={{ height: `${maxHeight}px` }}
            >
                <div className="hidden sm:flex items-center z-20">
                    <div className="hover:cursor-pointer m-4 md:m-8 p-2 text-ad-blue hover:text-white duration-200" onClick={handleLeftClick}>{arrow_left}</div>
                </div>
                <div className="relative px-4 sm:px-0 w-full">
                    {testimonials.map((testimonial, id) => (
                        <div
                            key={id}
                            className={`inset-4 sm:inset-0 px-4 transition flex items-center duration-300 ease-in-out ${id === testimonialIndex ? "opacity-100" : "opacity-0 -z-10"}`}
                            style={{ marginTop: `-${id === 0 ? 0 : 1 * maxHeight}px`, height: `${maxHeight}px` }}
                        >
                            <div
                                className="flex flex-col lg:flex-row items-center justify-center lg:space-x-8"
                                ref={el => testimonialRefs.current[id] = el}
                            >
                                <div>
                                    <Image
                                        className={`hidden lg:flex object-cover select-none ${circle ? 'rounded-full max-w-48 max-h-48' : 'rounded-xl max-w-36 max-h-36'}`}
                                        src={testimonial.photo}
                                        alt="headshot"
                                        draggable={false}
                                    />
                                </div>
                                <div className={`lg:w-2/3 space-y-4 `}>
                                    <div className="flex space-x-4 lg:space-x-0 items-center ">
                                        <Image
                                            className={`lg:hidden object-cover select-none ${circle ? 'rounded-full max-w-20 max-h-20' : 'rounded-xl max-w-12 max-h-12'}`}
                                            src={testimonial.photo}
                                            alt="headshot"
                                            draggable={false}
                                        />
                                        <div className="text-2xl sm:text-3xl font-bold uppercase">{testimonial.name}</div>
                                    </div>
                                    <div className={`overflow-hidden overflow-y-scroll`}>{testimonial.testimonial}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="hidden sm:flex items-center">
                    <div className="hover:cursor-pointer m-4 md:m-8 p-2 text-ad-blue hover:text-white duration-200" onClick={handleRightClick}>{arrow_right}</div>
                </div>
            </div>
            <div className="flex flex-row justify-center space-x-4">
                {testimonials.map((_, idx) => (
                    <div
                        key={idx}
                        className={`rounded-full size-4 hover:cursor-pointer duration-200 ${idx == testimonialIndex ? "bg-ad-blue" : "bg-white"}`}
                        onClick={(e) => handleDotClick(idx)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Testimonial;