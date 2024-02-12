import React from 'react'
import TeamSwiper from "./TeamSwiper";

function Team() {
    const images = [
        '/images/rafay.jpeg',
        '/images/rafay.jpeg',
        '/images/rafay.jpeg'
    ];
  return (
    <div>
            <section className="py-8 overflow-x-hidden ">
                <div className="  ">
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