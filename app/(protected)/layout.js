"use client";

import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import Sidebar from "@/components/ui/sidebar";

const ProtectedLayout = ({ children }) => {
  return (
    <div>
      <div className="w-full h-full flex">
        <div className="hidden md:flex flex-1 w-full sticky top-0 p-5 bg-bgSoft">
          <Sidebar />
        </div>
        <div className="flex-4 lg:flex-5 flex flex-col w-full">
          <div className="flex justify-between w-full pt-5 pb-5 items-center bg-bgSoft">
            <Navbar />
          </div>
          <div>{children}</div>
        </div>
        <div className="hidden md:flex w-[20px] bg-bgSoft"></div>
      </div>
      <div className="w-full bg-bgSoft h-20 hidden md:flex justify-between items-center">
        <Footer />
      </div>
    </div>
  );
};

export default ProtectedLayout;
