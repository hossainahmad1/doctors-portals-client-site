import React from 'react';
import bgimg from '../../../../assets/images/appointment.png';
import PrimaryButton from '../../../../Components/PrimaryButton/PrimaryButton';

const Contract = () => {

    const handleSubmit = event => {
        event.preventDefault()
    }


    return (
        <div style={{ backgroundImage: `url(${bgimg})` }} className='mt-12 rounded p-6'>
            <div className='text-center mb-4'>
                <h4 className='text-primary'>Contract us</h4>
                <h2 className='text-3xl text-white font-semibold'>Stay connected with us</h2>
            </div>
            <form onSubmit={handleSubmit} className='text-center mt-8'>
                <input type="text" placeholder="Email Address" className="input input-bordered input-secondary w-full mb-6 max-w-xs" /><br />
                <input type="text" placeholder="Subject" className="input input-bordered input-secondary w-full mb-6 max-w-xs" /><br />
                <textarea className="textarea w-80 h-28 mb-5 textarea-success" placeholder="Your Message"></textarea><br />
                <PrimaryButton>Submit</PrimaryButton>
            </form>
        </div>
    );
};

export default Contract;