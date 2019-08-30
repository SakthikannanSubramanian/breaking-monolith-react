import React from 'react';
import FlipBox from '../../components/flipbox/flipbox';
import HomePageCarousal from '../../components/homePageCarousal/homePageCarousal';
import './homePage.css';

function HomePage() {

  const agileList = [{ name: 'Requirement gathering' }, { name: 'Story mapping' },{ name: 'Planning' }, { name: 'Stand up' }, { name: 'Scrum of Scrums' }, { name: 'Review' }, { name: 'Retro' }, { name: 'Health check' }];
  const uiList =[{ name: 'UI and UX' }, { name: 'UI Development' }, { name: 'Framework' }, { name: 'Mobile App' }];
  const microServicesList =[{ name: 'API Governance' }, { name: 'Go Serverless' }, { name: 'Containers and Pods' }, { name: 'Orchestration Layer' }, { name: 'Development Framework' }];
  const graphList =[{ name: 'Single end point orchestration' }];
  const testList = [{ name: 'UI Testing' }, { name: 'Micro Services Testing' }, { name: 'Performance Testing' }, { name: 'Security Testing' }];
  const devOpsList = [{ name: 'CI and CD' }, { name: 'Infrastructure as code' }, { name: 'Monitoring and Logging' }, { name: 'Tools' }];
  const legacyList =[{ name: 'Graceful Decommission' }, { name: 'Continuous Scynchronization' }, { name: 'Data Migration' }];

  return (
    <div>
      <HomePageCarousal />
      <div className="options">
        <FlipBox top='20px' height='130px' width='18%' left='10%' frontText='DevOps-Platform' backLinks={devOpsList} />
        <FlipBox top='160px' height='120px' width='18%' left='10%' frontText='UI' backLinks={uiList} />
        <FlipBox top='20px' height='80px' width='18%' left='30%' frontText='GraphQL' backLinks={graphList} />
        <FlipBox top='110px' height='170px' width='18%' left='30%' frontText='Micro Services' backLinks={microServicesList} />
        <FlipBox top='20px' height='260px' width='16%' left='50%' frontText='Agile' backLinks={agileList} />
        <FlipBox top='20px' height='140px' width='18%' left='68%' frontText='Testing' backLinks={testList} />
        <FlipBox top='170px' height='110px' width='18%' left='68%' frontText='Managing Monolith' backLinks={legacyList} />
      </div>
    </div>
  );
}

export default HomePage;
