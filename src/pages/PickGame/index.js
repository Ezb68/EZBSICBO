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
      <div className="flex sm:h-full md:h-[calc(100vh_-_60px)] sm:relative md:fixed w-full">
        <PickGameSidebar />
        <div className="flex-1 bg-[#1E1E1E] p-[25px]">
          <img
            src="./assets/pick-header.png"
            alt="pick header"
            className="sm:hidden md:block"
          />
          <div className="sm:flex md:hidden flex-col">
            <button className="relative w-max h-[40px] bg-black">
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
          <div className="flex sm:flex-col md:flex-row justify-between sm:gap-5 md:gap-10 sm:mt-5 md:mt-10">
            <button onClick={() => navigate("/main")}>
              <img src="./assets/pick.png" alt="pick" />
            </button>
            <button onClick={() => navigate("/main")}>
              <img src="./assets/pick.png" alt="pick" />
            </button>
            <button onClick={() => navigate("/main")}>
              <img src="./assets/pick.png" alt="pick" />
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PickGame;
