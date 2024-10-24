import React, { useState } from 'react';
import toast from 'react-hot-toast';
import {formValidation} from '../utils/validation';

const Login = () => {
    const [loginUser, setLoginUser] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [err, setError] = useState(null);

    const handleLogin = (e) => {
        const { name, value } = e.target;
        setLoginUser({ ...loginUser, [name]: value });
    };

    //submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(" ");
        // confirm pass
        if (loginUser.password !== loginUser.confirmPassword) {
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
    
        toast.success('Login successful');
    };

    return (
        <section className="flex justify-center items-center h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 w-full max-w-sm rounded-lg shadow-md"
            >
                <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Login</h2>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                    <input
                        required
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email"
                        value={loginUser.email}
                        onChange={handleLogin}
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
                    <input
                        required
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter your password"
                        value={loginUser.password}
                        onChange={handleLogin}
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="confirmPassword" className="block text-gray-700 mb-2">Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder="Confirm your password"
                        value={loginUser.confirmPassword}
                        onChange={handleLogin}
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <p className='font-semibold text-red-600'>{err}</p>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition duration-300 ease-in-out"
                >
                    Login
                </button>
            </form>
        </section>
    );
};

export default Login;
