import Image from "next/image";
import logo from "../public/assets/image.png";
import React from "react";
import {AiFillInstagram,AiFillLinkedin} from "react-icons/ai"
import {FaXTwitter,FaGithub, FaYoutube} from "react-icons/fa6"


const Footer = () => {
  return (
    <>
      <footer className="bg-white dark:bg-gray-900 border-t">
        <div className="container flex flex-col items-center justify-between px-6 py-8 mx-auto lg:flex-row">
          <a
            href="#"
            className="flex rounded outline-none font-bold text-3xl focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
          >
            <Image src={logo} width={35} height={30} className="mx-1" alt="imgbetter Logo" />
            img
            <span className="text-blue-600">better</span>.
          </a>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 lg:gap-6 lg:mt-0">
            <a href="https://www.instagram.com/aryaninguz.tsx/" target='_blank' className="text-xl text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
        <AiFillInstagram/>
      </a>
      <a href="https://www.linkedin.com/in/aryan-inguz-b73150254/" target='_blank' className="text-xl text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
       <AiFillLinkedin/>
      </a>
      <a href="https://twitter.com/aryaninguz369" target='_blank' className="text-xl text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
        <FaXTwitter/>
      </a>
      <a href="https://github.com/Aryainguz" target='_blank' className="text-xl text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
        <FaGithub/>
      </a>
      <a href="https://www.youtube.com/@AryanInguz" target='_blank' className="text-xl text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
        <FaYoutube/>
      </a>
          </div>


          <p className="mt-6 text-sm text-gray-500 lg:mt-0 dark:text-gray-400">
          <a href="https://www.producthunt.com/posts/imgbetter?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-imgbetter" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=456271&theme=light" alt="imgbetter - The wise way to handle your pics | Product Hunt" className="mb-4" style={{width: 250, height: 54}} width={250} height={54} /></a>
            Made with ❤️ by   <a href="https://www.aryaninguz.tech" target='_blank' className="text-xl text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
        Aryainguz
      </a>.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
