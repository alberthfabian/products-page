import React from 'react';
import '../assets/styles/App.scss';
import Header from '../components/Header';
import Section from '../components/Section';
import Said from '../components/Said';
import Card from '../components/Card';
import They_button from '../components/They_button';
import Footer1 from '../components/Footer1';
import Footer2 from '../components/Footer2';
// import ScriptInput from '../components/ScriptInput';

const App = () => (
  <div className="App">
    <Header />
    <Section />
    <Said />
    <Card />
    <They_button />
    <Footer1 />
    <Footer2 />
    {/* <ScriptInput /> */}
  </div>
);

export default App;