import React from "react";
// import image from "../images/store.jpg";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import './detailes.css';
import { useState } from "react";
import Store from '../../store/store';
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
import ReactImageMagnify from 'react-image-magnify';


export default function Details() {




    let img = [];
    let [qty, setQty] = useState(1);
    let [size, setSize] = useState(39);

    const { id } = useParams();

    let data = useSelector((store) => {
        return store.shoedetails;
    })

    data.forEach(element => {
        if (element.id == id) {
            img = element;
        }
    });

    // console.log(img);



    function increment() {
        setQty(qty + 1);
    }
    function decrement() {
        if (qty > 1) {
            setQty(qty - 1);
        }
    }
    function itemordered() {

    }
    function sizeincrement() {
        if (size < 45) {
            setSize(size + 1);
        }
    }
    function sizedecrement() {
        if (size > 39) {
            setSize(size - 1);
        }
    }

    function addtocart() {

        let datatosend = { ...img, quantity: qty, shoesize: size };

        Store.dispatch({
            type: "addtocart",
            payload: datatosend,
        })
        toast.success("Added to cart")
    }

    return <>
        <div className="articlecontainer">
            <h1>Detail of Your Selected Shoe</h1>

            <ReactImageMagnify {...{
                smallImage: {
                    alt: 'Wristwatch by Ted Baker London',
                    isFluidWidth: true,
                    src: "/"+img.imgsrc
                },
                largeImage: {
                    src: "/"+img.imgsrc,
                    width: 500,
                    height: 600
                }
            }} className='articleimg' />

            {/* 
            <img src={"/" + img.imgsrc} className="articleimg" />
            <img src={"/" + img.secondsrc} className="articleimg" />  */}

            <h3 className="articleprice">Rs.{img.price}</h3><br />
            <h4 className="articledescription">Desc::{img.desc}</h4>

            <div className="segment">

            <label className="quantitylabel">Quantity</label><br />
            <label className="setqty" onClick={increment}>+</label>
            <span className="qtycounter">{qty}</span>
            <label className="setqty" onClick={decrement}>-</label><br />

            <label className="quantitylabel">Size</label><br />
            <label className="setqty size" onClick={sizeincrement}>+</label>
            <span className="qtycounter">{size}</span>
            <label className="setqty size" onClick={sizedecrement}>-</label><br />


            <button className="addtocartbtn" onClick={addtocart}>Add to Cart</button> <br />
            </div>
            <button className="gotocart"><Link to={"/cart"}>Check-Your-Cart</Link></button>
        </div>
    </>
}