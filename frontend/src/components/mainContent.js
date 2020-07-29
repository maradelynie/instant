import React from 'react';
import TimeTracker from './timeTracker';
import RecordsFrom from './recordsFrom';

export default function MainContent() {
  return (
    <main className="main__container">
      <div className="main__animation">animation</div>
      <div className="main__card"><TimeTracker/></div>
      <div className="main__card"><RecordsFrom/></div>
    </main>
  );
}


