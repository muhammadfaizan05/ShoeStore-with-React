import React from "react";
import './landing.css';
import { Link } from "react-router-dom";
import Footer from "../footer/footer";
import $ from 'jquery';
import Practise from "../Practise/practise";

export default function LandingPage() {   


    return <>
        {/* <img src="company logo.png"/> */}

        <div className="landingcontainer">
            <div className="wrapper">
                <img className="sliderimg" src="mainpics.png" />
                <img className="sliderimg" src="mainpics2.png" />
                <img className="sliderimg" src="mainpics3.png" />
                <img className="sliderimg" src="mainpics4.png" />
            </div>
        </div>


        {/* <div className="articles">
            <Link to='/shoes'>  <img src="Pics/Casual Shoes 1.png" className="artimg"></img> </Link>
            <Link to='/shoes'><img src="Pics/Casual Shoes 2.png" className="artimg"></img></Link>
            <Link to='/shoes'><img src="Pics/Casual Shoes 3.png" className="artimg"></img></Link>
            <Link to='/shoes'><img src="Pics/Casual Shoes 4.png" className="artimg"></img></Link>
        </div> */}

        <Practise/>
        <div className="banner_07">
            <img src="Banner-7.jpg" />
        </div>
        <Footer/>

           </>
}