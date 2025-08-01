import CustomImage from "@/components/CustomImage";
import GridWrapper from "@/components/GridWrapper";
import PageWrapper from "@/components/PageWrapper";
import React from "react";

const AboutSection = () => {
  return (
    <PageWrapper title="About Us">
      <div className="bg w-full py-40 bg-abt-bg bg-no-repeat bg-cover bg-center bg-fixed relative">
        <div className="bg-white bg-opacity-90 absolute h-full w-full top-0"></div>
        <GridWrapper validated={true} className="relative page-wrapper">
          <div className="">
            <div className="lg:h-[800px] overflow-hidden rounded-lg">
              <CustomImage
                src="/images/img-4.jpg"
                className="lg:w-[85%] rounded-lg"
              />
            </div>
          </div>
          <div className="">
            <div className="">
              <p className="mt-5 mb-4 font-bold lg:text-lg">About Us</p>

              <p>
                EMT offers research support and assistance, trainings and
                coaching for capacity building and professional development in
                environment, sustainability, environmental journalism,
                occupational health and safety and environmental litigation.
              </p>
              <p className="mt-5 font-bold lg:text-lg">Details:</p>
              <p className="mt-4">
                Environment & Millennium Targets Ltd. (EMT) is an Environment
                and Sustainable Development company registered and incorporated
                in Nigeria in July 2012 under the COMPANIES AND ALLIED MATTERS
                ACT 1990 of the Corporate Affairs Commission Federal Republic of
                Nigeria. The company is limited by shares. EMT’s primary area of
                business concern is Training, Research, Development and Capacity
                building.
              </p>
              <p className="mt-4">
                Our board of directors and team are 90% Nigerian. EMT has a
                vision to expand its operational services with 5% of its
                team/BOD coming from a mix of sub-Saharan Africa, and the
                remaining 5% drawn from Europe, America, Caribbean and Asia. We
                draw our existence and pledge our commitment and allegiance to
                these historical key milestones and foundations already
                established by the United Nations through UNEP and world
                governments in collaboration with civil society’s and
                nongovernmental organizations (NGO’s)
              </p>
              <p className="mt-4">
                These texts, declarations and MEA’s which govern our existence,
                actions and corporate mission include inter alia: UN-1972
                Stockholm declaration on human environment UN- 1992 Rio
                Declaration on Environment and Development UN – 1987
                (Brundtland) world commission on Environment and Development
                Report – “Our common future” UN–2002 Johannesburg Earth summit
                on sustainable development. UN – 2012 Rio+20 World Conference on
                sustainable Development ‘’future we want’’ UN – 1992 Action plan
                for Development – “Agenda 21”
              </p>
            </div>
          </div>
        </GridWrapper>
      </div>
    </PageWrapper>
  );
};

export default AboutSection;
