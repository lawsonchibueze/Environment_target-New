import CustomImage from "@/components/CustomImage";
import PageWrapper from "@/components/PageWrapper";
import { Atom } from "lucide-react";
import React from "react";

const ManagementIntro = () => {
  return (
    <PageWrapper wrap={true} className="relative " title="intro">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="">
          <p className="text-3xl font-bold text-base-color">Intro</p>
          <div className="mt-7">
            EMT-CREED is governed and managed by a management team and board of
            directors from diverse professional background and cultures and with
            specialized skills, competency and expertise in many fields such as
            knowledge management, knowledge communications and knowledge
            sharing, research support, project reporting, performance
            evaluation, training and learning Programme development amongst
            several others.
            <br /> <br />
            EMT-CREED management and board of directors receive periodic
            advisory support on the areas of performance improvement, business
            development opportunities, future synergy and collaborations, new
            research initiatives and innovations in climate change,
            environmental health and safety and sustainable development from a
            country based Principal Consultant and Advisor. <br /> <br /> This
            advisory and consultancy position is made through board appointment
            for a 5 – five years term which is renewable upon an assessment of
            performance by the board and following due satisfaction.
          </div>
        </div>
        <div className="overflow-hidden rounded-lg mt-7 lg:mt-14 h-[80%] w-full flex-center">
          <CustomImage src="/images/img-14.jpeg" />
        </div>
      </div>
    </PageWrapper>
  );
};

export default ManagementIntro;
