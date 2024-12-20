import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <div className="font-inter dark:bg-blue-gray-900  duration-100">

      <NavBar />
      {/* Main Content */}
      <div className="mx-auto max-w-[1332px] px-3 md:px-7 lg:px-2 mt-10 mb-10 min-h-[calc(100vh-432px)]">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default Main;
