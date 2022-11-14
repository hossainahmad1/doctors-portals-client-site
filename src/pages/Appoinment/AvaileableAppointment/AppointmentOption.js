import React from 'react';
// import BookingModal from '../BookingModal/BookingModal';


const AppointmentOption = ({ appointOption, setTreatement }) => {
    const { name, slots } = appointOption;
    
    return (
        <div className="card w-96 shadow-xl">
            <div className="card-body text-center ">
                <h2 className="text-2xl text-center text-secondary font-bold">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try another days'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
                <div className="card-actions justify-center">
                    <label
                        disabled={slots.length === 0}
                        onClick={() => setTreatement(appointOption)}
                        htmlFor="booking-modal"
                        className="btn btn-primary bg-gradient-to-r to-primary from-secondary"
                    >Book Appoinment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;