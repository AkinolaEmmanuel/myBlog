export default function Nav() {
  return (
    <div>
    <section className="flex justify-between items-center poppins">
    <h1 className="text-2xl font-bold">
      EmmanuelAkinola
    </h1>

    <ul className="flex text-xl transition-all">
        <li className="mx-10 hover:underline hover:text-blue-500">Home</li>
        <li className="mx-10 hover:underline hover:text-blue-500">Portfolio</li>
        <li className="mx-10 hover:underline hover:text-blue-500">Latest Articles</li>
        <li className="mx-10 hover:underline hover:text-blue-500">Twitter</li>
        <li className="mx-10 hover:underline hover:text-blue-500">Whatsapp</li>
    </ul>

    <div className="text-xl transition-all">
    <button className="p-3 mx-1 border-2 border-black hover:text-white hover:bg-black">Sign in</button>
    <button className="p-3 mx-1 border-2 border-black hover:text-white hover:bg-black">Create an account</button>
    </div> 
    </section>






    </div>
  )
}
