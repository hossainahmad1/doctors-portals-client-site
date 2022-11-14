import React from 'react';
import icon from '../../../../assets/icons/quote.svg';
import img1 from '../../../../assets/images/people1.png';
import img2 from '../../../../assets/images/people2.png';
import img3 from '../../../../assets/images/people3.png';
import Review from './Review';

const Testimonial = () => {


    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            userReview: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            pic: img1,
            location: 'california'
        },
        {
            _id: 2,
            name: 'Herry Pooter',
            userReview: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            pic: img2,
            location: 'california'
        },
        {
            _id: 3,
            name: 'Jindle Gamble',
            userReview: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            pic: img3,
            location: 'california'
        },
    ]



    return (
        <section>
            <div className='flex justify-between items-center'>
                <div>
                    <h4 className='font-bold text-primary'>Testimonial</h4>
                    <div className="text-4xl font-bold">What Our Patients Says</div>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={icon} alt="" />
                </figure>
            </div>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;