import React from 'react'

const Portfolio = () => {
    return (
        <div>
            <div id="portfolio" className="span-top">
                <div className="fill-green">Portfolio</div>

                <div className="full-width">

                    
                <ul id="portfolio-filter">
                        <li>
                            <a href="#." className="button current"  data-filter="*">
                                <div className="button-small button-green">
                                    <div className="button-anim-border"></div>
                                    <div className="button-small-label">All</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#." className="button" data-filter=".f-photo">
                                <div className="button-small button-green">
                                    <div className="button-anim-border"></div>
                                    <div className="button-small-label">UI</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#." className="button" data-filter=".f-youtube">
                                <div className="button-small button-green">
                                    <div className="button-anim-border"></div>
                                    <div className="button-small-label">Web App</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#." className="button" data-filter=".f-vimeo">
                                <div className="button-small button-green">
                                    <div className="button-anim-border"></div>
                                    <div className="button-small-label">Photoshop</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#." className="button" data-filter=".f-video">
                                <div className="button-small button-green">
                                    <div className="button-anim-border"></div>
                                    <div className="button-small-label">Neo Morphism</div>
                                </div>
                            </a>
                        </li>
                    </ul>

                    <ul id="portfolio-content" className="top-border-green">

                        <li className="full-thumb f-photo">
                            <a href="/images/photocontent/photo-work-1.jpg" className="fancybox" rel="group" title="Black Pussy Cat by `Artgerm">
                                <img src="/images/photocontent/photo-work-1.jpg" width="230px" alt="" />
                                <div className="div-info">
                                    <div className="thumb-icon-photo"></div>
                                    <div className="thumb-name">Eco Friendly Designs</div>
                                </div>
                            </a>
                        </li>

                        <li className="full-thumb f-video f-youtube">
                            <a href="/images/photocontent/photo-work-2.jpg" className="fancybox-media">
                                <img src="/images/photocontent/photo-work-2.jpg" width="230px" alt=""/>
                            <div className="div-info">
                                <div className="thumb-icon-youtube"></div>
                                <div className="thumb-name">Neo Morphic Login</div>
                            </div>
                            </a>
                        </li>
                        

                        <li className="full-thumb f-photo">
                            <a href="images/photocontent/photo-work-5.jpg" className="fancybox" rel="group" title="Beautiful UI to suite your demands">
                                <img src="/images/photocontent/photo-work-5.jpg" width="230px" alt=""/>
                            <div className="div-info">
                                <div className="thumb-icon-photo"></div>
                                <div className="thumb-name">Advanced UI</div>
                            </div>
                            </a>
                        </li>

                        <li className="full-thumb f-video f-youtube">
                            <a href="/images/photocontent/photo-work-4.jpg" className="fancybox-media">
                                <img src="/images/photocontent/photo-work-4.jpg" width="230px" alt=""/>
                            <div className="div-info">
                                <div className="thumb-icon-youtube"></div>
                                <div className="thumb-name">Modern Neo Morphic UI Components</div>
                            </div>
                            </a>
                        </li>

                        <li className="full-thumb f-video f-vimeo">
                            <a href="/images/photocontent/photo-work-3.jpg" className="fancybox-media" >
                                <img src="/images/photocontent/photo-work-3.jpg" width="230px" alt=""/>
                            <div className="div-info">
                                <div className="thumb-icon-vimeo"></div>
                                <div className="thumb-name">When I Grow Up</div>
                            </div>
                            </a>
                        </li>

                        <li className="full-thumb f-photo">
                            <a href="images/photocontent/photo-work-6.jpg" className="fancybox" rel="group" title="React js Disney+ Clone">
                                <img src="/images/photocontent/photo-work-6.jpg" width="230px" alt=""/>
                            <div className="div-info">
                                <div className="thumb-icon-photo"></div>
                                <div className="thumb-name">Disney+ Clone</div>
                            </div>
                            </a>
                        </li>

                        <li className="full-thumb f-photo">
                            <a href="images/photocontent/portfolio_07.jpg" className="fancybox" rel="group" title="Pepper Freedom by `Artgerm">
                                <img src="images/photocontent/portfolio_thumb_07.jpg" alt="" />
                                <div className="div-info">
                                    <div className="thumb-icon-photo"></div>
                                    <div className="thumb-name">Pepper Freedom</div>
                                </div>
                            </a>
                        </li>

                        <li className="full-thumb f-photo">
                            <a href="images/photocontent/photo-work-7.jpg" className="fancybox" rel="group" title="Evelet of The Lost Kids by `Artgerm">
                                <img src="/images/photocontent/photo-work-7.jpg" width="230px" alt=""/>
                            <div className="div-info">
                                <div className="thumb-icon-youtube"></div>
                                <div className="thumb-name">Under Sea UI</div>
                            </div>
                            </a>
                        </li>

                    </ul>
                    

                </div>

                <div className="floatlimit"></div>

            </div>
        </div>
    )
}

export default Portfolio
