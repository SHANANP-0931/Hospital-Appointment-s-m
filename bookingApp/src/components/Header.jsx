// Header.jsx
import { FaHospitalSymbol } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="bg-blue-400 text-white shadow-md p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
                <FaHospitalSymbol size={32} />
                <h1 className="text-xl font-semibold">HealthCare Appointments</h1>
            </div>
            <nav className="space-x-4">
                <a href="#" className="hover:text-gray-300">Home</a>
                <a href="#" className="hover:text-gray-300">About Us</a>
                <a href="#" className="hover:text-gray-300">Contact</a>
            </nav>
        </header>
    );
};

export default Header;
