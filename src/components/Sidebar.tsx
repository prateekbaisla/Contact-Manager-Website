import { Link, useLocation } from "react-router-dom";

const menuItems = [
  {
    id: 1,
    name: "Contacts",
    link: "/contacts",
  },
  {
    id: 2,
    name: "Charts and Maps",
    link: "/",
  },
];

const Sidebar = () => {
  const { pathname } = useLocation();
  // console.log(pathname);

  return (
    <div className="lg:w-[250px] w-full bg-gradient-to-r from-indigo-500 to-blue-500 lg:h-screen h-[56px] flex lg:flex-col flex-row lg:justify-center justify-center items-center gap-4 lg:gap-10">
    {menuItems.map((item: any) => (
      <Link key={item?.id} to={item?.link}>
        <p
          className={`lg:text-lg text-sm font-medium cursor-pointer uppercase tracking-widest lg:w-[140px] w-full text-center transition-all duration-300 ease-in-out transform ${
            pathname === item?.link ? "text-white border-b-2 lg:border-b-0 lg:border-l-2 border-black" : "text-gray-700 hover:text-black hover:scale-105"
          }`}
        >
          {item?.name}
        </p>
      </Link>
    ))}
  </div>
  


  );
};

export default Sidebar;
