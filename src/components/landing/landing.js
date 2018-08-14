import React from 'react';
import './landing.scss';

export default class Landing extends React.Component {
  render() {
    return (
    <div>
      <div className='landing'>
        <div className='heroText'>
          <h1>Ryan Groesch</h1>
          <p>Full-Stack Javascript Software Developer(MERN)</p>
          <p><a href="/contact" data-nav="contact">Hire Me</a></p>
        </div>
      </div>
      <div className='languages'>
        <h2>Technology Proficiencies</h2> 
        <table>
          <th>High Proficiency</th>
          <tr>
            <td>Vanilla Javascript</td>
            <td>React.js</td>
            <td>Redux.js</td>
            <td>MongoDB</td>
            <td>Express.js</td>
          </tr>
          <th>Medium Proficiency </th>
            <tr>
              <td>SQL (PostgreSQL, Oracle, SQL-lite)</td>
              <td>Python</td>
              <td></td>
            </tr>
        </table>
      </div>
    </div>
    );
  }
}
