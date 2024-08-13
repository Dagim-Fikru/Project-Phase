import Image from "next/image";
import Card from './components/card';
import cardsData from './data/jobs.json';

export default function Home() {
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
      <div className="space-y-8">
        {cardsData.job_postings.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            company={card.company}
            location={card.about.location}
            description={card.description}
            image={card.image}
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
