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
  return (
    <div className="lg:w-[250px] w-full bg-current lg:h-screen h-auto flex lg:flex-col flex-row items-center gap-10 p-6 border-r-2 border-current">
      {menuItems.map((item: any) => (
        <Link key={item?.id} to={item?.link}>
          <p
            className={`lg:text-xl text-center font-medium cursor-pointer uppercase tracking-widest lg:w-[140px] ${
              pathname === item?.link ? "text-teal-500" : "text-teal-50"
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
