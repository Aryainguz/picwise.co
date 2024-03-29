"use client";
import { UserButton } from "@clerk/nextjs";
import React, { ReactNode } from "react";
import logo from "../public/assets/image.png";
import compressImg from "../public/assets/compress.png";
import aiImg from "../public/assets/ai.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface props {
  children: ReactNode;
}

const Dashboard: React.FC<props> = ({ children }) => {
  const showMobileNav = () => {
    const sidebar = document.getElementById("logo-sidebar");
    sidebar?.classList.toggle("-translate-x-full");
  };
  const pathname = usePathname();
  return (
    <>
      <div>
        <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200  ">
          <div className="px-3 py-3 lg:px-5 lg:pl-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start rtl:justify-end">
                <button
                  data-drawer-target="logo-sidebar"
                  data-drawer-toggle="logo-sidebar"
                  aria-controls="logo-sidebar"
                  type="button"
                  className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200   dark:focus:ring-gray-600"
                  onClick={showMobileNav}
                >
                  <span className="sr-only">Open sidebar</span>
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    />
                  </svg>
                </button>
                <Link
                  href="/"
                  className="flex mx-4 rounded outline-none font-bold text-3xl focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  <Image
                    src={logo}
                    width={35}
                    height={30}
                    className="mx-1"
                    alt=""
                  />
                  Pic
                  <span className="text-blue-600">Wise</span>.
                </Link>
              </div>
              <div className="flex items-center">
                <div className="flex items-center ms-3">
                  <div>
                    <UserButton afterSignOutUrl="/" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <aside
          id="logo-sidebar"
          className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0  "
          aria-label="Sidebar"
        >
          <div className="h-full px-3 pb-4 overflow-y-auto bg-white ">
            <ul className="space-y-2 font-medium">
              <li>
                <Link
                  href="/dashboard"
                  className={`${
                    pathname == "/dashboard" && `bg-gray-200`
                  }  flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group`}
                >
                  <Image src={compressImg} width={25} height={25} alt="" />
                  <span className="mx-3">Compression</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/ai-enhancer"
                  className={`${
                    pathname == "/dashboard/ai-enhancer" && `bg-gray-200`
                  } flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group`}
                >
                  <Image src={aiImg} width={25} height={25} alt="" />
                  <span className="mx-3">Compressor</span>
                  <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                    Pro
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
        <div className="p-4 sm:ml-64">{children}</div>
      </div>
    </>
  );
};

export default Dashboard;
