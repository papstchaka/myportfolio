import React, { Component } from 'react';

import Hero from '../components/Hero';
import About from '../components/About';
import ErrorBoundry from '../components/ErrorBoundry';
import ProjectList from '../components/ProjectList';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import '../style/main.scss';

import { about, projects, contact, social_networks } from "../content/content.js"

class App extends Component {

  render() {
    return (
      <div>
        <Hero />
        <About about={about}/>
        <ErrorBoundry>
            <ProjectList projects={projects}/>
        </ErrorBoundry>
        <Contact contact={contact}/>
        <Footer social_networks={social_networks}/>
      </div>
    );
  }  
}

export default App;