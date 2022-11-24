import React, { useEffect } from "react";
import './header.css';
import { Link } from "react-router-dom";
import { type } from "@testing-library/user-event/dist/type";


export default function Header() {

    let text = " Free_Delivery_on_order_above_Rs.2000";
    let i = 0;
    let iteration = 0;

    function changetext() {
        if (iteration == 0) {
            text = " Best_Quality,_Long_Lasting_Shoes.";
            i = 0;
            iteration++;
        }
        else if (iteration == 1) {
            text = "No_return_or_exchange_on_sale_items.";
            i = 0;
            iteration = 1;
        }
        else if (iteration == 2) {
            let text = " Free_Delivery_on_order_above_Rs.2000";
            let i = 0;
            iteration=0;
        }
        document.getElementById("pointerwala").innerText = "-";
        typeWriter();
    }

    function typeWriter() {
        let length = text.length;
        if (i < length) {
            document.getElementById("pointerwala").innerText += "" + text.charAt(i);
            i++;
            setTimeout(typeWriter, 400);
        }
        else if (i == length) {
            changetext();
        }
    }

    useEffect(() => {
        typeWriter();
    }, [])


    return <>
        <div className="its_container">

            <div className="marqueetag" id="pointerwala">

            </div>
        </div>
        {/* <div className="marqueetag"><marquee scrollamount="1" width="40%" direction="up" height="20px">No return or exchange on sale items <br/>
            Free Delivery on order above Rs.2000/<br/><br/>
            Best Quality,.Long Lasting Shoes.<br/><br/>
            </marquee></div> */}
        <div className="container">
            <ul>
                <li><Link to={"/home"}>Home</Link></li>
                <li><a href="#">about</a></li>
                <li><Link to={"/shoes"}>Shoes</Link></li>
                <li className="specialcategory"><a href="#">Category</a>
                    <ol className="subclass">
                        <li><a><Link to={"/mens"}>Mens</Link></a></li>
                        <li><a><Link to={"/female"}>Womens</Link></a></li>
                        <li><a><Link to={"/kids"}>Kids</Link></a></li></ol>
                </li>
                <li><a><Link to={"/cart"}>Cart</Link></a></li>
                
            </ul>
        </div>
    </>
}