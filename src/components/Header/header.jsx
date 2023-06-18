import logo from "../../assets/img/logo.png"

export default function header() {

     return (
          <header className="fixed flex items-center justify-between w-full px-9 space-x-5 bg-gray-950 border-b-2 border-gray-700">
               <a href="/" className="w-12"><img src={logo} alt="logo" /></a>
               <nav>
                    <ul className="flex items-center space-x-12 uppercase font-semibold">
                         <li><a href="" className="relative h-full px-1 py-8 after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-sky-400">home</a></li>
                         <li><a href="" className="relative h-full px-1 py-8 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-sky-400 hover:after:w-full sl-animated-xl">about us</a></li>
                         <li><a href="" className="relative h-full px-1 py-8 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-sky-400 hover:after:w-full sl-animated-xl">sales</a></li>
                         <li><a href="" className="relative h-full px-1 py-8 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-sky-400 hover:after:w-full sl-animated-xl">roadmap</a></li>
                         <li><a href="" className="relative h-full px-1 py-8 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-sky-400 hover:after:w-full sl-animated-xl">blog</a></li>
                         <li><a href="" className="relative h-full px-1 py-8 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-sky-400 hover:after:w-full sl-animated-xl">contact us</a></li>
                    </ul>
               </nav>
               <button type="button" className="py-3 px-10 border-2 border-sky-500 rounded-full uppercase font-semibold hover:border-sky-400 hover:text-sky-400 sl-animated-lg">buy now</button>
          </header>
     )
}