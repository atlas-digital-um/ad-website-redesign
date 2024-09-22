
import Image from "next/image";
import Link from "next/link";
import teambg from "/public/team-background.jpg";
import { getTeam } from "../../lib/apiCalls";
import {
  team_website as website,
  team_linkedin as linkedin,
  team_github as github
} from "../svg";

type Member = {
  email: string;
  first: string;
  last: string;
  links: Array<string>;
  major: Array<string>;
  minor: Array<string>;
  number: string;
  pfpURL: string;
  position: string;
};

type Club = {
  analysts: Array<Member>;
  advisors: Array<Member>;
  managers: Array<Member>;
  board: Array<Member>;
  presvp: Array<Member>;
  alumni: Array<Member>;
};



const getProps = async () => {
  // Fetch data from firebase

  const members = await getTeam();
  // const storage = getStorage();

  var newPresVP = [];
  var newAnalysts = [];
  var newAdvisors = [];
  var newManagers = [];
  var newBoard = [];
  var newAlumni = [];

  const n = members?.length ? members.length : 0;
  for (let i = 0; i < n; i++) {
    let curMember = members ? members[i] : {};

    if (curMember.position == "Alumni" || (curMember.position != "Alumni" && curMember.pfpURL != "/pfpWhite.png")) {
      if (curMember.position === "Analyst") {
        newAnalysts.push(curMember as Member);
      } else if (curMember.position === "Senior Advisor" || curMember.position === undefined || curMember.position === "") {
        newAdvisors.push(curMember as Member);
      } else if (curMember.position === "Project Manager") {
        newManagers.push(curMember as Member);
      } else if (curMember.position === "President" || curMember.position === "Vice President") {
        newPresVP.unshift(curMember as Member);
      } else if (curMember.position === "Alumni") {
        newAlumni.push(curMember as Member);
      } else {
        newBoard.push(curMember as Member);
      }
    }
  }

  const atlas: Club = {
    analysts: newAnalysts,
    advisors: newAdvisors,
    managers: newManagers,
    board: newBoard,
    presvp: newPresVP,
    alumni: newAlumni,
  };

  return atlas;
};

const MemberLinks = ({ member }: { member: Member }) => {
  const renderLinks = () => {
    if (!member.links) {
      return null; // or any other fallback value or component
    }

    const hasLinkedIn = member.links.some((link) =>
      link.includes("linkedin.com")
    );
    const hasGitHub = member.links.some((link) => link.includes("github.com"));
    const hasWebsite = member.links.some(
      (link) => !link.includes("linkedin") && !link.includes("github")
    );

    const addPrefix = (url: string | undefined) => (url && url.indexOf('://') === -1) ? 'http://' + url : url;

    return (
      <div className="flex items-center space-x-3 pt-4">
        {hasWebsite && (
          <Link
            href={
              addPrefix(member.links.find(
                (link) => !link.includes("linkedin") && !link.includes("github")
              ))!
            }
            className="size-6 hover:text-ad-blue duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >{website}</Link>
        )}
        {hasLinkedIn && (
          <Link
            href={addPrefix(member.links.find((link) => link.includes("linkedin.com")))!}
            className="size-6 hover:text-ad-blue duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >{linkedin}</Link>
        )}
        {hasGitHub && (
          <Link
            href={addPrefix(member.links.find((link) => link.includes("github.com")))!}
            className="size-6 hover:text-ad-blue duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >{github}</Link>
        )}
      </div>
    );
  };

  return renderLinks();
};

