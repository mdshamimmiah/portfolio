import { Link } from "react-scroll";


const Navber = () => {
  
    
    
    return (
        

        <div   data-aos-anchor-placement="top-bottom">
            <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li className="text-white"><a>Home</a></li>
       <li className="text-white">About</li>
       <li className="text-white">Qualification</li>
        <li className="text-white"><a>My Project</a></li>
        <li className="text-white">Contact</li>
      </ul>
    </div>
    <img className="w-[80px]" src="https://i.ibb.co/x1YmK2p/pf.jpg" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="flex gap-5">
    <li>
          <Link activeClass="active"
      to="/"
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={50}
      duration={500} className="text-white">Home</Link>
      </li>
      <li>
          <Link activeClass="active"
      to="about"
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={50}
      duration={500}  className="text-white">About</Link>
      </li>
      <li>
          <Link activeClass="active"
      to="Study"
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={50}
      duration={500}  className="text-white">Study</Link>
      </li>
        <li>
          <Link activeClass="active"
      to="port"
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={50}
      duration={500}  className="text-white"> My Project</Link>
      </li>

      <li>
          <Link activeClass="active"
      to="contact"
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={50}
      duration={500}  className="text-white">Contact</Link>
      </li>
        
    </ul>
  </div>
  <div className="navbar-end">
    <a className="text-2xl text-white"><i>Portfolio</i></a>
  </div>
</div>
        </div>
    );
};

export default Navber;