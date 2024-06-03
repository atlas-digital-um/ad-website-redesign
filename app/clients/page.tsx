"use client";

import Image from "next/image";
import Link from "next/link";
import Dropdown from "./services";
import PastProjects from "./projects";
import Testimonial from "../testimonial";
import CountUp from "react-countup";

import {
  exampleProjects,
  pastProjects,
  servicesLong as services,
  clientTestimonials
} from "../text"


export default function Clients() {
  return (
    <main className="relative flex flex-col text-white font-kanit pb-36 bg-ad-dark overflow-hidden">

      <div className="absolute ellipse-gradient w-[1500px] h-[2000px] -top-[200px] -right-[1000px] rotate-[60deg]" />
      <div className="absolute w-full h-full overflow-hidden">
        <div className="absolute ellipse-gradient w-[2000px] h-[1800px] top-[1800px] -left-[1000px] rotate-[40deg]" />
      </div>

      <div className="space-y-36 z-40 pt-12 px-12 sm:px-20 lg:px-32 ">
        {/* CLIENTS DIV */}
        <div className="flex flex-col justify-center items-center space-y-8">
          <h1 className="text-4xl sm:text-6xl mb-5 font-kanit font-bold uppercase ">
            Clients
          </h1>
          <div className="flex flex-col-reverse sm:flex-row -mt-16 items-center justify-center sm:space-x-8">
            <div className="flex flex-col sm:w-1/2 text-center sm:text-left">
              <h2 className="text-3xl py-4 font-bold uppercase pt-8 sm:pt-0">Our Work</h2>
              <p className="w-full">
                Our consultants bring a wealth of experience in developing a wide
                range of personalized projects. From crafting innovative mobile
                apps and elegant websites to implementing powerful AI solutions,
                we are dedicated to delivering exceptional results tailored to our
                clients&apos; needs.
              </p>
            </div>
            <div className="flex flex-col rounded-full p-8 shadow-glow items-center bg-[#131B31] justify-center w-48 h-48">

              <div className="text-6xl font-bold">
                <CountUp
                  start={0}
                  end={20}
                  suffix="+"
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                >
                  {({ countUpRef }) => <span ref={countUpRef} />}
                </CountUp>
              </div>
              <div className="font-bold text-ad-blue uppercase text-center">
                clients served
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full md:w-4/5">
            {exampleProjects.map((project, id) => (
              <div key={id} className="flex justify-center items-center h-32 w-32">
                <Image
                  className="rounded sm:rounded-2xl shadow-glow w-4/5"
                  src={project}
                  alt="example client projects"
                  draggable={false}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-row"></div>

          <div className="h-px bg-ad-blue w-full" />
        </div>

        {/* PAST PROJECTS DIV */}

        <div className="space-y-16">
          <div className="text-3xl font-bold uppercase text-center">Past Projects</div>
          <PastProjects projects={pastProjects} />
        </div>

        {/* OUR SERVICES DIV */}
        <div className="flex flex-col justify-center items-center space-y-16">
          <div id="services" className="text-3xl font-bold uppercase pt-28 -mt-28">Our Services</div>
          <div className="flex flex-col lg:flex-row justify-center sm:w-5/6 lg:w-full space-y-8 lg:space-y-0 lg:space-x-8">
            <div className="flex flex-col space-y-8 lg:w-1/2">
              {services.slice(0, 3).map((service, index) => {
                return <Dropdown key={index} serviceinfo={service} />;
              })}
            </div>
            <div className="flex flex-col space-y-8 lg:w-1/2">
              {services.slice(3, 6).map((service, index) => {
                return <Dropdown key={index} serviceinfo={service} />;
              })}
            </div>
          </div>
        </div>

        {/* CLIENT TESTIMONIALS DIV */}
        <div className="space-y-16">
          <div className="text-3xl font-bold uppercase text-center">Client Testimonials</div>
          <Testimonial testimonials={clientTestimonials} height={'short'} circle={false} />
        </div>

        {/* INTERESTED SECTION DIV */}
        <div className="scroll-mt-20 flex flex-col items-center md:items-start md:px-16 lg:px-24 pb-12">
          <h2 id="contact" className="text-3xl py-4 font-bold uppercase pt-28 -mt-28">Interested?</h2>
          <h3 className="text-norm py-4 w-60 text-center md:text-left md:w-auto">
            {" "}
            Shoot us an email and we’d love to discuss details further.
          </h3>
          <Link href="mailto:ad-eboard@umich.edu">
            <button className="px-4 py-2 rounded-lg text-white font-bold w-40 bg-gradient-to-r from-[#052779] to-[#1DAFEC] hover:shadow-button duration-200">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

    </main>
  );
}
