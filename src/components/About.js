import React from 'react'

const About = () => {
    const downloadResume = () => {
        window.location = '/images/audio/glock.mp3';
    }
    return (
        <div>

            <div id="aboutme">

            <div className="slider-wrapper">
                <div className="flexslider">
                    <ul className="slides">
                        <li>
                            <img src="images/photocontent/about_me_1.jpg" alt="Emmanuel Kymani Glimeti" />
                            </li>
                        <li>
                            <img src="images/photocontent/about_me_2.jpg" alt="Emmanuel Kymani Glimeti" />
                        </li>
                        <li>
                            <img src="images/photocontent/about_me_3.jpg" alt="Emmanuel Kymani Glimeti" />
                        </li>
                        <li>
                            <img src="images/photocontent/about_me_4.jpg" alt="Emmanuel Kymani Glimeti" />
                        </li>
                        <li>
                            <img src="images/photocontent/about_me_5.jpg" alt="Emmanuel Kymani Glimeti" />
                        </li>
                    </ul>
                </div>
            </div>

            <div className="about-wrapper">
                <div className="title">
                    <h1>Emmanuel K. Glimeti</h1>
                    <h5>GRAPHIC & Software</h5>
                </div>
                <div className="download-card">
                    <a onClick={downloadResume} className="button">
                        <div className="button-medium button-red">
                            <div className="button-anim"></div>
                            <div className="button-medium-label">Download vCard</div>
                        </div>
                    </a>
                </div>
                <div className="info-slider">
                    <div className="info-slide-list">
                        <div className="info-slide-wrapper">

                            <div className="info-slide-item">
                                <div className="top-border-red">
                                    <p>Hi, my name is Emmanuel Kymani Glimeti.<br />
                                    I chose this field of study because I’ve always been interested in Computers, Programming, and Graphics.
                                    I really enjoy providing fancy UI and robust software solutions to my clients because there is no difference between 
                                    Web Design and Art. I’ve led a Software Engineering team of 5 programmers at Code Gh and I've been part of a team of 12 developers at Shrinq Ghana for two years. 
                                    My proudest moment was working with Shrinq Ghana, Vanguard Assurance and Vodafone. But before that I worked as a Full-Stack developer 
                                    for a real estate company for a year. And so far, it’s been a great run and a colorful journey but I’m currently adding Machine Learning, Mobile App development and 
                                    Ethical Hacking to my arsenal. As Alexander Pope said, "One science only will one genius fit; So vast is art, so narrow human wit". I, Kymani, occassinally dabble in prose but 
                                    this is the life I chose. Don't hesitate to place your bit cause trust me, I was born to do THIS.
                                    </p>
                                </div>
                            </div>

                            <div className="info-slide-item">
                                <div className="top-border-blue">
                                    <div className="left-column">
                                        <ul className="main-info-list">
                                            <li>Name<span>Emmanuel K. Glimeti</span></li>
                                            <li>Birthday<span>02 July 1993</span></li>
                                            <li>Address<span>Accra Ghana, West Africa</span></li>
                                        </ul>
                                    </div>
                                    <div className="right-column">
                                        <ul className="main-info-list">
                                            <li>Phone<span>(+233) (0) 542-634-605</span></li>
                                            <li>Email<span>kymani.emmanuel@gmail.com</span></li>
                                            <li>Website<span>www.mysite.com</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="info-slide-item">
                                <div className="top-border-green">
                                    <ul className="mini-portfolio">
                                        <li className="asdf minip-1"><div className="minispan"><span>See My Portfolio</span></div></li>
                                        <li className="helper-miniportfolio-margin"></li>
                                        <li className="asdf minip-2"><div className="minispan"><span>See My Portfolio</span></div></li>
                                        <li className="asdf medip-1"><div className="minispan"><span>See My Portfolio</span></div></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="info-slide-item">
                                <div className="top-border-yellow">
                                    <div className="mini-location">
                                        <div className="mini-icon-pin"></div>
                                        <div className="mini-location-text">La Paz, Accra, Ghana, West Africa</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="clear"></div>
                    </div>
                </div>
            </div>

            <div className="floatlimit"></div>

            </div>
        </div>
    )
}

export default About
