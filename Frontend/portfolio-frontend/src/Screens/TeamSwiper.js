// TeamSwiper.js

import React from "react";
import Slider from "react-slick";


const TeamSwiper = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
  };

  return (
    <>
    
          <div  className="flex lg:flex-row justify-center flex-col">
            <div className="lg:w-2/4 md:text-center md:w-full">
              <img
                src={slides[1].image}
                alt={`slide-1`}
                className=" hidden md:block"
              />
            </div>
            <div className=" lg:w-2/4 w-full py-4 lg:py-0 lg:ms-4">
              <p className="text-justify ">
                Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Consequuntur vitae eveniet inventore id laudantium
                sequi delectus et odio! Ipsa possimus, enim excepturi
                architecto repellendus magni labore amet sint alias vel
                atque impedit corporis ducimus! Eum facilis distinctio
                dolores blanditiis harum cupiditate aspernatur quia
                deserunt! Recusandae eos est ad? Quidem iusto
                exercitationem voluptates dolorem quo quibusdam sunt
                voluptate obcaecati vel velit accusamus rerum provident,
                voluptatibus officia inventore magnam earum, maiores
                omnis iste nisi, quaerat eum! Magni!
              </p>
              <p className="my-5  ">{slides[1].age}</p>
              <h2 className="font-bold">Expertise</h2>

              <ul>
                {slides[1].languages.map((language, langIndex) => (
                  <li key={langIndex}>{language}</li>
                ))}
              </ul>

              <div className="block mt-10 md:hidden">
                <img
                  className="w-20 h-20 p-1 rounded-full mb-3 "
                  src={slides[1].image}
                  alt="Bordered avatar"
                />
                <p className="text-xl font-bold">Abdul Rafay Ahmed</p>
                <p>Developer</p>
              </div>
            </div>
          </div>
    
    </>
  );
};

export default TeamSwiper;
