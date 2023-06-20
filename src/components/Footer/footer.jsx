import logo from "../../assets/img/logo.png"

export default function Footer() {

     return (
          <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-400 text-base lg:py-10 md:pb-9 pb-4">
               <div className="sl-container">
                    <div className="flex flex-wrap items-start lg:py-14 md:py-9 py-6 border-t border-sky-200">
                         <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-4 md:space-y-6 space-y-4 md:text-left text-center">
                              <img className="w-20 md:mx-0 mx-auto" src={logo} alt="logo" />
                              <p>A new way to make the payments easy, reliable and 100% secure. claritatem itamconse quat. Exerci tationulla</p>
                              <ul className="flex flex-row items-center md:justify-start justify-center space-x-5">
                                   <li><a className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-sky-200 hover:bg-sky-400 hover:border-sky-400 sl-animated-xl" href=""><svg className="fill-white w-4" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" /></svg></a></li>
                                   <li><a className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-sky-200 hover:bg-sky-400 hover:border-sky-400 sl-animated-xl" href=""><svg className="fill-white w-4" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg></a></li>
                                   <li><a className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-sky-200 hover:bg-sky-400 hover:border-sky-400 sl-animated-xl" href=""><svg className="fill-white w-4" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg></a></li>
                                   <li><a className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-sky-200 hover:bg-sky-400 hover:border-sky-400 sl-animated-xl" href=""><svg className="fill-white w-4" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M424.7 299.8c2.9-14 4.7-28.9 4.7-43.8 0-113.5-91.9-205.3-205.3-205.3-14.9 0-29.7 1.7-43.8 4.7C161.3 40.7 137.7 32 112 32 50.2 32 0 82.2 0 144c0 25.7 8.7 49.3 23.3 68.2-2.9 14-4.7 28.9-4.7 43.8 0 113.5 91.9 205.3 205.3 205.3 14.9 0 29.7-1.7 43.8-4.7 19 14.6 42.6 23.3 68.2 23.3 61.8 0 112-50.2 112-112 .1-25.6-8.6-49.2-23.2-68.1zm-194.6 91.5c-65.6 0-120.5-29.2-120.5-65 0-16 9-30.6 29.5-30.6 31.2 0 34.1 44.9 88.1 44.9 25.7 0 42.3-11.4 42.3-26.3 0-18.7-16-21.6-42-28-62.5-15.4-117.8-22-117.8-87.2 0-59.2 58.6-81.1 109.1-81.1 55.1 0 110.8 21.9 110.8 55.4 0 16.9-11.4 31.8-30.3 31.8-28.3 0-29.2-33.5-75-33.5-25.7 0-42 7-42 22.5 0 19.8 20.8 21.8 69.1 33 41.4 9.3 90.7 26.8 90.7 77.6 0 59.1-57.1 86.5-112 86.5z" /></svg></a></li>
                              </ul>
                         </div>
                         <div className="lg:w-1/4 w-1/2 px-4 mb-4">
                              <h2 className="text-white lg:text-xl md:text-lg text-base uppercase font-semibold lg:my-6 md:my-4 my-2">useful links</h2>
                              <ul className="space-y-2">
                                   <li><a href="" className="hover:text-sky-400 sl-animated-lg">Contact us</a></li>
                                   <li><a href="" className="hover:text-sky-400 sl-animated-lg">How it Works</a></li>
                                   <li><a href="" className="hover:text-sky-400 sl-animated-lg">Create</a></li>
                                   <li><a href="" className="hover:text-sky-400 sl-animated-lg">Explore</a></li>
                                   <li><a href="" className="hover:text-sky-400 sl-animated-lg">Terms & Services</a></li>
                              </ul>
                         </div>
                         <div className="lg:w-1/4 w-1/2 px-4 mb-4">
                              <h2 className="text-white lg:text-xl md:text-lg text-base uppercase font-semibold lg:my-6 md:my-4 my-2">community</h2>
                              <ul className="space-y-2">
                                   <li><a href="" className="hover:text-sky-400 sl-animated-lg">Help Center</a></li>
                                   <li><a href="" className="hover:text-sky-400 sl-animated-lg">Partners</a></li>
                                   <li><a href="" className="hover:text-sky-400 sl-animated-lg">Suggestions</a></li>
                                   <li><a href="" className="hover:text-sky-400 sl-animated-lg">Blog</a></li>
                                   <li><a href="" className="hover:text-sky-400 sl-animated-lg">Newsletters</a></li>
                              </ul>
                         </div>
                         <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-4">
                              <h2 className="text-white lg:text-xl md:text-lg text-base uppercase font-semibold lg:my-6 md:my-4 my-2">subscribe newsletter</h2>
                              <p>Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo</p>
                              <form action="">
                                   <div className="relative overflow-hidden rounded-lg lg:mt-12 md:mt-9 mt-6">
                                        <input type="text" placeholder="info@gmail.com" className="w-full py-4 px-6 bg-gray-300/10" />
                                        <span className="absolute top-0 right-0 flex items-center justify-center h-full w-14 bg-sky-400"><svg className="fill-white w-5" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" /></svg></span>
                                   </div>
                              </form>
                         </div>
                    </div>
                    <div className="flex flex-wrap items-start md:justify-between justify-center lg:pt-10 md:pt-6 pt-4 border-t border-gray-900">
                         <p className="mb-2">Copyright © 2023. All Rights Reserved <span className="text-white">Eagle X</span></p>
                         <ul className="flex flex-row flex-wrap space-x-6 mb-2">
                              <li><a href="" className="hover:text-sky-200 sl-animated-lg">Terms and conditions</a></li>
                              <li><a href="" className="hover:text-sky-200 sl-animated-lg">Privacy policy</a></li>
                         </ul>
                    </div>
               </div>
          </footer>
     )
}