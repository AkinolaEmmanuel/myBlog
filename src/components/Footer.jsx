import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <div className=" bg-gray-900 text-white p-5 mt-5">
      <div className="flex flex-col items-center space-y-3">
        <h2 className="text-base md:text-lg font-semibold text-center max-w-4xl">
          Hey! Click the <a target="_blank" href="mailto:emmanuelakinola255@gmail.com?subject=Hi%20Emmanuel%2C%20I%20want%20a%20blog" className="text-blue-400 font-bold">Request a Blog</a> button to get a free, personalized blog link just like this one—or let me create something unique for you!
        </h2>
        <div className="flex items-center space-x-2">
          <span>Created with</span>
          <FaHeart className="text-red-500" />
          <span>by Emmanuel Akinola</span>
        </div>
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </div>
  );
}