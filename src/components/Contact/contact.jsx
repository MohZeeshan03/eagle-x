

export default function Contact() {

     return (
          <section id="contact" className="bg-gradient-to-b from-gray-950 to-gray-900 py-24">
               <div className="sl-container">
                    <h2 className="font-semibold text-5xl text-center tracking-wider mb-6">Contact <span className="text-sky-400">Us</span></h2>
                    <p className="text-center mb-6">We would love to hear from you! If you have any questions, feedback, or inquiries, please feel free to reach out to us. Our team is here to assist you and provide the information you need.</p>
                    <div className="flex justify-center gap-9">
                         <a href="mailto:info@example.com"> Email: <span className="hover:text-sky-400 sl-animated-lg">xyz@gmail.com</span></a>
                         <a href="tel:+880-184633-5554"> Phone: <span className="hover:text-sky-400 sl-animated-lg">+880-184633-5554</span></a>
                    </div>
                    <p className="text-center mt-6">Stay connected with us on social media to get the latest updates, news, and engage in conversations about social impact and blockchain technology. Follow us on Twitter, Facebook, and LinkedIn to join our vibrant community.<br />
                         For direct communication, you can also fill out the contact form below. Let us know how we can assist you, and we will get back to you as soon as possible.<br />
                         We value your input and look forward to connecting with you. Together, let's make a positive impact and create a better future.
                    </p>
               </div>
          </section>
     )
}