import React, { useState } from 'react';
import AppoinmentBannar from '../AppoinmentBannar/AppoinmentBannar';
import AvaileableAppointment from '../AvaileableAppointment/AvaileableAppointment';



const Appoinment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <AppoinmentBannar
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AppoinmentBannar>
            <AvaileableAppointment
                selectedDate={selectedDate}
            ></AvaileableAppointment>
        </div>
    );
};

export default Appoinment;