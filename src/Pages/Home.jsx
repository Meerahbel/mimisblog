import Main from "../Components/Main";
import Sidebar from "../Components/Sidebar";

const Home = () => {
  return (
    <div>
      <div className="bg-black py-3">
        <img
          src="/images/title2.png"
          alt="title"
          className="w-[200px] h-[30px] mx-auto"
        />
      </div>
      <div className="flex">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
};

export default Home;
