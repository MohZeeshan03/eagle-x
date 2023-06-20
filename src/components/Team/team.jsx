import team from "../../assets/img/team.png";
import teamFemale from "../../assets/img/team-female.png";

export default function Team() {

     return (
          <section id="team" className="bg-gradient-to-b from-gray-900 to-gray-950 lg:py-24 md:py-16 py-10">
               <div className="sl-container">
                    <h2 className="font-semibold lg:text-5xl md:text-3xl text-2xl text-center tracking-wider lg:mb-6 sm:mb-4 mb-2">Meet <span className="text-sky-400">Team</span></h2>
                    <p className="text-center lg:mb-12 md:mb-9 mb-6">EAGLE-X Impact is a Houston TX based digital asset development and management platform that focuses on leveraging the power of blockchain technology for social impact, especially in the delivery of targeted replicable aid (TRA). Our singular goal is to continually innovate methods of harnessing, tokenizing, and monetizing human capacity for kindness and charity. We are developing new initiatives to crowdfund social impact that will address certain aspects of human suffering and alleviate poverty in Africa and globally.</p>
                    <div className="flex flex-wrap">
                         <div className="md:w-1/2 w-full px-4 text-center md:space-y-3 space-y-2 mb-6">
                              <img className="w-24 h-24 rounded-full mx-auto" src={team} alt="team" />
                              <h3 className="font-medium text-sm">Founder & CEO</h3>
                              <h4 className="text-sky-400 font-semibold tracking-wider md:text-xl text-lg">Oladipupo John Akintoye</h4>
                              <p className="text-justify">is a Certified and Registered Radiologic Technologist (RT) with an immense passion for compassionate capitalism. He is driven by his love of humanitarianism and philanthropy combined with an appreciation for applied technology to address issues of human suffering and need, especially in Africa. He envisions the effective usage of nascent technologies to alleviate said suffering.</p>
                         </div>
                         <div className="md:w-1/2 w-full px-4 text-center md:space-y-3 space-y-2 mb-6">
                              <img className="w-24 h-24 rounded-full mx-auto" src={team} alt="team" />
                              <h3 className="font-medium text-sm">Chief Technology Officer</h3>
                              <h4 className="text-sky-400 font-semibold tracking-wider md:text-xl text-lg">Sunday Adebayo</h4>
                              <p className="text-justify">is a detail-oriented Project Engineer with years of experience in the industry. He is focused on directing the design, development, and implementation of the EAGLE-X blockchain environment.</p>
                         </div>
                         <div className="md:w-1/2 w-full px-4 text-center md:space-y-3 space-y-2 mb-6">
                              <img className="w-24 h-24 rounded-full mx-auto" src={teamFemale} alt="team" />
                              <h3 className="font-medium text-sm">Chief Marketing Officer</h3>
                              <h4 className="text-sky-400 font-semibold tracking-wider md:text-xl text-lg">Semira Kuku</h4>
                              <p className="text-justify">is a versatile and highly driven Product Manager whose expertise in business development, branding, and marketing facilitates the company’s social engagement and responsibility. She is in charge of ensuring that our initiatives are of the highest quality by public and governmental standards.</p>
                         </div>
                         <div className="md:w-1/2 w-full px-4 text-center md:space-y-3 space-y-2 mb-6">
                              <img className="w-24 h-24 rounded-full mx-auto" src={teamFemale} alt="team" />
                              <h3 className="font-medium text-sm">Chief Financial Officer</h3>
                              <h4 className="text-sky-400 font-semibold tracking-wider md:text-xl text-lg">Esther Akintoye</h4>
                              <p className="text-justify">leverages her MBA in Organizational Leadership and Change to ensure that our company’s financial goals and health are fully optimized. Applying her background in economics, finance, data analysis, and continuous quality improvement to EAGLE-X Impact’s operations helps to usher our company to the next level in social impact engineering.</p>
                         </div>
                    </div>
                    <p className="text-center md:mt-9 mt-6">Our Commitment to Social Impact: At EAGLE-X, social impact is at the core of everything we do. We believe in the power of collaboration and community-driven initiatives to create sustainable change. By partnering with local organizations, governments, and stakeholders, we ensure that our projects are aligned with the needs of the communities we serve. Our commitment to transparency, accountability, and responsible stewardship of resources sets us apart and ensures that every contribution has a tangible impact.</p>
               </div>
          </section>
     )
}