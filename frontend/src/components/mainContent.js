import React from 'react';
import TimeTracker from './timeTracker';
import RecordsFrom from './recordsFrom';
import BgAnimation from './bgAnimation';

export default function MainContent(props) {
  return (
    <main className="main__container">
      <div className="main__animation"><BgAnimation/></div>
      <div className="main__card"><TimeTracker setModal={props.setModal} /></div>
      <div className="main__card"><RecordsFrom setModal={props.setModal} /></div>
    </main>
  );
}


