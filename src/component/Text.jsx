import Silder1 from '../component/Slider1';
import Silder2 from './Slider2';
import Silder3 from './Slider3';




const Text = () => {
    return (
        <div className='bg-black'>
         
        <div id='port' className="p-4 sm:p-6 md:p-8 lg:p-10 ">
           <hr className="w-1/2 mx-auto mt-7"/>
            <h1 className="text-4xl text-center mt-6 mb-4 text-orange-700"><i>__Project Section</i></h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 ">
                <div className="card w-96 text-white shadow-[#3349FF]	shadow-2xl p-4">
                    <figure><Silder1></Silder1></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl">Fitness Tracker</h2>
                        <h3>Fitness Tracker Website</h3>
                        <p className="text-sm text-justify">It is a Fitness Tracker Application. Users can see the Dashboard as a role after authentication. Users can see classes and trainer details. Users can see their activities and make their schedules.</p>
                        <div className="card-actions flex grid-col md:grid-row md:justify-end gap-4">
                            <a href="https://assignment12-cf109.web.app/"><button className="btn btn-primary">Live site</button></a>
                            <a href="https://github.com/mdshamimmiah/fitness-tracker"><button className="btn btn-primary">Github repo</button></a>
                        </div>
                    </div>
                </div>
                <div className="card w-96 text-white shadow-[#3349FF]	shadow-2xl p-4">
                    <figure><Silder3></Silder3></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl">Online Market</h2>
                        <h3>Online marketplace</h3>
                        <p className="text-sm text-justify">It is an Online Marketing Application. Users can see a private route page after authentication. Users can see all jobs. Users can add jobs, maintain bids, and own posted jobs.</p>
                        <div className="card-actions flex grid-col md:grid-row md:justify-end gap-4">
                            <a href=" https://simple-tendency.surge.sh"><button className="btn btn-primary">Live site</button></a>
                            <a href="https://github.com/mdshamimmiah/online-market"><button className="btn btn-primary">Github repo</button></a>
                        </div>
                    </div>
                </div>
                <div className="card w-96 text-white shadow-[#3349FF]	shadow-2xl p-4">
                    <figure><Silder2></Silder2></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl">Brand-Shop</h2>
                        <h3>Brand-Shop</h3>
                        <p className="text-sm text-justify">It is a BrandShop website. Users can see a private page after authentication. Users can see all Brands. Users can add Products and maintain the cart page where product details are stored.</p>
                        <div className="card-actions flex grid-col grid-col md:flex-row md:justify-end gap-4">
                            <a href="https://brandshop-698ea.web.app/"><button className="btn btn-primary">Live site</button></a>
                            <a href="https://github.com/mdshamimmiah/brand-shop"><button className="btn btn-primary">Github repo</button></a>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        </div>
    );
};

export default Text;
