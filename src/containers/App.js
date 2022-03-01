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
import { GlobalStyles, SectionBackground, NavBackground } from "../components/globalStyles";
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
            <NavBackground>
              <Hero hero={hero} themeToggler={themeToggler}/>
            </NavBackground>
            <SectionBackground>
              <About about={about}/>
            </SectionBackground>
            <ErrorBoundry>
              <ProjectList projects={projects}/>
            </ErrorBoundry>
            <SectionBackground>
              <Contact contact={contact}/>
            </SectionBackground>
            <Footer social_networks={social_networks}/>
          </div>
        </>
      </ThemeProvider>
  );
}

export default App;