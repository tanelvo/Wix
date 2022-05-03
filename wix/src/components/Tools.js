import React from "react";
import "./style.css";
import { Image } from "react-bootstrap";
import store from '../images/store1.webp';
import blog from '../images/blog.webp';
import domain from '../images/domain.webp';
import bookings from '../images/bookings.webp';
import logo from '../images/logo.webp';
import seo from '../images/seo.webp';

function Tools() {
    return(
        <div className="tools">
            <div style={{height: 125}}><br/></div>
            <div className="tools-1">
                <h1 className="tools-h1">Make your own website and<br/>get built-in tools to grow your<br/>business online.</h1>
                <div style={{height: 90}}><br/></div>
                <div className="tools-child-1">
                    <div>
                        <Image src={store} style={{width: 480}}></Image>
                        <div style={{marginLeft: 10, marginTop: 18}}>
                            <h3 className="tools-h3">Online Store</h3>
                            <p>Start selling online and grow your business<br/>with a powerful eCommerce platform.</p>
                            <a href="" className="tools-a" >Create an Online Store</a>
                            <div style={{height: 108}}><br/></div>
                        </div>
                    </div>
                    <div>
                        <Image src={blog} style={{width: 487,marginLeft: -40}}></Image>
                        <div style={{marginLeft: 10, marginTop: 18}}>
                            <h3 className="tools-h3">Professional Blog</h3>
                            <p>Create a blog with built-in features to<br/>grow your reach and build a community.</p>
                            <a href="" className="tools-a" >Create an Free Blog</a>
                            <div style={{height: 138}}><br/></div>
                        </div>
                    </div>
                    <div>
                        <Image src={domain} style={{width: 412,marginLeft: -15}}></Image>
                        <div style={{marginLeft: 10, marginTop: 32}}>
                            <h3 className="tools-h3">Custom Domains</h3>
                            <p>Get a professional domain name that<br/>matches your business and brand.</p>
                            <a href="" className="tools-a" >Get Custom Domain Names</a>
                        </div>
                    </div>
                </div>
                <div className="tools-child-2">
                    <div style={{height: 88}}><br/></div>
                    <div>
                        <Image src={bookings} style={{width: 500}}></Image>
                        <div style={{marginLeft: 10, marginTop: 40}}>
                            <h3 className="tools-h3">Online Scheduling Software</h3>
                            <p>Let clients book appointments<br/>or services and pay online.</p>
                            <a href="" className="tools-a" >Discover Wix Bookings</a>
                            <div style={{height: 120}}><br/></div>
                        </div>
                    </div>
                    <div>
                        <Image src={logo} style={{width: 384,marginLeft: 10}}></Image>
                        <div style={{marginLeft: 10, marginTop: 40}}>
                            <h3 className="tools-h3">Logo Maker</h3>
                            <p>Design your own professional logo<br/>and build your brand online.</p>
                            <a href="" className="tools-a" >Try Wix Logo Maker</a>
                            <div style={{height: 115}}><br/></div>
                        </div>
                    </div>
                    <div>
                        <Image src={seo} style={{width: 409,marginLeft: 10}}></Image>
                        <div style={{marginLeft: 10, marginTop: 35}}>
                            <h3 className="tools-h3">SEO Tools</h3>
                            <p>Improve your visibility on search engines<br/>with a full range of SEO features.</p>
                            <a href="" className="tools-a" >Find Out More</a>
                        </div>
                    </div>
                <div style={{height: 220}}><br/></div>  
                </div>
                
            </div>
        </div>    
    )
}

export default Tools