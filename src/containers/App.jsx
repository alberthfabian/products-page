import React from 'react';
import '../assets/styles/App.scss';
import Header from '../components/Header';
// import Modal from '../components/Modal';
import Section from '../components/Section';
import Said from '../components/Said';
import Card from '../components/Card';
import TheyButton from '../components/They_button';
import Footer1 from '../components/Footer1';
import Footer2 from '../components/Footer2';
// import ScriptInput from '../components/ScriptInput';

const App = () => (
  <div className='App'>
    <Header />
    {/* <Modal /> */}
    <Section />
    <Said />
    <Card />
    <TheyButton />
    <Footer1 />
    <Footer2 />
    {/* <ScriptInput /> */}
  </div>
);

export default App;