import Link from "next/link";
import {
  footer_insta as insta,
  footer_linkedin as linkedin,
  ad_logo_long as logo
} from "./svg"
import { applicationPortal, currentlyRecruiting } from "./text";
import Created from "./created";

export default function Footer() {
  return (
    <main className="text-white font-kanit px-4 sm:px-32 py-12">
      <div className="flex flex-col-reverse lg:flex-row items-top justify-between mb-4">
        <div className="flex flex-col items-top space-y-4 items-center lg:items-start">
          <div className="flex space-x-4">
            {logo}
          </div>
          <div className="flex space-x-4 text-sm">
            <div
              className="text-ad-blue underline"
              style={{ whiteSpace: "nowrap" }}
            >
              <Link href="mailto:ad-eboard@umich.edu">ad-eboard@umich.edu</Link>
            </div>
            <div>|</div>
            <div style={{ whiteSpace: "nowrap" }}>Established 2019</div>
          </div>
          <div className="flex items-center space-x-4">
            <Link className="text-white hover:text-ad-blue duration-200" href="https://www.linkedin.com/company/atlas-digital-um" target="_blank">{linkedin}</Link>
            <Link className="text-white hover:text-ad-blue duration-200" href="https://www.instagram.com/atlasdigital_um/" target="_blank">{insta}</Link>
          </div>
        </div>

        <div className="mb-20 lg:mb-0 text-sm md:text-base">
          <div>
            <div className="flex justify-evenly sm:space-x-16 items-top">
              <div className="flex flex-col w-20 items-center lg:items-start">
                <div className="font-bold pb-4 uppercase">Our Team</div>
                <Link className="hover:text-ad-blue duration-200" href="/team#members">
                  Members
                </Link>
                <Link className="hover:text-ad-blue duration-200 pt-1" href="/team#alumni">
                  Alumni
                </Link>
              </div>
              <div className="flex flex-col w-20 items-center lg:items-start">
                <div className="font-bold pb-4 uppercase">Clients</div>
                <Link className="hover:text-ad-blue duration-200" href="/clients#services">
                  Services
                </Link>
                <Link className="hover:text-ad-blue duration-200 pt-1" href="/clients#contact">
                  Contact Us
                </Link>
              </div>
              <div className={`hidden ${currentlyRecruiting ? 'sm:flex' : '' } flex-col w-20 lg:w-28 items-center lg:items-start`}>
                <div className="font-bold pb-4 uppercase">Students</div>
                <Link href={applicationPortal} target="_blank">
                  <button className="bg-ad-blue w-24 lg:w-28 py-1 rounded-lg text-white font-bold bg-gradient-to-r from-[#052779] to-[#1DAFEC] hover:shadow-button duration-200">
                    Apply
                  </button>
                </Link>
              </div>
            </div>
            <div className={`${currentlyRecruiting ? 'sm:hidden' : 'hidden'} flex flex-col items-center pt-8`}>
              <Link href={applicationPortal} target="_blank">
                <button className="bg-ad-blue w-60 py-2 rounded-lg text-white font-bold bg-gradient-to-r from-[#052779] to-[#1DAFEC] hover:shadow-button duration-200">
                  Application Portal
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="cursor-default">
        <Created />
      </div>
    </main>
  );
}
