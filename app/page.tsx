import Image from "next/image";
import { text } from "stream/consumers";

export default function () {
  return (
    <div>
      <div className="bg-zinc-900 pl-8 pr-8 text-xl py-1.5 pt-3 my-24 text-wrap text-white md:text-orange sm:text-green lg:text-yellow">
        <h1>Leo is the greatest programmer existing on the planet today </h1>
      </div>
      <div className="ml-8 mr-8 text-xl text-pink"> 
        <h2>Leo is the next greatest being to ever exist</h2>
          <p className="tracking-tight hover:tracking-wide">The quick brown fox ...</p>
          <p className="tracking-tight hover:tracking-wide">The quick brown fox ...</p>
          <p className="tracking-tight hover:tracking-wide">The quick brown fox ...</p>
      </div>
    </div>
  )
}
