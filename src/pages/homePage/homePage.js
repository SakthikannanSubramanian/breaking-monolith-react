import React from 'react';
import FlipBox from '../../components/flipbox/flipbox';
import HomePageCarousal from '../../components/homePageCarousal/homePageCarousal';
import './homePage.css';

function HomePage() {
  const agileList = [{ name: 'Planning' }, { name: 'Stand Up' }];
  return (
    <div>
      <HomePageCarousal />
      <div className="options">

        <FlipBox top='20px' height='100px' width='200px' left='300px' frontText='Agile' backLinks={agileList} />
        {/* <FlipBox top='120px' height='100px' width='100px' left='300px' frontText='Sakthikannan Subramanian' backText='Cognizant' /> */}
      </div>
    </div>
  );
}

export default HomePage;
