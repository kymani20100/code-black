import React from 'react';
import emailjs from "emailjs-com";

const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_34y21q7', e.target, 'user_x8AeUqHpMTxJ0wbKJzOaz')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }

    return (
        <div>
            

            <div id="contacts" className="span-top">
                <div className="fill-yellow">Contacts</div>

                <div className="left-column">
                    <div className="substrate">
                        <h2>Contact Form</h2>

                        <div className="form-success">
                            <div className="form-success-yellow">Message successfully sent</div>
                            <div className="button new-message">
                                <div className="button-big button-yellow">
                                    <div className="button-anim"></div>
                                    <div className="button-big-label">Send another message</div>
                                </div>
                            </div>
                        </div>

                        <form id="contactform" className="animform" onSubmit={sendEmail}>
                            <ul>
                                <li>
                                   <label for="name" className="flabel">Name</label>
                                   <input type="text" name="name" id="name" />
                                   <div className="indicate-name"></div>
                                </li>
                                <li>
                                    <label for="email" className="flabel">E-mail</label>
                                    <input type="text" name="email" id="email" />
                                    <div className="indicate-email"></div>
                                </li>
                                <li>
                                    <label for="message" className="flabel">Enter your message</label>
                                    <textarea name="message" cols="88" rows="6" id="message"></textarea>
                                    <div className="indicate-message"></div>
                                </li>
                                <li>
                                    <button type="submit" name="submit" value="Send your message" className="submit">Send your message</button>
                                </li>
                            </ul>
                        </form>

                    </div>
                </div>

                <div className="right-column">
                    <div className="substrate">
                        <h2>My Location</h2>
                        <div id="map"></div>
                        <div className="map-pan">
                            <div className="div-info pan pan-active" data-lat="5.575650" data-lng="-0.243020">
                                <div className="thumb-icon-gmap"></div>
                                <div className="thumb-name">My Address</div>
                            </div>
                            <div className="div-info pan" data-lat="5.575650" data-lng="-0.243020">
                                <div className="thumb-icon-gmap"></div>
                                <div className="thumb-name">P.O. Box 645, Accra-North, Ghana</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="floatlimit"></div>

            </div>


        </div>
    )
}

export default Contact
