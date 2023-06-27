import { useRef } from "react";
import contactBg from "../../assets/img/contact_bg.png"
import emailjs from '@emailjs/browser';

export default function Contact() {

     const form = useRef();

     const sendEmail = (e) => {
          e.preventDefault();
          emailjs.sendForm('service_3eq02g1', 'template_enw2fqf', form.current, 'eQUvglBoR_QuYmHhA')
               .then((result) => {
                    console.log("Name:",)
                    alert("Your message has been sent!")
               }, (error) => {
                    alert("Error, try again later.")
               });
     };
     return (
          <section id="contact" className="bg-gradient-to-b from-gray-950 to-gray-900 lg:py-24 md:py-16 py-10">
               <div className="sl-container">
                    <h2 className="wow fadeIn font-semibold lg:text-5xl md:text-3xl text-2xl text-center tracking-wider lg:mb-6 sm:mb-4 mb-2">Contact <span className="text-sky-400">Us</span></h2>
                    <p className="wow fadeIn text-center">We would love to hear from you! If you have any questions, feedback, or inquiries, please feel free to reach out to us. Our team is here to assist you and provide the information you need.</p>
                    <div className="flex justify-center gap-12 md:my-9 py-6">
                         <div className="wow fadeInUp group text-center md:space-y-4 space-y-2">
                              <div className="flex justify-center items-center rounded-full border border-gray-300/10 md:h-20 h-14 md:w-20 w-14 mx-auto group-hover:border-sky-400 sl-animated-xl">
                                   <span className="flex justify-center items-center rounded-full border-2 border-amber-500 md:h-14 h-10 md:w-14 w-10 bg-gray-300/10">
                                        <svg className="fill-amber-500 md:w-6 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
                                   </span>
                              </div>
                              <a href="mailto:eagleximpact@gmail.com"> Email: <span className="group-hover:text-sky-400 sl-animated-lg"> Eagleximpact@gmail.com</span></a>
                         </div>

                    </div>
                    <div className="bg-cover bg-center bg-no-repeat lg:p-20 md:p-9 p-6" style={{ backgroundImage: `url(${contactBg})` }}>
                         <form ref={form} onSubmit={sendEmail} className="wow slideInUp lg:space-y-9 md:space-y-6 space-y-3 text-center">
                              <div className="flex lg:gap-x-12 md:gap-x-9 gap-x-4">
                                   <input type="text" name="user_name" placeholder="Enter your Name" className="bg-gray-950/70 md:py-4 py-3 md:px-9 px-4 border border-gray-300/20 placeholder:text-gray-300 rounded-lg" />
                                   <input type="email" name="user_email" placeholder="Enter your Email" className="bg-gray-950/70 md:py-4 py-3 md:px-9 px-4 border border-gray-300/20 placeholder:text-gray-300 rounded-lg" />
                              </div>
                              <textarea name="message" placeholder="Enter your Message" className="md:h-40 h-20 bg-gray-950/70 md:py-4 py-3 md:px-9 px-4 border border-gray-300/20 placeholder:text-gray-300 rounded-lg" ></textarea>
                              <button type="submit" value="Send" className="py-3 lg:px-10 px-6 border-2 border-sky-500 rounded-full uppercase font-semibold hover:border-sky-400 hover:text-sky-400 sl-animated-lg">SEND MESSAGE</button>
                         </form>
                    </div>
                    <p className="wow fadeInDown text-center mt-6">Stay connected with us on social media to get the latest updates, news, and engage in conversations about social impact and blockchain technology. Follow us on Twitter, Facebook, and LinkedIn to join our vibrant community.<br />
                         For direct communication, you can also fill out the contact form below. Let us know how we can assist you, and we will get back to you as soon as possible.<br />
                         We value your input and look forward to connecting with you. Together, let's make a positive impact and create a better future.
                    </p>
               </div>
          </section>
     )
}
