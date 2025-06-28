"use client";

import React, { useEffect, useState } from "react";
import Header from "./Header.jsx";
import Body from "./Body.jsx";
import FooterDiv from "./FooterDiv.jsx";

import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
  SidebarCTA,
  Badge,
  DarkThemeToggle,
} from "flowbite-react";

import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";

function MainContent() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileSidebar = () => setMobileOpen(!mobileOpen);

  
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex w-64 flex-shrink-0">
        <Sidebar className="w-full h-full" aria-label="Sidebar">
          <SidebarItems>
            <SidebarItemGroup>
              <SidebarItem href="/" icon={HiChartPie}>Home</SidebarItem>
                  <SidebarItem href="/dashboard" icon={HiViewBoards}>Dashboard</SidebarItem>
                  <SidebarItem href="#" icon={HiArrowSmRight}>Sign In</SidebarItem>
                  <SidebarItem href="#" icon={HiTable}>Sign Up</SidebarItem>
              <DarkThemeToggle />
            </SidebarItemGroup>
          </SidebarItems>
          <SidebarCTA>
            <div className="mb-3 flex items-center">
              <Badge color="warning">Beta</Badge>
              <button
                className="-m-1.5 ml-auto inline-flex h-6 w-6 rounded-lg bg-gray-100 p-1 text-cyan-900 dark:bg-gray-700 dark:text-gray-400"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <p className="mb-3 text-sm text-cyan-900 dark:text-gray-400">
              Preview the new Flowbite dashboard navigation!
            </p>
            <a
              className="text-sm text-cyan-900 underline hover:text-cyan-800 dark:text-gray-400"
              href="#"
            >
              Learn more
            </a>
          </SidebarCTA>
        </Sidebar>
      </aside>

      {/* Sidebar - Mobile */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div className="w-64 bg-white dark:bg-gray-800 shadow-lg">
            <Sidebar className="h-full" aria-label="Mobile Sidebar">
              <SidebarItems>
                <SidebarItemGroup>
                  <SidebarItem href="/" icon={HiChartPie}>Home</SidebarItem>
                  <SidebarItem href="/dashboard" icon={HiViewBoards}>Dashboard</SidebarItem>
                  <SidebarItem href="#" icon={HiArrowSmRight}>Sign In</SidebarItem>
                  <SidebarItem href="#" icon={HiTable}>Sign Up</SidebarItem>
                  <DarkThemeToggle />
                </SidebarItemGroup>
              </SidebarItems>
              <SidebarCTA>
                <div className="mb-3 flex items-center">
                  <Badge color="warning">Beta</Badge>
                  <button
                    onClick={toggleMobileSidebar}
                    className="-m-1.5 ml-auto inline-flex h-6 w-6 rounded-lg bg-gray-100 p-1 text-cyan-900 dark:bg-gray-700 dark:text-gray-400"
                    aria-label="Close"
                  >
                    ✕
                  </button>
                </div>
                <p className="mb-3 text-sm text-cyan-900 dark:text-gray-400">
                  Preview the new Flowbite navigation!
                </p>
              </SidebarCTA>
            </Sidebar>
          </div>
          <div className="flex-1 bg-black/50 backdrop-blur-sm" onClick={toggleMobileSidebar} />
        </div>
      )}

      {/* Right Panel - scrollable */}
      <div className="flex-1 h-screen overflow-y-auto flex flex-col relative">

        {/* Top Bar - App promo */}
        <div className="bg-black p-2 text-white flex justify-between items-center">
          <div className="flex items-start">
            <img src="img/times.png" alt="Close" className="size-3 mt-3 mr-2" />
            <img src="img/app-link.png" className="w-6 mt-2 mr-2" alt="App Link" />
            <div>
              <h4 className="text-white text-sm">Shop on the Jumia App</h4>
              <h4 className="text-white text-sm">Free on Play Store</h4>
            </div>
          </div>
          <button className="bg-orange-400 rounded p-1 px-2 text-sm">OPEN</button>
        </div>

        {/* Delivery banner */}
        <div>
          <img src="img/free-delivery-mobile-strip.gif" className="w-full" alt="Free Delivery" />
        </div>

        {/* Sticky Search Bar */}
        <div className="sticky top-0 z-30 bg-white dark:bg-gray-800 p-2 pt-4 px-4 text-black dark:text-white flex justify-between items-center border-b dark:border-gray-700 shadow-sm">
          <div className="flex items-center gap-3 cursor-pointer">
            <i className="fas fa-bars md:hidden lg:hidden text-lg" onClick={toggleMobileSidebar}></i>
            <img src="img/logo.png" alt="Jumia" className="h-8" />
          </div>

          <div className="px-4 py-1 flex items-center ml-4">
            <i className="fa fa-user text-gray-400 mr-2"></i>
            <i className="fa fa-shopping-cart text-gray-400 mr-2 ml-2"></i>
            
          </div>

        </div>

        <div className="border rounded-full bg-white dark:bg-gray-800 px-4 py-1 flex items-center m-2">
            <i className="fa fa-search text-gray-400 mr-2"></i>
            <form action="#" method="get" className="w-full">
              <input
                className="w-full outline-none border-0 bg-transparent text-sm text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-300"
                type="search"
                name="q"
                placeholder="Search products, brands and categories"
              />
            </form>
          </div>

        {/* Page Content */}
        <main className="flex-1">
          <Body />
          <FooterDiv />
        </main>
      </div>
    </div>
  );
}

export default MainContent;
