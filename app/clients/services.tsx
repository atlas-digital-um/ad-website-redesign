import { useState, useEffect, useRef } from "react";
import { arrow_down } from "../svg";

type ServiceInfo = {
  service: string;
  description: string;
  logo: JSX.Element;
};

const Dropdown = ({ serviceinfo }: { serviceinfo: ServiceInfo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [descriptionHeight, setDescriptionHeight] = useState(0);
  const service = serviceinfo.service;
  const description = serviceinfo.description;
  const logo = serviceinfo.logo;

  const descriptionRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const updateHeight = () => {
      if (descriptionRef.current) {
        setDescriptionHeight(descriptionRef.current.scrollHeight + 28);
      }
    };

    updateHeight();

    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);

  }, [description]);


  return (
    <div
      className="group flex flex-col bg-ad-dark bg-opacity-50 rounded-xl justify-center items-center w-full shadow-glow hover:cursor-pointer"
      onClick={toggleOpen}
    >
      <div className="px-8 pt-6 pb-4 flex flex-row items-center w-full space-x-8">
        <div className="flex flex-row items-center w-full space-x-8">
          <div className="w-12">{logo}</div>
          <div className="sm:text-xl font-bold sm:font-normal">{service}</div>
        </div>
        <div className={`transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180" : "rotate-0"
          }`}>
          <div className="text-ad-blue group-hover:text-white duration-200">{arrow_down}</div>
        </div>
      </div>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden w-full ${isOpen ? "opacity-100" : "opacity-0 "
          } overflow-hidden px-8`}
        style={{ height: isOpen ? `${descriptionHeight}px` : '8px' }}
      >
        <div ref={descriptionRef}>{description}</div>
      </div>
    </div>
  );
};

export default Dropdown;