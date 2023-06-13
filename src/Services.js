import React from 'react';
import './Services.css';
import { Element } from 'react-scroll';

const Services = () => {
  return (
    <Element id="services" className="services">
      <h1>Services</h1>
      <div className="services-grid">
        <ServiceBox icon="money" title="Accounting" description={["Compiled Financial Information", "Financial Projections and Budgeting", "General Ledger review"]} />
        <ServiceBox icon="calculator" title="Tax Services" description={["Personal tax returns", "Self-employed tax returns", "Corporate tax returns"]} />
        <ServiceBox icon="book" title="Bookkeeping" description={["Monthly, Quarterly, or Annual Bookkeeping", "Payroll, T4’s & ROE", "GST, PST & WCB Reporting"]} />
        <ServiceBox icon="handshake-o" title="Advisory & Compliance" description={["CRA audit assistance", "Service Canada - TFWP audit assistanc", "Business Planning & setup"]} />
      </div>
    </Element>
  );
};

const ServiceBox = ({ icon, title, description }) => (
  <div className="service-box">
    <i className={`fa fa-${icon} service-icon`} aria-hidden="true"></i>
    <h2 className="service-title">{title}</h2>
    <ul className="service-description">
      {description.map((desc, index) => (
        <li key={index}>{desc}</li>
      ))}
    </ul>
  </div>
);

export default Services;
