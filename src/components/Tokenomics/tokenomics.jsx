import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import chart from "../../assets/img/pie-chart.png"
import chartBg from "../../assets/img/chart_bg.jpg"
import icon1 from "../../assets/icon/choose_icon01.svg"
import icon2 from "../../assets/icon/choose_icon02.svg"
import icon3 from "../../assets/icon/choose_icon03.svg"
import icon4 from "../../assets/icon/choose_icon04.svg"
import icon5 from "../../assets/icon/contact_icon01.svg"

export default function Tokenomics() {

     return (
          <section id="tokenomics" className="bg-gradient-to-b from-gray-950 to-gray-900">
               <div className="bg-center bg-no-repeat bg-fixed py-32" style={{ backgroundImage: `url(${chartBg})` }}>
                    <div className="sl-container">
                         <div className="flex flex-wrap items-center">
                              <div className="w-1/2 px-9">
                                   <img src={chart} alt="" />
                              </div>
                              <div className="w-1/2 pl-20">
                                   <h2 className="font-semibold text-5xl tracking-wider mb-6">Token<span className="text-sky-400">omics</span></h2>
                                   <p>The distribution of GLXE tokens is designed to ensure fairness and broad participation in the EAGLE-X ecosystem. The allocation shown in the chart.</p>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="sl-container py-20">
                    <Swiper className="mySwiper text-sm"
                         spaceBetween={20}
                         slidesPerView={4}>
                         <SwiperSlide>
                              <div className="group space-y-4 h-80 px-6 pt-12 border border-gray-800/80 rounded-3xl cursor-pointer hover:h-auto hover:pb-10">
                                   <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gray-300/10 border-4 border-gray-300/30 group-hover:border-sky-400"><img className="w-8" src={icon1} alt="" /></div>
                                   <h3 className="text-sky-400 text-2xl font-medium mb-2">Token Burning Mechanism</h3>
                                   <p className="h-16 overflow-hidden group-hover:h-auto">Our mission is to bridge the gap in access to education and healthcare by leveraging blockchain technology. We envision a world where every child has equal opportunities to thrive and succeed, regardless of their background or circumstances.</p>
                              </div>
                         </SwiperSlide>
                         <SwiperSlide>

                              <div className="group space-y-4 h-80 px-6 pt-12 border border-gray-800/80 rounded-3xl cursor-pointer hover:h-auto hover:pb-10">
                                   <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gray-300/10 border-4 border-gray-300/30 group-hover:border-sky-400"><img className="w-8" src={icon2} alt="" /></div>
                                   <h3 className="text-sky-400 text-2xl font-medium mb-2">Staking and Rewards</h3>
                                   <p className="h-16 overflow-hidden group-hover:h-auto">GLXE holders have the opportunity to stake their tokens and earn rewards. By participating in the staking program, users contribute to the security and stability of the network while being rewarded with additional GLXE tokens. This incentivizes long-term holding and active participation in the EAGLE-X ecosystem.</p>
                              </div>
                         </SwiperSlide>
                         <SwiperSlide>

                              <div className="group space-y-4 h-80 px-6 pt-12 border border-gray-800/80 rounded-3xl cursor-pointer hover:h-auto hover:pb-10">
                                   <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gray-300/10 border-4 border-gray-300/30 group-hover:border-sky-400"><img className="w-8" src={icon3} alt="" /></div>
                                   <h3 className="text-sky-400 text-2xl font-medium mb-2">Anti-Whale Mechanisms</h3>
                                   <p className="h-16 overflow-hidden group-hover:h-auto">To prevent market manipulation and ensure a fair distribution of tokens, anti-whale mechanisms are in place. These mechanisms include limits on the maximum number of tokens that can be held by an individual wallet, as well as transaction volume restrictions. By discouraging large token holders from exerting excessive influence, we foster a more decentralized and inclusive ecosystem. Transaction limit will be 5 Billion and Holding limit 10 Billion.</p>
                              </div>
                         </SwiperSlide>
                         <SwiperSlide>

                              <div className="group space-y-4 h-80 px-6 pt-12 border border-gray-800/80 rounded-3xl cursor-pointer hover:h-auto hover:pb-10">
                                   <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gray-300/10 border-4 border-gray-300/30 group-hover:border-sky-400"><img className="w-8" src={icon4} alt="" /></div>
                                   <h3 className="text-sky-400 text-2xl font-medium mb-2">Multi-Sig Functionality</h3>
                                   <p className="h-16 overflow-hidden group-hover:h-auto">To enhance the security and trustworthiness of the EAGLE-X ecosystem, we have implemented multi-signature (multi-sig) functionality. This requires multiple authorized parties to approve and execute transactions, ensuring that funds are only moved with the consensus of designated individuals. This adds an extra layer of protection against unauthorized access and enhances the overall security of the platform.</p>
                              </div>
                         </SwiperSlide>
                         <SwiperSlide>

                              <div className="group space-y-4 h-80 px-6 pt-12 border border-gray-800/80 rounded-3xl cursor-pointer hover:h-auto hover:pb-10">
                                   <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gray-300/10 border-4 border-gray-300/30 group-hover:border-sky-400"><img className="w-8" src={icon5} alt="" /></div>
                                   <h3 className="text-sky-400 text-2xl font-medium mb-2">Contract Upgradability and Pausability</h3>
                                   <p className="h-16 overflow-hidden group-hover:h-auto">Our smart contract is designed to be variable upgradable and pausable, allowing for flexibility and adaptability as the project evolves. This ensures that any necessary improvements or adjustments can be made without disrupting the overall functionality of the ecosystem. Additionally, the contract includes a pausability feature that enables temporary suspension of certain functions in case of emergencies or security concerns.</p>
                              </div>
                         </SwiperSlide>
                    </Swiper>
                    <div className="flex  items-center justify-between mt-10">
                         <p>Download the whitepaper to read more about the project:</p>
                         <button type="button" className="py-3 px-10 border-2 border-sky-500 rounded-full uppercase font-semibold hover:border-sky-400 hover:text-sky-400 sl-animated-lg">DOWNLOAD WHITEPAPER</button>
                    </div>
               </div>
          </section>
     )
}