import React from "react";
import Image from "next/image";
import phone from "../asserts/phone.png";
import mail from "../asserts/mail.png";

const Contact = () => {
  return (
    <div
      className="max-w-[1000px] mx-auto flex flex-col lg:flex-row text-white/70 p-8 
                    rounded-lg space-y-8 lg:space-y-0 lg:space-x-8"
      id="contact"
    >
      <div className="flex justify-center items-center">
        <ul className="space-y-4">
          <li className="flex items-center">
            <Image src={phone} alt="phone" className="h-[110px] w-auto mr-6" />
            <p className="text-xl">03253738113</p>
          </li>

          <li className="flex items-center">
            <Image src={mail} alt="mail" className="h-[110px] w-auto mr-6" />
            <p className="text-xl">madiha@gmail.com</p>
          </li>
        </ul>
      </div>
        
        <div className="bg-slate-800 p-6 rounded-xl max-w-[550px]">
        <h2 className="text-5xl font-bold text-green-400 mb-4 font-serif">Let's connect</h2>
        <p className="text-white/70 mb-6"> Send me a message and lets schedule a call</p>
        <form className="space-y-4" action="https:getfrom."  method="POST">
          <div className="grid md:grid-cols-2 gap-4">
            <input className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-red-400" placeholder="First Name" type="text" />
            <input className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-red-400" placeholder="Last Name" type="text" />
            <input className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-red-400" placeholder="Email" type="email" />
            <input className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-red-400" placeholder="Phone" type="phone" />
          </div>
          <textarea name="" id="" className="bg-black/70  w-full rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="your message"/>
          <button className="bg-blue-600 hover:bg-green-700 text-white px-6 py-2 w-full font-semibold text-xl rounded-xl" > Send Message</button>
        </form>
        </div>

    </div>
  );
};

export default Contact;
