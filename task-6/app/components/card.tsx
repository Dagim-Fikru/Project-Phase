import React from 'react';
import Image from 'next/image';

interface Tag {
    name: string;
    color: string;
    borderColor: string;
}

interface CardProps {
    title: string;
    company: string;
    location: string;
    description: string;
    image: string;
    tags: Tag[];
}

const Card: React.FC<CardProps> = ({ title, company, location, description, tags,image }) => {
    return (
        <div className="bg-white shadow-lg rounded-3xl p-6 max-w-4xl mx-auto border border-gray-400 gap-2">
            <div className="flex items-center mb-4">
                <div>
                <Image src= {image} alt={title} width={50} height={50} className="rounded-full mr-4" />
                </div>

                <div>
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <p className="text-gray-500">{company} • {location}</p>
                </div>
            </div>
            <p className="text-gray-700 mb-4">{description}</p>
            <div className="flex space-x-2">
                {tags.map((tag) => (
                    <span
                        key={tag.name}
                        style={{ color: tag.color, borderColor: tag.borderColor }}
                        className="rounded-full px-3 py-1 text-sm font-semibold border border-solid"
                    >
                        {tag.name}

                    </span>
                ))}
            </div>
            <br />
        </div>
    );
};

export default Card;
