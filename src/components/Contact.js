const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        
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
                                <form>
                                    <label htmlFor="name">Name</label>
                                    <br></br>
                                    <input id="name" type="text" />
                                    <br></br>
                                    <label htmlFor="email">Email</label>
                                    <br></br>
                                    <input id="email" type="text" />
                                    <br></br>
                                    <label htmlFor="message">Message</label>
                                    <br></br>
                                    <input id="message" type="text" />
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