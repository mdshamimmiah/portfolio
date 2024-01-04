import svg2 from '../assets/svg2.svg'

const Study = () => {
    return (
        <div className='' data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500" id='Study'>
               <hr className="w-1/2 mx-auto mt-6"/>
            <h1 className="text-orange-600 text-4xl text-center mt-4  shadow-[#3349FF]	shadow-2xl"><i>__Educational Section</i></h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 mx-auto'>
               <div>
               <div>
                    <img className='w-[350px] lg:w-[400px] h-[400px] mx-auto ml-10 bg-orange-600 my-auto mt-20' src={svg2} alt="" />
                </div>
               </div>
                
                  <div className='w-[] lg:full mx-auto gap-3'>
                  <div className="bg-black  shadow-[#3349FF]	shadow-2xl p-6 px-36 ">
                        <h1 className="text-white text-sm lg:w-full lg:text-xl ">Secondary School Certificate(2010)</h1>
                        <h1 className="text-white text-sm lg:w-full lg:text-lg">Sahabatpur High School</h1>
                        <h1 className="text-white lg:w-full  shadow-[#3349FF]	shadow-2xl">Department : Commerce</h1>
                    </div>
                  <div className="bg-black  shadow-[#3349FF]	shadow-2xl p-6 px-36 ">
                        <h1 className="text-white text-xs lg:text-xl lg:w-[600px]">Higher Secondary School Certificate(2011-2012)</h1>
                        <h1 className="text-white text-sm lg:w-full lg:text-lg">Abdul Mannan Vuiyan Degree College</h1>
                        <h1 className="text-white lg:w-full">Department : Commerce</h1>
                    </div>
                  <div className="bg-black  shadow-[#3349FF]	shadow-2xl p-6 px-36 ">
                        <h1 className="text-white text-sm lg:text-xl lg:w-[600px]">Bachelore Of Business Administration(2013-2017)</h1>
                        <h1 className="text-white lg:w-full text-lg lg:text-lg">Mawlana Mahammad Ali College</h1>
                        <h1 className="text-white lg:w-full">Department : Management</h1>
                    </div>
                  <div className="bg-black  shadow-[#3349FF]	shadow-2xl p-6 px-36 ">
                        <h1 className="text-white text-sm lg:w-[550px] lg:text-xl">Masters Of Business Administration(2017-2019)</h1>
                        <h1 className="text-white text-lg lg:text-lg lg:w-full">Sadat University</h1>
                        <h1 className="text-white lg:w-full">Department :  Management</h1>
                    </div>
                  </div>
                   
                </div>
            </div>
            );
};

            export default Study;