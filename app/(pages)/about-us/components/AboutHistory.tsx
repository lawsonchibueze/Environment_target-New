import CustomImage from "@/components/CustomImage";
import GridWrapper from "@/components/GridWrapper";
import PageWrapper from "@/components/PageWrapper";
import React from "react";

const AboutHistory = () => {
  return (
    <PageWrapper wrap={true} title="History & Profile">
      <GridWrapper validated={true} gap="10">
        <div className="">
          <p className="text-lg lg:text-2xl font-bold">
            Introductory Preamble:
          </p>
          <p className="mt-2">
            Environment & Millennium Targets LTD, (EMT) comprises a team of
            experienced consultants who render advisory and Training consultancy
            services in environment management, climate change, sustainable
            development and sustainable resource management. EMT offers research
            support and assistance, trainings and coaching for capacity building
            and professional development in environment, sustainability,
            environmental journalism, occupational health and safety and
            environmental litigation.
          </p>
          <p className="lg:text-2xl font-bold mt-4">Details:</p>
          <p className="mt-2">
            Environment & Millennium Targets Ltd. (EMT) is an Environment and
            Sustainable Development company registered and incorporated in
            Nigeria in July 2012 under the COMPANIES AND ALLIED MATTERS ACT 1990
            of the Corporate Affairs Commission Federal Republic of Nigeria. The
            company is limited by shares. EMT’s primary area of business concern
            is Training, Research, Development and Capacity building.
          </p>
        </div>
        <div className="">
          <p className="lg:text-2xl font-bold ">
            {" "}
            Our board of directors and team are 90% Nigerian.
          </p>

          <p className="mt-5">
            EMT has a vision to expand its operational services with 5% of its
            team/BOD coming from a mix of sub-Saharan Africa, and the remaining
            5% drawn from Europe, America, Caribbean and Asia. We draw our
            existence and pledge our commitment and allegiance to these
            historical key milestones and foundations already established by the
            United Nations through UNEP and world governments in collaboration
            with civil society’s and nongovernmental organizations (NGO’s) These
            texts, declarations and MEA’s which govern our existence, actions
            and corporate mission include inter alia: UN-1972 Stockholm
            declaration on human environment UN- 1992 Rio Declaration on
            Environment and Development UN – 1987 (Brundtland) world commission
            on Environment and Development Report – “Our common future” UN–2002
            Johannesburg Earth summit on sustainable development. UN – 2012
            Rio+20 World Conference on sustainable Development ‘’future we
            want’’ UN – 1992 Action plan for Development – “Agenda 21”
          </p>
        </div>
      </GridWrapper>
      <div className="rounded-lg my-10 lg:my-14 flex-center lg:h-[500px] overflow-hidden">
        <CustomImage src="/images/img-2.jpg" />
      </div>
    </PageWrapper>
  );
};

export default AboutHistory;
