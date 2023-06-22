import { useEffect, useState } from "react"
import logo from "../../assets/img/logo.png"

export default function header() {
     const [sidebar, setSidebar] = useState(false)

     const smoothScroll = (target) => {
          document
               .getElementById(`${target}`)
               .scrollIntoView({ behavior: "smooth" })
     }

     useEffect(() => {
          const mainNavLinks = document.querySelectorAll("nav ul li a");

          const handleScroll = () => {
               let fromTop = window.scrollY;

               mainNavLinks.forEach(link => {
                    let section = document.querySelector(link.hash);

                    if (
                         section.offsetTop <= fromTop + 160 &&
                         section.offsetTop + section.offsetHeight - 160 > fromTop
                    ) {
                         link.classList.add("after:w-full");
                    } else {
                         link.classList.remove("after:w-full");
                    }
               });
          };

          window.addEventListener('scroll', handleScroll);

          return () => {
               window.removeEventListener('scroll', handleScroll);
          };
     }, []);

     return (
          <header id="header" className="fixed lg:text-sm text-xs bg-gray-950 w-full z-50">
               <div className="flex items-center w-full justify-between lg:space-x-5 border-b-2 border-gray-700 xl:px-9 px-4">
                    <a href="/" className="w-12 py-4"><img src={logo} alt="logo" /></a>
                    <button className="lg:hidden block" onClick={() => sidebar ? setSidebar(false) : setSidebar(true)}><svg className="fill-white hover:fill-sky-400 w-6 sl-animated-lg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg></button>
                    <nav className="lg:block hidden">
                         <ul className="flex items-center xl:space-x-12 lg:space-x-6 space-x-4 font-semibold">
                              <li><a href="#hero" onClick={() => smoothScroll("hero")} className="relative h-full px-1 py-8 uppercase after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-sky-400 hover:after:w-full sl-animated-xl">home</a></li>
                              <li><a href="#about" onClick={() => smoothScroll("about")} className="relative h-full px-1 py-8 uppercase after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-sky-400 hover:after:w-full sl-animated-xl">about us</a></li>
                              <li><a href="#tokenomics" onClick={() => smoothScroll("tokenomics")} className="relative h-full px-1 py-8 uppercase after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-sky-400 hover:after:w-full sl-animated-xl">tokenomics</a></li>
                              <li><a href="#roadmap" onClick={() => smoothScroll("roadmap")} className="relative h-full px-1 py-8 uppercase after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-sky-400 hover:after:w-full sl-animated-xl">roadmap</a></li>
                              <li><a href="#ecosystem" onClick={() => smoothScroll("ecosystem")} className="relative h-full px-1 py-8 uppercase after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-sky-400 hover:after:w-full sl-animated-xl">ecosystem</a></li>
                              <li><a href="#team" onClick={() => smoothScroll("team")} className="relative h-full px-1 py-8 uppercase after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-sky-400 hover:after:w-full sl-animated-xl">team</a></li>
                              <li><a href="#contact" onClick={() => smoothScroll("contact")} className="relative h-full px-1 py-8 uppercase after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-sky-400 hover:after:w-full sl-animated-xl">contact us</a></li>
                         </ul>
                    </nav>
                    <button type="button" className="lg:block hidden py-3 lg:px-10 px-6 border-2 border-sky-500 rounded-full uppercase font-semibold hover:border-sky-400 hover:text-sky-400 sl-animated-lg">Go to presale</button>
               </div>
               <div className={`text-center sl-animated-xl ${sidebar ? "opacity-100 visible h-auto py-4" : "opacity-0 invisible h-0"}`}>
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
          </header>
     )
}