import React from 'react';
import TimeTracker from './timeTracker';
import RecordsFrom from './recordsFrom';
import BgAnimation from './bgAnimation';

export default function MainContent() {
  return (
    <main className="main__container">
      <div className="main__animation"><BgAnimation/></div>
      <div className="main__card"><TimeTracker/></div>
      <div className="main__card"><RecordsFrom/></div>
    </main>
  );
}


