"use client";

import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import Sidebar from "@/components/ui/sidebar";

const ProtectedLayout = ({ children }) => {
  return (
    <div>
      <div className="flex w-full h-full">
        <div className="sticky top-0 hidden p-5 md:flex bg-bgSoft">
          <Sidebar />
        </div>
        <div className="flex flex-col w-full flex-4 lg:flex-5">
          <div className="flex items-center justify-between w-full pt-5 pb-5 bg-bgSoft">
            <Navbar />
          </div>
          <div className="m-4 bg-bgSoft">{children}</div>
        </div>
        <div className="hidden md:flex w-[20px] bg-bgSoft"></div>
      </div>
      <div className="items-center justify-between hidden w-full h-20 bg-bgSoft md:flex">
        <Footer />
      </div>
    </div>
  );
};

export default ProtectedLayout;
