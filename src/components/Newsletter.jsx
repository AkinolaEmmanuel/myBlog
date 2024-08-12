export default function Newsletter() {
  return (
    <div>
        <div className="flex justify-between bg-black rounded-lg p-10">
        <div className="text-white">
        <h1 className="font-bold text-3xl">Subscribe to my Newsletter.</h1>
        <p className="text-xl font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eos?</p>
        </div>
        <div className="flex items-center">
            <input type="email" placeholder="Enter your email" size="35" className="px-5 py-2 rounded-s-md border-2 border-black bg-slate-100 outline-none text-xl font-semibold text-black" />
            <input type="submit" value="SUBSCRIBE" className="px-5 py-2 rounded-e-md border-2 border-s-0 border-black bg-slate-400 font-medium text-xl" />
        </div>
        </div>



    </div>
  )
}
