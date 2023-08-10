"use client"
import { Preahvihear } from "next/font/google";


const inter = Preahvihear({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

function  Hero(){
  return (
    <div className={inter.className}>
      <div className="flex flex-col mx-auto sm:mx-60">
        <h1 className="font-bold text-2xl my-2">Brief</h1>
        <div>
          unnamed is a self-taught, independent dev, educator, podcast host and
          research developer who focuses on cutting-edge tooling and
          infrastructure solutions. As a deep algorthimic thinker, unnamed
          occupies himself by automating niche and complex tasks to push the
          limits of what current exists in the market. Now he is currently
          building Degatchi fake portfolio (oh how mean of him).
        </div>
      </div>
      <div className="flex flex-col mx-auto sm:mx-60 my-2">
        <h1 className="font-bold text-2xl my-2">Podcasts</h1>
        <p className="hover:text-3xl hover:underline">
          <a href="https://www.youtube.com/watch?v=qfkCxRSTBts">podcast 01 : kaso best song </a>
        </p>
        <p className="hover:text-3xl hover:underline">
          <a href="https://www.youtube.com/watch?v=qfkCxRSTBts">podcast 02 : Are U serouis about This</a>
        </p>
      </div>
    </div>
  );
}

export default Hero;