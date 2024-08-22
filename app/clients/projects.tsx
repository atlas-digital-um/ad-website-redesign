import { useState } from "react";
import { StaticImageData } from "next/image";
import { arrow_left, arrow_right } from "../svg";
import Image from "next/image";
import { pastProjects } from "../text";
import { useRef, useEffect } from "react";

type Project = {
    name: string;
    description: JSX.Element;
    photo: StaticImageData;
    technologies: string[];
};

const PastProjects = ({ projects }: { projects: Project[] }) => {

    const [projectHeight, setProjectHeight] = useState(0);
    const [pastProjectIndex, setPastProjectIndex] = useState(0);
    const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {

        const updateHeight = () => {
            const heights = projectRefs.current.map(ref => ref?.clientHeight || 0);
            setProjectHeight(Math.max(...heights));
            console.log(Math.max(...heights))
        };
        updateHeight();

        window.addEventListener('resize', updateHeight);
        return () => window.removeEventListener('resize', updateHeight);

    }, []);

    const handleLeftClick = () => {
        if (pastProjectIndex == 0) {
            setPastProjectIndex(projects.length - 1);
            return;
        }
        setPastProjectIndex((pastProjectIndex - 1) % projects.length);
    };

    const handleRightClick = () => {
        setPastProjectIndex((pastProjectIndex + 1) % projects.length);
    };

    const handleDotClick = (index: number) => {
        if (index == pastProjectIndex) {
            return;
        }
        setPastProjectIndex(index);
    };

    return (
        <div className="space-y-16">
            <div
                className="relative flex flex-row bg-ad-dark bg-opacity-50 rounded-3xl w-full shadow-glow items-center justify-between"
                style={{ height: `${projectHeight}px` }}
            >
                <div className="hidden sm:flex items-center z-20">
                    <div className="hover:cursor-pointer m-4 md:ml-8 md:mr-6 lg:m-8 p-2 text-ad-blue hover:text-white duration-200" onClick={handleLeftClick}>{arrow_left}</div>
                </div>

                <div className={`relative flex flex-row items-center w-full lg:w-4/5 h-full`}>
                    {pastProjects.map((project, id) => (
                        <div key={id} className={`absolute flex items-center duration-300 ease-in-out h-full w-full ${id === pastProjectIndex ? "opacity-100" : "opacity-0 -z-10"}`}>
                            <div className="flex justify-center w-full items-center flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-0 py-8 md:py-12" ref={el => projectRefs.current[id] = el}>
                                <div className="flex flex-col justify-center space-y-2 md:w-1/2 lg:w-1/2 px-8 md:px-0">
                                    <div className="text-3xl font-bold uppercase">{project.name}</div>
                                    <div className="pb-2">{project.description}</div>
                                    <div className="flex flex-row flex-wrap text-sm sm:text-base -mx-1">
                                        {project.technologies.map(
                                            (tech, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex flex-grow justify-center"
                                                >
                                                    <div className="px-2 w-full mx-1 my-1 py-1 text-center border-4 rounded-xl border-ad-blue bg-transparent uppercase font-bold text-md">
                                                        {tech}
                                                    </div>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 lg:w-1/3 flex justify-center md:justify-end">
                                    <Image
                                        className="object-cover w-3/4 md:w-10/12 rounded-xl sm:rounded-2xl shadow-glow"
                                        src={project.photo}
                                        alt="project-photo"
                                        draggable={false}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="hidden sm:flex items-center">
                    <div className="hover:cursor-pointer m-4 md:mr-8 md:ml-6 lg:m-8 p-2 text-ad-blue hover:text-white duration-200" onClick={handleRightClick}>{arrow_right}</div>
                </div>

            </div>
            <div className="flex flex-row justify-center space-x-4">
                {projects.map((_, idx) => (
                    <div
                        key={idx}
                        className={`rounded-full size-4 hover:cursor-pointer duration-200 ${idx == pastProjectIndex ? "bg-ad-blue" : "bg-white"}`}
                        onClick={(e) => handleDotClick(idx)}
                    />
                ))}
            </div>
        </div>
    );
};

export default PastProjects;