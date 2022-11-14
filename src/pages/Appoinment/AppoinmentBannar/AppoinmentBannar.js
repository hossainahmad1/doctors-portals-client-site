import chair from '../../../assets/images/chair.png';
import bg from '../../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';


const AppoinmentBannar = ({ selectedDate, setSelectedDate }) => {

    return (
        <header>
            <div style={{ background: `url(${bg})` }} className="hero my-6 ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt="dentist chair" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='mr-28'>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppoinmentBannar;