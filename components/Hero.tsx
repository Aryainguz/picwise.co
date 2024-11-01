"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/assets/image.png";
import picwisedahboardmobile from "../public/assets/picwise-dashboard-mobile.png";
import picwisedahboard from "../public/assets/picwise-dashboard.png";
import WatchDemoModal from "./WatchDemoModal";

const Home = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="overflow-x-hidden bg-gray-50">
        <header className="py-4 md:py-6 relative z-50 bg-gray-50">
          <div className="container px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center justify-between relative">
              <div className="flex-shrink-0 p-4 sm:p-0">
                <Link
                  href="/"
                  className="flex rounded outline-none font-bold text-3xl focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  <Image
                    src={logo}
                    width={35}
                    height={30}
                    className="mx-1"
                    alt="picwise Logo"
                  />
                  Pic
                  <span className="text-blue-600">Wise</span>.
                </Link>
              </div>

              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="text-gray-900 z-50"
                  onClick={toggleMobileMenu}
                >
                  <span aria-hidden="true">
                    {isMobileMenuOpen ? (
                      <svg
                        className="w-7 h-7"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-7 h-7"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </span>
                </button>
              </div>

              <div className="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10 xl:space-x-16">
                <a
                  href="#features"
                  className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  Features
                </a>
                <a
                  href="#pricing"
                  className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  Pricing
                </a>
                <a
                  href="#contribute"
                  className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  Contribute
                </a>
              </div>

              <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-10">
                <Link href="/dashboard/compression">
                  <div
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-xl hover:bg-blue-700 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
                    role="button"
                  >
                    Dashboard
                  </div>
                </Link>
              </div>
            </div>

            <nav className={`hidden menu w-screen absolute right-0 bg-white z-10 p-5  rounded-b-xl border-2`}>
              <div className="px-1 py-8">
                <div className="grid gap-y-7">
                  <a
                    href="#"
                    className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                  >
                    {" "}
                    Features{" "}
                  </a>
                  <a
                    href="#"
                    className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                  >
                    {" "}
                    Pricing{" "}
                  </a>
                  <a
                    href="#"
                    className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                  >
                    {" "}
                    Automation{" "}
                  </a>
                  <a
                    href="#"
                    className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                  >
                    {" "}
                    Customer Login{" "}
                  </a>
                  <Link href="/dashboard/compression">
                      
                      <div
                        className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-xl hover:bg-blue-700 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
                        role="button"
                      >
                        Dashboard
                      </div>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </header>

        <div
          className={`lg:hidden fixed inset-0 z-40 bg-gray-50 transform ${
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="flex flex-col h-full pt-20">
            <div className="flex flex-col flex-grow justify-center items-center">
              <a
                href="#features"
                className="text-2xl font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 mb-8"
                onClick={toggleMobileMenu}
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-2xl font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 mb-8"
                onClick={toggleMobileMenu}
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-2xl font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 mb-8"
                onClick={toggleMobileMenu}
              >
                Automation
              </a>
              <a
                href="#"
                className="text-2xl font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 mb-8"
                onClick={toggleMobileMenu}
              >
                {" "}
                Customer Login{" "}
              </a>
              <Link href="/dashboard/compression">
                <div
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-xl hover:bg-blue-700 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
                  role="button"
                >
                  Dashboard
                </div>
              </Link>
            </div>
          </div>
        </div>

        <section className="pt-12 bg-gray-50 sm:pt-16">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="px-6 text-lg text-gray-600 font-inter">
                Image Compression & Conversion Made Pixel Perfect.
              </h1>
              <p className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-5xl lg:leading-tight font-pj">
                Compress image size upto 90% without
                <span className="relative inline-flex sm:inline">
                  <span className="bg-gradient-to-r from-blue-500 to-blue-600 blur-lg filter opacity-30 w-full h-full absolute inset-0" />
                  <span className="relative"> losing much of pixels.</span>
                </span>
              </p>
              <div className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
                <Link
                  href="/dashboard/compression"
                  className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-blue-600 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
                  role="button"
                >
                  Get Started
                </Link>
                <button
                  onClick={openModal}
                  className="inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold text-gray-900 transition-all duration-200 border-2 border-gray-400 sm:w-auto sm:mt-0 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-gray-200 focus:bg-gray-200"
                  role="button"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    viewBox="0 0 18 18"
                    fill="none"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.18003 13.4261C6.8586 14.3918 5 13.448 5 11.8113V5.43865C5 3.80198 6.8586 2.85821 8.18003 3.82387L12.5403 7.01022C13.6336 7.80916 13.6336 9.44084 12.5403 10.2398L8.18003 13.4261Z"
                      strokeWidth={2}
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Watch the demo
                </button>
              </div>
              <p className="mt-8 text-base text-gray-500 font-inter">
                Free Image Compression & Conversion.
              </p>
            </div>
          </div>
          <div className="pb-12">
            <div className="relative ">
              <div className="absolute inset-0 h-2/3 bg-gray-50" />
              <div className="relative mx-auto">
                <div className="lg:max-w-6xl lg:mx-auto my-6">
                <Image src={picwisedahboard} alt="picwise Dashboard" className="rounded-md hidden sm:block shadow-2xl shadow-blue-500/50" />
                <Image src={picwisedahboardmobile} alt="picwise Mobile Dashboard" className="rounded-md block ml-4 sm:hidden shadow-2xl shadow-blue-500/50" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Watch Video Modal */}
        <WatchDemoModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </>
  );
};

export default Home;
