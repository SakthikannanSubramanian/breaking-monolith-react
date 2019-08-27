import React from 'react';
import FlipBox from '../../components/flipbox/flipbox';
import HomePageCarousal from '../../components/homePageCarousal/homePageCarousal';
import './homePage.css';

function HomePage() {
  const agileList = [{ name: 'Planning' }, { name: 'Stand Up' }];
  const feList =[{ name: 'Development' }, { name: 'Test' }];
  const beList =[{ name: 'Development' }, { name: 'Test' }];
  return (
    <div>
      <HomePageCarousal />
      <div className="options">
        <FlipBox top='50px' height='200px' width='10%' left='10%' frontText='Agile' backLinks={agileList} />
        <FlipBox top='50px' height='100px' width='10%' left='21%' frontText='Front End' backLinks={feList} />
        <FlipBox top='160px' height='90px' width='10%' left='21%' frontText='Back End' backLinks={feList} />

      </div>
    </div>
  );
}

export default HomePage;
