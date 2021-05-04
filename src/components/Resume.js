import React from 'react'

const Resume = () => {
    const downloadResume = () => {
        window.location = '/images/audio/glock.mp3';
    }

    return (
        <div>
            

            <div id="resume" className="span-top">
                <div className="fill-blue">Resume</div>
                <div className="left-column">
                    <div className="substrate">
                        <h2>My Card</h2>
                        <img src="/images/photocontent/about_me_3.jpg" width="230px" height="300px" alt="" />
                        <ul className="main-info-list">
                            <li>Name<span>Emmanuel K. Glimeti</span><div className="floatlimit"></div></li>
                            <li>Birthday<span>2nd July 1993</span><div className="floatlimit"></div></li>
                            <li>Address<span>Accra, Ghana </span><div className="floatlimit"></div></li>
                            <li>Phone<span>+233 (0) 542-634-605</span><div className="floatlimit"></div></li>
                            <li>Email<span>kymani.emmanuel@gmail</span><div className="floatlimit"></div></li>
                            <li>M. Status<span>Still Searching</span><div className="floatlimit"></div></li>
                        </ul>
                        <a onClick={downloadResume} className="button">
                            <div className="button-big button-blue">
                                <div className="button-anim"></div>
                                <div className="button-big-label">Download vCard</div>
                            </div>
                        </a>
                    </div>
                    <div className="substrate">
                        <h2>My Skills</h2>
                        <h3>Web Design</h3>
                        <ul className="skills">
                            <li className="skill">HTML+CSS<span className="skill-blue-star-5"></span></li>
                            <li className="skill">Javascript<span className="skill-blue-star-4"></span></li>
                            <li className="skill">Php<span className="skill-blue-star-5"></span></li>
                            <li className="skill">jQuery<span className="skill-blue-star-5"></span></li>
                            <li className="skill">Next Js<span className="skill-blue-star-5"></span></li>
                            <li className="skill">Typescript<span className="skill-blue-star-5"></span></li>
                            <li className="skill">Bootstrap<span className="skill-blue-star-5"></span></li>
                            <li className="skill">Material UI<span className="skill-blue-star-5"></span></li>
                            <li className="skill">Chakra UI<span className="skill-blue-star-5"></span></li>
                            <li className="skill">Node Js<span className="skill-blue-star-4"></span></li>
                            <li className="skill">Graphql<span className="skill-blue-star-4"></span></li>
                        </ul>
                        <h3>Headless CMS</h3>
                        <ul className="skills">
                            <li className="skill">Keystone<span className="skill-blue-star-4"></span></li>
                            <li className="skill">Strapi<span className="skill-blue-star-4"></span></li>
                        </ul>
                        <h3>Databases</h3>
                        <ul className="skills">
                            <li className="skill">Firebase<span className="skill-blue-star-4"></span></li>
                            <li className="skill">MongoDB<span className="skill-blue-star-4"></span></li>
                            <li className="skill">PostgreSQL<span className="skill-blue-star-4"></span></li>
                            <li className="skill">MySQL<span className="skill-blue-star-4"></span></li>
                        </ul>
                        <h3>Graphic Skills</h3>
                        <ul className="skills">
                            <li className="skill">Photoshop<span className="skill-blue-star-4"></span></li>
                            <li className="skill">CorelDraw<span className="skill-blue-star-4"></span></li>
                            <li className="skill">Adobe Premier<span className="skill-blue-star-4"></span></li>
                        </ul>
                        
                        <h3>3 Styles of Skills</h3>
                        <ul className="skills">
                            <li className="skill">Stars<span className="skill-blue-stroke-3"></span></li>
                            <li className="skill">Fill<span className="skill-blue-stroke-5"></span></li>
                            <li className="skill">Stroke<span className="skill-blue-stroke-4"></span></li>
                        </ul>
                    </div>
                </div>

                <div className="right-column">
                    <div className="substrate gradient-blue font-blue">
                        <h2>About Me</h2>
                        <h3>Hi, My name is Emmanuel K. Glimeti...</h3>
                        <p>
                        I chose this field of study because I’ve always been interested in Computers, Programming, and Graphics.
                        I really enjoy providing fancy UI and robust software solutions to my clients because there is no difference between 
                        Web Design and Art. I’ve led a Software Engineering team of 5 programmers at Code Gh and I've been part of a team of 12 developers at Shrinq Ghana for two years. 
                        My proudest moment was working with Shrinq Ghana, Vanguard Assurance and Vodafone. But before that I worked as a Full-Stack developer 
                        for a real estate company for a year. And so far, it’s been a great run and a colorful journey but I’m currently adding Machine Learning, Mobile App development and 
                        Ethical Hacking to my arsenal. As Alexander Pope said, "One science only will one genius fit; So vast is art, so narrow human wit". I, Kymani, occassionally dabble in prose but 
                        this is the life I chose. Don't hesitate to place your bit cause trust me, I was born to do THIS.
                        </p>
                        <div className="paper-clip"></div>
                    </div>
                    <div className="substrate">
                        <h2>Employment</h2>
                        <div className="left-blue">
                            <div className="time-period-left-blue"></div>
                            <h3>Designer<span className="time-period-right-blue">2011 - 2012</span></h3>
                            <h4>Some information</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscingVivamus sit amet ligula non lectus cursus egestas. Cras erat lorem, fringilla quis sagittis in, sagittis inNam leo tortor Nam leo tortor Vivamus.</p>
                            <div className="time-period-left-blue"></div>
                            <h3>UI Designer<span className="time-period-right-blue">2011</span></h3>
                            <h4>Some information</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscingVivamus sit amet ligula non lectus cursus egestas.</p>
                            <div className="time-period-left-blue"></div>
                            <h3>Web Designer</h3>
                            <h4>Some information</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscingVivamus sit amet ligula non lectus cursus egestas. Cras erat lorem, fringilla quis sagittis in, sagittis inNam leo tortor Nam leo tortor Vivamus.</p>
                        </div>
                    </div>
                    <div className="substrate">
                        <h2>Education. 2 variant.</h2>
                        <div className="left-blue">
                            <div className="time-period-left-blue">2012</div>
                            <div className="info-period">
                                <h3>Designer</h3>
                                <h4>School of Art and Design</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscingVivamus sit amet ligula
                                     non lectus cursus egestas.</p>
                            </div>
                            <div className="time-period-left-blue">2008 - 2012</div>
                            <div className="info-period">
                                <h3>Designer</h3>
                                <h4>School of Art</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscingVivamus sit amet ligula non
                                     lectus cursus egestas. Cras erat lorem, fringilla quis sagittis in, sagittis 
                                     inNam leo tortor Nam leo tortor Vivamus.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="floatlimit"></div>

            </div>
        </div>
    )
}

export default Resume
