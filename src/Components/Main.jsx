import { CiSearch } from "react-icons/ci";
import { MdMenuOpen } from "react-icons/md";
import Popular from "./Popular";

const Main = () => {
  return (
    <div className="lg:w-[75%] flex flex-col px-3 md:px-20 xl:px-5 font-sans">
      {/* For hamburger menu */}
      <div className="xl:hidden pt-5">
        <MdMenuOpen size="30px" />
      </div>

      {/* search section */}
      <div className="flex gap-3 mt-5 xl:mt-10">
        <div className="flex border-2 border-[#1eafed] p-2 w-fit items-center gap-3">
          <CiSearch color="#7f7f7f" size="20px" />
          <input
            type="text"
            placeholder="Search news..."
            className="text-[#c4c7c7] outline-none w-[150px] md:w-[200px] "
          />
        </div>
        <button className="w-fit py-2 px-4 bg-[#1eafed] rounded-sm">
          Search
        </button>
      </div>

      {/* popular articles section */}
      <Popular />
    </div>
  );
};

export default Main;
