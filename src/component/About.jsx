import profile from '../assets/profile2.jpg'


const About = () => {




  return (
    <div className="mt-5" id='about' data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500">
           <hr className="w-1/2 mx-auto mt-6 mb-4"/>
      <h1 className="text-4xl font-bold text-center mb-6 text-orange-700"><i>__About Section</i></h1>

      <div className='mt-5'>

        <div>
          <img className='w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] items-center my-auto mb-8 p-4 mx-auto  ' src={profile} alt="" />
        </div>
        <p className='text-white text-5xl font-extrabold text-center'><strong></strong> Md Shamim Miah</p>
        <p className='text-white text-2xl font-bold text-center'><strong></strong> Tangail, Bangladesh</p>

      </div>



      <div className=' flex justify-around gap-16'>

        <div className='border border-solid border-white p-4 mt-5'>
          <h1 className='ml-6 mt-4 font-serif text-2xl mb-8 text-white text-center'><i>My proffessional info</i></h1>
          <h1 className='text-justify mr-4 text-orange-600 w-[400px]'>  I am a web developer but font end focus. i am using html, css, tailwind, js, mongodb, firebase,  node js, crud, react for my project. but i good know react and tailwind.</h1>

        </div>

        <div className='border border-solid border-white p-4 mt-5'>
          <h1 className='ml-20 mt-4 font-serif text-2xl mb-4 text-white '><i>My Vision</i></h1>
          <h1 className='text-justify mr-4  text-orange-600  w-[400px]'>In the vast landscape of web development, my vision is to master the powerful tools Next.js and Redux, unlocking a new realm of possibilities in building robust and efficient web applications.</h1>
        </div>
      </div>
      <div>

      </div>


    </div>
  );
};

export default About;