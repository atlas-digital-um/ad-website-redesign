"use client";

import Link from "next/link";
import Question from "./question";
import Testimonial from "../testimonial";
import MemberExperience from "./experience";

import { event_complete, event_future } from "../svg";
import {
  semesterlyGettaway,
  professionalDevelopment,
  mentorship,
  applicationPortal,
  faqs,
  memberTestimonials as testimonials,
  recruitmentEvents as events,
  currentlyRecruiting as recruiting,
  notRecruitingText
} from "../text";
import { useEffect, useState } from "react";


export default function Apply() {

  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    setCurrentDate(new Date());
  }, []);

  const Timeline = () => {
    const timelines = [];

    const repeats = Math.floor((events.length - 1) / 4) + 1

    for (let i = 0; i < repeats; i++) {
      const beg = 4 * i;
      const end = 4 * i + 4
      const last = events.length - 1
      timelines.push(
        <div key={i} className="flex flex-col md:flex-row gap-8 md:gap-28 lg:gap-44 my-8 md:my-12 justify-center w-full">
          {events.slice(beg, end).map((event, id) => {
            let showInfo = true;
            if (event['location'] == 'By Invite Only') { showInfo = false; }

            return (
              <div key={id + 4 * i} className="relative flex flex-col items-center md:w-20">
                {/* Horizontal event icon */}
                <div className="hidden md:flex my-4 w-20 h-20 shadow-glow rounded-full">
                  {(currentDate < event['date'] ? event_future : event_complete)}
                </div>
                <div className="flex flex-row md:flex-col w-full md:w-auto justify-center space-x-8 sm:space-x-20 md:space-x-0">

                  {/* Vertical event icon */}
                  <div className={`md:hidden w-8 h-8 rounded-full shadow-glow  ${currentDate < event['date'] ? 'border-4 border-[#313131]' : 'bg-ad-blue'}`} />

                  {/* Event information */}
                  <div className="w-44 md:w-auto flex-justify whitespace-nowrap">
                    <div className="font-bold mb-2 text-lg md:text-center">{event['name']}</div>
                    <div className="md:text-center md:text-sm lg:text-base">{event['date'].toLocaleDateString('en-US',
                      { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</div>
                    {showInfo && <div className="md:text-center md:text-sm lg:text-base">{event['time']}</div>}
                    <div className="md:text-center md:text-sm lg:text-base">{event['location']}</div>
                  </div>

                  {/* Vertical timeline bar */}
                  {(id + 4 * i !== last) && (
                    <div className={`md:hidden absolute top-8 z-40 -translate-x-[120px] sm:-translate-x-[168px] h-[109px] w-1 
                        ${currentDate > event['date'] && currentDate < events[id + 4 * i + 1]['date'] ?
                        'bg-gradient-to-b from-ad-blue via-[#052779] to-[#313131]' :
                        currentDate > event['date'] ? 'bg-ad-blue' : 'bg-[#313131]'}`}></div>
                  )}

                </div>

                {/* Horizontal timeline bar */}
                {(id !== 3 && id + 4 * i !== last) && (
                  <div
                    className={`absolute top-[54px] left-full 
                    ${currentDate > event['date'] && currentDate < events[id + 4 * i + 1]['date'] ?
                        'bg-gradient-to-r from-ad-blue via-ad-dark-blue to-[#313131]' :
                        currentDate > event['date'] ? 'bg-ad-blue' : 'bg-[#313131]'} 
                        lg:w-44 w-28 h-1 hidden md:flex`}></div>
                )}

                {(id === 3 && id + 4 * i !== last) && (
                  <div
                    className={`absolute top-[54px] left-full 
                    ${currentDate > event['date'] && currentDate < events[id + 4 * i + 1]['date'] ?
                        'bg-gradient-to-r from-ad-blue via-ad-dark-blue to-transparent' :
                        currentDate > event['date'] ? 'bg-gradient-to-r from-ad-blue to-transparent' :
                          'bg-gradient-to-r from-[#313131] to-transparent'} 
                        lg:w-20 w-12 h-1 hidden md:flex`}></div>
                )}
                {(id === 0 && i !== 0) && (
                  <div
                    className={`absolute top-[54px] left-full 
                    ${currentDate > event['date'] ? 'bg-gradient-to-r from-transparent to-ad-blue' :
                        'bg-gradient-to-r from-transparent to-[#313131]'} 
                        lg:w-20 w-12 -ml-32 lg:-ml-40 h-1 hidden md:flex`}></div>
                )}
              </div>

            );
          })
          }
        </div >
      );
    }

    return (
      <div>{timelines}</div>
    );
  };

  return (
    <main className="relative text-white font-kanit flex flex-col overflow-hidden bg-ad-dark">

      <div className="absolute ellipse-gradient w-[1500px] h-[2000px] -top-[200px] -right-[1000px] rotate-[60deg]" />
      <div className="absolute ellipse-gradient w-[2000px] h-[1800px] top-[1800px] -left-[1000px] rotate-[40deg]" />
      <div className="absolute ellipse-gradient w-[1500px] h-[2000px] top-[3000px] -right-[1000px] rotate-[75deg]" />

      <div className="space-y-36 px-12 sm:px-20 lg:px-32 py-12 z-30">
        {/* title section */}
        <div className="flex-col justify-center text-center space-y-10 sm:space-y-20 lg:space-y-30 mb-8">
          <div className="z-40 text-4xl sm:text-6xl mb-5 font-kanit font-bold uppercase text-center">
            Prospective Members
          </div>
          <div className={`mt-5 ${recruiting ? '' : 'hidden'}`}>
            <h2 className="text-2xl lg:text-3xl py-4 font-bold uppercase">
              Application Deadline
            </h2>
            <h2 className="text-3xl lg:text-5xl text-ad-blue py-4 font-bold uppercase">
              {events.map((event, id) => (
                <div key={id} className={`${event['name'] === 'Application Due' ? '' : 'hidden'}`}>
                  {event['date'].toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </div>
              ))}
            </h2>
          </div>
          <div className={`${recruiting ? '' : 'hidden'}`}>
            <Link className="" href={applicationPortal} target="_blank">
              <button className="bg-ad-blue px-8 py-4 rounded-lg text-white font-bold w-50 bg-gradient-to-r from-[#052779] to-[#1DAFEC] hover:shadow-button duration-200">
                Application Portal
              </button>
            </Link>
          </div>
          <div className={`flex justify-center pt-8 sm:pt-4 ${recruiting ? 'hidden' : ''}`}>
            <div className="sm:w-4/5 md:w-2/3 lg:w-1/2 space-y-8">
              <div className="hidden h-1 w-full bg-white/50" />
              <div>{notRecruitingText}</div>
              <div className="hidden h-1 w-full bg-white/50" />
            </div>
          </div>
        </div>
        {/* recruiting timeline */}
        <div className={`${recruiting ? '' : 'hidden'}`}>
          <Timeline />
        </div>

        {/* Member experiences */}
        <div className="space-y-16">
          <div className="text-3xl font-bold uppercase text-center">
            Member Experience
          </div>
          <MemberExperience experience={semesterlyGettaway} />
          <MemberExperience experience={professionalDevelopment} />
          <MemberExperience experience={mentorship} />
        </div>


        {/* Member testimonials */}
        <div className="space-y-16">
          <div className="text-3xl font-bold uppercase text-center">Member Testimonials</div>
          <Testimonial testimonials={testimonials} height={'tall'} circle={true} />
        </div>


        {/* FAQ section */}
        <div className="flex flex-col mb-8">
          <h2 className="text-3xl font-bold uppercase mb-8 text-center">
            FAQ
          </h2>
          <div className="flex flex-col space-y-6 pb-32">
            {faqs.map((faq, idx) => (
              <Question key={idx} faq={faq} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
