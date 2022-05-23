import React, { useState } from 'react';

const Contact = () => {
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [message,setMessage] = useState();

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

        window.location.href = "mailto: rowe2ry@gmail.com"+'?cc='+email+'&subject=Portfolio Response'+'&body='+message;

        setName('');
        setEmail('');
        setMessage('')
    };

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
                                <form>
                                    <label htmlFor="name">Name</label>
                                    <br></br>
                                    <input 
                                        name="name"
                                        id="name"
                                        type="text"
                                        value ={name}
                                        onChange={handleInput}
                                    />
                                    <br></br>
                                    <label htmlFor="email">Email</label>
                                    <br></br>
                                    <input 
                                        name="email"
                                        id="email"
                                        type="text"
                                        value ={email}
                                        onChange={handleInput}
                                    />
                                    <br></br>
                                    <label htmlFor="message">Message</label>
                                    <br></br>
                                    <textarea 
                                        name="message"
                                        id="message"
                                        type="text"
                                        value ={message}
                                        onChange={handleInput}
                                    />
                                    <br></br>
                                    <input id="submit" type="button" value="SUBMIT" onClick={handleSubmit}/>
                                </form>
                            </div>
                        </section>
                    </article>
                </div>
            </div>
        </div>
    )
};

export default Contact;