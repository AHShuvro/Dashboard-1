import { useState } from 'react';
import { team } from '../../Data/Data';

const ManageTeam = () => {
    const [checkedIndex, setCheckedIndex] = useState(null);

    const handleCheckboxChange = (index) => {
        if (selectAll) {
            setCheckedIndex(null)
        }
        else {
            if (index === checkedIndex) {
                setCheckedIndex(null);
            } else {
                setCheckedIndex(index);
            }
        }

    };

    const [selectAll, setSelectAll] = useState(false);

    const handleSelectAllChange = () => {
        setSelectAll(!selectAll);
    };

    return (
        <div id="1" className="w-full overflow-y-scroll">
            <div className="bg-[#F8F8F8] dark:bg-[#1C2438] flex flex-col px-4 py-6">
                <p className="text-3xl text-[#495057] dark:text-[#ced4da] font-bold">TEAM</p>
                <p className="p-1 text-sm text-[#495057] dark:text-[#ced4da]">Managing The Team Member</p>
            </div>
            
            <table className="w-full mb-10">
                <thead>
                    <tr>
                        <div className="form-control w-0 px-3">
                            <label className="cursor-pointer label">
                                <input type="checkbox" className="checkbox checkbox-accent" onChange={handleSelectAllChange} checked={selectAll} />
                            </label>
                        </div>
                        <th className="text-start text-[#6c757d] dark:text-[#ced4da] py-3">ID</th>
                        <th className="text-start text-[#6c757d] dark:text-[#ced4da] py-3">Name</th>
                        <th className="text-start text-[#6c757d] dark:text-[#ced4da] py-3">Age</th>
                        <th className="text-start text-[#6c757d] dark:text-[#ced4da] py-3">Phone Number</th>
                        <th className="text-start text-[#6c757d] dark:text-[#ced4da] py-3">Email</th>
                        <th className="text-start text-[#6c757d] dark:text-[#ced4da] py-3">Access Level</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        team.map( (item, index) => (
                            <tr key={index} className="bg-[#F8F8F8] dark:bg-[#1C2438] border-y-[1px] border-[rgba(33, 37, 41, 0.5)]">
                                <div className="form-control w-0 px-3">
                                    <label className="cursor-pointer label">
                                        <input type="checkbox" className="checkbox checkbox-accent" onChange={() => handleCheckboxChange(index)} checked={selectAll ? selectAll : checkedIndex === index} />
                                    </label>
                                </div>
                                <td className="text-[#6c757d] dark:text-[#ced4da] py-3">{index + 1}</td>
                                <td className="text-[#6c757d] dark:text-[#ced4da] py-3">{item.name}</td>
                                <td className="text-[#6c757d] dark:text-[#ced4da] py-3">{item.age}</td>
                                <td className="text-[#6c757d] dark:text-[#ced4da] py-3">{item.phoneNumber}</td>
                                <td className="text-[#6c757d] dark:text-[#ced4da] py-3">{item.email}</td>
                                <td className="text-[#6c757d] dark:text-[#ced4da] py-3">
                                    <p className="p-1 text-xs text-[#e5f6fb] bg-[#10C469] rounded text-center w-2/3">{item.accessLevel}</p>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageTeam;
