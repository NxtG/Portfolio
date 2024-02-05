import React from "react";
import Navbar from "../Components/Navbar";

function Screen1() {
   
    return (
        <div className="">
            <Navbar />
            <div className="flex flex-col mx-auto max-w-7xl px-4 py-6 pt-12 my-4 lg:flex-row  lg:px-8 items-center">
                <div classNAme=" flex flex-col items-center justify-center md:w-1/2">
                    <h1 className="text-2xl md:text-5xl my-6">
                        <b>COMPLETE WEB DESIGN & DEVELOPMENT</b>
                    </h1>

                    <p className="text-base md:text-xl lg:text-xl my-5 ">
                        Say goodbye to sleepless nights over counterproductive
                        communications between service providers, and no more
                        overbilling-related nightmares for services you’re not
                        sure you need but you’re sure you have to pay for.
                    </p>
                    {/* <div className="flex my-6 py-6">

                        <Button
                            onClick={handleClick}
                            style={customStyles}
                            title={"View Pricing"}
                        />
                        <Button
                            onClick={handleClick}
                            style={customStyles}
                            title={"Free Consultation"}
                        />
                    </div> */}
                </div>
                <div className="w-full flex  item-center justify-center sm:w-full md:w-full sm:my-5">
                    <img
                        src="/images/digital.png"
                        alt="Not found"
                        // width={500}
                    />
                </div>
            </div>
        </div>
    );
}

export default Screen1;
