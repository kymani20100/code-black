import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="left-column"><p>CodeBlack, Copyright © 2021</p></div>
                <div className="right-column">

                    <div className="social">
                        <ul>
                            <li className="youtube">
                                <a><div className="icon-youtube"></div></a>
                            </li>
                            <li className="dribble">
                                <a><div className="icon-dribble"></div></a>
                            </li>
                            <li className="vkontakte">
                                <a><div className="icon-vkontakte"></div></a>
                            </li>
                            <li className="flickr">
                                <a><div className="icon-flickr"></div></a>
                            </li>
                            <li className="skype">
                                <a><div className="icon-skype"></div></a>
                            </li>
                            <li className="deviant">
                                <a><div className="icon-deviant"></div></a>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="floatlimit"></div>
            </div>
        </div>
    )
}

export default Footer
