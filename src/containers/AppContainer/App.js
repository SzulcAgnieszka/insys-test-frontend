import React, { Component } from "react";
import Home from "../HomePageContainer/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faImage, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import './App.scss'

library.add(faUser, faImage, faMapMarkerAlt)

class App extends Component {
  render() {
    return (
      <Container fluid className='no-padding'>
        <Router>
          <Route component={Home} />
        </Router>
      </Container>
    )
  }
}

export default App;

