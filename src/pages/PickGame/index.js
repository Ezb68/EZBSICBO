import React from "react";
import Layout from "../../components/Layouts/Layout";
import Header from "../../components/Header";
import PickGameSidebar from "../../components/PickGameSidebar";
import { useNavigate } from "react-router-dom";

const PickGame = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Header />
      <div className="flex xs:h-full md:h-[calc(100vh_-_60px)] xs:relative md:fixed w-full">
        <PickGameSidebar />
        <div className="flex-1 bg-[#1E1E1E] md:p-[10px] lg:p-[25px] overflow-y-scroll">
          <img
            src="./assets/pick-header.png"
            alt="pick header"
            className="xs:hidden md:block"
          />
          <div className="xs:flex sm:hidden flex-col px-5 pt-8">
            <button className="relative w-max lg:h-[40px] bg-black">
              <p className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-[3vw]">
                Tài xỉu Xí Ngầu
              </p>
              <img
                src="./assets/pink-btn.png"
                alt="button"
                className="w-full"
              />
            </button>
            <h3 className="yellowTextColor text-[4vw] font-bold mt-4">
              Chọn bàn
            </h3>
          </div>
          <div className="flex xs:flex-col md:flex-row xs:flex-nowrap md:flex-wrap lg:flex-nowrap justify-between xs:gap-5 md:gap-0 lg:gap-10 xs:mt-5 lg:mt-10 mb-8">
            <button
              onClick={() => navigate("/main")}
              className="md:w-1/2 xs:px-5 md:p-2 lg:p-0"
            >
              <img src="./assets/pick.png" alt="pick" className="w-full" />
            </button>
            <button
              onClick={() => navigate("/main")}
              className="md:w-1/2 xs:px-5 md:p-2 lg:p-0"
            >
              <img src="./assets/pick.png" alt="pick" className="w-full" />
            </button>
            <button
              onClick={() => navigate("/main")}
              className="md:w-1/2 xs:px-5 md:p-2 lg:p-0"
            >
              <img src="./assets/pick.png" alt="pick" className="w-full" />
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PickGame;
