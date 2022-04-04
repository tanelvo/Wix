import React from "react";
import { Button, Image } from "react-bootstrap";
import "./style.css";
import background from "../images/bg1.webp";
import image from "../images/desktop.webp";

function Introduction() {


    return(
        <>
            <div style={{ backgroundImage:`url(${background})`}}>
                <div className="introduction">
                    <div style={{height: 115}}><br/></div>
                    <h1 className="introduction-h1">Create a website<br/>you're proud of</h1><br/>
                    <h4 className="introduction-h4">Discover the platform that gives you the freedom to create, design,<br/>manage and develop your web presence exactly the way you want.</h4>
                    <br/><Button variant="secondary" disabled>Get Started</Button><br/><br/>
                    <h5 className="introduction-h5">Try Wix. No credit card required.</h5><br/>
                    <Image src={ image } style={{width: "1270px"}}></Image>
                </div>
                
            </div>
        </>
    )
}

export default Introduction