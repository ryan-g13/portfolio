import React from 'react';
import './projects.scss';

export default class Projects extends React.Component {
  render() {
    return (
      <div className='projects' >
        <div className='row' >
          <div className='leftItem' >
            <img src="http://via.placeholder.com/350x150" alt='EventUs logo'/>
            <p><a href='www.eventus.site'><span>EventUs</span></a> - This application is designed to be a social  media oriented around Events. The concept is that as a user you can sign-up in order to create, view and attend (running and drinking) events that are near the user.
            </p>
            <p>
              The original customer is for a local Hashing club to alleviate the need to post in multiple social media platforms, provide a streamlined UI for events in the area near the user and persist the organized data in an efficient manner.
            </p>
            <p>
              The application utilizes a MERN Stack (MongoDB, Express.js, React/Redux and Node.js) with OAuthorization to accomplish this.
            </p>
          </div>
          <div className='rightItem' >
            <img src="http://via.placeholder.com/350x150" alt='PubHub Logo'/>
            <p>
              <a href='https://pub-hub.herokuapp.com'><span>PubHub</span></a> - This is a back-end application that generates a pub crawl, including user authentication, persistence of data via MongoDB, and route optimization via GraphHopper API. 
            </p>
            <p>
              It uses the Google Places API to populate stops and stores/retrieves data via Mongoose middleware to the database. 
            </p>
            <p>
              The application utilizes an Express server built with Node.js, middleware and a SMS send and retrieve feature via a Twilio API.
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='leftItem' >
            <img src='http://via.placeholder.com/350x150' alt='Play&Rest Logo'/>
            <p>
              <a href='playandrest.us'><span>Play&Rest</span></a> - This application is designed to help the user locate nearby play areas(for children and dogs alike) and water access points. 
            </p>
            <p>
              This uses the Google Maps API to populate a map which then has data points added to the display via database calls and Javascript logic. There is a search feature with auto-filling text and filtering options depending on user preference. 
            </p>
            <p>
              *** Note the data is only available currently for the City of Seattle.
            </p>
          </div>
          <div className='rightItem' >
            <img src='http://via.placeholder.com/350x150' alt='ImageDescription'/>
            <p>Short Description of project # 2 </p>
          </div>
        </div>
      </div>
    );
  }
}
