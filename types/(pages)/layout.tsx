"use server";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="" suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
}
