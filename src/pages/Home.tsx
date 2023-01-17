import { useState } from "react";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <main className="min-w-[343px] w-full min-h-screen bg-off-white px-4 lg:px-[165px] relative">
      <Header onClick={() => setIsMenuOpen(true)} />
      <SideMenu isMenuOpen={isMenuOpen} onClick={() => setIsMenuOpen(false)} />
    </main>
  );
}