import React from "react";
import Review from "../Components/Review";

const ClientSection = () => {
    const reviews = [
        {
            reviewText:
                "This team managed to deliver excellent results on time, exceeding our expectations!",
            reviewerName: "Alex Johnson",
            reviewerCompany: "CEO at Entaroads",
            rating: 5,
            reviewerImage: "https://source.unsplash.com/random/200x200?sig=1",
        },
        {
            reviewText:
                "Their attention to detail and creative approach was exactly what we needed. Highly recommend!",
            reviewerName: "Morgan Smith",
            reviewerCompany: "Marketing Director at Creativia",
            rating: 4,
            reviewerImage: "https://source.unsplash.com/random/200x200?sig=2",
        },
        {
            reviewText:
                "While the project was completed with high standards, communication could have been better.",
            reviewerName: "Chris Doe",
            reviewerCompany: "Product Manager at TechCorp",
            rating: 3,
            reviewerImage: "https://source.unsplash.com/random/200x200?sig=3",
        },
    ];

    return (
        <section className="pt-8">
            <div className="pb-12">
                <h2 className="text-4xl font-semibold text-center mb-6">
                    Clients
                </h2>
                <div className="flex flex-wrap justify-center">
                    {reviews.map((review, index) => (
                        <Review
                            key={index}
                            reviewText={review.reviewText}
                            reviewerName={review.reviewerName}
                            reviewerCompany={review.reviewerCompany}
                            rating={review.rating}
                            reviewerImage={review.reviewerImage}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientSection;
