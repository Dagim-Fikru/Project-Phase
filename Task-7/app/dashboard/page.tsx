import React from 'react';
import { FaCalendarCheck, FaCheckCircle, FaMapMarkerAlt, FaRegCalendarCheck } from 'react-icons/fa';
import { RiAddCircleLine } from 'react-icons/ri';
import { SiFireship } from 'react-icons/si';
import jobPostings from '../data/jobs.json';
const Dashboard: React.FC = () => {
    const job = jobPostings.job_postings[1];
    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Main Content */}
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
                                {job.responsibilities.map((responsibility, index) => (
                                    <li key={index} className="flex items-start">
                                        <FaCheckCircle className="text-green-500 mt-1 mr-2" />
                                        <p className="text-gray-700">{responsibility}</p>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900">Ideal Candidate</h2>
                            <ul className="mt-4 list-disc pl-5 text-gray-700 space-y-2">
                                <li><strong>Age:</strong> {job.ideal_candidate.age}</li>
                                <li><strong>Gender:</strong> {job.ideal_candidate.gender}</li>
                                {job.ideal_candidate.traits.map((trait, index) => (
                                    <li key={index}><strong>{trait.split(":")[0]}:</strong> {trait.split(":")[1]}</li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900">When & Where</h2>
                            <div className="flex items-center mt-4 text-gray-700">
                                <div className="mr-2 rounded-full border border-gray-400 p-2 bg-white text-blue-500">
                                    <FaMapMarkerAlt className="text-lg" />
                                </div>
                                <p>{job.when_where
                                }</p>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
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
                                        <p className='font-bold'>{job.about.posted_on}</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="mr-2 rounded-full border border-gray-400 p-2 bg-white text-blue-500">
                                        <SiFireship className="text-lg" />
                                    </div>
                                    <div>
                                        <p className="w-24">Deadline:</p>
                                        <p className='font-bold'>{job.about.deadline}</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="mr-2 rounded-full border border-gray-400 p-2 bg-white text-blue-500">
                                        <FaMapMarkerAlt className="text-lg" />
                                    </div>
                                    <div>
                                        <p className="w-24">Location:</p>
                                        <p className='font-bold'>{job.about.location}</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="mr-2 rounded-full border border-gray-400 p-2 bg-white text-blue-500">
                                        <FaRegCalendarCheck className="text-lg" />
                                    </div>
                                    <div>
                                        <p className="w-24">Start Date:</p>
                                        <p className='font-bold'>{job.about.start_date}</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="mr-2 rounded-full border border-gray-400 p-2 bg-white text-blue-500">
                                        <FaCalendarCheck className="text-lg" />
                                    </div>
                                    <div>
                                        <p className="w-24">End Date:</p>
                                        <p className='font-bold'>{job.about.end_date}</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900">Categories</h2>
                            <div className="mt-4 space-x-2">
                                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full">{job.about.categories[0]}</span>
                                <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">{job.about.categories[1]}</span>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900">Required Skills</h2>
                            <div className="mt-4 space-x-2">
                                {job.about.required_skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
