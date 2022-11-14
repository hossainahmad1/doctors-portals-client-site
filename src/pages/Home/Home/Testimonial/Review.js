import React from 'react';

const Review = ({ review }) => {
    const { name, pic, location, userReview } = review;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{userReview}</p>
                <div className="card-actions">
                    <div className='flex items-center mt-6'>
                        <div className='mr-5'>
                            <img className='w-16' src={pic} alt=""/>
                        </div>
                        <div>
                            <h3 className='text-2xl font-semibold'>{name}</h3>
                            <p>{location}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;