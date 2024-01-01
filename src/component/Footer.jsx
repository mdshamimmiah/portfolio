import { FaPhoneAlt } from "react-icons/fa";
import {FaGithub} from "react-icons/fa6";

const Footer = () => {
    return (
        <div data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500">
          <hr />
            <footer className="footer p-10 text-neutral-content flex justify-between">
  <aside>
  <img className="w-[150px]  shadow-[#3349FF]	shadow-2xl" src="https://i.ibb.co/x1YmK2p/pf.jpg" alt="" />
  </aside> 
  
    <div className="order-3 ">
      <h1 className=" shadow-[#3349FF]	shadow-2xl">Md: Shamim Miah</h1>
      <h1 className=" shadow-[#3349FF]	shadow-2xl">Nagarpur, Tangail</h1>
      <h1 className=" shadow-[#3349FF]	shadow-2xl">Dhaka, Bangladesh</h1>
      <h1 className=" shadow-[#3349FF]	shadow-2xl"><FaPhoneAlt />01304055877</h1>
      </div>
 

    <div className="grid grid-flow-col gap-4 mt-12 order2 ">
    <a href="https://www.facebook.com/samim.reza.948" target="_blank"><h1 className="text-3xl bg-white text-black w-10 text-center rounded-full">f</h1></a>
    <a href="https://www.linkedin.com/in/md-shamim-miah1/" target="_blank"><img className="w-[38px] bg-white rounded-full -mt-1" src="https://i.ibb.co/fYHT4pQ/link.png" alt="" /></a>
    <a className="text-white text-4xl -p-2" href="https://github.com/mdshamimmiah"><FaGithub /></a>
    </div>
 

</footer>
        </div>
    );
};

export default Footer;