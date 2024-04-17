import { FaHome } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { MdOutlineBarChart } from "react-icons/md";
import { FaChartPie } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="">
            <div className="flex flex-col items-center mb-10">
                <img className="w-[110px] md:w-[130px] mt-8 mb-4 rounded-full" src="https://i.ibb.co/m8yqS5k/90545996.png" alt="" />
                <h2 className="text-3xl font-bold text-[#343a40] dark:text-[#F7F7F7]">A H Shuvro</h2>
                <p className="font-medium text-[#343a40] dark:text-[#F7F7F7]">VIP Admin</p>
            </div>
            <div className="flex flex-col items-start pl-10">

                <div className="pl-3">
                    <Link to={'/'}><div className="flex items-center py-1 text-[#343a40] dark:text-[#F7F7F7] hover:text-[#007FFF] focus:text-[#007FFF] dark:hover:text-[#5768b0] dark:focus:text-[#5768b0] w-[17rem] cursor-pointer" tabIndex={0}>
                        <FaHome className="text-xl" />
                        <p className="ml-2">Dashboard</p>
                    </div></Link>
                </div>
                <p className="text-sm pt-4 pb-1 text-gray-400">Data</p>
                <div className="pl-3">
                    <div className="flex items-center py-1 text-[#343a40] dark:text-[#F7F7F7] hover:text-[#007FFF] focus:text-[#007FFF] dark:hover:text-[#5768b0] dark:focus:text-[#5768b0] w-[17rem] cursor-pointer" tabIndex={0}>
                        <FaUserFriends className="text-xl" />
                        <Link to={'/team'}><p className="ml-2">Manage Team</p></Link>
                    </div>
                    <div className="flex items-center py-1 text-[#343a40] dark:text-[#F7F7F7] hover:text-[#007FFF] focus:text-[#007FFF] dark:hover:text-[#5768b0] dark:focus:text-[#5768b0] w-[17rem] cursor-pointer" tabIndex={0}>
                        <MdContactMail className="text-xl" />
                        <p className="ml-2">Contact Informations</p>
                    </div>
                    <div className="flex items-center py-1 text-[#343a40] dark:text-[#F7F7F7] hover:text-[#007FFF] focus:text-[#007FFF] dark:hover:text-[#5768b0] dark:focus:text-[#5768b0] w-[17rem] cursor-pointer" tabIndex={0}>
                        <LiaFileInvoiceDollarSolid className="text-xl" />
                        <p className="ml-2">Invoices Balances</p>
                    </div>
                </div>
                <p className="text-sm pt-4 pb-1 text-gray-400">Charts</p>
                <div className="pl-3 text-[#343a40] dark:text-[#F7F7F7]">
                    <div className="flex items-center py-1 text-[#343a40] dark:text-[#F7F7F7] hover:text-[#007FFF] focus:text-[#007FFF] dark:hover:text-[#5768b0] dark:focus:text-[#5768b0] w-[17rem] cursor-pointer" tabIndex={0}>
                        <MdOutlineBarChart className="text-xl" />
                        <Link to={'/bar'}><p className="ml-2">Bar Chart</p></Link>
                    </div>
                    <Link to={'/pie'}><div className="flex items-center py-1 text-[#343a40] dark:text-[#F7F7F7] hover:text-[#007FFF] focus:text-[#007FFF] dark:hover:text-[#5768b0] dark:focus:text-[#5768b0] w-[17rem] cursor-pointer" tabIndex={0}>
                        <FaChartPie className="text-xl" />
                        <p className="ml-2">Pie Chart</p>
                    </div></Link>
                    <div className="flex items-center py-1 text-[#343a40] dark:text-[#F7F7F7] hover:text-[#007FFF] focus:text-[#007FFF] dark:hover:text-[#5768b0] dark:focus:text-[#5768b0] w-[17rem] cursor-pointer" tabIndex={0}>
                        <FaChartLine className="text-xl" />
                        <p className="ml-2">Line Chart</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;