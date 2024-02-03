import React from "react";
import Navbar from "../Components/Navbar";
import "../Styles/style.css";
import Button from "../Commons/Button.js";

function Screen1() {
    const handleClick = () => {
        alert("Button clicked!");
    };

    const customStyles = {
        backgroundColor: "black",
        color: "white",
        borderRadius: "25px",
        padding: "10px 35px",
        marginRight: "40px",
    };
    return (
        <div className="h-screen">
            <Navbar />
            <div className="h-3/4 flex flex-col mx-auto max-w-7xl px-4 py-6 my-4 sm:px-6 sm:flex-row lg:px-8 sm:py-0 sm:my-0 items-center">
                <div classNAme=" flex flex-col items-center justify-center md:w-1/2">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl">
                        <b>COMPLETE WEB DESIGN & DEVELOPMENT</b>
                    </h1>

                    <p className="text-base md:text-xl lg:text-xl my-4 sm:my-0">
                        Say goodbye to sleepless nights over counterproductive
                        communications between service providers, and no more
                        overbilling-related nightmares for services you’re not
                        sure you need but you’re sure you have to pay for.
                    </p>
                    <div className="flex my-6 py-6">

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
                    </div>
                </div>
                <div className="w-full flex item-center justify-center sm:w-full md:w-full">
                    <img
                        src="/images/digital.png"
                        alt="Not found"
                        width={500}
                    />
                </div>
            </div>
        </div>
    );
}

export default Screen1;
