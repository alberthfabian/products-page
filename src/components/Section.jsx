import React from 'react';
import '../assets/styles/components/Section.scss';

const Section = () => (
  <section className="section">
      <article className="section__graphic">
        <figure>
          <img src="../../public/images/illustration-intro.svg" alt="Graficos de Barras" />
        </figure>
      </article>
      <article className="section__product">
        <h1>Bring everyone together to build better products.</h1>
        <p>
          Manage makes it simple for software teams <br /> to plan day-to-day 
          tasks while keeping the <br /> larger team goals in view.
        </p>
        <a href="#">Get Started</a> 
      </article>
      <article className="section__manage">
        <h2>What’s different about Manage?</h2>
        <p>
          Manage provides all the functionality your <br /> team needs, without 
          the complexity. Our <br /> software is tailor-made for modern digital <br /> 
          product teams. 
        </p> 
      </article>
      <article className="section__track">
        <a href="#">01</a> 
        <div className="section__track--one">
          <h3>Track company-wide progress</h3>
          <p>
            See how your day-to-day tasks fit into the wider vision. Go from 
            tracking progress at the milestone level all the way done to the 
            smallest of details. Never lose sight of the bigger picture again.
          </p> 
        </div>
      </article>
      <article className="section__report">
        <a href="#">02</a>
        <div className="section__report--two">
          <h3>Advanced built-in reports</h3>
          <p>
            Set internal delivery estimates and track progress toward company 
            goals. Our customisable dashboard helps you build out the reports 
            you need to keep key stakeholders informed.
          </p>
        </div>
      </article>
      <article className="section__place">
        <a href="#">03</a> 
        <div className="section__place--three">
          <h3>Everything you need in one place</h3> 
          <p>
            Stop jumping from one service to another to communicate, store files, 
            track tasks and share documents. Manage offers an all-in-one team 
            productivity solution.
          </p>
        </div>
      </article>
    </section>
);

export default Section;