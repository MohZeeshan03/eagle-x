import banner from "../../assets/img/banner_bg.jpg";
import heroImg from "../../assets/img/emboss-coin-logo.png"

export default function Hero() {

     return (
          <section id="hero" className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${banner})` }}>
               <div className="sl-container lg:pt-40 pt-28 xl:pb-20 lg:pb-16 md:pb-12 pb-9">
                    <div className="flex items-center flex-wrap">
                         <div className="wow fadeIn xl:order-1 order-2 xl:w-2/3 w-full lg:space-y-4 space-y-2">
                              <h1 className="font-semibold lg:text-6xl md:text-4xl text-2xl xl:text-left text-center leading-tight lg:mb-9 mb-6">Welcome to <span className="text-sky-400">EAGLE-X</span> Empowering Communities Through Blockchain Technology.</h1>
                              <p>Join our mission to make a positive impact on the lives of underprivileged people in Africa and beyond. With EAGLE-X, you can be part of a revolutionary social impact ecosystem that leverages the power of blockchain technology for transparent, secure, and efficient giving.</p>
                              <p>EAGLE-X is a groundbreaking social impact platform that utilizes the potential of cryptocurrency and blockchain technology to transform lives. We believe in the power of education and healthcare as fundamental rights, and our mission is to provide access to these essential services for underprivileged children and women in Africa, starting with Nigeria.</p>
                              <p>Your investment helps fund education projects, healthcare initiatives, and community development programs. Together, we can create lasting change and empower vulnerable children to reach new heights. Join us and make a difference today.</p>
                              <p>The EAGLE-X Impact Foundation (EXIF) plays a pivotal role within the EAGLE-X ecosystem by driving and implementing the platform's impact goals. As a distinct entity within the organization, EXIF operates as a nonprofit foundation, dedicated to catalyzing positive change and sustainable development in line with EAGLE-X's mission and vision.</p>
                              <p>EXIF plays a crucial role in identifying, evaluating, and selecting projects that align with EAGLE-X's impact goals, facilitating their execution, and monitoring progress.</p>
                              <p>Through a strategic and targeted approach, the foundation focuses on key areas such as education, healthcare, community development, and micro-finance grants, ensuring projects supported by the foundation have a high likelihood of generating meaningful and sustainable impact.</p>
                              <p>By leveraging its organizational structure, collaborative approach, and the power of blockchain technology, EXIF operates as a driving force for positive change via partnerships, innovation, and strategic initiatives to create sustainable development and empower communities.</p>
                         </div>
                         <div className="xl:order-2 order-1 xl:w-1/3 w-full xl:pl-12 mb-6">
                              <img className="wow fadeIn max-w-xs xl:w-full w-1/3 mx-auto" src={heroImg} alt="eagle coin " />
                         </div>
                    </div>
               </div>
          </section>
     )
}
