import Line1 from "../../Components/Line/Line1";
import Bar1 from "../../Components/Bar/Bar1";
import Pie3 from "../../Components/Pie/Pie3";
import Informations from "./Informations";
import Employee from "./Employee";

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

            <div className="grid grid-cols-1 lg:grid-cols-3 mt-6">
                <div id="1" className="col-span-1 lg:col-span-2 w-full">
                    <div className="bg-[#F8F8F8] dark:bg-[#1C2438] flex justify-between px-4 py-6">
                        <p className="text-lg text-[#495057] dark:text-[#ced4da] font-semibold">Active Projects</p>
                        <p className="p-1 text-sm text-[#e5f6fb] bg-[#82CA9d] rounded">Export Report</p>
                    </div>
                    <table className="w-full">
                        <tr>
                            <th className="text-start text-[#6c757d] dark:text-[#ced4da] pl-4 py-3">Project Name</th>
                            <th className="text-start text-[#6c757d] dark:text-[#ced4da] py-3">Project Load</th>
                            <th className="text-start text-[#6c757d] dark:text-[#ced4da] py-3">Progress</th>
                            <th className="text-start text-[#6c757d] dark:text-[#ced4da] py-3">Assignee</th>
                            <th className="text-start text-[#6c757d] dark:text-[#ced4da] py-3">Status</th>
                            <th className="text-start text-[#6c757d] dark:text-[#ced4da] py-3">Due Date</th>
                        </tr>
                        {
                            Array.from({ length: 5 }, (_, index) => (
                                <tr key={index} className="bg-[#F8F8F8] dark:bg-[#1C2438] border-y-[1px] border-[rgba(33, 37, 41, 0.5)]">
                                    <td className="text-[#6c757d] dark:text-[#ced4da] pl-4 py-3">EmilEmil</td>
                                    <td className="text-[#6c757d] dark:text-[#ced4da] py-3">
                                        <div className="flex gap-2">
                                            <img className="w-6 h-6 rounded-full" src="https://i.ibb.co/m8yqS5k/90545996.png" alt="" />
                                            <h4>Donald Risher</h4>
                                        </div>
                                    </td>
                                    <td className="text-[#6c757d] dark:text-[#ced4da] py-3">
                                        <progress className="progress progress-primary w-20" value="70" max="100"></progress>
                                    </td>
                                    <td className="text-[#6c757d] dark:text-[#ced4da] py-3">Linus</td>
                                    <td className="text-[#6c757d] dark:text-[#ced4da] py-3">
                                        <p className="p-1 text-xs text-[#e5f6fb] bg-[#82CA9d] rounded text-center w-2/3">In progress</p>
                                    </td>
                                    <td className="text-[#6c757d] dark:text-[#ced4da] py-3">Linus</td>
                                </tr>
                            ))
                        }
                    </table>
                </div>
                <div id="2" className="col-span-1 lg:col-span-1">

                </div>
            </div>

        </div>
    );
};

export default Dashboard;