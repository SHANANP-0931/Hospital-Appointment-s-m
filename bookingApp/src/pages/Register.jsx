import { React, useState } from "react";

import { Link, useNavigate } from 'react-router-dom';
import { registerAPI } from '../servieces/allapi';


const Register = () => {
    // const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const [userData, setuserData] = useState({
        name: "", email: "", password: ""
    })
    console.log(userData);

    const handleRegister = async (e) => {
        e.preventDefault()
        if (userData.name && userData.email && userData.password) {
            // api call


            try {
                const result = await registerAPI(userData)
                if (result.status == 200) {
                    alert(`WELCOME ${result?.data?.name}...please login to explore `)
                    setuserData({ name: "", email: "", password: "" })
                    navigate('/login')
                } else {
                    if (result.response.status == 406) {
                        alert(result.response.data)
                        setuserData({ name: "", email: "", password: "" })
                    }
                }
            } catch (err) {

            }
        } else {
            alert("please fill ,")
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            {/* Main Card Container */}
            <div style={{ width: "600px" }} className="bg-gray-200 p-8 rounded-xl shadow-lg text-center w-96">
                <Link
                    to="/doc-reg"
                    className="text-blue-500 underline mb-4  block"
                >
                    You are a Doctor? Register here
                </Link>

                {/* Inner Card (White and Red) */}
                <div className="flex flex-col items-center bg-white rounded-lg shadow-md">
                    <div style={{ height: "200px" }} className="bg-blue-300 w-full py-4 rounded-t-lg">
                        <img style={{ width: "180px", height: "180px" }}
                            src="https://cdn0.iconfinder.com/data/icons/medical-2-solid/128/boy-patient_boy_patient_pills-512.png"
                            alt="Heart"
                            className="h-20 mx-auto  "
                        />
                    </div>

                    <div className="p-6 w-full">
                        <h2 className="text-xl font-semibold mb-4">Patient Registration</h2>

                        {/* Registration Form */}
                        <form className="space-y-4">
                            <div>
                                <label className="block text-left text-gray-600">Name</label>
                                <input value={userData.name} onChange={e => setuserData({ ...userData, name: e.target.value })}
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full px-4 py-2 border rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="block text-left text-gray-600">
                                    Email
                                </label>
                                <input value={userData.email} onChange={e => setuserData({ ...userData, email: e.target.value })}
                                    type="email"
                                    placeholder="Enter mobile number"
                                    className="w-full px-4 py-2 border rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="block text-left text-gray-600">Password</label>
                                <input value={userData.password} onChange={e => setuserData({ ...userData, password: e.target.value })}
                                    type="password"
                                    placeholder="Enter password"
                                    className="w-full px-4 py-2 border rounded-lg"
                                />
                            </div>

                            {/* Create Button */}
                            <button onClick={handleRegister} className="w-full bg-blue-500 text-white py-2 rounded-lg">
                                Create
                            </button>
                        </form>

                        {/* Login Link */}
                        <Link
                            to="/login"
                            className="block mt-4 text-blue-500 underline"
                        >
                            Already have an account? Login here
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
