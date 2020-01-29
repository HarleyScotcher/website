import React from 'react';

import Layout from '../components/Layout';

import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
import pdf from '../files/CV.pdf'
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-main">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a className="text-main" href={`mailto:${config.email}`}> {config.email}</a>
          </div>
          <p className="lead mb-5">
            Hi, I'm Harley. I am a Software Engineer with a passion for building excellent 
            software that improves the lives of those around me. I specialize in creating software 
            for clients ranging from individuals and small-businesses all the way to large enterprise corporations.
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url} target='_blank'>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
            <a key="Ciriculum Vitae" href={pdf} target='_blank'>
              <i className="fas fa-file-alt"></i>
            </a>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Software Engineer</h3>
              <div className="subheading mb-3">Eloquent Technologies Ltd</div>
              <p>
                My role at Eloquent Technologies contains a multitude of disciplines and responsibilities. I am involved in various software development projects working with backend frameworks such as .NET (Core and Framework) and Laravel and frontend javascript frameworks (Vue and React). I also work to develop and maintain a Docker Swarm environment to host both internal and customer applications/services as well as the CI/CD Pipelines that are used to test, build and deploy code.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">June 2017 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Apprentice Software Developer</h3>
              <div className="subheading mb-3">Ivy Ltd</div>
              <p>
                During my time at Ivy Ltd I completed my Level 3 and Level 4 apprenticeship qualifications in Software Development. As well as this my other responsibilities included developing and supporting a custom fork of SuiteCRM. I was also responsible for administering a number of linux servers (CentOS) for a number of customers.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2014 - June 2017</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
            
              <h3 className="mb-0">Level 4 Diploma in ICT Professional Competence</h3>
              <h3 className="mb-0">Level 4 Diploma for ICT Professionals - Systems and Principles</h3>
              <div className="subheading mb-3">Higher Level Apprenticeship at Ivy Ltd</div>
              <div>QA Ltd, City and Guilds</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">May 2015 - June 2017</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-laravel"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-docker"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-windows"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-wordpress"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-sass"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-vuejs"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-linux"></i>
            </li>
            <li>
              C#, .NET Core and Framework
            </li>
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Mobile-First, Responsive Design
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Unit Testing
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Browser &amp; Unit Testing &amp; Debugging
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Functional Teams
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
          I like to keep busy during my free time, I am a keen cyclist and enjoy challenging myself, for example
          I cycled from London -> Paris -> London over 4 days in order to raise £2500 for Chums Mental Health
          UK and in 2018 I completed Coast to Coast (150 Miles in one day). I also enjoy going to the gym and
          playing squash a few times a week. I also enjoy attending tech meetup events, most commonly PHP
          South West in Bristol.
          </p>
          <p className="mb-0">
            When forced indoors, I enjoy cooking, and I spend a
            large amount of my free time exploring the latest technology
            advancements in the web development world.
          </p>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
