import React from 'react'
import Tab from '../Components/Tab'

function Techstacks() {
    return (
        <div>
            <section className="py-8">
                <div className=" border-solid border-b-2 pb-12">
                    <h2 className="text-4xl font-semibold text-center text-grey mb-2">
                        Our Technologies
                    </h2>
                    <p className="text-lg text-center mx-5 mb-6">
                        Nxt Gen works under various modern technologies for effective, scalable, and future-proof custom software development.
                    </p>
                    <div className="flex justify-center">
                        <Tab />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Techstacks