import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../../shared/Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';




const AvaileableAppointment = ({ selectedDate }) => {
    // const [appointOption, setAppointOption] = useState([]);
    const [treatement, setTreatement] = useState(null);


    // fetch diye kora ata
    // const { data: appointOption = [] } = useQuery({
    //     queryKey: ['appointmentOption'],
    //     queryFn: () => fetch('http://localhost:5000/appointmentOption')
    //         .then(res => res.json())
    // })


    // ata async diye kora 
    const date = format(selectedDate, 'PP');
    const { data: appointOption = [], refetch, isLoading } = useQuery({
        queryKey: ['appointment', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentOption?date=${date}`)
            const data = res.json()
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }
    // akhane comment korar karon holo upore query kore kora hoyese r query korle upore usestate kora lage na;
    // useEffect(() => {
    //     fetch('http://localhost:5000/appointmentOption')
    //         .then(res => res.json())
    //         .then(data => setAppointOption(data))
    // }, [])

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
                    refetch={refetch}
                ></BookingModal>}
        </section>
    );
};

export default AvaileableAppointment;