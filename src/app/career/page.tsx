"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FiMapPin, FiClock, FiDollarSign } from "react-icons/fi"; // Add icons for location, date, etc.

type Gig = {
  title: string;
  description: string;
  location: string;
  salary: number;
  skills: string[];
  createdAt: string;
};

const CareerPage = () => {
  const [gigs, setGigs] = useState<Gig[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchGigs = async () => {
      try {
        const response = await fetch("/api/gigs");
        const data = await response.json();
        setGigs(data);
      } catch (error) {
        console.error("Error fetching gigs:", error);
      }
    };
    fetchGigs();
  }, []);

  return (
    <>
      <section className="pb-[120px] pt-[120px]">
        <div className="grid min-h-screen grid-cols-1 gap-8 p-6 sm:grid-cols-2 lg:grid-cols-3">
          {gigs.map((gig) => (
            <div
              key={gig.title}
              className="relative transform overflow-hidden rounded-xl bg-gradient-to-b from-gray-800 to-gray-700 shadow-lg transition-transform duration-300 hover:scale-105"
            >
              {/* Image Section */}
              <div className="relative">
                <img
                  src="https://via.placeholder.com/400"
                  alt={gig.title}
                  className="h-48 w-full object-cover"
                />
                {/* Location Badge */}
                <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-gray-700 px-3 py-1 text-xs font-bold text-white shadow-md">
                  <FiMapPin />
                  {gig.location}
                </div>
              </div>

              {/* Details Section */}
              <div className="p-5 text-gray-100">
                {/* Title */}
                <h2 className="mb-3 text-2xl font-semibold">{gig.title}</h2>
                {/* Description */}
                <p className="mb-4 line-clamp-3 text-sm text-gray-400">
                  {gig.description}
                </p>

                {/* Skills */}
                <h3 className="mb-2 text-sm font-bold text-gray-200">
                  Required Skills:
                </h3>
                <ul className="flex flex-wrap gap-2 text-sm">
                  {gig.skills.map((skill, index) => (
                    <li
                      key={index}
                      className="rounded-full bg-gray-600 px-3 py-1 text-xs text-gray-100"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>

                {/* Bottom Section */}
                <div className="mt-4 flex items-center justify-between">
                  {/* Salary */}
                  <div className="flex items-center gap-1 text-gray-200">
                    <FiDollarSign />
                    <span className="text-lg font-bold">${gig.salary}</span>
                  </div>
                  {/* Date */}
                  <div className="flex items-center gap-1 text-sm text-gray-400">
                    <FiClock />
                    {new Date(gig.createdAt).toLocaleDateString()}
                  </div>
                </div>

                {/* Apply Now Button */}
                <button
                  className="mt-5 w-full rounded-md bg-indigo-600 px-4 py-2 text-white transition-colors duration-300 hover:bg-indigo-500"
                  onClick={() =>
                    router.push(
                      `/apply?pageTitle=${encodeURIComponent(gig.title)}`,
                    )
                  }
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CareerPage;
