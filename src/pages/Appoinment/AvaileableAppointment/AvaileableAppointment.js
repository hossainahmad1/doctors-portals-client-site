import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';


const AvaileableAppointment = ({ selectedDate }) => {
    const [appointOption, setAppointOption] = useState([]);
    const [treatement, setTreatement] = useState(null);


    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointOption(data))
    }, [])
    return (
        <section className='my-24'>
            <div>
                <h3 className='text-3xl font-bold text-secondary text-center'>Available Appointments on {format(selectedDate, 'PP')}</h3>
            </div>
            <div className='mt-6 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    appointOption.map(option => <AppointmentOption
                        key={option._id}
                        appointOption={option}
                        setTreatement={setTreatement}
                    ></AppointmentOption>)
                }
            </div>
            {
                treatement &&
                <BookingModal
                    selectedDate={selectedDate}
                    treatement={treatement}
                    setTreatement={setTreatement}
                ></BookingModal>}
        </section>
    );
};

export default AvaileableAppointment;