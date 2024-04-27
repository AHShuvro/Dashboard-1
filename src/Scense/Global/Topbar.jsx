import PropTypes from 'prop-types';
import { FaBarsStaggered } from "react-icons/fa6";
import Sidebar from './Sidebar';

const Topbar = ({ toggleMode }) => {
    return (
        <div className=" bg-[#EEEEEE] dark:bg-[#151929] min-h-20 flex items-center justify-between gap-2">
            <div>
                <div className="drawer">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <label htmlFor="my-drawer">
                            <FaBarsStaggered className='dark:text-[#EEEEEE] lg:hidden' />
                        </label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu w-80 min-h-full bg-[#EEEEEE] dark:bg-[#151929] text-base-content">
                            <Sidebar/>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-4 text-3xl sm:text-4xl'>
            <input type="text" placeholder="Type here" className="input input-bordered w-full dark:bg-[#1C2438] max-w-xs" />
                <input onClick={toggleMode} type="checkbox" className="toggle mr-6" checked />
            </div>


        </div>
    );
};

Topbar.propTypes = {
    toggleMode: PropTypes.func.isRequired
}

export default Topbar;