import React from 'react'
import TeamSwiper from "./TeamSwiper";

function Team() {



    const images = [
        {
            image: '/images/rafay.jpeg',
            intro: 'Developer Introduction 1',
            age: '25',
            languages: ['JavaScript', 'Python', 'HTML/CSS'],
            // Add other information as needed
        },
        {
            image: '/images/rafay.jpeg',
            intro: 'Developer Introduction 2',
            age: "Bachular's in computer sciences from Forman Christain College (2020-2024)",
            languages: ['Java', 'C#', 'SQL', 'MERN', 'Python'],
            // Add other information as needed
        },
        // Add more slides as needed
    ];
    return (
        <div>
            <section className="px-4 lg:px-8 mt-32 py-8 bg-gray-200">
                <div className="">
                    <h2 className="text-4xl font-semibold text-center text-grey mb-2">
                        Our Team
                    </h2>
                    <p className="text-lg text-center mx-5 mb-6">
                        Nxt Gen have a quality and experienced team.
                    </p>
                    <div className="">
                        <TeamSwiper slides={images} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Team