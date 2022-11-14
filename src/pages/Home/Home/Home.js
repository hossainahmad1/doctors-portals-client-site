import React from 'react';
import Bannar from '../Bannar/Bannar';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import Services from '../Services/Services';
import CardHome from './CardHome/CardHome';
import Contract from './Contract/Contract';
import InfoCards from './InfoCards/InfoCards';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <Bannar></Bannar>
            <InfoCards></InfoCards>
            <Services></Services>
            <CardHome></CardHome>
            <MakeAppoinment></MakeAppoinment>
            <Testimonial></Testimonial>
            <Contract></Contract>
        </div>
    );
};

export default Home;