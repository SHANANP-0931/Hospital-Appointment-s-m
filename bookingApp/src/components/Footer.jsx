
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                    <h2 className="font-semibold text-lg mb-3">Quick Links</h2>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">Appointments</a></li>
                        <li><a href="#" className="hover:underline">Doctors</a></li>
                        <li><a href="#" className="hover:underline">Departments</a></li>
                        <li><a href="#" className="hover:underline">FAQs</a></li>
                    </ul>
                </div>

                <div>
                    <h2 className="font-semibold text-lg mb-3">Services</h2>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">Emergency Care</a></li>
                        <li><a href="#" className="hover:underline">Diagnostic Tests</a></li>
                        <li><a href="#" className="hover:underline">Medical Counseling</a></li>
                        <li><a href="#" className="hover:underline">Online Consultation</a></li>
                    </ul>
                </div>

                <div>
                    <h2 className="font-semibold text-lg mb-3">Contact Us</h2>
                    <ul className="space-y-2">
                        <li>Phone: +1-234-567-890</li>
                        <li>Email: contact@hospital.com</li>
                        <li>Address: 123 Health St., Wellness City</li>
                    </ul>
                </div>

                <div>
                    <h2 className="font-semibold text-lg mb-3">Follow Us</h2>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">Facebook</a></li>
                        <li><a href="#" className="hover:underline">Twitter</a></li>
                        <li><a href="#" className="hover:underline">Instagram</a></li>
                        <li><a href="#" className="hover:underline">LinkedIn</a></li>
                    </ul>
                </div>
            </div>

            <div className="text-center mt-8">
                <p>&copy; 2024 HealthCare App. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
