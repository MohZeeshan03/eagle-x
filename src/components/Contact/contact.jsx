import contactBg from "../../assets/img/contact_bg.png"

export default function Contact() {

     return (
          <section id="contact" className="bg-gradient-to-b from-gray-950 to-gray-900 py-24">
               <div className="sl-container">
                    <h2 className="font-semibold text-5xl text-center tracking-wider mb-6">Contact <span className="text-sky-400">Us</span></h2>
                    <p className="text-center">We would love to hear from you! If you have any questions, feedback, or inquiries, please feel free to reach out to us. Our team is here to assist you and provide the information you need.</p>
                    <div className="flex justify-center gap-12 my-9">
                         <div className="group text-center space-y-4">
                              <div className="flex justify-center items-center rounded-full border border-gray-300/10 h-20 w-20 mx-auto group-hover:border-sky-400 sl-animated-xl">
                                   <span className="flex justify-center items-center rounded-full border-2 border-amber-500 h-14 w-14 bg-gray-300/10">
                                        <svg className="fill-amber-500 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
                                   </span>
                              </div>
                              <a href="mailto:info@example.com"> Email: <span className="group-hover:text-sky-400 sl-animated-lg">xyz@gmail.com</span></a>
                         </div>
                         <div className="group text-center space-y-4">
                              <div className="flex justify-center items-center rounded-full border border-gray-300/10 h-20 w-20 mx-auto group-hover:border-sky-400 sl-animated-xl">
                                   <span className="flex justify-center items-center rounded-full border-2 border-pink-500 h-14 w-14 bg-gray-300/10">
                                        <svg className="fill-pink-500 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
                                   </span>
                              </div>
                              <a href="tel:+880-184633-5554"> Phone: <span className="group-hover:text-sky-400 sl-animated-lg">+880-184633-5554</span></a>
                         </div>
                    </div>
                    <div className="bg-cover bg-center bg-no-repeat p-20" style={{ backgroundImage: `url(${contactBg})` }}>
                         <form className="space-y-9 text-center">
                              <div className="flex gap-x-12">
                                   <input type="text" placeholder="Enter your Name" className="bg-gray-950/70 py-4 px-9 border border-gray-300/20 placeholder:text-gray-300 rounded-lg" />
                                   <input type="email" placeholder="Enter your Email" className="bg-gray-950/70 py-4 px-9 border border-gray-300/20 placeholder:text-gray-300 rounded-lg" />
                              </div>
                              <textarea placeholder="Enter your Message" className="h-40 bg-gray-950/70 py-4 px-9 border border-gray-300/20 placeholder:text-gray-300 rounded-lg" ></textarea>
                              <button type="button" className="py-3 px-10 border-2 border-sky-500 rounded-full uppercase font-semibold hover:border-sky-400 hover:text-sky-400 sl-animated-lg">SEND MESSAGE</button>
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