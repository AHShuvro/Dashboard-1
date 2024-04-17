import Line1 from "../../Components/Line/Line1";
import Bar1 from "../../Components/Bar/Bar1";
import Pie3 from "../../Components/Pie/Pie3";
import Informations from "./Informations";
import Employee from "./Employee";
import ActiveProjects from "./ActiveProjects";
import ChattBox from "./ChattBox";

const Dashboard = () => {
    return (
        <div className="pb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  gap-6">
                <Informations />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                <div className="bg-[#F8F8F8] dark:bg-[#1C2438] px-0 py-6 min-h-[21.82rem] rounded-md">
                    <Pie3 />
                </div>
                <div className="bg-[#F8F8F8] dark:bg-[#1C2438] px-0 py-6 min-h-[21.82rem] rounded-md">
                    <Bar1 />
                </div>
                <div className="bg-[#F8F8F8] dark:bg-[#1C2438] px-0 py-6 min-h-[21.82rem] rounded-md">
                    <Line1 />
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 mt-6">
                <Employee />
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6 h-[500px]">
                <ActiveProjects/>
                <ChattBox/>
            </div>

        </div>
    );
};

export default Dashboard;