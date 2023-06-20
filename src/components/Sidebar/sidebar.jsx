

export default function Sidebar() {

     return (
          <div className="text-center pt-20 pb-4 text-xs">
               <ul className="space-y-2 font-semibold">
                    <li><button onClick={() => smoothScroll("hero")} className="relative h-full py-2 px-1 uppercase after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-sky-400">home</button></li>
                    <li><button onClick={() => smoothScroll("about")} className="relative h-full py-2 px-1 uppercase after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-sky-400 hover:after:w-full sl-animated-xl">about us</button></li>
                    <li><button onClick={() => smoothScroll("tokenomics")} className="relative h-full py-2 px-1 uppercase after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-sky-400 hover:after:w-full sl-animated-xl">tokenomics</button></li>
                    <li><button onClick={() => smoothScroll("roadmap")} className="relative h-full py-2 px-1 uppercase after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-sky-400 hover:after:w-full sl-animated-xl">roadmap</button></li>
                    <li><button onClick={() => smoothScroll("ecosystem")} className="relative h-full py-2 px-1 uppercase after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-sky-400 hover:after:w-full sl-animated-xl">ecosystem</button></li>
                    <li><button onClick={() => smoothScroll("team")} className="relative h-full py-2 px-1 uppercase after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-sky-400 hover:after:w-full sl-animated-xl">team</button></li>
                    <li><button onClick={() => smoothScroll("contact")} className="relative h-full py-2 px-1 uppercase after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-sky-400 hover:after:w-full sl-animated-xl">contact us</button></li>
               </ul>
               <button type="button" className="py-3 px-9 mt-2 border-2 border-sky-500 rounded-full uppercase font-semibold hover:border-sky-400 hover:text-sky-400 sl-animated-lg">Go to presale</button>
          </div>
     )
}