
import ex from '../assets/express-js.png'
const Skill = () => {
    return (
        <div data-aos="zoom-out-right">
             <hr className="w-1/2 mx-auto mt-7"/>
            <h1 className="text-4xl font-bold text-center mt-6 mb-6 text-orange-600 "><i>__Skill</i></h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 bg-black">
              <div>
              <img className="rounded-full w-[100px] h-[100px]  shadow-[#3349FF]	shadow-2xl bg-black mx-auto" src="https://i.ibb.co/vv3ZQ52/sk1.png" alt="" />
              </div>
              <div>
                <img className="w-[100px] h-[100px] -mt-3  shadow-[#3349FF]	shadow-2xl mx-auto" src="https://js.devexpress.com/Content/Images/Frameworks/React.png" alt="" />
              </div>
              <div>
                <img className="rounded-full w-[100px] h-[100px] -mt-3  shadow-[#3349FF]	shadow-2xl mx-auto" src="https://w7.pngwing.com/pngs/135/516/png-transparent-javascript-logo-js-com-j-s-academy-node-js-cad-miscellaneous-blue-text.png" alt="" />
              </div>
              <div>
                <img className="rounded-full w-[100px] h-[100px] -mt-3  shadow-[#3349FF]	shadow-2xl mx-auto" src="https://www.svgrepo.com/show/331488/mongodb.svg" alt="" />
              </div>
              <div>
                <img className="rounded-full w-[100px] h-[100px] -mt-3  shadow-[#3349FF]	shadow-2xl mx-auto" src="https://i.ibb.co/w45dFrM/css.png" alt="" />
              </div>
              <div>
                <img className="rounded-full w-[100px] h-[100px] -mt-3  shadow-[#3349FF]	shadow-2xl mx-auto" src="https://i.ibb.co/16TPDfb/html.png" alt="" />
              </div>
              <div>
                <img className="rounded-full w-[100px] h-[100px] -mt-3  shadow-[#3349FF]	shadow-2xl mx-auto" src="https://i.ibb.co/P15k9Zg/fire.png" alt="" />
              </div>
              <div>
                <img className="rounded-full w-[100px] h-[100px] -mt-3  shadow-[#3349FF]	shadow-2xl mx-auto" src="https://i.ibb.co/y6Th28j/route.png" alt="" />
              </div>
              <div>
                <img className="rounded-full w-[100px] h-[100px] -mt-3  shadow-[#3349FF]	shadow-2xl mx-auto bg-blue" src={ex} alt="" />
              </div>
            
             
               </div>
        </div>
    );
};

export default Skill;
