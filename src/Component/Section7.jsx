import React from 'react';
import people4 from '../assets/Images/4people.jpg';
import people5 from '../assets/Images/5people.jpg';
import people6 from '../assets/Images/6people.jpg';

const blogPosts = [
    {
        id: 1,
        date: '07 / 04',
        title: 'Benefits Of Async/Await',
        description: 'Asynchronous functions are a good and bad thing in JavaScript. The good side is that asynchronous functions are non-blocking and...',
        image: people4
    },
    {
        id: 2,
        date: '07 / 17',
        title: 'Key Considerations Of IPaaS',
        description: 'Digital transformation requires cloud appropriate adoption, legacy IT systems modernization, and Agile-based methodologies for faster...',
        image: people5
    },
    {
        id: 3,
        date: '07 / 22',
        title: 'Hibernate Query Language',
        description: 'In this tutorial, we will discuss the Hibernate Query Language. HQL is an object-oriented query language. Hibernate Query...',
        image: people6
    }
];

const Section7 = () => {
    return (
        <div className="container mx-auto py-12">
            
            <div className="text-center mb-10">
                <h2 className="text-4xl font-semibold">Latest Blog Posts</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:mx-20 mx-2 justify-center items-center">
                {blogPosts.map((post) => (
                    <div key={post.id} className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto">
                        <div className="relative">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full object-contain  rounded-t-lg mb-4 hover:scale-95 duration-300"
                            />

                            <div className="absolute bottom-0 left-0 flex flex-col items-start bg-white py-2 px-4 bg-opacity-1">
                                <h3 className="text-lg lg:text-2xl font-medium text-[#756AEE]">{post.date}</h3>
                            </div>
                        </div>
                        
                        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                       
                        <p className="text-gray-400 text-sm font-medium">{post.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Section7;
