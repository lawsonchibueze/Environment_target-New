import CustomImage from "@/components/CustomImage";
import PageWrapper from "@/components/PageWrapper";
import { Atom } from "lucide-react";
import React from "react";

const ManagementIntro = () => {
  return (
    <PageWrapper wrap={true} className="relative py-10 md:py-16" title="intro">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Text Content */}
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            About EMT-CREED
          </p>

          <h1 className="text-3xl font-bold leading-tight text-base-color sm:text-4xl">
            Introduction
          </h1>

          <div className="mt-7 space-y-5 text-base leading-8 text-gray-600">
            <p>
              EMT-CREED is governed and managed by a management team and board
              of directors from diverse professional backgrounds and cultures,
              with specialized skills, competence, and expertise in knowledge
              management, knowledge communication, knowledge sharing, research
              support, project reporting, performance evaluation, training, and
              learning programme development.
            </p>

            <p>
              The management team and board of directors receive periodic
              advisory support in areas such as performance improvement,
              business development opportunities, strategic partnerships,
              research initiatives, climate change, environmental health and
              safety, and sustainable development.
            </p>

            <p>
              This advisory and consultancy role is appointed by the board for a
              renewable five-year term, subject to performance assessment and
              board approval.
            </p>
          </div>
        </div>

        {/* Logos */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:pt-12">
          <div className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex h-56 items-center justify-center overflow-hidden rounded-xl bg-gray-50 p-6">
              <CustomImage
                src="/images/second-logo.jpeg"
                alt="EMT-CREED new logo"
                className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
              />
            </div>

            <div className="mt-4">
              <p className="text-sm font-semibold text-base-color">New Logo</p>
              <p className="mt-1 text-sm text-gray-500">
                EMT-CREED’s current visual identity.
              </p>
            </div>
          </div>
          <div className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex h-56 items-center justify-center overflow-hidden rounded-xl bg-gray-50 p-6">
              <CustomImage
                src="/images/img-14.jpeg"
                alt="EMT-CREED old logo"
                className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
              />
            </div>

            <div className="mt-4">
              <p className="text-sm font-semibold text-base-color">
                Previous Logo
              </p>
              <p className="mt-1 text-sm text-gray-500">
                EMT-CREED’s former visual identity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ManagementIntro;
