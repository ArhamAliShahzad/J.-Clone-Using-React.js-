// pages/CreateAccount.jsx
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Captcha from "../components/Captcha";
import PasswordStrength from "../components/PasswordStrength";

const CreateAccount = () => {
  const { register, handleSubmit, formState: { errors }, watch, setError } = useForm();
  const [captchaValue, setCaptchaValue] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (data) => {
    if (data.captcha !== captchaValue) {
      setError("captcha", { message: "Invalid CAPTCHA code" });
      return;
    }
    console.log("Account created:", data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-2xl p-8 transition-all duration-300 hover:shadow-3xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Create Your Account
          </h1>
          <p className="text-gray-600">
            Join our community and unlock exclusive benefits
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Fields */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name *
              </label>
              <input
                {...register("firstName", { required: "First name is required" })}
                className={`w-full px-4 py-3 rounded-xl border ${errors.firstName ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                placeholder="John"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name *
              </label>
              <input
                {...register("lastName", { required: "Last name is required" })}
                className={`w-full px-4 py-3 rounded-xl border ${errors.lastName ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                placeholder="Doe"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              className={`w-full px-4 py-3 rounded-xl border ${errors.email ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password *
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
                onChange: (e) => setPassword(e.target.value),
              })}
              className={`w-full px-4 py-3 rounded-xl border ${errors.password ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              placeholder="••••••••"
            />
            <PasswordStrength password={password} />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password *
            </label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
              className={`w-full px-4 py-3 rounded-xl border ${errors.confirmPassword ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              placeholder="••••••••"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* CAPTCHA */}
          <div>
            <Captcha setCaptchaValue={setCaptchaValue} />
            <input
              type="text"
              {...register("captcha", {
                required: "CAPTCHA verification is required",
              })}
              className={`w-full mt-4 px-4 py-3 rounded-xl border ${errors.captcha ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              placeholder="Enter CAPTCHA code"
            />
            {errors.captcha && (
              <p className="text-red-500 text-sm mt-1">
                {errors.captcha.message}
              </p>
            )}
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                {...register("terms", {
                  required: "You must accept the terms and conditions",
                })}
                className="w-4 h-4 border cursor-pointer border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
              />
            </div>
            <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
              I agree to the{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Terms and Conditions
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>
            </label>
          </div>
          {errors.terms && (
            <p className="text-red-500 text-sm mt-1">
              {errors.terms.message}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full border-2 border-black bg-white hover:bg-black text-black hover:text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 active:scale-[0.98] active:bg-gray-900"
          >
            Create Account
          </button>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a
              href="/signin"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Sign in here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;