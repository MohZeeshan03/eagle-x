import logo from "../../assets/img/logo.png"

export default function Footer() {

     const scrollTopSmooth = () => {
          window.scrollTo({
               top: 0,
               left: 0,
               behavior: "smooth",
          })
     }

     return (
          <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-400 text-base lg:py-10 md:pb-9 pb-4">
               <div className="sl-container">
                    <button onClick={scrollTopSmooth} className="absolute cursor-pointer -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gray-700 z-50"><svg className="fill-sky-200 w-6 mx-auto hover:fill-sky-400 sl-animated-lg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" /></svg></button>
                    <div className="flex flex-wrap items-start justify-between lg:py-14 md:py-9 py-6 border-t border-gray-700">
                         <div className="wow slideInUp md:order-1 order-1 lg:w-1/4 md:w-2/5 w-full px-4 mb-4 md:space-y-6 space-y-4 md:text-left text-center">
                              <img className="w-20 md:mx-0 mx-auto" src={logo} alt="logo" />
                              <p>Empowering Communities Through Blockchain Technology</p>
                              <ul className="flex flex-row items-center md:justify-start justify-center space-x-5">
                                   <li><a href="mailto:eagleximpact@gmail.com" className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-sky-200 hover:bg-sky-400 hover:border-sky-400 sl-animated-xl"><svg className="fill-white w-4" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg></a></li>
                                   <li><a href="https://twitter.com/EaglexImpact" className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-sky-200 hover:bg-sky-400 hover:border-sky-400 sl-animated-xl"><svg className="fill-white w-4" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg></a></li>
                                   <li><a href="https://t.me/eagleXimpact" className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-sky-200 hover:bg-sky-400 hover:border-sky-400 sl-animated-xl"><svg className="fill-white w-4" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z" /></svg></a></li>
                              </ul>
                         </div>
                         <div className="wow slideInUp md:order-2 order-3 lg:w-1/4 md:w-1/5 w-full px-4 mb-4">
                              <h2 className="text-white lg:text-xl md:text-lg text-base uppercase font-semibold lg:my-6 md:my-4 my-2">useful links</h2>
                              <ul className="space-y-2">
                                   <li><a href="#contact" className="hover:text-sky-400 sl-animated-lg">Contact us</a></li>
                                   <li><a href="/EagleX-Whitepaper.pdf" className="hover:text-sky-400 sl-animated-lg">Whitepaper</a></li>
                                   <li><a href="/Disclaimer.pdf" className="hover:text-sky-400 sl-animated-lg">Disclaimer</a></li>
                                   <li><a href="/Data-Privacy-terms.pdf" className="hover:text-sky-400 sl-animated-lg">Terms & Services</a></li>
                              </ul>
                         </div>
                         <div className="wow slideInUp md:order-3 order-2 lg:w-1/4 md:w-2/5 w-full px-4 mb-4">
                              <h2 className="text-white lg:text-xl md:text-lg text-base uppercase font-semibold lg:my-6 md:my-4 my-2">subscribe newsletter</h2>
                              <p>Submit your Email for our NewsLetter</p>
                              <form action="">
                                   <div className="relative overflow-hidden rounded-lg lg:mt-12 md:mt-9 mt-6">
                                        <input type="text" placeholder="info@gmail.com" className="w-full py-4 px-6 bg-gray-300/10" />
                                        <span className="absolute top-0 right-0 flex items-center justify-center h-full w-14 bg-sky-400"><svg className="fill-white w-5" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" /></svg></span>
                                   </div>
                              </form>
                         </div>
                    </div>
                    <div className="wow slideInDown flex flex-wrap items-start md:justify-between justify-center lg:pt-10 md:pt-6 pt-4 border-t border-gray-900">
                         <p className="mb-2">Copyright © 2023. All Rights Reserved <span className="text-white">Eagle X</span></p>
                         <ul className="flex flex-row flex-wrap space-x-6 mb-2">
                              <li><a href="/Data-Privacy-terms.pdf" className="hover:text-sky-200 sl-animated-lg">Terms and conditions</a></li>
                              <li><a href="/Disclaimer.pdf" className="hover:text-sky-200 sl-animated-lg">Disclaimer</a></li>
                         </ul>
                    </div>
               </div>
          </footer>
     )
}