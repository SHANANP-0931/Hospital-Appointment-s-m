import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">

            <Header />


            <main className="flex-grow space-y-20 ">
                {/* Landing Section */}
                <section className="flex justify-center items-center p-12 bg-white">
                    <div className="w-full max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-10">
                        <div className="lg:w-1/2 space-y-6">
                            <h1 className="text-5xl font-extrabold font-serif text-blue-900">
                                Book Your Appointment with Ease
                            </h1>
                            <p className="text-l inline-table italic font-thin text-black">
                                "Manage your doctor appointments and medical records all in one place. Stay connected with healthcare professionals effortlessly.""
                            </p>
                            <button
                                onClick={() => (window.location.href = "/register")}
                                className="bg-blue-300 text-white px-8 py-3 rounded-md hover:bg-blue-500"
                            >
                                Explore Now
                            </button>
                        </div>

                        <div className="lg:w-1/2">
                            <img
                                src='https://www.pngkey.com/png/full/100-1007126_patient-persona-doctor-and-patient-animated.png'
                                alt="Landing"
                                className="w-full rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section className="p-16 bg-white">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6">About Us</h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                We provide seamless healthcare services, helping you book appointments easily and manage your medical records efficiently. Our platform ensures smooth interaction between patients and healthcare professionals.
                            </p>
                        </div>
                        <div>
                            <img
                                src='https://purepng.com/public/uploads/large/purepng.com-doctors-and-nursesdoctorsdoctors-and-nursesclinicianmedical-practitionernotepad-1421526857435avyjw.png'
                                alt="About Us"
                                className="w-full rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </section>


                <section className="p-20 bg-gray-100">
                    <h2 className="text-5xl font-bold text-center mb-16 text-blue-600">What Our Doctors Say</h2>
                    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                        {[
                            { name: "Dr. Emily", img: "https://svitlo.app/img/doctor_round.png", review: "Managing patient records has never been easier.", stars: 5 },
                            { name: "Dr. James", img: "https://www.danielshealth.ca/sites/danielshealth.ca/files/Embedded%20Page%20Images/Circle%20Images%20-%20Healthcare/Circle-Doctor-Stephen.png", review: "The platform has streamlined my workflow.", stars: 4 },
                            { name: "Dr. Olivia", img: "https://themarketingcrowd.ie/wp-content/uploads/2017/01/Round-Profile-Pic.png", review: "Patient interaction has improved significantly.", stars: 5 },
                            { name: "Dr. Ethan", img: "https://www.dietdoctor.com/wp-content/uploads/2018/12/doctors-800-rounded1.png", review: "A great tool for organizing appointments.", stars: 3 },
                        ].map((doctor, index) => (
                            <div key={index} className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center space-y-6">
                                <img
                                    src={doctor.img}
                                    alt={doctor.name}
                                    className="w-24 h-24 rounded-full object-cover"
                                />
                                <div className="text-center">
                                    <h3 className="text-2xl font-semibold">{doctor.name}</h3>
                                    <p className="text-gray-600 mt-2">{doctor.review}</p>
                                    <div className="mt-2 flex">
                                        {[...Array(doctor.stars)].map((_, starIndex) => (
                                            <span key={starIndex} className="text-yellow-500 text-xl">★</span>
                                        ))}
                                        {[...Array(5 - doctor.stars)].map((_, starIndex) => (
                                            <span key={starIndex} className="text-gray-300 text-xl">★</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>


                <section className="p-20 bg-white">
                    <h2 className="text-5xl font-bold text-center mb-16 text-blue-600">What Our Patients Say</h2>
                    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                        {[
                            { name: "Alice", img: "https://i0.wp.com/www.theartofpureliving.com/wp-content/uploads/2017/08/circle-profile-picture-04.png?resize=1024%2C1024&ssl=1", review: "Booking appointments has never been simpler!", stars: 5 },
                            { name: "John", img: "https://oliver-andersen.se/wp-content/uploads/2018/03/cropped-Profile-Picture-Round-Color.png", review: "The service was smooth and easy to use.", stars: 4 },
                            { name: "Sophia", img: "https://domo7.sg/wp-content/uploads/2020/01/profile-picture-june-2015-corner-rounded.png", review: "I love the reminders for upcoming visits!", stars: 5 },
                            { name: "Michael", img: "https://themusclemedics.com/wp-content/uploads/2018/04/Circle-Profile-PNG-1024x1024.png", review: "Highly recommend for managing health records.", stars: 3 },
                        ].map((patient, index) => (
                            <div key={index} className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center space-y-6">
                                <img
                                    src={patient.img}
                                    alt={patient.name}
                                    className="w-24 h-24 rounded-full object-cover"
                                />
                                <div className="text-center">
                                    <h3 className="text-2xl font-semibold">{patient.name}</h3>
                                    <p className="text-gray-600 mt-2">{patient.review}</p>
                                    <div className="mt-2 flex">
                                        {[...Array(patient.stars)].map((_, starIndex) => (
                                            <span key={starIndex} className="text-yellow-500 text-xl">★</span>
                                        ))}
                                        {[...Array(5 - patient.stars)].map((_, starIndex) => (
                                            <span key={starIndex} className="text-gray-300 text-xl">★</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>


            </main>


            <Footer />
        </div>
    );
};

export default Home;
