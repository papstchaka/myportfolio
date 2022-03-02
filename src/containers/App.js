import React from 'react';

import Hero from '../components/Hero';
import About from '../components/About';
import ErrorBoundry from '../components/ErrorBoundry';
import ProjectList from '../components/ProjectList';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import '../style/main.scss';

import { hero, about, projects, contact, social_networks } from "../content/content.js";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../components/globalStyles";
import { lightTheme, darkTheme } from "../components/Themes"

function App() {
  const [theme, setTheme] = React.useState('dark');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }


  return (
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <>
        <GlobalStyles/>
          <div>
            <Hero hero={hero} themeToggler={themeToggler}/>
            <About about={about}/>
            <ErrorBoundry>
              <ProjectList projects={projects}/>
            </ErrorBoundry>
            <Contact contact={contact}/>
            <Footer social_networks={social_networks}/>
          </div>
        </>
      </ThemeProvider>
  );
}

export default App;