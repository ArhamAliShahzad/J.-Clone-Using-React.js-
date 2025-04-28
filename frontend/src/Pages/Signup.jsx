import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import {
  FiCheckCircle,
  FiAlertCircle,
  FiEye,
  FiEyeOff,
  FiUser,
  FiMail,
  FiLock,
  FiArrowRight
} from "react-icons/fi";

const CreateAccount = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    setError
  } = useForm();

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  // Password strength calculator
  const calculatePasswordStrength = (pass) => {
    let strength = 0;
    if (pass.length >= 6) strength += 1;
    if (pass.match(/[A-Z]/)) strength += 1;
    if (pass.match(/[0-9]/)) strength += 1;
    if (pass.match(/[^A-Za-z0-9]/)) strength += 1;
    return strength;
  };

  const passwordStrength = calculatePasswordStrength(password);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', {
        username: data.username,
        email: data.email,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName
      });

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));

      toast.success(
        <div className="flex items-center">
          <FiCheckCircle className="text-green-500 mr-2 text-xl" />
          <div>
            <p className="font-semibold">Account Created!</p>
            <p className="text-sm">Redirecting to dashboard...</p>
          </div>
        </div>,
        { autoClose: 2000 }
      );

      setTimeout(() => navigate('/dashboard'), 2000);
    } catch (error) {
      if (error.response) {
        if (error.response.data.error.includes('email')) {
          setError('email', { message: 'Email already in use' });
        } else if (error.response.data.error.includes('username')) {
          setError('username', { message: 'Username already taken' });
        } else {
          toast.error('Registration failed. Please try again.');
        }
      } else {
        toast.error('Network error. Please try again.');
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 md:p-10 transition-all duration-300 hover:shadow-2xl"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
              Join Our Community
            </h1>
            <p className="text-gray-600">
              Create your account and unlock exclusive benefits
            </p>
          </motion.div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiUser className="text-gray-400" />
                  </div>
                  <input
                    {...register("firstName", { required: "First name is required" })}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border ${errors.firstName ? "border-red-500" : "border-gray-300"
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    placeholder="John"
                  />
                </div>
                {errors.firstName && (
                  <div className="flex items-center text-red-500 text-sm mt-1">
                    <FiAlertCircle className="mr-1" />
                    {errors.firstName.message}
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiUser className="text-gray-400" />
                  </div>
                  <input
                    {...register("lastName")}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border ${errors.lastName ? "border-red-500" : "border-gray-300"
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    placeholder="Doe"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Username *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiUser className="text-gray-400" />
                </div>
                <input
                  {...register("username", {
                    required: "Username is required",
                    minLength: {
                      value: 3,
                      message: "Username must be at least 3 characters"
                    }
                  })}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border ${errors.username ? "border-red-500" : "border-gray-300"
                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="johndoe123"
                />
              </div>
              {errors.username && (
                <div className="flex items-center text-red-500 text-sm mt-1">
                  <FiAlertCircle className="mr-1" />
                  {errors.username.message}
                </div>
              )}
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiMail className="text-gray-400" />
                </div>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border ${errors.email ? "border-red-500" : "border-gray-300"
                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="john@example.com"
                />
              </div>
              {errors.email && (
                <div className="flex items-center text-red-500 text-sm mt-1">
                  <FiAlertCircle className="mr-1" />
                  {errors.email.message}
                </div>
              )}
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiLock className="text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                    pattern: {
                      value: /^(?=.*[A-Z])(?=.*\d).{6,}$/,
                      message: "Must contain at least one uppercase letter and number"
                    },
                    onChange: (e) => setPassword(e.target.value),
                  })}
                  className={`w-full pl-10 pr-12 py-3 rounded-xl border ${errors.password ? "border-red-500" : "border-gray-300"
                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-500 hover:text-blue-600"
                >
                  {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                </button>
              </div>
              <div className="flex justify-between items-center mt-1">
                <div className="flex space-x-1">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 w-6 rounded-full transition-all duration-300 ${passwordStrength > i ?
                        (passwordStrength === 1 ? "bg-red-500" :
                          passwordStrength === 2 ? "bg-yellow-500" :
                            passwordStrength === 3 ? "bg-blue-500" : "bg-green-500") :
                        "bg-gray-200"}`}
                    />
                  ))}
                </div>
                <span className="text-xs text-gray-500">
                  {passwordStrength === 0 ? "Very Weak" :
                    passwordStrength === 1 ? "Weak" :
                      passwordStrength === 2 ? "Moderate" :
                        passwordStrength === 3 ? "Strong" : "Very Strong"}
                </span>
              </div>
              {errors.password && (
                <div className="flex items-center text-red-500 text-sm mt-1">
                  <FiAlertCircle className="mr-1" />
                  {errors.password.message}
                </div>
              )}

              <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center">
                  <FiCheckCircle
                    className={`mr-1 ${password.length >= 6 ? "text-green-500" : "text-gray-300"
                      }`}
                  />
                  <span>6+ characters</span>
                </div>
                <div className="flex items-center">
                  <FiCheckCircle
                    className={`mr-1 ${password.match(/[A-Z]/) ? "text-green-500" : "text-gray-300"
                      }`}
                  />
                  <span>Uppercase letter</span>
                </div>
                <div className="flex items-center">
                  <FiCheckCircle
                    className={`mr-1 ${password.match(/[0-9]/) ? "text-green-500" : "text-gray-300"
                      }`}
                  />
                  <span>Number</span>
                </div>
                <div className="flex items-center">
                  <FiCheckCircle
                    className={`mr-1 ${password.match(/[^A-Za-z0-9]/) ? "text-green-500" : "text-gray-300"
                      }`}
                  />
                  <span>Special char</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiLock className="text-gray-400" />
                </div>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === watch("password") || "Passwords do not match",
                  })}
                  className={`w-full pl-10 pr-12 py-3 rounded-xl border ${errors.confirmPassword ? "border-red-500" : "border-gray-300"
                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-3 text-gray-500 hover:text-blue-600"
                >
                  {showConfirmPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                </button>
              </div>
              {errors.confirmPassword && (
                <div className="flex items-center text-red-500 text-sm mt-1">
                  <FiAlertCircle className="mr-1" />
                  {errors.confirmPassword.message}
                </div>
              )}
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                {...register("terms", {
                  required: "You must accept the terms & conditions",
                })}
                className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                I agree to the{" "}
                <a href="/terms-conditions" className="text-blue-600 hover:underline">
                  Terms & Conditions
                </a> and {" "}
                <a href="/privacy-policy" className="text-blue-600 hover:underline">
                  Privacy Policy
                </a>
              </label>
            </motion.div>
            {errors.terms && (
              <div className="flex items-center text-red-500 text-sm mt-1">
                <FiAlertCircle className="mr-1" />
                {errors.terms.message}
              </div>
            )}

            <motion.div variants={itemVariants} className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleSocialLogin('google')}
                className="flex items-center justify-center w-full border-2 border-gray-300 hover:border-gray-400 bg-white text-gray-800 font-semibold py-3 px-4 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
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
            </motion.div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`
                w-full flex items-center justify-center px-6 py-4 
                border border-transparent rounded-xl bg-gradient-to-r from-black to-gray-600
                text-white font-semibold text-lg shadow-lg transition-all
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                ${isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:from-black hover:to-gray-700"}
              `}
              variants={itemVariants}
              whileHover={!isSubmitting ? { y: -2, scale: 1.02 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
            >
              {isSubmitting ? (
                <svg
                  className="animate-spin h-5 w-5 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                <>
                  Create Account
                  <FiArrowRight className="ml-2" />
                </>
              )}
            </motion.button>
          </form>

          <motion.p variants={itemVariants} className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="font-semibold text-blue-600 hover:text-blue-500 hover:underline"
            >
              Sign in here
            </Link>
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CreateAccount;