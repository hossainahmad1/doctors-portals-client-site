import React from 'react';
import chair from '../../../assets/images/chair.png';
import bg from '../../../assets/images/bg.png';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';




const Bannar = () => {
    return (
        <div style={{ backgroundImage: `url(${bg})` }} className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse p-10">
                <img src={chair} className=" lg:w-1/2 rounded-lg shadow-2xl mr-5" alt='' />
                <div className='ml-6'>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Bannar;