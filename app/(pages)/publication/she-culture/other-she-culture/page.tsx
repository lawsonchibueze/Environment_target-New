import React from "react";
import HeroOtherShe from "./components/HeroOtherShe";
import OtherSheList from "./components/OtherSheList";
import getJounal from "@/app/action/getJournal";

// export const dynamic = "force-dynamic";

const page = async () => {
  let journals: {
    id: string;
    category: string;
    upload: string;
    name: string;
  }[] = [];

  let test: {
    id: string;
    category: string;
    upload: string;
    name: string;
  }[] = [];

  // try {
  //   const journalz = await getJounal();
  //   journals = journalz.filter((j) => {
  //     return j.category.toLocaleUpperCase() === "OTHER SHE CULTURE";
  //   });
  // } catch (error) {
  //   console.log(error);
  // }

  try {
    const journalz = await getJounal();

    journals = journalz
      .filter((j) => j.category.toUpperCase() === "OTHER SHE CULTURE")
      .reverse();
  } catch (error) {
    console.log(error);
  }

  console.log("journals", journals);
  return (
    <div>
      {test.length > 0 && <p>{test[0].name}</p>}
      <HeroOtherShe />
      <OtherSheList journals={journals} />
    </div>
  );
};

export default page;
