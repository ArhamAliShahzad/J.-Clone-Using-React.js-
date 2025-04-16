import React from "react";
import { useForm } from "react-hook-form";

const TrackingInfo = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Tracking Order:", data.orderNumber);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Breadcrumb */}
      <nav className="text-gray-600 text-sm mb-4">
        <span className="text-gray-500">HOME </span> &gt; <span className="font-semibold">TRACK MY ORDER</span>
      </nav>

      {/* Heading */}
      <h2 className="text-2xl font-semibold">TRACK MY ORDER</h2>
      <p className="text-gray-600 mt-1">
        Please enter the required information below to track your order status.
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
        <div className="mb-4">
          <label htmlFor="orderNumber" className="block text-lg font-semibold">
            Order Number
          </label>
          <input
            id="orderNumber"
            type="text"
            {...register("orderNumber", { required: "Order Number is required" })}
            className="mt-2 w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-black"
            placeholder="Enter your order number"
          />
          {errors.orderNumber && (
            <p className="text-red-500 text-sm mt-1">{errors.orderNumber.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="px-6 py-3 border border-black text-black font-semibold rounded-md hover:bg-black hover:text-white transition-all"
        >
          TRACK ORDER
        </button>
      </form>
    </div>
  );
};

export default TrackingInfo;
