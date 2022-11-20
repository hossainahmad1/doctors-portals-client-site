import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';



const BookingModal = ({ treatement, setTreatement, selectedDate, refetch }) => {
    const { name: treatementName, slots } = treatement;  //treatement is appointment are equal mane aki kotha;
    const { user } = useContext(AuthContext)
    const date = format(selectedDate, 'PP');


    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const booking = {
            appointmentDate: date,
            treatement: treatementName,
            patient: name,
            slot,
            email,
            phone,
        }
        // TODO: send data to the server 
        // and once data is saved then closed the modal
        // and display show successfully toast
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setTreatement(null)
                    toast.success('Booking confirmed');
                    refetch()
                }
                else {
                    toast.error(data.message);
                }
            })
            .catch(err => console.log(err))

    }



    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatementName}</h3>

                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value={date} className="input w-full input-bordered " />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map((slot, i) => <option key={i} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" disabled defaultValue={user?.displayName} placeholder="Your Name" className="input w-full input-bordered " />
                        <input name='email' type="text" disabled defaultValue={user?.email} placeholder="Email Address" className="input w-full input-bordered " />
                        <input name='phone' type="text" placeholder="Phone Number" className="input w-full input-bordered " /><br />
                        <input className='btn btn-accent w-full input-bordered' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;