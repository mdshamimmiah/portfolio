import { useRef } from "react";
import { Form } from "react-router-dom";
import emailjs from '@emailjs/browser';
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";


const Contact = () => {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lp6a8ue', 'template_puofxx9', form.current, 'Q_5hRcST4KImyCYOs')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
        <div id="contact" data-aos="zoom-out-left">
          <hr className="w-1/2 mx-auto mt-6"/>
            <h1 className="text-4xl text-center mt-6 text-orange-600"><i>__Contact Section</i></h1>
          <div>
            <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-col">
    <div className="text-center ">
      <h1 className="text-5xl font-bold text-white">Contact now!</h1>
     
    </div>
  <div className="flex justify-evenly gap-72">

<div>
  <div className="bg-black  shadow-[#3349FF]	shadow-2xl p-6 px-36 ">
  <h1 className="text-white text-2xl">My Address</h1>
  <h1 className="text-white">Tangail, Dhaka, Bangladesh</h1>
  </div>
  <div className="bg-black  shadow-[#3349FF]	shadow-2xl p-6 px-36 ">
  <h1 className="text-white text-2xl">For Email</h1>
  <h1 className="text-white">mdabirahmedsl7162@gmail.com</h1>
  </div>
  <div className="bg-black  shadow-[#3349FF]	shadow-2xl p-6 px-36 ">
  <h1 className="text-white text-2xl mb-4">Social Media</h1>
  <div className="flex gap-4">
    <a className="  text-white text-2xl " href="https://web.facebook.com/samim.reza.948/"><FaFacebook /></a>
    <a className="text-white  text-2xl" href="https://github.com/mdshamimmiah"><FaGithub /></a>
    <a className="text-white  text-2xl" href="https://www.linkedin.com/in/md-shamim-miah1/"><FaLinkedin /></a>
  </div>
  </div>
</div>

  <div className="card shrink-0 w-full max-w-sm bg-black  shadow-[#3349FF]	shadow-2xl rounded-none p-5">
    <form ref={form} onSubmit={sendEmail}>
      <label className="text-white">Name</label>
      <input className="w-full" type="text" name="user_name" placeholder="name" />
      <label className="text-white">Email</label>
      <input className="w-full" type="email" name="user_email" placeholder="email" />
      <label className="text-white">Message</label>
      <textarea className="w-full mt-5" name="message" placeholder="message" />
      <button className="w-full text-white btn btn-outline" type="submit" value="Send">Send</button>
    </form>
    </div>

  </div>
  </div>
</div>
          </div>
        </div>
    );
};

export default Contact;