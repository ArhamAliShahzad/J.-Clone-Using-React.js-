import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignIn = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                email: data.email,
                password: data.password
            });

            // Store token and user data in localStorage
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));

            toast.success('Login successful!');
            navigate('/dashboard'); // Redirect to dashboard after login
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.error || 'Login failed. Please try again.');
            } else {
                toast.error('Network error. Please try again.');
            }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
                    <p className="text-gray-600">Sign in to access your account</p>
                </div>

                {/* Email/Password Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* Email Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                        <div className="relative">
                            <FiMail className="absolute left-3 top-3.5 text-gray-400" />
                            <input
                                type="email"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address"
                                    }
                                })}
                                className={`w-full pl-10 pr-4 py-3 rounded-xl border ${errors.email ? "border-red-500" : "border-gray-300"
                                    } focus:ring-2 focus:ring-black focus:border-transparent`}
                                placeholder="your@email.com"
                                autoComplete="email"
                            />
                        </div>
                        {errors.email && (
                            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Password Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password *</label>
                        <div className="relative">
                            <FiLock className="absolute left-3 top-3.5 text-gray-400" />
                            <input
                                type={showPassword ? "text" : "password"}
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Password must be at least 6 characters"
                                    }
                                })}
                                className={`w-full pl-10 pr-10 py-3 rounded-xl border ${errors.password ? "border-red-500" : "border-gray-300"
                                    } focus:ring-2 focus:ring-black focus:border-transparent`}
                                placeholder="••••••••"
                                autoComplete="current-password"
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-3.5 text-gray-400 hover:text-black"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FiEyeOff /> : <FiEye />}
                            </button>
                        </div>
                        {errors.password && (
                            <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full border-2 border-black ${isSubmitting
                            ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                            : "bg-white hover:bg-black text-black hover:text-white"
                            } font-semibold py-3 px-4 rounded-xl transition-all duration-300 mt-6 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2`}
                    >
                        {isSubmitting ? "Signing in..." : "Sign In"}
                    </button>
                </form>

                {/* Sign Up Link */}
                <div className="mt-6 text-center text-sm text-gray-600">
                    Don't have an account?{" "}
                    <a
                        href="/signup"
                        className="font-medium text-black hover:underline focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded"
                    >
                        Sign up
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SignIn;