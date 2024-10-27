import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            {/* Main Card Container */}
            <div style={{ width: "600px" }} className="bg-gray-200 p-8 rounded-xl shadow-lg text-center w-96">


                {/* Inner Card (White and Red) */}
                <div className="flex flex-col items-center bg-white rounded-lg shadow-md">
                    <div style={{ height: "200px" }} className="bg-blue-300 w-full py-4 rounded-t-lg">
                        <img style={{ width: "180px", height: "180px" }}
                            src="https://cdn4.iconfinder.com/data/icons/medical-162/64/medical-signs-heart-hospital-health-clinic-512.png"
                            alt="Heart"
                            className="h-20 mx-auto  "
                        />
                    </div>

                    <div className="p-6 w-full">
                        <h2 className="text-xl font-semibold mb-4">Login Here,</h2>

                        {/* Registration Form */}
                        <form className="space-y-4">

                            <div>
                                <label className="block text-left text-gray-600">
                                    Email
                                </label>
                                <input
                                    type="tel"
                                    placeholder="Enter mobile number"
                                    className="w-full px-4 py-2 border rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="block text-left text-gray-600">Password</label>
                                <input
                                    type="password"
                                    placeholder="Enter password"
                                    className="w-full px-4 py-2 border rounded-lg"
                                />
                            </div>

                            {/* Create Button */}
                            <button className="w-full bg-blue-500 text-white py-2 rounded-lg">
                                Login
                            </button>
                        </form>

                        {/* Login Link */}
                        <Link
                            to="/register"
                            className="block mt-4 text-blue-500 underline"
                        >
                            New User? Register here
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
