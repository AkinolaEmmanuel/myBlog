export default function Newsletter() {
  return (
    <>
        <div className="flex flex-col xl:flex-row items-start lg:items-center justify-between gap-5 bg-black rounded-lg p-5 md:p-10 my-5">
        <div className="text-white">
        <h1 className="font-bold text-3xl">Subscribe to my Newsletter.</h1>
        <p className="text-xl font-light">You can get my latest writings and thoughts delivered to your mailbox.</p>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center flex-1 gap-y-3 w-full max-w-xl">
            <input type="email" placeholder="Enter your email" className="w-full p-2 rounded-md md:rounded-e-none border-2 border-black bg-slate-100 outline-none text-lg md:text-xl font-semibold text-black" />
            <input type="submit" value="SUBSCRIBE" className="px-5 py-1 md:py-2 rounded-md md:rounded-s-none border-2 border-s-0 border-black bg-slate-400 font-medium text-lg md:text-xl" />
        </div>
        </div>

    </>
  )
}
