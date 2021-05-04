import React from 'react'

const Navigation = () => {
    return (
        <div>
            <div id="nav">

                <div id="logo">
                    <h2>Code Black</h2>
                </div>

                <ul className="etabs">
                    <li className="tab tab-main">
                        <a href="#aboutme" className="gradient-red">
                            <div className="navicon-about"></div>
                            <div className="navicon-text">About</div>
                            <div className="uhere-text">You here</div>
                        </a>
                    </li>
                    <li className="tab tab-notmain">
                        <a href="#resume" className="gradient-blue">
                            <div className="navicon-resume"></div>
                            <div className="navicon-text">Resume</div>
                        </a>
                    </li>
                    <li className="tab tab-notmain">
                        <a href="#portfolio" className="gradient-green">
                            <div className="navicon-portfolio"></div>
                            <div className="navicon-text">Portfolio</div>
                        </a>
                    </li>
                    <li className="tab tab-notmain">
                        <a href="#contacts" className="gradient-yellow">
                            <div className="navicon-contact"></div>
                            <div className="navicon-text">Contacts</div>
                        </a>
                    </li>
                </ul>

            </div>


        </div>
    )
}

export default Navigation
