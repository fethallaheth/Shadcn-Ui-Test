import { Preahvihear } from "next/font/google";
import { ModeToggle } from "@/components/theme";
import Hero from "./components/Hero";
import Footer from './components/Footer'
const inter = Preahvihear({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <div className="my-10 mx-4">
      <div className={inter.className}>
        <h1 className=" text-center ">Unnamedeth.lens</h1>
      </div>
      <div className="flex justify-end m-3">
        <ModeToggle />
      </div>
      <Hero  />
      <Footer/>
    </div>
  );
}
