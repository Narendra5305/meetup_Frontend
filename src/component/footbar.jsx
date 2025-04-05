import React from "react";

import "./componentCss/footbar.css"


const Footbar =() =>{
    return(
        <div className="footbar">
            <div className="footbar-child">
                <div className="footbar-child-1">
                    <h2>Create your own Meetup group.</h2>
                    <button>Get Started</button>
                </div>

                <hr />

                <div className="footbar-child-2">
                    <ul>
                        <li>
                            <ul>
                                <li>Your Account</li>
                                <li>Settings</li>
                                <li>Log out</li>
                                <li>Help</li>
                                <li>Become an Affiliate</li>
                            </ul>
                        </li>

                        <li>
                            <ul>
                                <li>Discover</li>
                                <li>Groups</li>
                                <li>Calendar</li>
                                <li>Topics</li>
                                <li>Cities</li>
                                <li>Online Events</li>
                                <li>Local Guides</li>
                                <li>Make Friends</li>
                            </ul>
                        </li>

                        <li>
                            <ul>
                                <li>Meetup</li>
                                <li>About</li>
                                <li>Blog</li>
                                <li>Meetup Pro</li>
                                <li>Careers</li>
                                <li>Apps</li>
                                <li>Podcast</li>
                            </ul>
                        </li>
                    </ul>
                
                </div>


                <div className="footbar-child-3">
                    <div className="footbar-child-3-child-1">
                        <div className="footbar-child-3-child-1-1">
                            <h3>Follow Us</h3>
                        </div>
                        <div className="footbar-child-3-child-1-2">
                            <img src="https://www.svgrepo.com/show/504313/facebook.svg" alt="facebook logo" />
                            <img src="https://www.svgrepo.com/show/458242/insta.svg" alt="insta logo" />
                            <img src="https://www.svgrepo.com/show/509274/twitter.svg" alt="twitter logo" />
                            <img src="https://www.svgrepo.com/show/521051/youtube.svg" alt="youtube logo" />
                        </div>
                    </div>


                    <div className="footbar-child-3-child-2">
                        <img src="https://secure.meetupstatic.com/next/images/app-download/android/download_en-US.svg?w=256" alt="playstore logo" />
                        <img src="https://secure.meetupstatic.com/next/images/app-download/ios/download_en-US.svg?w=256" alt="applestore logo" />
                    </div>
                
                </div>



                <div className="footbar-child-4">
                    <p>© 2025 Meetup</p>
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                    <p>Cookie Policy</p>
                    <p>License Attribution</p>
                    <p>Help</p>
                </div>

            </div>
        </div>
    )
}

export default Footbar ;