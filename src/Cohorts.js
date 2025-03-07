import React, { useState } from 'react';
import './Cohorts.css';

function Cohorts({ Data, title, setTitle, total, setTotal }) {
  const [showCohort, setShowCohort] = useState(Data);

  function handleClick() {
    setTitle('All Students');
    setShowCohort(Data);
    setTotal(Data.length);
  }
  return (
    <aside className="cohorts">
      <ul>
        <button onClick={handleClick} id="all-students">
          All Students
        </button>
        <hr></hr>
        <button onClick={() => setTitle('Winter 2026')} id="winter-2026">
          Winter 2026
        </button>
        <hr></hr>
        <button onClick={() => setTitle('Fall 2026')} id="fall-2026">
          Fall 2026{' '}
        </button>
        <hr></hr>
        <button onClick={() => setTitle('Summer 2026')} id="summer-2026">
          Summer 2026{' '}
        </button>
        <hr></hr>
        <button onClick={() => setTitle('Spring 2026')} id="spring-2026">
          Spring 2026{' '}
        </button>
        <hr></hr>
        <button onClick={() => setTitle('Winter 2025')} id="winter-2025">
          Winter 2025{' '}
        </button>
        <hr></hr>
        <button onClick={() => setTitle('Summer 2025')} id="summer-2025">
          Summer 2025{' '}
        </button>
        <hr></hr>
        <button onClick={() => setTitle('Spring 2025')} id="spring-2025">
          Spring 2025{' '}
        </button>
        <hr></hr>
        <button onClick={() => setTitle('Fall 2025')} id="fall-2025">
          Fall 2025{' '}
        </button>
        <hr></hr>
      </ul>
    </aside>
  );
}

export default Cohorts;
