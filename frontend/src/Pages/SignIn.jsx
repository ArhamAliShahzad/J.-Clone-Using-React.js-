import React, { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { FiMail, FiLock, FiEye, FiEyeOff, FiGithub } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignIn = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm({
        mode: "onBlur",
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = useCallback(() => {
        setShowPassword(prev => !prev);
    }, []);

    const handleSocialLogin = (provider) => {
        // Replace with your backend OAuth endpoints
        window.location.href = `http://localhost:5000/api/auth/${provider}`;
    };

    const onSubmit = async (data) => {
        try {
            const response = await axios.post(
                'http://localhost:5000/api/auth/login',
                data,
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            );

            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));

            toast.success('Login successful!');
            navigate('/dashboard');
        } catch (error) {
            const errorMessage = error.response?.data?.error
                ? error.response.data.error
                : 'Network error. Please try again.';
            toast.error(errorMessage);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
                <header className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
                    <p className="text-gray-600">Sign in to access your account</p>
                </header>

                {/* Email/Password Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email *
                        </label>
                        <div className="relative">
                            <FiMail className="absolute left-3 top-3.5 text-gray-400" />
                            <input
                                id="email"
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
                                aria-invalid={errors.email ? "true" : "false"}
                            />
                        </div>
                        {errors.email && (
                            <p role="alert" className="mt-1 text-sm text-red-500">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Password Field */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                            Password *
                        </label>
                        <div className="relative">
                            <FiLock className="absolute left-3 top-3.5 text-gray-400" />
                            <input
                                id="password"
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
                                aria-invalid={errors.password ? "true" : "false"}
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-3.5 text-gray-400 hover:text-black focus:outline-none"
                                onClick={togglePasswordVisibility}
                                aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                                {showPassword ? <FiEyeOff /> : <FiEye />}
                            </button>
                        </div>
                        {errors.password && (
                            <p role="alert" className="mt-1 text-sm text-red-500">
                                {errors.password.message}
                            </p>
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
                        aria-busy={isSubmitting}
                    >
                        {isSubmitting ? "Signing in..." : "Sign In"}
                    </button>
                </form>

                {/* Social Login Buttons */}
                <div className="flex flex-col space-y-3 mb-6">
                    <button
                        onClick={() => handleSocialLogin('google')}
                        className="mt-3 flex items-center justify-center w-full border-2 border-gray-300 hover:border-gray-400 bg-white text-gray-800 font-semibold py-3 px-4 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                        aria-label="Sign in with Google"
                    >
                        <FcGoogle className="mr-2 text-xl" />
                        Continue with Google
                    </button>

                    <button
                        onClick={() => handleSocialLogin('github')}
                        className="flex items-center justify-center w-full border-2 border-gray-300 hover:border-gray-400 bg-white text-gray-800 font-semibold py-3 px-4 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                        aria-label="Sign in with GitHub"
                    >
                        <FiGithub className="mr-2 text-xl" />
                        Continue with GitHub
                    </button>
                </div>

                {/* Divider */}
                <div className="flex items-center my-6">
                    <div className="flex-1 border-t border-gray-300"></div>
                    <span className="px-3 text-gray-500 text-sm">OR</span>
                    <div className="flex-1 border-t border-gray-300"></div>
                </div>  

                {/* Sign Up Link */}
                <div className="mt-6 text-center text-sm text-gray-600">
                    Don't have an account?{" "}
                    <a
                        href="/account"
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