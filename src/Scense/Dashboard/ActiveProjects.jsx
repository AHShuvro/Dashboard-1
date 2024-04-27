import { activeProjects } from "../../Data/Data";

const ActiveProjects = () => {
    return (
        <div id="1" className="col-span-1 xl:col-span-2 w-full overflow-y-scroll">
            <div className="bg-[#F8F8F8] dark:bg-[#1C2438] flex justify-between px-4 py-6">
                <p className="text-lg text-[#495057] dark:text-[#ced4da] font-semibold">Active Projects</p>
                <p className="p-1 text-sm text-[#e5f6fb] bg-[#10C469] rounded">Export Report</p>
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
                    activeProjects.map((item, idx) => (
                        <tr key={idx} className="bg-[#F8F8F8] dark:bg-[#1C2438] border-y-[1px] border-[rgba(33, 37, 41, 0.5)]">
                            <td className="text-[#6c757d] dark:text-[#ced4da] pl-4 py-3">{item.ProjectName}</td>
                            <td className="text-[#6c757d] dark:text-[#ced4da] py-3">
                            <td className="text-[#6c757d] dark:text-[#ced4da] py-3">{item.ProjectLoad}</td>
                            </td>
                            <td className="text-[#6c757d] dark:text-[#ced4da] py-3">
                                <div className="flex flex-col w-20 gap-2">
                                    <div className={`flex h-1 w-full  items-center justify-center rounded-full bg-gray-300 dark:bg-[#F7F7F7]`}>
                                        <div style={{ width: `${item.Progress}%` }} className={`transition-width mr-auto h-1 w-0 rounded-full  bg-[#10C469] duration-500`} ></div>
                                    </div>
                                </div>
                            </td>
                            <td className="text-[#6c757d] dark:text-[#ced4da] py-3">
                                <div className="flex gap-2">
                                    <img className="w-6 h-6 rounded-full" src="https://i.ibb.co/m8yqS5k/90545996.png" alt="" />
                                    <h4>{item.Assignee}</h4>
                                </div>
                            </td>

                            <td className="text-[#6c757d] dark:text-[#ced4da] py-3">
                                <p className="p-1 text-xs text-[#e5f6fb] bg-[#10C469] rounded text-center w-2/3">{item.Status}</p>
                            </td>
                            <td className="text-[#6c757d] dark:text-[#ced4da] py-3">{item.DueDate}</td>
                        </tr>
                    ))
                }
            </table>
        </div>
    );
};

export default ActiveProjects;