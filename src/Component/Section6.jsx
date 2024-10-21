import React from 'react';
import people1 from '../assets/Images/1people.jpg';
import people2 from '../assets/Images/2people.jpg';
import people3 from '../assets/Images/3people.jpg';

const testimonials = [
    {
        id: 1,
        name: "Catherine Williams",
        title: "Regular client",
        feedback: "DreamSoft offers a high caliber of resources skilled in Microsoft Azure .NET, mobile and Quality Assurance. They became our true business partners over the past three years.",
        image: people1 // Just the image variable without braces
    },
    {
        id: 2,
        name: "Rupert Wood",
        title: "Regular client",
        feedback: "DreamSoft powered us with a competent team to develop products for banking services. The team has been delivering results within budget and time, which is amazing.",
        image: people2 // Just the image variable without braces
    },
    {
        id: 3,
        name: "Samantha Brown",
        title: "Regular client",
        feedback: "DreamSoft is a highly skilled and uniquely capable firm with multitudes of talent on-board. We have collaborated on a number of diverse projects that have been a great success.",
        image: people3 
    }
];

const Section6 = () => {
    return (
        // People say section
        <div className="container mx-auto pt-12">
            {/* Heading */}
            <div className="text-center mb-10">
                <h2 className="text-4xl font-semibold">What People Say</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-2 md:mx-0 gap-8">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="bg-white p-6 lg:py-16 rounded-lg border ">
                        <div className="flex items-center mb-4">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-16 h-16 rounded-full mr-4 object-cover"
                            />
                            <div>
                                <h3 className="font-semibold text-lg hover:text-[#756AEE]">{testimonial.name}</h3>
                                <p className="text-[#756AEE]">{testimonial.title}</p>
                            </div>
                        </div>
                        <p className="text-gray-600">{testimonial.feedback}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Section6;
