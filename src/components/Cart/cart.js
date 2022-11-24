import React from "react";
import { useSelector } from "react-redux";
import './cart.css';
import Store from '../../store/store';
import { toast } from 'react-toastify';

export default function Cart() {

    let total = 0;

    let data = useSelector((store) => {
        return store.cartitem;
    })

    if (data.length == 0) {
        return <>
            <h1 className="noitemnotigication">No items in the cart Yet</h1>
            <img src="sad emoji.png" alt="404" className="sademoji" />
        </>
    }

    data.forEach(element => {
        let bill = element.price * element.quantity;
        total = total + bill;
    });

    let currentsrc = "";

    function hoverhowa(e) {
        e.target.children[1].classList.remove('none');
    }

    function mouseleave(e) {
        e.target.children[1].classList.add('none');
    }


    function increaseqty(image){
        Store.dispatch({
            type: "qtyincrement",
            payload:image,
        })
    }

    function deccrement(id){
        Store.dispatch({
            type:"minusfromcart",
            payload:id,
        })}
    

    function deleteitem(id) {
        console.log(id);
        Store.dispatch({
            type: 'deleteitem',
            payload: id,
        })
    }

    function ordernow() {
        alert("Confirm your order");
    }

    return <>
        <h2>Your Cart Items Here:</h2>
        <div className="cart_container">

            <div className="images">
                {data.map((image) => {
                    return <div className="cartreturningdiv" onMouseLeave={mouseleave} onMouseEnter={hoverhowa} >
                        <img src={image.secondsrc} className="cart_img"></img>
                        <div className="deletebox none" id="deleteicon" onClick={() => { deleteitem(image.id) }}>X</div>
                        <h3 className="desc_box">Desc: {image.desc}</h3>
                        <h3 className="quantity">Qty: {image.quantity}</h3>
                        <h3 className="pricetag">Rs.{image.price * image.quantity}</h3>
                        <img onClick={() => {increaseqty(image)}} src="49-plus-circle-lineal.gif" className="plusicon"/>
                        <img onClick={() => {deccrement(image)}} src="50-minus-circle-gradient.gif" className="decrease"/>
                    </div>
                })}
            </div>
            <button className="orderbtn" onClick={ordernow}>Order Them Now</button>
            <h4>Total Bill{total}</h4>
        </div>


        <div className="Final_Bill">

        </div>
    </>
}