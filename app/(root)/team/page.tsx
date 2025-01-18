"use client";

import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { TEAM_BY_ID_QUERY } from "@/sanity/lib/queries";
import { Team } from "@/sanity/types";
import TeamMember from "@/components/TeamMember";

const IndividualTeam = ({ params }: { params: { id: string } }) => {
  const [team, setTeam] = useState<Team | null>(null);
  const [selectedYear, setSelectedYear] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await client.fetch(TEAM_BY_ID_QUERY, { id: params.id });
      setTeam(result);
    };
    fetchData();
  }, [params.id]);

  if (!team) return <div>Loading...</div>;

  const handleYearFilter = (year: string) => {
    setSelectedYear((prevYear) => (prevYear === year ? "" : year));
  };

  // const filteredTeamMembers = team.members.filter((member) =>
  //   selectedYear ? member.year === selectedYear : true
  // );

  // const yearOptions = Array.from(new Set(team.members.map((member) => member.year)));

  // const teamMemberData = filteredTeamMembers.map((member) => (
  //   <TeamMember key={member._id} data={member} />
  // ));
  const teamMemberData = team.members.map((member) => (
    <TeamMember key={member._id} data={member} />
  ));

  return (
    <>
      <div className="relative w-screen h-auto bg-dark-grey pb-16">
        <div className="w-screen h-[40vh] bg-cover bg-wwd-banner mb-[5vh]"></div>
        <div className="absolute left-[16.7vw] top-[15.7vh] text-white text-[5.2vh] font-roboto-mono">
          <div>{team.title}</div>
          <div className="bg-[#00349F] w-[13.1vw] h-[6px]"></div>
        </div>
        <div className="px-[7.4vw] font-roboto-mono text-white text-[24px] font-[700] mb-[3vh]">
          <div className="mb-[1vh]">Description</div>
          <div className="bg-[#00349F] w-[8.1vw] h-[6px]"></div>
        </div>
        <div className="px-[9.5vw] font-roboto-mono text-white font-[400] text-[14px] mb-[5vh]">
          {team.description}
        </div>

        <div className="px-[7.4vw] font-roboto-mono text-white text-[20px] font-[700] mb-[3vh]">
          <div className="mb-[1vh]">Team Members</div>
          <div className="bg-[#00349F] w-[8.1vw] h-[6px]"></div>
        </div>
        <div className="px-[9.5vw]">
          {/* <div className="flex space-x-4 mb-[3vh]">
            {yearOptions.map((year) => (
              <button
                key={year}
                className={`px-4 py-2 rounded-md ${
                  selectedYear === year ? "bg-blue-500" : "bg-gray-500"
                } text-white`}
                onClick={() => handleYearFilter(year)}
              >
                {year}
              </button>
            ))}
          </div> */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {teamMemberData}
          </div>
        </div>
      </div>
    </>
  );
};

export default IndividualTeam;
