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
        <div className="bg-fixed style=background-image: url(https://unsplash.com/photos/a-group-of-people-standing-next-to-each-other-4sBepYSWVEk)"></div>
        <p className="tracking-tight hover:tracking-wide">The quick brown fox ...</p>
        <p className="tracking-tight hover:tracking-wide">The quick brown fox ...</p>
        <p className="tracking-tight hover:tracking-wide">The quick brown fox ...</p>
      </div>
      <div className="text-5xl font-extrabold ...">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-white-500">
          Hello world
        </span>
      </div>
    </div>
  )
}
