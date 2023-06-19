import logo from "../../assets/img/logo.png"

export default function header() {
     const smoothScroll = (target) => {
          document
               .getElementById(`${target}`)
               .scrollIntoView({ behavior: "smooth" })
     }

     return (
          <header id="header" className="fixed flex items-center justify-between w-full px-9 space-x-5 bg-gray-950 border-b-2 border-gray-700 text-sm z-50">
               <a href="/" className="w-12"><img src={logo} alt="logo" /></a>
               <nav>
                    <ul className="flex items-center space-x-12 font-semibold">
                         <li><button onClick={() => smoothScroll("hero")} className="relative h-full px-1 py-8 uppercase after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-sky-400">home</button></li>
                         <li><button onClick={() => smoothScroll("about")} className="relative h-full px-1 py-8 uppercase after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-sky-400 hover:after:w-full sl-animated-xl">about us</button></li>
                         <li><button onClick={() => smoothScroll("tokenomics")} className="relative h-full px-1 py-8 uppercase after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-sky-400 hover:after:w-full sl-animated-xl">tokenomics</button></li>
                         <li><button onClick={() => smoothScroll("roadmap")} className="relative h-full px-1 py-8 uppercase after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-sky-400 hover:after:w-full sl-animated-xl">roadmap</button></li>
                         <li><button onClick={() => smoothScroll("ecosystem")} className="relative h-full px-1 py-8 uppercase after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-sky-400 hover:after:w-full sl-animated-xl">ecosystem</button></li>
                         <li><button onClick={() => smoothScroll("team")} className="relative h-full px-1 py-8 uppercase after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-sky-400 hover:after:w-full sl-animated-xl">team</button></li>
                         <li><button onClick={() => smoothScroll("contact")} className="relative h-full px-1 py-8 uppercase after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-sky-400 hover:after:w-full sl-animated-xl">contact us</button></li>
                    </ul>
               </nav>
               <button type="button" className="py-3 px-10 border-2 border-sky-500 rounded-full uppercase font-semibold hover:border-sky-400 hover:text-sky-400 sl-animated-lg">buy now</button>
          </header>
     )
}