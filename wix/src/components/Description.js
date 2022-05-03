import React from "react";
import { Image } from "react-bootstrap";
import "./style.css";
import background from "../images/bg2.webp";
import image from "../images/description.webp";


function Description() {
    return(
        <>
            <div>
                <div class="float-child">
                <div style={{height: 108}}><br/></div>
                    <div style={{marginLeft: -5}}>
                        <h1 className="description-h1">The Freedom to Create<br/>the Websites You Want</h1>
                    </div>
                <div style={{height: 204}}><br/></div>
                </div>
                <div class="float-child-2">
                    <div style={{height: 118}}><br/></div>
                    <div className="description-1">
                        <h3 className="description-h3-2">Design and build your own high-quality websites.<br/>Whether you’re promoting your business, showcasing<br/>your work, opening your store or starting a blog—you<br/>can do it all with the Wix website builder.</h3>
                        <div style={{height: 14}}><br/></div>
                        <a href="/home" className="description-a">Get Started</a>
                    </div>
                    <div style={{height: 116}}><br/></div>
                </div>
            </div>
            <div class="float-container">
                <div class="float-child-1">
                    <div style={{height: 130}}><br/></div>
                    <div class="description-2">
                        <h1 className="description-h1">Build Your Unique<br/>Online Presence</h1>
                        <h3 className="description-h3">To create your own website, follow these steps:</h3><br/><br/>
                        <div class="float-container">
                            <div class="float-child-3">
                                <div style={{borderBottom: "1px solid #fff", width: 225}}></div>
                                <h2 className="description-h2">Customize your site</h2>
                                <p className="description-p">Pick a template and customize<br/>anything, or answer a few<br/>questions and get a free<br/>website designed just for you.</p><br/><br/>
                                <div style={{borderBottom: "1px solid #fff", width: 225}}></div>
                                <h2 className="description-h2">Edit your mobile view</h2>
                                <p className="description-p">Check out the mobile-<br/>optimized version of your site.<br/>Switch to the Mobile Editor to<br/>personalize it even more.</p>
                            </div>
                            <div class="float-child-4">
                                <div style={{borderBottom: "1px solid #fff", width: 275}}></div>
                                <h2 className="description-h2">Add advanced features</h2>
                                <p className="description-p">Start your own blog, add an<br/>online store and accept bookings<br/>online. You can always add more<br/>features as you grow.</p><br/><br/>
                                <div style={{borderBottom: "1px solid #fff", width: 275}}></div>
                                <h2 className="description-h2">Optimize for search engines</h2>
                                <p className="description-p">Answer a few questions about<br/>your website, location and<br/>keywords and get a personalized<br/>SEO plan to get found online.</p>
                                <br/><br/>
                            </div>
                        </div>
                        <a href="/home" className="description-a">Start Now</a>
                        <div style={{height: 150}}><br/></div>
                    </div>
                </div>

                <div class="float-child">
                    <div style={{ backgroundImage:`url(${background})`}}>
                        <div style={{height: 300}}><br/></div>
                        <Image src={image} style={{width: "560px"}}></Image>
                        <div style={{height: 240}}><br/></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Description