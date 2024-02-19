import React from "react";
import Navbar from "../Components/Navbar";

function Screen1() {
   
    return (
        <div className="">
            <Navbar />
            <div className="flex flex-col lg:flex-row pt-10 mx-5 sm:pt-24 md:mx-16">
                <div >
                    <h1 className="text-2xl md:text-5xl my-6">
                        <b>COMPLETE WEB DESIGN & DEVELOPMENT</b>
                    </h1>

                    <p className="text-base md:text-xl lg:text-xl my-5 text-justify">
                        Say goodbye to sleepless nights over counterproductive
                        communications between service providers, and no more
                        overbilling-related nightmares for services you’re not
                        sure you need but you’re sure you have to pay for.
                    </p>
                   
                </div>
                <div className="w-full flex  item-center justify-center sm:w-full md:w-full sm:my-5">
                    <img
                        src="/images/digital.png"
                        alt="Not found"
                    />
                </div>
            </div>
        </div>
    );
}

export default Screen1;
