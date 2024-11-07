import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="font-inter dark:bg-blue-gray-900  duration-100">


      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-7 lg:px-2 mt-10 mb-10 min-h-[calc(100vh-432px)]">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
