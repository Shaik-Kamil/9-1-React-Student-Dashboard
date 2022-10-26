import React, { useState } from 'react';
import Form from './Form';
import './StudentScoreCard.css';

function StudentScoreCard({ el }) {
  const [showData, setShowData] = useState(false);
  return (
    <section key={el.id} className="individual-details">
      {showData && <StudentScoreCard el={el} />}
      <article className="code-wars">
        <h3>Codewars:</h3>
        <p>
          {' '}
          <span>Current Total:</span> {el.codewars.current.total}{' '}
        </p>
        <p>
          {' '}
          <span>Last Week: {el.codewars.current.lastWeek}</span>
        </p>
        <p>
          {' '}
          <span>Goal:</span> {el.codewars.goal.total}
        </p>
        <p>
          <span>Percent of Goal Achieved:</span>{' '}
          {(el.codewars.current.total / el.codewars.goal.total).toFixed(2) *
            100}
          %
        </p>
      </article>
      <article className="scores">
        <h3>Scores</h3>
        <p>
          <span>Assignments:</span> {el.cohort.scores.assignments * 100}%
        </p>
        <p>
          <span>Projects:</span> {el.cohort.scores.projects * 100}%
        </p>
        <p>
          <span>Assessments:</span> {el.cohort.scores.assessments * 100}%
        </p>
      </article>
      <article>
        <h3>Certifications</h3>
        <p>
          <span style={{ color: 'darkgreen' }}>Resume:</span>
          {el.certifications.resume === false ? '❌' : '✅'}
        </p>
        <p>
          <span style={{ color: 'darkgreen' }}>LinkedIn:</span> {''}
          {el.certifications.linkedIn === false ? '❌' : '✅'}
        </p>
        <p>
          <span style={{ color: 'darkgreen' }}>Mock Interview:</span>
          {el.certifications.mockInteerview === false ? '❌' : '✅'}
        </p>
        <p>
          <span style={{ color: 'darkgreen' }}>GitHub:</span>{' '}
          {el.certifications.GitHub === false ? '❌' : '✅'}
        </p>
      </article>
      <Form el={el} />
    </section>
  );
}

export default StudentScoreCard;
