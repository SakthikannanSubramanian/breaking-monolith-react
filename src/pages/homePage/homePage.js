import React from 'react';
import FlipBox from '../../components/flipbox/flipbox';
import HomePageCarousal from '../../components/homePageCarousal/homePageCarousal';
import './homePage.css';

function HomePage() {

  const agileList = [{ name: 'Planning' }, { name: 'Stand Up' }];
  const feList =[{ name: 'Development' }, { name: 'Test' }];
  const beList =[{ name: 'Development' }, { name: 'Test' }];
  const graphList =[{ name: 'GraphQL' }];
  const testList = [{ name: 'UI Testing' }, { name: 'API Testing' }];
  const devOpsList = [{ name: 'Pipeline' }, { name: 'Jenkins' }];

  return (
    <div>
      <HomePageCarousal />
      <div className="options">
        <FlipBox top='50px' height='200px' width='10%' left='10%' frontText='DevOps' backLinks={devOpsList} />
        <FlipBox top='50px' height='100px' width='10%' left='21%' frontText='Front End' backLinks={feList} />
        <FlipBox top='160px' height='90px' width='10%' left='21%' frontText='Back End' backLinks={beList} />
        <FlipBox top='50px' height='45px' width='10%' left='32%' frontText='GraphQL' backLinks={graphList} />
        <FlipBox top='108px' height='140px' width='10%' left='32%' frontText='Testing' backLinks={testList} />
        <FlipBox top='50px' height='135px' width='18%' left='43%' frontText='Agile' backLinks={agileList} />
        <FlipBox top='195px' height='53px' width='18%' left='43%' frontText='Defect Management' backLinks={agileList} />
      </div>
    </div>
  );
}

export default HomePage;
