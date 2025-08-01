import React from "react";
import Programhero from "./components/Programhero";
import Program from "./components/Program";
import NewProgrammes from "./components/NewProgrammes";
import OtherProgram from "./components/OtherProgram";
import Note from "./components/Note";

const page = () => {
  return (
    <div>
      <Programhero />
      <Program />
      <NewProgrammes />
      <OtherProgram />
      <Note />
    </div>
  );
};

export default page;
