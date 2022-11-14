import { format } from 'date-fns';
import React from 'react';



const BookingModal = ({ treatement, setTreatement, selectedDate }) => {
    const { name, slots } = treatement;  //treatement is appointment are equal;
    const date = format(selectedDate, 'PP');


    const handleSubmit = event => {

        

        event.preventDefault()
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const booking = {
            selectedDate: date,
            treatement: name,
            patient: name,
            slot,
            email,
            phone,
        }
        // TODO: send data to the server 
        // and once data is saved then closed the modal
        // and display show successfully toast
        console.log(booking)
        setTreatement(null)
    }



    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>

                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value={date} className="input w-full input-bordered " />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map((slot, i) => <option key={i} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Your Name" className="input w-full input-bordered " />
                        <input name='email' type="text" placeholder="Email Address" className="input w-full input-bordered " />
                        <input name='phone' type="text" placeholder="Phone Number" className="input w-full input-bordered " /><br />
                        <input className='btn btn-accent w-full input-bordered' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;