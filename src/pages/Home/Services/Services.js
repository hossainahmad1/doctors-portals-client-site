import React from 'react';
import fluorid from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {

    const servicesData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            icon: fluorid,
            des: 'Graviti is a very bad of teeth,It is cause of teeth in our mouth'
        },
        {
            id: 2,
            name: 'Cavity Filling',
            icon: cavity,
            des: 'Graviti is a very bad of teeth,It is cause of teeth in our mouth '
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            icon: whitening,
            des: 'Graviti is a very bad of teeth,It is cause of teeth in our mouth'
        },
    ]

    return (
        <div className='mt-16'>
            <h4 className='text-2xl font-semibold text-primary text-center'>services</h4>
            <h1 className='text-4xl font-semibold text-center mt-3'>Services We Provide</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
                {
                    servicesData.map(services => <Service
                        key={services.id}
                        services={services}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;