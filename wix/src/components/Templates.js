import React from "react";
import { NavLink } from "react-bootstrap";
import "./templates.css";
import { Image } from "react-bootstrap";
import image1 from "../images/temp-1.webp";
import image2 from "../images/temp-2.webp";
import image3 from "../images/temp-3.webp";
import image4 from "../images/temp-4.webp";
import image5 from "../images/temp-5.webp";
import image6 from "../images/temp-6.webp";

function Templates() {
    return(
        <>
            <div>
                <div className="templates">
                    <div style={{color: "#F4F4F4"}}>.</div>
                    <div className="templates-1">
                    <div style={{height: 84}}><br/></div>  
                        <h1 className="templates-h1">Professionally Designed<br/>Website Templates</h1>
                        <h3 className="templates-h3">Choose from 500+ customizable website templates<br/>that are built to meet your business needs.</h3>
                        <a href="/home" className="templates-a">See All Website Templates</a>
                        <div style={{height: 100}}><br/></div>
                    </div>
                </div>
                <div className="templates-2">
                    <div className="templates-2-1">
                        <div className="temp-child-1">
                            <NavLink><Image src={image1} style={{width: "361px"}}></Image></NavLink>
                            <h4 className="templates-h4">Blog</h4>
                            <NavLink><Image src={image4} style={{width: "361px"}}></Image></NavLink>
                            <h4 className="templates-h4">Design</h4>
                        </div>
                        <div className="temp-child-2">
                            <NavLink><Image src={image2} style={{width: "361px"}}></Image></NavLink>
                            <h4 className="templates-h4">Business</h4>
                            <NavLink><Image src={image5} style={{width: "361px"}}></Image></NavLink>
                            <h4 className="templates-h4">Photography</h4>
                        </div>
                        <div className="temp-child-3">
                            <NavLink><Image src={image3} style={{width: "361px"}}></Image></NavLink>
                            <h4 className="templates-h4">Online Store</h4>
                            <NavLink><Image src={image6} style={{width: "361px"}}></Image></NavLink>
                            <h4 className="templates-h4">Education</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Templates