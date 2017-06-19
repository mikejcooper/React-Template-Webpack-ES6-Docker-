import React from 'react';
import { connect } from "react-redux";
import css from './NavigationBarSearchResults.css';


// Maps dispatcher to props
@connect()
class NavigationBarSearchResults extends React.Component {
  constructor() {
    super()
    this.state = {
    };
  }

  render() {

    return (
      <div class="navigation-bar-search flex-centre search-expanded">
        <div class="nav-container">
          <div class="bar-container flex-centre">
            <div class="input-container"><input onClick={() => console.log("render bigger field")} type="text" class="input" placeholder="Venue, activity or location"/></div>
          </div>
        </div>
      </div>
    );

  }
}

export default NavigationBarSearchResults
