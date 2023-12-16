import React from "react";
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { footerProductLinks, footerSupportLinks, footercompanyLinks } from "../../static/data";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#000] text-white">
      
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 sm:text-center">
        <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/DotShop_gTLD_logo.svg"
            alt=""
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <br />
          <p>The home and elements needed to create beautiful products.</p>
          <div className="flex items-center mt-[15px]">
            <a href="https://www.facebook.com/profile.php?id=100012381667604" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
              <AiFillFacebook size={25} />
            </a>
            <a href="https://www.instagram.com/hoangan85/" target="_blank" rel="noopener noreferrer" className="cursor-pointer px-2">
              <AiFillInstagram size={25} />
            </a>
            <a href="https://www.linkedin.com/in/anhoangcao02/" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
              <AiOutlineLinkedin size={25} />
            </a>  
            <a href="https://github.com/anhoangcao" target="_blank" rel="noopener noreferrer" className="cursor-pointer px-2">
              <AiFillGithub size={25} />
            </a>
          </div>
        </ul>
        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Company</h1>
          {footerProductLinks.map((link,index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Shop</h1>
          {footercompanyLinks.map((link,index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Support</h1>
          {footerSupportLinks.map((link,index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
         text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span> Designed and made with 💙 by AnHoang @2023</span>
      </div>
    </div>
  );
};

export default Footer;
