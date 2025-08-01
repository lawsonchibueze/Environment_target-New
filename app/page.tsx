import Hero from "./(pages)/components/Hero";
import HeroAbout from "./(pages)/components/HeroAbout";
import HeroCourses from "./(pages)/components/HeroCourses";
import HomeLayout from "./(pages)/layout";

export default function Home() {
  return (
    <HomeLayout>
      <Hero />
      <HeroAbout />
      <HeroCourses />
    </HomeLayout>
  );
}
