import { useState } from 'react';
import { IoFilterSharp } from 'react-icons/io5';
import { contactInfo } from '../../Data/Data';

const Contacts = () => {
    const [filter, setFilter] = useState(false);
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [filteredData, setFilteredData] = useState(contactInfo);

    const handleDropFilter = () => {
        setFilter(!filter);
    };

    const handleInputChange1 = (event) => {
        const value = event.target.value;
        setInputValue1(value);
        filterData(value, inputValue2);
    };

    const handleInputChange2 = (event) => {
        const value = event.target.value;
        setInputValue2(value);
        filterData(inputValue1, value);
    };

    const filterData = (age, name) => {
        const filtered = contactInfo.filter(item => {
            return (item.Age.toString().includes(age) || age === '') &&
                (item.Name.toLowerCase().includes(name.toLowerCase()) || name === '');
        });
        setFilteredData(filtered);
    };

    return (
        <div id="1" className="w-full">
            <div className="bg-[#F8F8F8] dark:bg-[#1C2438] flex flex-col px-4 py-6">
                <p className="text-3xl text-[#495057] dark:text-[#ced4da] font-bold">CONTACTS</p>
                <p className="p-1 text-sm text-[#495057] dark:text-[#ced4da]">List Of Contacts For Future Reference</p>
            </div>
            <div onClick={handleDropFilter} className="flex items-center justify-center gap-1 hover:bg-gray-300 w-24 dark:hover:bg-gray-600 text-[#495057] dark:text-[#ced4da] rounded-sm my-3 p-1">
                <IoFilterSharp className="text-base font-semibold" />
                <button className="text-base font-semibold">FILTERS</button>
            </div>
            <div className={`bg-gray-300 pb-3 pl-3 pr-3 ${filter ? "" : "hidden"}`}>
                <div className="flex gap-3">
                    <label className="form-control w-full h-16 max-w-xs">
                        <div className="label">
                            <span className="label-text">Age</span>
                        </div>
                        <input type="text"
                            value={inputValue1}
                            onChange={handleInputChange1}
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-xs" />
                    </label>
                    <label className="form-control w-full h-16 max-w-xs">
                        <div className="label">
                            <span className="label-text">Name</span>
                        </div>
                        <input type="text"
                            value={inputValue2}
                            onChange={handleInputChange2}
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-xs" />
                    </label>
                </div>
            </div>
            <table className="w-full mb-16">
                <thead>
                    <tr className="bg-[#F8F8F8] dark:bg-[#1C2438]">
                        <th className="text-start text-[#6c757d] dark:text-[#ced4da] pl-4 py-3">ID</th>
                        <th className="text-start text-[#6c757d] dark:text-[#ced4da] py-3">Name</th>
                        <th className="text-start text-[#6c757d] dark:text-[#ced4da] py-3">Age</th>
                        <th className="text-start text-[#6c757d] dark:text-[#ced4da] py-3">Phone Number</th>
                        <th className="text-start text-[#6c757d] dark:text-[#ced4da] py-3">Email</th>
                        <th className="text-start text-[#6c757d] dark:text-[#ced4da] py-3">Address</th>
                        <th className="text-start text-[#6c757d] dark:text-[#ced4da] py-3">City</th>
                        <th className="text-start text-[#6c757d] dark:text-[#ced4da] py-3">ZIP Code</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredData.map((item, idx) => (
                            <tr key={idx} className="bg-[#F8F8F8] dark:bg-[#1C2438] border-y-[1px] border-[rgba(33, 37, 41, 0.5)]">
                                <td className="text-[#6c757d] dark:text-[#ced4da] pl-4 py-3">{idx + 1}</td>
                                <td className="text-[#6c757d] dark:text-[#ced4da] py-3">{item.Name}</td>
                                <td className="text-[#6c757d] dark:text-[#ced4da] py-3">{item.Age}</td>
                                <td className="text-[#6c757d] dark:text-[#ced4da] py-3">{item.PhoneNumber}</td>
                                <td className="text-[#6c757d] dark:text-[#ced4da] py-3">{item.Email}</td>
                                <td className="text-[#6c757d] dark:text-[#ced4da] py-3">{item.Address}</td>
                                <td className="text-[#6c757d] dark:text-[#ced4da] py-3">{item.City}</td>
                                <td className="text-[#6c757d] dark:text-[#ced4da] py-3">{item.ZIPCode}</td>

                            </tr>
                        ))

                    }
                </tbody>
            </table>
        </div>
    );
};

export default Contacts;
