import React from 'react';
import treatment from '../../../../assets/images/treatment.png';
import PrimaryButton from '../../../../Components/PrimaryButton/PrimaryButton';

const CardHome = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mt-12">
            <figure><img className='lg:w-1/2 rounded' src={treatment} alt="Album" /></figure>
            <div className="card-body w-1/2 mt-10">
                <h2 className="card-title">Exceptional Dental <br /> Care, on Your Terms</h2>
                <p>It is a long established fact that a reader will be distracted by the <br />readable content of a page when looking at its layout. The point <br /> of using Lorem Ipsumis that it has a more-or-less normal <br /> distribution of letters,as opposed to using 'Content  here, content <br /> here', making it look like readable English. Many desktop <br /> publishing packages and web page</p>
                <div className="card-actions mt-6 mb-7">
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default CardHome;