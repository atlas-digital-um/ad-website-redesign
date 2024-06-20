"use client";

import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";
import groupPic from "/public/ad-group.jpg";
import bgStill from "/public/bg-still.jpg"
import { Typewriter } from "react-simple-typewriter";
import {
  typewriter,
  servicesShort as services,
  stats,
  whoWeAre,
  companyCloud
} from "./text";
import { ad_logo_stacked } from "./svg";

import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    const video = document.querySelector('.video') as HTMLVideoElement;
    if (video) {
      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise.then(() => {
          console.log('Autoplay started');
        }).catch(error => {
          // Autoplay was prevented. Show a button to let the user manually start playback.
          console.log('Autoplay prevented:', error);
        });
      }
    }
  }, []);

  const HomeHeader = () => (
    <div className="relative flex flex-col justify-center w-full overflow-hidden">
      <div className="h-[700px] overflow z-10">
        <video className="video object-cover h-[700px] w-full" loop muted playsInline preload="auto">
          <source src="/videos/even-darker.mp4" />
        </video>
      </div>

      <div className="absolute top-0 h-[700px] w-full overflow z-0" >
        <Image
          className="z-10 object-cover h-[700px] w-full"
          src={bgStill}
          alt="round background image"
          draggable={false}
          priority
          loading="eager"
        />
      </div>

      {/* Top Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-ad-dark via-ad-dark/10 to-transparent z-20" />

      {/* Content */}
      <div className="absolute mt-16 -top-1/4 px-16 inset-0 flex flex-col items-center justify-center z-30">
        {ad_logo_stacked}

      </div>

      <div className="absolute top-[365px] inset-x-0 px-16 flex flex-col items-center justify-center z-30">
        <div className="text-lg text-center">
          <Typewriter
            words={typewriter}
            loop={false}
            cursor={true}
            typeSpeed={50}
            deleteSpeed={25}
            delaySpeed={2500}
          />
        </div>
      </div>

      <div className="flex flex-row justify-center -mt-64 py-32 -mx-[3100px] h-64" >
        <div className="w-full h-[10000px] rounded-full bg-ad-dark z-30 shadow-blue"></div>
      </div>
    </div>
  );

  return (
    <main className="relative text-white font-kanit flex flex-col overflow-hidden -mt-16">
      <div className="">
        <HomeHeader />
      </div>
      <div className="-mt-1 w-full h-2 z-30 bg-ad-dark"></div>

      <div className="absolute ellipse-gradient w-[2000px] h-[1500px] top-[900px] -left-[1000px] rotate-[40deg]" />
      <div className="absolute ellipse-gradient w-[1500px] h-[2000px] top-[2000px] -right-[1000px] rotate-[60deg]" />

      <div className="space-y-36 px-12 lg:px-32 pb-36 bg-ad-dark pt-16">
        <div>
          <div className="aboutSection flex flex-col lg:flex-row lg:space-x-9">
            <div className="lg:w-1/2">
              <div className="aboutText flex flex-col justify-end lg:space-y-2">
                <h2 className="text-2xl font-bold pb-2 lg:pb-0 z-40">WHO WE ARE</h2>
                {whoWeAre.map(
                  (text, idx) => (
                    <div key={idx} className="z-40 pb-4 lg:pb-2">
                      {text}
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="lg:px-4 lg:basis-1/2 z-40 flex justify-end">
              <Image
                className="rounded-lg shadow-glow mt-8 lg:mt-0 object-cover"
                src={groupPic}
                alt="Group Picture"
                draggable={false}
              />
            </div>
          </div>
          <div className="numberSection pt-16 lg:pt-24 flex justify-center flex-wrap items-center gap-8 lg:gap-16">
            {stats.map((stat) => (
              <div key={stat.label} className="z-40">
                <div className="text-4xl font-bold text-center w-40">
                  <CountUp
                    start={0}
                    end={stat.stat}
                    suffix={stat.suffix}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                    scrollSpyDelay={50}
                  >
                    {({ countUpRef }) => <span ref={countUpRef} />}
                  </CountUp>
                </div>
                <p className="text-2xl font-bold text-ad-blue text-center uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="communitySection flex flex-col items-center space-y-12">
          <h2 className="text-2xl text-white font-bold z-40">OUR COMMUNITY</h2>
          <div className="z-40">
            <video
              className="rounded-2xl shadow-glow w-full bg-ad-dark bg-opacity-50"
              onContextMenu={(e) => e.preventDefault()}
              controls
            >
              <source src="/videos/hype-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="serviceSection flex flex-col items-center space-y-8">
          <h2 className="text-2xl text-white font-bold z-40">WHAT WE DO</h2>
          <div className="text-left text-md sm:w-2/3 lg:w-1/2 text-center text-white pb-8 z-40">
            Atlas Digital provides a wide range of services ranging from
            full-stack development to videography. A few type of projects
            we&apos;ve worked on in the past include the following.
          </div>
          <div className="flex flex-row flex-wrap justify-center items-center">
            {services.map((service, id) => (
              <div
                className="z-40 flex flex-row bg-ad-dark bg-opacity-50 rounded-xl justify-center items-center space-x-8 mb-5 p-8 ml-6 mr-6 shadow-glow"
                key={id}
              >
                {service.logo}
                <div className="w-36 text-lg">{service.name}</div>
              </div>
            ))}
          </div>
          <Link className='z-40' href="/clients#client-services">
            <button className="px-4 py-1 rounded-lg text-white font-bold w-40 bg-gradient-to-r from-[#052779] to-[#1DAFEC] hover:shadow-button duration-200">
              Learn More
            </button>
          </Link>
        </div>
        <div className="flex flex-col items-center pb-12">
          <div className="z-40 alumniSection space-y-4 shadow-glow rounded-3xl p-12 lg:p-24 bg-ad-dark bg-opacity-50">
            <h2 className="text-center text-2xl text-white font-bold lg:mb-8 -mt-4 py-4">
              WHERE WE HAVE BEEN
            </h2>
            <div className="flex flex-wrap items-center justify-evenly">
              {companyCloud.map((company, id) => (
                <div key={id} className="px-1 py-2 h-12 sm:h-16 lg:h-[72px] sm:px-4 flex items-center">{company}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
