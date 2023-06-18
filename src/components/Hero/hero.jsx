import banner from "../../assets/img/banner_bg.jpg";

export default function Hero() {

     return (
          <section className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${banner})` }}>
               <div className="sl-container text-center pt-60 pb-40 space-y-4">
                    <h1 className="font-semibold text-6xl leading-normal mb-9">Welcome to <span className="text-sky-400">EAGLE-X</span> Empowering Communities Through Blockchain Technology.</h1>
                    <p>Join our mission to make a positive impact on the lives of underprivileged people in Africa and beyond. With EAGLE-X, you can be part of a revolutionary social impact ecosystem that leverages the power of blockchain technology for transparent, secure, and efficient giving.</p>
                    <p>EAGLE-X is a groundbreaking social impact platform that utilizes the potential of cryptocurrency and blockchain technology to transform lives. We believe in the power of education and healthcare as fundamental rights, and our mission is to provide access to these essential services for underprivileged children and women in Africa, starting with Nigeria.</p>
                    <p>Your investment helps fund education projects, healthcare initiatives, and community development programs. Together, we can create lasting change and empower vulnerable children to reach new heights. Join us and make a difference today.</p>
               </div>
          </section>
     )
}