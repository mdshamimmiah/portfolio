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
        data-aos-duration="1500"className='flex justify-evenly mt-5 mb-10 '>
            <div className='my-auto'>
                <h1 className="text-5xl text-white font-bold my-auto">MD SHAMIM MIAH</h1>
                <h1 className="text-orange-600 text-2xl mt-5 font-semibold ">I Am a <span>{typeEffect}</span></h1>
                <div className="flex gap-4 mt-4">
                    <a className="  text-white text-5xl " href="https://web.facebook.com/samim.reza.948/"><FaFacebook /></a>
                    <a className="text-white  text-5xl" href="https://github.com/mdshamimmiah"><FaGithub /></a>
                    <a className="text-white  text-5xl" href="https://www.linkedin.com/in/md-shamim-miah1/"><FaLinkedin /></a>
                </div>
            </div>
            <div className='w-[500px]'>
                <img className=' h-[300px] bg-orange-600 text-orange-600' src={svg} alt="" />
            </div>
        </div>
    );
};

export default Banner;