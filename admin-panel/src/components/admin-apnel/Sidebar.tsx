"use client";

import { MdDashboard, MdManageAccounts } from "react-icons/md";
import { GrTransaction } from "React-icons/gr";
import { IoAnalytics, IoSettings} from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";

const menus = [
    {
        title: "Dashboard",
        icon: <MdDashboard />,
        href: "/admin/dashboard",
    },
    {
        title: "Products",
        icon: <RiShoppingCartLine />,
        href: "/admin/products",
    },
    {
        title: "Accounts",
        icon: <MdManageAccounts />,
        href: "#",
    },
    {
        title: "Transactions",
        icon: <IoAnalytics />, 
        href: "#",
    },
    {
        title: "Settings",
        icon: <IoSettings />,
        href: "#",
    },
];

const Sidebar = () => {
  return 
    <div className="bg-white w-[300px] min-h-screen p-4 shrink-0">
        <div className="flex items-center gap-4"></div>
    </div>
  
};

export default Sidebar;
