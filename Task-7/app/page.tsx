"use client"
import Image from "next/image";
import Card from './components/card';
import { useEffect, useState } from 'react';

export default function Home() {
  const [opportunities, setOpportunities] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://akil-backend.onrender.com/opportunities/search');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // Assuming the API returns the data within a 'data' field
        setOpportunities(data.data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="p-4">
      <div className="">
        <h1 className="text-black text-4xl font-bold font-sans">Opportunities</h1>
        <p className="font-light text-gray-500">
          Showing 73 results
        </p>
      </div>
      <div className="mb-6 text-right">
        <label className="mr-2 font-light text-gray-500">Sort by:</label>
        <select className="border-gray-300 rounded border">
          <option>Most Recent</option>
          <option>Most Popular</option>
          <option>Most Relevant</option>
        </select>
      </div>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        {loading && <img src="https://i.gifer.com/ZKZg.gif" alt="Loading..." className="w-16 h-16" />}
      </div>
      {error && <p className="text-red-600 bg-red-100 p-2 rounded-md text-sm font-semibold">Error: {error}</p>}
      <div className="space-y-8">
        {opportunities.map((opportunity, index) => (
          <Card
            key={index}
            title={opportunity.title}
            company={opportunity.orgName}
            location={opportunity.location.join(', ')}
            description={opportunity.description}
            image={opportunity.logoUrl}
            tags={[
              { name: 'In Person', color: 'green', borderColor: 'green' },
              { name: 'Education', color: 'orange', borderColor: 'orange' },
              { name: 'IT', color: 'blue', borderColor: 'blue' },
            ]}
          />
        ))}
      </div>
    </div>
  );
}
