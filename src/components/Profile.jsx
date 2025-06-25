import { FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


export default function Profile() {
  return (
    <div id="profile" className="bg-black text-white rounded-md flex flex-col lg:flex-row items-start lg:items-center justify-around space-y-5 p-10">
        <div className="space-y-5">
            <h1 className="text-4xl font-bold">Hi There!</h1>
            <h2 className="text-2xl">   I am Emmanuel Akinola, a Software Engineer and a Writer.</h2>
            <p className="max-w-lg text-base text-justify">
                This is my blog. I created this as a place to share articles, proverbs, writings and thoughts of my life; It is my safe space. <br/>
                What you would find above is <span className="font-bold text-lg text-blue-500">my latest writing</span> and below is my library of articles that I have written. Please enjoy and share your thoughts.
            </p>
        </div>

        <div className="flex flex-col lg:items-center justify-around gap-5">
            <p className="text-lg lg:text-center italic">My Social Media Links;</p>
            <div className="flex items-center justify-center space-x-5">
            <a target="_blank" href="https://www.linkedin.com/in/emmanuel-tijesunimi-akinola-4a3897343">
            <FaLinkedin className="w-10 h-10"/>
            </a>
            <a target="_blank" href="http://x.com/akinolatijesu7">
            <FaTwitter className="w-10 h-10"/>
            </a>
            <a target="_blank" href="http://wa.me/07047548793">
            <FaWhatsapp className="w-10 h-10"/>
            </a>
            <a target="_blank" href="mailto:@emmanuelakinola255@gmail.com">
            <MdEmail className="w-10 h-10"/>
            </a>
            </div>
        </div> 
    </div>
  )
}
