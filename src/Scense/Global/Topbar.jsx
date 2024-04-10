import PropTypes from 'prop-types';
const Topbar = ({ toggleMode }) => {
    return (
        <div className=" bg-[#EEEEEE] dark:bg-[#151929] min-h-20 flex items-center justify-between">
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            <div>
                <input onClick={toggleMode} type="checkbox" className="toggle mr-6" checked />
            </div>
        </div>
    );
};

Topbar.propTypes = {
    toggleMode: PropTypes.func.isRequired 
}

export default Topbar;