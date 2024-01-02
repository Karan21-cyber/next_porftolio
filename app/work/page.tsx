import React from "react";
import ProgramCards from "@/components/programs/program-card";
import { project_data } from "@/utils/Data/projectData";
import TransistionAnimation from "@/components/service/transistion";

export default function Work() {
  return (
    <>
      <TransistionAnimation title={"Work"} />
      <div className="programs-list w-full flex gap-6 flex-wrap justify-center ">
        {project_data?.map((item, index) => (
          <ProgramCards key={index} item={item} />
        ))}
      </div>
    </>
  );
}
