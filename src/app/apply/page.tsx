"use client";

import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import React from "react";

const ApplyPage = () => {
  const searchParams = useSearchParams(); // Access query parameters
  const gigTitle = searchParams.get("gigTitle"); // Extract gigTitle

  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6">
      <h1 className="mb-4 text-3xl font-bold">Apply for {gigTitle}</h1>
      <p className="mb-8 ">
        Fill in the application form below to apply for the position.
      </p>

      <form className="w-full max-w-md rounded-md p-6 shadow-md">
        {/* Name Input */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full rounded-md bg-gray-700 px-3 py-2 text-gray-200 focus:outline-none focus:ring focus:ring-indigo-500"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full rounded-md bg-gray-700 px-3 py-2 text-gray-200 focus:outline-none focus:ring focus:ring-indigo-500"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Message/Notes */}
        <div className="mb-4">
          <label htmlFor="message" className="mb-2 block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            className="w-full rounded-md bg-gray-700 px-3 py-2 text-gray-200 focus:outline-none focus:ring focus:ring-indigo-500"
            rows={4}
            placeholder="Add a message or additional details"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full rounded-md bg-indigo-600 py-2 text-white transition duration-300 hover:bg-indigo-500"
        >
          Submit Application
        </button>
      </form>

      {/* Back Button */}
      <button
        className="mt-6 text-indigo-500 hover:underline"
        onClick={() => router.back()}
      >
        Go Back
      </button>
    </div>
  );
};

export default ApplyPage;