export default async function Team() {
  const atlas = await getProps();

  const TeamHeader = () => (
    <div className="relative">
      <div className="relative flex justify-center w-full">
        <Image
          className="z-10 object-cover h-[700px] w-full"
          src={teambg}
          alt="Atlas Team Pic"
          draggable={false}
          priority
          loading="eager"

        />
        <div className="absolute top-0 left-0 bg-black w-full h-full opacity-30 z-20" />
      </div>

      {/* Top Gradient */}
      <div className="absolute top-0 left-0 w-full h-80 bg-gradient-to-b from-ad-dark z-20" />

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-ad-dark z-20" />

      {/*  Meet the Team Text  */}
      <div className="absolute -top-1/4 px-40 inset-0 flex flex-col items-center justify-center z-30">
        <div className="homeSection flex flex-col justify-center items-center w-vh h-screen -m-32 bg-cover bg-transparent bg-no-repeat bg-center">
          <div className="flex flex-shrink font-bold white text-center text-6xl sm:text-7xl uppercase z-40 ">
            Meet the Team
          </div>
        </div>
      </div>
    </div>
  );

  const MemberCard = ({ member, position }: { member: Member, position: string }) => (
    <div>
      <div className={`relative flex flex-col items-center rounded-lg overflow-hidden shadow-glow w-[300px] h-[330px] 
          ${(position === "analyst" || position === "advisor") ? "md:w-[240px] md:h-[265px]"
          : position === "presvp" ? "lg:w-[350px] lg:h-[375px]" : ""}`}>
        {(member.pfpURL !== '' && member.pfpURL !== undefined) ?
          <Image
            fill
            // loader={firebaseImageLoader}
            src={member.pfpURL}
            alt="PFP"
            style={{ objectFit: "cover", objectPosition: "center" }}
            draggable={false}
            sizes="50vw"
          /> :
          <div className="flex h-full items-center uppercase font-bold opacity-50">Photo Available Soon</div>
        }
      </div>

      <div className="mt-2 uppercase font-bold font-kanit text-xl">
        {member.first} {member.last}
      </div>
      {member.position !== "Analyst" &&
        member.position !== "Senior Advisor" &&
        member.position !== "Project Manager" && <div>{member.position}</div>}
      <div>
        <MemberLinks member={member} />
      </div>
    </div>
  );

  const AlumniMemberText = ({ alumni }: { alumni: Member }) => {

    let hasLinkedIn = false

    if (alumni.links) {
      hasLinkedIn = alumni.links.some((link) =>
        link.includes("linkedin.com")
      );
    }

    const addPrefix = (url: string | undefined) => (url && url.indexOf('://') === -1) ? 'http://' + url : url;

    return (
      <div className="w-full my-auto">
        {hasLinkedIn &&
          <a
            href={addPrefix(alumni.links.find((link) => link.includes("linkedin.com")))!}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ad-blue duration-200 flex justify-center text-center items-center"
          >
            {alumni.first} {alumni.last}
          </a>
        }
        {!hasLinkedIn &&
          <div className="flex justify-center text-center items-center"
          >
            {alumni.first} {alumni.last}
          </div>
        }
      </div>
    )
  };

  return (
    <main className="relative text-white font-kanit flex flex-col pb-36 bg-ad-dark">
      <div className="-mt-16"><TeamHeader /></div>
      <div className="px-12 md:px-32 pt-12 z-40 space-y-36">
        <div>
          <div id="members" className="font-bold white text-4xl text-center md:pl-4 uppercase md:text-left pt-28 -mt-28">
            Executive Board
          </div>
          <div className="bg-white h-1 w-full mt-1"></div>
          <div className="flex flex-col items-center space-y-8 lg:space-y-12 mt-10 w-full">
            <div className="flex flex-wrap gap-8 mt-12 justify-center w-full">
              {atlas.presvp.map((presvp, id) => {
                return <MemberCard key={id} member={presvp} position={"presvp"} />;
              })}
            </div>
            <div className="flex flex-wrap gap-8 mb-12 justify-center w-full">
              {atlas.board.map((eboard, id) => {
                return <MemberCard key={id} member={eboard} position={"eboard"} />;
              })}
            </div>
          </div>
        </div>
        <div>
          <div className="font-bold white text-4xl text-center md:pl-4 uppercase md:text-left ">
            Project Managers
          </div>
          <div className="bg-white h-1 w-full mt-1"></div>
          <div className="flex flex-col items-center space-y-12 mt-10 w-full">
            <div className="flex flex-wrap gap-8 mt-12 justify-center w-full">
              {atlas.managers.map((manager, id) => {
                return <MemberCard key={id} member={manager} position={"manager"} />;
              })}
            </div>
          </div>
        </div>
        <div>
          <div className="font-bold white text-4xl text-center md:pl-4 uppercase md:text-left ">
            Analysts
          </div>
          <div className="bg-white h-1 w-full mt-1"></div>
          <div className="flex flex-col items-center space-y-12 mt-10 w-full">
            <div className="flex flex-wrap gap-8 mt-12 justify-center w-full">
              {atlas.analysts.map((analyst, id) => {
                return <MemberCard key={id} member={analyst} position={"analyst"} />;
              })}
            </div>
          </div>
        </div>
        <div>
          <div className="font-bold white text-4xl text-center md:pl-4 uppercase md:text-left ">
            Senior Advisors
          </div>
          <div className="bg-white h-1 w-full mt-1"></div>
          <div className="flex flex-col items-center space-y-12 mt-10 w-full">
            <div className="flex flex-wrap gap-8 mt-12 justify-center w-full">
              {atlas.advisors.map((advisor, id) => {
                return <MemberCard key={id} member={advisor} position={"advisor"} />;
              })}
            </div>
          </div>
        </div>
        <div>
          <div id="alumni" className="font-bold white text-4xl text-center md:pl-4 uppercase md:text-left pt-28 -mt-28">
            Alumni
          </div>
          <div className="bg-white h-1 w-full mt-1"></div>
          <div className="flex flex-col items-center space-y-12 mt-10 w-full">
            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 justify-stretch">
              {/* <div className="flex flex-wrap gap-x-52 my-12 justify-center items-center border-2 w-full"> */}
              {atlas.alumni.map((alumni, id) => {
                return <AlumniMemberText key={id} alumni={alumni} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
