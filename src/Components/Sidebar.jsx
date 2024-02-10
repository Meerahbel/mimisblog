import { IoIosSend } from "react-icons/io";

const Sidebar = () => {
  return (
    <>
      <div className="hidden xl:block w-[25%] h-[100vh] font-sans">
        <div className="flex flex-col pt-10 px-10 border-r-2 border-[#f8f9fa]">
          <div className="flex flex-col gap-4 font-sans font-semibold">
            <p className="text-[#1eafed] cursor-pointer w-fit">Home</p>
            <p className="cursor-pointer w-fit">Entertainment</p>
            <p className="cursor-pointer w-fit">Sports</p>
            <p className="cursor-pointer w-fit">Politics</p>
            <p className="cursor-pointer w-fit">Fashion</p>
            <p className="cursor-pointer w-fit">Food</p>
          </div>

          <div className="pt-10">
            <img
              src="/images/title2.png"
              alt="title"
              className="w-[200px] h-[30px]"
            />
          </div>

          <div className="flex flex-col gap-3 mt-5">
            <p className="font-bold">Suscribe for newsletter</p>
            <div className="flex border border-[#1eafed] p-2 w-fit items-center">
              <input
                type="text"
                placeholder="Enter Email Address"
                className="text-[#c4c7c7] outline-none"
              />
              <IoIosSend color="#7f7f7f" size="20px" />
              {/* <button className="w-fit bg-[#1eafed] px-5 py-2 font-semibold rounded-sm mt-5">
              Suscribe
            </button> */}
            </div>
          </div>

          <p className="text-black/60 mt-5 font-semibold">
            Copyright ©2024 All rights reserved | Created by Ugoji Mirabel
          </p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
