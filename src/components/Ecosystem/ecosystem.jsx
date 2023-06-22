import chartBg from "../../assets/img/chart_bg.jpg"

export default function Ecosystem() {

     return (
          <section id="ecosystem" className="bg-center bg-no-repeat bg-fixed lg:py-24 md:py-16 py-10" style={{ backgroundImage: `url(${chartBg})` }}>
               <div className="sl-container">
                    <h2 className="wow fadeIn font-semibold lg:text-5xl md:text-3xl text-2xl text-center tracking-wider lg:mb-6 sm:mb-4 mb-2">Eco<span className="text-sky-400">system</span></h2>
                    <p className="wow fadeIn text-center lg:mb-12 md:mb-9 mb-6">Our ecosystem is built on the foundation of collaboration, impact measurement, and active community engagement. We believe in the power of partnerships, transparency in reporting, and the active involvement of individuals to drive meaningful change.</p>
                    <div className="space-y-4">
                         <div className="wow slideInLeft text-left">
                              <h3 className="text-sky-400 lg:text-2xl md:text-xl text-lg font-medium mb-2">● Partnerships and Collaborations</h3>
                              <p>We actively seek partnerships and collaborations with like-minded organizations, institutions, and individuals who share our vision for social impact. By joining forces, we can leverage our collective strengths, resources, and expertise to create even greater positive change. Through strategic partnerships, we aim to amplify our impact and expand our reach, driving innovation and sustainable solutions.</p>
                         </div>
                         <div className="wow slideInRight text-right">
                              <h3 className="text-sky-400 lg:text-2xl md:text-xl text-lg font-medium mb-2">● Social Impact Reports and Metrics of Social Returns </h3>
                              <p>Transparency and accountability are at the core of our approach. We provide comprehensive social impact reports that highlight the outcomes and achievements of our initiatives. Using metrics such as Targeted Replicable Aid (TRA), Impact Multiple of Money (IMM), and the Two-fold ROI, we showcase the tangible social returns generated through our projects. These reports allow stakeholders to see the direct impact of their contributions and inspire confidence in our mission.</p>
                         </div>
                         <div className="wow slideInLeft text-left">
                              <h3 className="text-sky-400 lg:text-2xl md:text-xl text-lg font-medium mb-2">● Donations and Volunteering Opportunities</h3>
                              <p>We believe that everyone has a role to play in creating positive change. We provide opportunities for individuals to make donations and contribute to our cause. Whether it's a financial contribution or a donation of time and skills through volunteering, every action counts. Together, we can make a difference in the lives of those in need and contribute to the betterment of communities.</p>
                         </div>
                         <div className="wow slideInRight text-right">
                              <h3 className="text-sky-400 lg:text-2xl md:text-xl text-lg font-medium mb-2">● Events and Campaigns </h3>
                              <p>We organize various events and campaigns to raise awareness, mobilize support, and engage our community. These events can include educational workshops, fundraising drives, impact awareness campaigns, and networking opportunities. By participating in our events and campaigns, individuals can connect with like-minded individuals, learn more about our initiatives, and contribute to our mission.</p>
                         </div>
                    </div>
                    <p className="wow fadeInDown text-center lg:mt-9 md:mt-7 mt-5">Our ecosystem is designed to foster collaboration, transparency, and active engagement. By being a part of the EAGLE-X community, you have the opportunity to make a real difference in the lives of others and contribute to sustainable social impact.</p>
               </div>
          </section>
     )
}