import React from "react";

const Review = ({ reviewText, reviewerName, reviewerCompany, rating, reviewerImage }) => {
    // A function to render stars based on the rating
    const renderStars = () => {
      let stars = [];
      for (let i = 0; i < 5; i++) {
        stars.push(
          <span key={i} className={`inline-block ${i < rating ? "text-yellow-500" : "text-gray-300"}`}>★</span>
        );
      }
      return stars;
    };
  
    return (
      <div className="min-w-[315px] max-w-sm w-1/4 bg-[#FFFCF5] border-solid border-2 border-[#FFD285] p-6 m-4">
        <p className="text-gray-600">{reviewText}</p>
        <div className="flex items-center mt-4">
          <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src={reviewerImage} alt={reviewerName} />
          <div className="ml-4">
            <p className="text-sm font-semibold text-gray-900">{reviewerName}</p>
            <p className="text-sm text-gray-500">{reviewerCompany}</p>
          </div>
          <div className="ml-auto flex">{renderStars()}</div>
        </div>
      </div>
    );
  };
  export default Review;