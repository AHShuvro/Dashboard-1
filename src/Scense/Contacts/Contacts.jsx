import { IoFilterSharp } from "react-icons/io5";

const Contacts = () => {
    return (
        <div id="1" className="w-full">
            <div className="bg-[#F8F8F8] dark:bg-[#1C2438] flex flex-col px-4 py-6">
                <p className="text-3xl text-[#495057] dark:text-[#ced4da] font-bold">CONTACTS</p>
                <p className="p-1 text-sm text-[#495057] dark:text-[#ced4da]">List Of Contacts For Future Reference</p>
            </div>
            <details className="dropdown w-full">
                <summary className="">
                    <div className="flex gap">
                        <div className='flex items-center justify-center gap-1 hover:bg-gray-300 w-24 dark:hover:bg-gray-600 text-[#495057] dark:text-[#ced4da] rounded-sm my-3 p-1'>
                            <IoFilterSharp className="text-base font-semibold" />
                            <p className="text-base font-semibold">FILTERS</p>
                        </div>
                    </div>
                </summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-gray-300 w-full">
                    <div className="flex">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Age</span>
                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Name</span>
                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </label>
                    </div>
                </ul>
            </details>

            <table className="w-full mb-16">
                <thead>
                    <tr className="bg-[#F8F8F8] dark:bg-[#1C2438]">
                        <th className="text-start text-[#6c757d] dark:text-[#ced4da] pl-4 py-3">ID</th>
                        <th className="text-start text-[#6c757d] dark:text-[#ced4da] py-3">Name</th>
                        <th className="text-start text-[#6c757d] dark:text-[#ced4da] py-3">Age</th>
                        <th className="text-start text-[#6c757d] dark:text-[#ced4da] py-3">Phone Number</th>
                        <th className="text-start text-[#6c757d] dark:text-[#ced4da] py-3">Email</th>
                        <th className="text-start text-[#6c757d] dark:text-[#ced4da] py-3">Access Level</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Array.from({ length: 20 }, (_, index) => (
                            <tr key={index} className="bg-[#F8F8F8] dark:bg-[#1C2438] border-y-[1px] border-[rgba(33, 37, 41, 0.5)]">
                                <td className="text-[#6c757d] dark:text-[#ced4da] pl-4 py-3">{index + 1}</td>
                                <td className="text-[#6c757d] dark:text-[#ced4da] py-3">Rafi Hasan</td>
                                <td className="text-[#6c757d] dark:text-[#ced4da] py-3">24</td>
                                <td className="text-[#6c757d] dark:text-[#ced4da] py-3">01300000000</td>
                                <td className="text-[#6c757d] dark:text-[#ced4da] py-3">obionekenobe@gmail.com</td>
                                <td className="text-[#6c757d] dark:text-[#ced4da] py-3">
                                    <p className="p-1 text-xs text-[#e5f6fb] bg-[#10C469] rounded text-center w-2/3">manager</p>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Contacts;