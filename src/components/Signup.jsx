import React, { useState } from 'react';
import toast from 'react-hot-toast';
import {formValidation} from '../utils/validation'

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [err, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // handle submit 
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(" ");
        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match!");
            return;
        }

        const responseError = formValidation(formData.email, formData.password);
        if (responseError) {
            setError(responseError);
            setTimeout(() => {
                setError(" ");
            }, 4000);
            return;
        }
        if(!responseError){
            toast.success('signup successful')
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form className="bg-white p-6 w-full max-w-md rounded-lg shadow-md" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Register</h2>

                <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">User Name</label>
                    <input
                        required
                        type="text"
                        id='name'
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                    <input
                     
                        type="email"
                        name="email"
                        id='email'
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="password" className="block text-gray-700 mb-1">Password</label>
                    <input
                     required
                        type="password"
                        name="password"
                        id='password'
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="confirmPassword" className="block text-gray-700 mb-1">Confirm Password</label>
                    <input
                     required
                        type="password"
                        name="confirmPassword"
                        id='confirmPassword'
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="w-full p-3 mb-6 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <p className='font-semibold text-red-600'>{err}</p>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition duration-300 ease-in-out"
                >
                    Register
                </button>
            </form>
        </div>
    );
};

export default Signup;
