"use client"
import React from 'react';
import { FaCalendarCheck, FaCheckCircle, FaMapMarkerAlt, FaRegCalendarCheck } from 'react-icons/fa';
import { RiAddCircleLine } from 'react-icons/ri';
import { SiFireship } from 'react-icons/si';
import jobPostings from '../data/jobs.json';
import { useEffect, useState } from 'react';
interface Job {
    description: string;
    responsibilities: string;
    idealCandidate: string;
    whenAndWhere: string;
    datePosted: string;
    deadline: string;
    location: string;
    startDate: string;
    endDate: string;
    categories: string[];
    requiredSkills: string[];

}
const Dashboard: React.FC = () => {
    const [job, setJob] = useState<Job | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://akil-backend.onrender.com/opportunities/654e1e8353a7667de6ef59f2');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                // Assuming the API returns the data within a 'data' field
                setJob(data.data);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    return (

        <div className="p-8 bg-gray-50 min-h-screen">
            <div className="fixed inset-0 flex items-center justify-center z-50">
                {loading && <img src="https://i.gifer.com/ZKZg.gif" alt="Loading..." className="w-16 h-16" />}
            </div>
            {error && <p className="text-red-600 bg-red-100 p-2 rounded-md text-sm font-semibold">Error: {error}</p>}
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Main Content */}
                    {job && (
                        <div className="md:col-span-2 space-y-8">
                            <section>
                                <h2 className="text-2xl font-bold text-gray-900">Description</h2>
                                <p className="text-gray-700 mt-4">
                                    {job.description}
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900">Responsibilities</h2>
                                <ul className="mt-4 space-y-2">
                                    {job.responsibilities && job.responsibilities.split('\n').map((responsibility: string, index: number) => (
                                        <li key={index} className="flex items-start">
                                            <FaCheckCircle className="text-green-500 mt-1 mr-2" />
                                            <p className="text-gray-700">{responsibility.trim()}</p>
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900">Ideal Candidate</h2>
                                <p className="text-gray-700 mt-4">
                                    {job.idealCandidate}
                                </p>

                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900">When & Where</h2>
                                <div className="flex items-center mt-4 text-gray-700">
                                    <div className="mr-2 rounded-full border border-gray-400 p-2 bg-white text-blue-500">
                                        <FaMapMarkerAlt className="text-lg" />
                                    </div>
                                    <p>{job.whenAndWhere
                                    }</p>
                                </div>
                            </section>
                        </div>
                    )}

                    {/* Sidebar */}
                    {job && (
                        <div className="space-y-8">
                            <section>
                                <h2 className="text-xl font-bold text-gray-900">About</h2>
                                <div className="mt-4 space-y-2 text-gray-700">
                                    <div className="flex items-center">
                                        <div className="mr-2 rounded-full border border-gray-400 p-2 bg-white text-blue-500">
                                            <RiAddCircleLine className="text-lg" />
                                        </div>
                                        <div>
                                            <p className="w-24">Posted On:</p>
                                            <p className='font-bold'>{new Date(job.datePosted).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="mr-2 rounded-full border border-gray-400 p-2 bg-white text-blue-500">
                                            <SiFireship className="text-lg" />
                                        </div>
                                        <div>
                                            <p className="w-24">Deadline:</p>
                                            <p className='font-bold'>{new Date(job.deadline).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="mr-2 rounded-full border border-gray-400 p-2 bg-white text-blue-500">
                                            <FaMapMarkerAlt className="text-lg" />
                                        </div>
                                        <div>
                                            <p className="w-24">Location:</p>
                                            <p className='font-bold'>{job.location[0]}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="mr-2 rounded-full border border-gray-400 p-2 bg-white text-blue-500">
                                            <FaRegCalendarCheck className="text-lg" />
                                        </div>
                                        <div>
                                            <p className="w-24">Start Date:</p>
                                            <p className='font-bold'>{new Date(job.startDate).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="mr-2 rounded-full border border-gray-400 p-2 bg-white text-blue-500">
                                            <FaCalendarCheck className="text-lg" />
                                        </div>
                                        <div>
                                            <p className="w-24">End Date:</p>
                                            <p className='font-bold'>{new Date(job.endDate).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-gray-900">Categories</h2>
                                <div className="mt-4 space-x-2">
                                    {job.categories.map((category, index) => (
                                        <span key={index} className={`bg-${index === 0 ? 'yellow' : 'green'}-100 text-${index === 0 ? 'yellow' : 'green'}-800 text-xs font-medium px-3 py-1 rounded-full`}>
                                            {category}
                                        </span>
                                    ))}
                                </div>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-gray-900">Required Skills</h2>
                                <div className="mt-4 space-x-2">
                                    {job.requiredSkills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </section>

                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
