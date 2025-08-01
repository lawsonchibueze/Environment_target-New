import PageWrapper from "@/components/PageWrapper";
import React from "react";

const Note = () => {
  return (
    <PageWrapper title="Note" wrap={true}>
      <div className="flex-center">
        <p className="lg:w-1/2 text-center">
          Interested participants shall send a request email to course provider
          at: environmenttargets@yahoo.com together with attached enrollment
          form. Once the request email has been received, the course provider
          will send the course outline and other course information to the
          participant who shall make payment for the course fees at designated
          bank account. Thereafter the course link and access pass code shall be
          sent to the participant including soft copies of lecture notes and
          reference reading literature.
        </p>
      </div>
    </PageWrapper>
  );
};

export default Note;
