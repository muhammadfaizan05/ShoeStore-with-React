import React from "react";
import "./shoes.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import Store from "../../store/store";
import {toast } from 'react-toastify';


export default function Shoes() {

    let data = useSelector((store)=>{
        return store.shoedetails;
    })

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

        {/* <img src="mainpics3.png"/> */}
        <div className="shoescontainer">
            <h1 className="title">SUMMER COLLECTION 2022</h1>
            <div className="images">
                {data.map((image) => {
                    return <><div className="returningdiv">
                         <Link to={"/shoesdetail/"+image.id}> <img src={image.imgsrc} onMouseLeave={mouseleave}  onMouseEnter={hoverhowa} ></img></Link>
                       <img src="cart.gif" className="cart_sign" onClick={()=>{addtocart(image)}}/> <h3 className="pricetag">Price:{image.price}</h3>
                        </div>
                        </>   })}
            </div>
        </div>
    </>
}
