import React, { useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
import { Element } from 'react-scroll';
import cpa from './images/cpa.jpeg';


const Contact = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_t67x21r',
            'template_35ff7l9',
            form,
            'Ro_kc1RPa6Jq_VrCb'
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
            console.log('FAILED...', err);
        });

        setForm({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <Element id="contact" className="contact-container">
            <div className="contact-form-container">
                <h2 className="contact-heading">Contact</h2>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="from_name"
                        placeholder="Name"
                        value={form.from_name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        value={form.message}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="contact-info">
                <div className="info-item">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <p>5945 164 St, Surrey, BC, V3S 6M6</p>
                </div>
                <div className="info-item">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <p>(778)-316-1086</p>
                </div>
                <div className="info-item">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <p>info@dhilloncpa.com</p>
                </div>
            </div>
            <img src={cpa} alt="description" className="contact-image" />
        </Element>
    );
};

export default Contact;
