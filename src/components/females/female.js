import "./female.css";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import {toast } from 'react-toastify'
import Store from "../../store/store";

export default function Practise() {

    let [female, setfemale] = useState([]);

    let data = useSelector((store) => {
        return store.shoedetails;
    })
    

    let dataneedtocheck=true;

    useEffect(() => {
            data.forEach(element => {
                if(element.gender=='female' && dataneedtocheck){
                    female.push(element);
                } });
            dataneedtocheck=false;
            setfemale([...female]);
            console.log(female); }, []);


    let currentsrc = "";

    function hoverhowa(e) {

        currentsrc = e.target.src;
        data.find((elemnt) => {
            if (elemnt.imgsrc == e._targetInst.memoizedProps.src) {
                // console.log(JSON.stringify(elemnt.secondsrc));
                e.target.src = elemnt.secondsrc;
            }
        })
    }

    function mouseleave(e) {
        e.target.src = currentsrc;
    }
    function addtocart(img){
        let datatosend={...img,quantity:1,shoesize:40};

            Store.dispatch({
                type:"addtocart",
                payload:datatosend,
            })
            toast.success("Added to cart")
    }

    return <>
        <div className="shoescontainer">
            <h1 className="menstitle">Ladies Shoes</h1>
         
            

            <div className="images">

                {female.map((image) => {
                    return <><div className="returningdiv">
                         <Link to={"/shoesdetail/"+image.id}> <img src={image.imgsrc} onMouseLeave={mouseleave}  onMouseEnter={hoverhowa} ></img></Link>
                         <img src="cart.gif" className="cart_sign" onClick={()=>{addtocart(image)}}/><h3 className="pricetag">Price:{image.price}</h3>
                        </div>
                        </>
                })}


            </div>
        </div>
    </>
}