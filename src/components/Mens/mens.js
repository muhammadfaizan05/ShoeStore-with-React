import "./mens.css";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import {toast } from 'react-toastify';
import Store from "../../store/store";

export default function Practise() {

    let [mens, setMens] = useState([]);
    

    let data = useSelector((store) => {
        return store.shoedetails;
    })

    let dataneedtocheck=true;

    useEffect(() => {
            data.forEach(element => {
                if(element.gender=='mens' && dataneedtocheck){
                    mens.push(element);
                }
            });
            dataneedtocheck=false;
            setMens([...mens]);
        }, []);
        
        
      
        
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
            <h1 className="menstitle">Mens Shoes Here!</h1>
        <div className="shoescontainer">
         
            

            <div className="images">

                {mens.map((image) => {
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