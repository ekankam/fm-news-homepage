import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SideMenu from "../components/SideMenu";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <main className="min-w-[343px] max-w-[1440px] mx-auto min-h-screen h-full bg-off-white px-4 relative lg:px-14">
      <Header onClick={() => setIsMenuOpen(true)} />
      <SideMenu isMenuOpen={isMenuOpen} onClick={() => setIsMenuOpen(false)} />
      <Hero />
    </main>
  );
}