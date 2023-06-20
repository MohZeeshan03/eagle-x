

export default function Roadmap() {

     return (
          <section id="roadmap" className="bg-gradient-to-b from-gray-900 to-gray-950 lg:py-24 md:py-16 py-10">
               <div className="sl-container">
                    <h2 className="font-semibold lg:text-5xl md:text-3xl text-2xl text-center tracking-wider lg:mb-6 sm:mb-4 mb-2">Road<span className="text-sky-400">map</span></h2>
                    <p className="text-center mb-6">At EAGLE-X, we are committed to driving the adoption of blockchain technology for social impact. Our roadmap outlines the key milestones on our journey towards creating positive change and empowering communities.</p>
                    {/* <ul className="text-center space-y-2">
                         <li>Project Conceptualization and Team Formation: <span className="font-semibold">Q3 2023</span></li>
                         <li><svg className="fill-sky-400 mx-auto h-6" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg></li>
                         <li>Research and Development (Phase 1):  <span className="font-semibold">Q3 2023 </span></li>
                         <li><svg className="fill-sky-400 mx-auto h-6" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg></li>
                         <li>Token Development and Smart Contract Creation:  <span className="font-semibold">Q4 2023</span></li>
                         <li><svg className="fill-sky-400 mx-auto h-6" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg></li>
                         <li>Marketing and Community Building (Phase 1):  <span className="font-semibold">Q3 and Q4 2023</span></li>
                         <li><svg className="fill-sky-400 mx-auto h-6" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg></li>
                         <li>Initial DEX Offering (Presale & Public Sale Series):  <span className="font-semibold">Q4 2023 - Q1 2024</span></li>
                         <li><svg className="fill-sky-400 mx-auto h-6" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg></li>
                         <li>Launch and Listing on Exchanges:  <span className="font-semibold">Q1 2024 </span></li>
                         <li><svg className="fill-sky-400 mx-auto h-6" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg></li>
                         <li>Establishment of EAGLE-X Impact Foundation (Nigeria Pilot Plan):  <span className="font-semibold">Q2 2024</span></li>
                         <li><svg className="fill-sky-400 mx-auto h-6" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg></li>
                         <li>Expansion to Impact Projects:  <span className="font-semibold">Q3 2024</span></li>
                         <li><svg className="fill-sky-400 mx-auto h-6" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg></li>
                         <li>Ecosystem Development and Strategic Partnerships (Phase 2):  <span className="font-semibold">Q4 2024 - Q1 2025</span></li>
                         <li><svg className="fill-sky-400 mx-auto h-6" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg></li>
                         <li>Research and Development (Phase 2):  <span className="font-semibold">Q3 2025</span></li>
                         <li><svg className="fill-sky-400 mx-auto h-6" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg></li>
                         <li>Africa Implementation Plan:  <span className="font-semibold">Q4 2025 - Q1 2026</span></li>
                    </ul> */}
                    <p className="text-center mt-9">Through our roadmap, we demonstrate our commitment to transparency, innovation, and creating sustainable social change. Each milestone brings us closer to our vision of leveraging blockchain technology to empower communities and foster positive social impact.</p>
               </div>
          </section>
     )
}