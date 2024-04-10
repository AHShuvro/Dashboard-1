import { HiOutlineDotsVertical } from "react-icons/hi";
import { MdOutlineArrowOutward } from "react-icons/md";
import Pie1 from "../../Components/Pie/Pie1";
import Pie2 from "../../Components/Pie/Pie2";
const Informations = () => {
    return (
        <>
            <div className="bg-[#F8F8F8] dark:bg-[#1C2438] p-6 rounded-md">
                <div className="flex items-center justify-between mb-4">
                    <p className="text-[#343a40] dark:text-[#F7F7F7] font-semibold">Total Revenue</p>
                    <HiOutlineDotsVertical className="text-[#343a40] dark:text-[#F7F7F7] font-semibold" />
                </div>
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-[#343a40] dark:text-[#F7F7F7] text-[1.87rem]">256</p>
                        <p className="text-[#0008] dark:text-[#F7F7F7] font-semibold">Revenue today</p>
                    </div>
                    <Pie1 />
                </div>
            </div>
            <div className="bg-[#F8F8F8] dark:bg-[#1C2438] p-6 rounded-md">
                <div className="flex items-center justify-between mb-4">
                    <p className="text-[#343a40] dark:text-[#F7F7F7] font-semibold">Sales Analytics</p>
                    <HiOutlineDotsVertical className="text-[#343a40] dark:text-[#F7F7F7] font-semibold" />
                </div>
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-[#343a40] dark:text-[#F7F7F7] text-[1.87rem]">8451</p>
                        <p className="text-[#0008] dark:text-[#F7F7F7] font-semibold">Revenue today</p>
                    </div>
                    <div className="w-14 h-5 bg-[#10C469] flex justify-center items-center gap-1 rounded-full">
                        <p className="text-[12px] text-[#F7F7F7]">32%</p>
                        <MdOutlineArrowOutward className="text-[12px] text-[#F7F7F7]" />
                    </div>
                </div>
                <div className="w-full h-1 bg-[#10C469] mt-4"></div>
            </div>
            <div className="bg-[#F8F8F8] dark:bg-[#1C2438] p-6 rounded-md">
                <div className="flex items-center justify-between mb-4">
                    <p className="text-[#343a40] dark:text-[#F7F7F7] font-semibold">Statistics</p>
                    <HiOutlineDotsVertical className="text-[#343a40] dark:text-[#F7F7F7] font-semibold" />
                </div>
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-[#343a40] dark:text-[#F7F7F7] text-[1.87rem]">1269</p>
                        <p className="text-[#0008] dark:text-[#F7F7F7] font-semibold">Revenue today</p>
                    </div>
                    <Pie2 />
                </div>
            </div>
            <div className="bg-[#F8F8F8] dark:bg-[#1C2438] p-6 rounded-md">
                <div className="flex items-center justify-between mb-4">
                    <p className="text-[#343a40] dark:text-[#F7F7F7] font-semibold">Sales Analytics</p>
                    <HiOutlineDotsVertical className="text-[#343a40] dark:text-[#F7F7F7] font-semibold" />
                </div>
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-[#343a40] dark:text-[#F7F7F7] text-[1.87rem]">128</p>
                        <p className="text-[#0008] dark:text-[#F7F7F7] font-semibold">Revenue today</p>
                    </div>
                    <div className="w-14 h-5 bg-[#8884D8] flex justify-center items-center gap-1 rounded-full">
                        <p className="text-[12px] text-[#F7F7F7]">32%</p>
                        <MdOutlineArrowOutward className="text-[12px] text-[#F7F7F7]" />
                    </div>
                </div>
                <div className="w-full h-1 bg-[#8884D8] mt-4"></div>
            </div>
        </>
    );
};

export default Informations;