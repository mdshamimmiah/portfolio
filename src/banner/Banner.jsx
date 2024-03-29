import svg from '../assets/svg1.svg'
import { Typewriter, Cursor, useTypewriter } from 'react-simple-typewriter'
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
const Banner = () => {
const [ typeEffect ] = useTypewriter({
    words: ['Developer', 'MernStack Developer', 'MernStack Developer but frontEnd Focused'],
    loop:{},
    typeSpeed:100,
    deleteSpeed:40
})

    return (
        <div data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"className=' grid grid-cols-1 lg:grid-cols-2 gap-2 justify-evenly mt-5 mb-10 lg:ml-0 ml-6'>
            <div className='my-auto'>
                <h1 className="text-2xl lg:text-5xl text-white font-bold my-auto p-8 ">MD SHAMIM MIAH</h1>
                <h1 className="text-orange-600 text-2xl mt-5 font-semibold p-8 ">I Am a <span>{typeEffect}</span></h1>
                <div className="flex gap-4 mt-4 p-8">
                    <a className="  text-white text-5xl  " href="https://web.facebook.com/samim.reza.948/"><FaFacebook /></a>
                    <a className="text-white  text-5xl" href="https://github.com/mdshamimmiah"><FaGithub /></a>
                    <a className="text-white  text-5xl" href="https://www.linkedin.com/in/md-shamim-miah1/"><FaLinkedin /></a>
                </div>
            </div>
            <div className='w-[1000px]'>
                <img className='w-[375px] lg:w-[620px] h-[300px] bg-orange-600 text-orange-600 mt-12' src={svg} alt="" />
            </div>
        </div>
    );
};

export default Banner;