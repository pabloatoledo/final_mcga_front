import HeaderSection from '../../Components/Header/Header';
import BodySectionHome from '../../Components/Body/Body';
import FooterSection from '../../Components/Footer/Footer';
import React from 'react';
import Login from '../Login';

const Home = () => {
    return (
        <div>
          <HeaderSection />
          <BodySectionHome />
          <FooterSection />
        </div>
    )
  }


export default Home;