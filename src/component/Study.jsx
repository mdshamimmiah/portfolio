import svg2 from '../assets/svg2.svg'

const Study = () => {
    return (
        <div  data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500" id='Study'>
               <hr className="w-1/2 mx-auto mt-6"/>
            <h1 className="text-orange-600 text-4xl text-center mt-4  shadow-[#3349FF]	shadow-2xl"><i>__Educational Section</i></h1>
            <div className='flex mx-auto'>
               <div>
               <div>
                    <img className='w-[400px] h-[400px] mx-auto ml-10 bg-orange-600 my-auto mt-20' src={svg2} alt="" />
                </div>
               </div>
                
                  <div className='mx-auto gap-3'>
                  <div className="bg-black  shadow-[#3349FF]	shadow-2xl p-6 px-36 ">
                        <h1 className="text-white text-2xl">Secondary School Certificate(2010)</h1>
                        <h1 className="text-white text-xl">Sahabatpur High School</h1>
                        <h1 className="text-white  shadow-[#3349FF]	shadow-2xl">Department : Commerce</h1>
                    </div>
                  <div className="bg-black  shadow-[#3349FF]	shadow-2xl p-6 px-36 ">
                        <h1 className="text-white text-2xl">Higher Secondary School Certificate(2011-2012)</h1>
                        <h1 className="text-white text-xl">Abdul Mannan Vuiyan Degree College</h1>
                        <h1 className="text-white">Department : Commerce</h1>
                    </div>
                  <div className="bg-black  shadow-[#3349FF]	shadow-2xl p-6 px-36 ">
                        <h1 className="text-white text-2xl">Bachelore Of Business Administration(2013-2017)</h1>
                        <h1 className="text-white text-xl">Mawlana Mahammad Ali College</h1>
                        <h1 className="text-white">Department : Management</h1>
                    </div>
                  <div className="bg-black  shadow-[#3349FF]	shadow-2xl p-6 px-36 ">
                        <h1 className="text-white text-2xl">Masters Of Business Administration(2017-2019)</h1>
                        <h1 className="text-white text-xl">Sadat University</h1>
                        <h1 className="text-white">Department :  Management</h1>
                    </div>
                  </div>
                   
                </div>
            </div>
            );
};

            export default Study;