import chart from "../../assets/img/pie-chart.png"

export default function Tokenomics() {

     return (
          <section id="tokenomics" className="bg-gradient-to-b from-gray-950 to-gray-900 py-24">
               <div className="sl-container">
                    <div className="flex flex-wrap items-center">
                         <div className="w-1/2 px-9">
                              <img src={chart} alt="" />
                         </div>
                         <div className="w-1/2 pl-20">
                              <h2 className="font-semibold text-5xl tracking-wider mb-6">Token<span className="text-sky-400">omics</span></h2>
                              <p>The distribution of GLXE tokens is designed to ensure fairness and broad participation in the EAGLE-X ecosystem. The allocation shown in the chart.</p>
                         </div>
                         <div className="flex flex-wrap justify-center w-full my-9">
                              <div className="w-1/3 px-3 mb-9">
                                   <h3 className="text-sky-400 text-2xl font-medium mb-2">Token Burning Mechanism</h3>
                                   <p>Our mission is to bridge the gap in access to education and healthcare by leveraging blockchain technology. We envision a world where every child has equal opportunities to thrive and succeed, regardless of their background or circumstances.</p>
                              </div>
                              <div className="w-1/3 px-3 mb-9">
                                   <h3 className="text-sky-400 text-2xl font-medium mb-2">Staking and Rewards</h3>
                                   <p>Our mission is to bridge the gap in access to education and healthcare by leveraging blockchain technology. We envision a world where every child has equal opportunities to thrive and succeed, regardless of their background or circumstances.</p>
                              </div>
                              <div className="w-1/3 px-3 mb-9">
                                   <h3 className="text-sky-400 text-2xl font-medium mb-2">Anti-Whale Mechanisms</h3>
                                   <p>Our mission is to bridge the gap in access to education and healthcare by leveraging blockchain technology. We envision a world where every child has equal opportunities to thrive and succeed, regardless of their background or circumstances.</p>
                              </div>
                              <div className="w-1/3 px-3 mb-9">
                                   <h3 className="text-sky-400 text-2xl font-medium mb-2">Multi-Sig Functionality</h3>
                                   <p>Our mission is to bridge the gap in access to education and healthcare by leveraging blockchain technology. We envision a world where every child has equal opportunities to thrive and succeed, regardless of their background or circumstances.</p>
                              </div>
                              <div className="w-1/3 px-3 mb-9">
                                   <h3 className="text-sky-400 text-2xl font-medium mb-2">Contract Upgradability and Pausability</h3>
                                   <p>Our mission is to bridge the gap in access to education and healthcare by leveraging blockchain technology. We envision a world where every child has equal opportunities to thrive and succeed, regardless of their background or circumstances.</p>
                              </div>
                         </div>
                         <p>Download the whitepaper to read more about the project:</p>
                         <button type="button" className="py-3 px-10 mx-auto border-2 border-sky-500 rounded-full uppercase font-semibold hover:border-sky-400 hover:text-sky-400 sl-animated-lg">DOWNLOAD WHITEPAPER</button>
                    </div>
               </div>
          </section>
     )
}