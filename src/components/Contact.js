import React, { useState } from 'react';

const Contact = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');
    const [error, setError] = useState('');

    const handleInput = (e) => {
        const { name, value } = e.target;

        if ( name === 'name') {
            return setName(value);
        } else if ( name === 'email') {
            return setEmail(value);
        } else {
            return setMessage(value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.length && email.length && message.length) {
            window.location.href = "mailto: rowe2ry@gmail.com"+'?cc='+email+'&subject=Portfolio Response'+'&body='+message;

            setName('');
            setEmail('');
            setMessage('');
        };
    };

    const handleFocusLoss = (e) => {
        const { name,value } = e.target;

        if ((name === 'name' || name === 'message') && value.length < 1) {
            setError(`${name} field cannot be empty!`);
        } else if (name === 'email' && /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(value) === false) {
            setError('email must be valid')
        } else {
            setError('');
        }
    }

    return (
        <div className="background">
            <div className="container">
                <div className="row">
                    <article className="card contact__card">
                        <section className="card__header">
                            <h2 className="card__title">Contact Me</h2>
                        </section>
                        <section className="card__body row contact__card">
                            <div className="card__text contact__card">
                                <h3>Fill out this form to draft a quick email to me.</h3>
                                <hr />
                                <form>
                                    <label htmlFor="name">Name</label>
                                    <br></br>
                                    <input 
                                        name="name"
                                        id="name"
                                        type="text"
                                        class="form__input"
                                        value ={name}
                                        onChange={handleInput}
                                        onBlur={handleFocusLoss}
                                    />
                                    <br></br>
                                    <label htmlFor="email">Email</label>
                                    <br></br>
                                    <input 
                                        name="email"
                                        id="email"
                                        type="text"
                                        class="form__input"
                                        value ={email}
                                        onChange={handleInput}
                                        onBlur={handleFocusLoss}
                                    />
                                    <br></br>
                                    <label htmlFor="message">Message</label>
                                    <br></br>
                                    <textarea 
                                        name="message"
                                        id="message"
                                        type="text"
                                        class="form__input"
                                        value ={message}
                                        onChange={handleInput}
                                        onBlur={handleFocusLoss}
                                    />
                                    <br></br>
                                    <p class="error" >{error}</p>
                                    <input id="submit" type="button" value="SUBMIT" onClick={handleSubmit}/>
                                </form>
                                <hr />
                                <h3>Or use one of the contact methods below instead:</h3>
                                <hr />
                                <ul class="contact__list">
                                    <li><strong>Phone: </strong><a href="tel:4047138702">404.713.8702</a></li>
                                    <li><strong>Email: </strong><a href="mailto:rowe2ry@gmail.com">rowe2ry@gmail.com</a></li>
                                </ul>
                            </div>
                        </section>
                    </article>
                </div>
            </div>
        </div>
    )
};

export default Contact;