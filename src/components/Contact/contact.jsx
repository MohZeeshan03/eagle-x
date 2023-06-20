import contactBg from "../../assets/img/contact_bg.png"

export default function Contact() {

     return (
          <section id="contact" className="bg-gradient-to-b from-gray-950 to-gray-900 lg:py-24 md:py-16 py-10">
               <div className="sl-container">
                    <h2 className="font-semibold lg:text-5xl md:text-3xl text-2xl text-center tracking-wider lg:mb-6 sm:mb-4 mb-2">Contact <span className="text-sky-400">Us</span></h2>
                    <p className="text-center">We would love to hear from you! If you have any questions, feedback, or inquiries, please feel free to reach out to us. Our team is here to assist you and provide the information you need.</p>
                    <div className="flex justify-center gap-12 md:my-9 py-6">
                         <div className="group text-center md:space-y-4 space-y-2">
                              <div className="flex justify-center items-center rounded-full border border-gray-300/10 md:h-20 h-14 md:w-20 w-14 mx-auto group-hover:border-sky-400 sl-animated-xl">
                                   <span className="flex justify-center items-center rounded-full border-2 border-amber-500 md:h-14 h-10 md:w-14 w-10 bg-gray-300/10">
                                        <svg className="fill-amber-500 md:w-6 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
                                   </span>
                              </div>
                              <a href="mailto:info@example.com"> Email: <span className="group-hover:text-sky-400 sl-animated-lg">xyz@gmail.com</span></a>
                         </div>
                         <div className="group text-center md:space-y-4 space-y-2">
                              <div className="flex justify-center items-center rounded-full border border-gray-300/10 md:h-20 h-14 md:w-20 w-14 mx-auto group-hover:border-sky-400 sl-animated-xl">
                                   <span className="flex justify-center items-center rounded-full border-2 border-pink-500 md:h-14 h-10 md:w-14 w-10 bg-gray-300/10">
                                        <svg className="fill-pink-500 md:w-6 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
                                   </span>
                              </div>
                              <a href="tel:+880-184633-5554"> Phone: <span className="group-hover:text-sky-400 sl-animated-lg">+880-184633-5554</span></a>
                         </div>
                    </div>
                    <div className="bg-cover bg-center bg-no-repeat lg:p-20 md:p-9 p-6" style={{ backgroundImage: `url(${contactBg})` }}>
                         <form className="lg:space-y-9 md:space-y-6 space-y-3 text-center">
                              <div className="flex lg:gap-x-12 md:gap-x-9 gap-x-4">
                                   <input type="text" placeholder="Enter your Name" className="bg-gray-950/70 md:py-4 py-3 md:px-9 px-4 border border-gray-300/20 placeholder:text-gray-300 rounded-lg" />
                                   <input type="email" placeholder="Enter your Email" className="bg-gray-950/70 md:py-4 py-3 md:px-9 px-4 border border-gray-300/20 placeholder:text-gray-300 rounded-lg" />
                              </div>
                              <textarea placeholder="Enter your Message" className="md:h-40 h-20 bg-gray-950/70 md:py-4 py-3 md:px-9 px-4 border border-gray-300/20 placeholder:text-gray-300 rounded-lg" ></textarea>
                              <button type="button" className="py-3 lg:px-10 px-6 border-2 border-sky-500 rounded-full uppercase font-semibold hover:border-sky-400 hover:text-sky-400 sl-animated-lg">SEND MESSAGE</button>
                         </form>
                    </div>
                    <p className="text-center mt-6">Stay connected with us on social media to get the latest updates, news, and engage in conversations about social impact and blockchain technology. Follow us on Twitter, Facebook, and LinkedIn to join our vibrant community.<br />
                         For direct communication, you can also fill out the contact form below. Let us know how we can assist you, and we will get back to you as soon as possible.<br />
                         We value your input and look forward to connecting with you. Together, let's make a positive impact and create a better future.
                    </p>
               </div>
          </section>
     )
}