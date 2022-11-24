import { createStore, combineReducers } from 'redux';

import {toast } from 'react-toastify';

let meraOlDData = [
    { imgsrc: "Pics/Casual Shoes 1.png", price: 200, gender: "mens", desc: "Very Nice Product Here:!", id: "pic1", secondsrc: "Pics/Casual Shoes 1 after.png" },
    { imgsrc: "Pics/Casual Shoes 2.png", price: 400, gender: "mens", desc: "Acha Product", id: "pic2", secondsrc: "Pics/Casual Shoes 2 after.png" },
    { imgsrc: "Pics/Casual Shoes 3.png", price: 500, gender: "mens", desc: "NiceShoe!", id: "pic3", secondsrc: "Pics/Casual Shoes 3 after.png" },
    { imgsrc: "Pics/Casual Shoes 4.png", price: 600, gender: "mens", desc: "Very Nice Shoe Here:!", id: "pic4", secondsrc: "Pics/Casual Shoes 4 after.png" },
    { imgsrc: "Pics/Casual Shoes 5.png", price: 800, gender: "mens", desc: "Very Nice Shoe Here:!", id: "pic5", secondsrc: "Pics/Casual Shoes 5 after.png" },
    { imgsrc: "Pics/formal ladis 1.png", price: 1200, gender: "female", desc: "Very Nice Shoe Here:!", id: "pic6", secondsrc: "Pics/formal ladis 1 after.png" },
    { imgsrc: "Pics/child8.png", price: 1600, gender: "children", desc: "Very Nice Shoe Here:!", id: "pic37", secondsrc: "Pics/child8 after.png" },
    { imgsrc: "Pics/child3.png", price: 1100, gender: "children", desc: "Very Nice Shoe Here:!", id: "pic32", secondsrc: "Pics/child3 after.png" },
    { imgsrc: "Pics/mens sendle 1.png", price: 2500, gender: "mens", desc: "Very Nice Shoe Here:!", id: "pic7", secondsrc: "Pics/mens sendle 1 after.png" },
    { imgsrc: "Pics/mensclassic1.png", price: 2000, gender: "mens", desc: "Very Nice Shoe Here:!", id: "pic9", secondsrc: "Pics/mensclassic1 after.png" },
    { imgsrc: "Pics/female9.png", price: 3100, gender: "female", desc: "Very Nice Shoe Here:!", id: "pic25", secondsrc: "Pics/female9 after.png" },
    { imgsrc: "Pics/mensclassic3.png", price: 3000, gender: "mens", desc: "Very Nice Shoe Here:!", id: "pic11", secondsrc: "Pics/mensclassic4.png" },
    { imgsrc: "Pics/female11.png", price: 3000, gender: "female", desc: "Very Nice Shoe Here:!", id: "pic27", secondsrc: "Pics/female11 after.png" },
    { imgsrc: "Pics/mensclassic6.png", price: 2100, gender: "mens", desc: "Very Nice Shoe Here:!", id: "pic13", secondsrc: "Pics/mensclassic6 after.png" },
    { imgsrc: "Pics/mensclassic7.png", price: 2500, gender: "mens", desc: "Very Nice Shoe Here:!", id: "pic14", secondsrc: "Pics/mensclassic7 after.png" },
    { imgsrc: "Pics/female 13.png", price: 3000, gender: "female", desc: "Very Nice Shoe Here:!", id: "pic16", secondsrc: "Pics/female 13 fter.png" },
    { imgsrc: "Pics/female1.png", price: 3100, gender: "female", desc: "Very Nice Shoe Here:!", id: "pic17", secondsrc: "Pics/female1 after.png" },
    { imgsrc: "Pics/female2.png", price: 3200, gender: "female", desc: "Very Nice Shoe Here:!", id: "pic18", secondsrc: "Pics/female2 after.png" },
    { imgsrc: "Pics/female3.png", price: 3300, gender: "female", desc: "Very Nice Shoe Here:!", id: "pic19", secondsrc: "Pics/female3 after.png" },
    { imgsrc: "Pics/female4.png", price: 3400, gender: "female", desc: "Very Nice Shoe Here:!", id: "pic20", secondsrc: "Pics/female4 after.png" },
    { imgsrc: "Pics/female5.png", price: 3200, gender: "female", desc: "Very Nice Shoe Here:!", id: "pic21", secondsrc: "Pics/female5 after.png" },
    { imgsrc: "Pics/female6.png", price: 2500, gender: "female", desc: "Very Nice Shoe Here:!", id: "pic22", secondsrc: "Pics/female6 after.png" },
    { imgsrc: "Pics/female7.png", price: 2800, gender: "female", desc: "Very Nice Shoe Here:!", id: "pic23", secondsrc: "Pics/female7 after.png" },
    { imgsrc: "Pics/female8.png", price: 2300, gender: "female", desc: "Very Nice Shoe Here:!", id: "pic24", secondsrc: "Pics/female8 after.png" },
    { imgsrc: "Pics/female10.png", price: 3900, gender: "female", desc: "Very Nice Shoe Here:!", id: "pic26", secondsrc: "Pics/female10 after.png" },
    { imgsrc: "Pics/female12.png", price: 2900, gender: "female", desc: "Very Nice Shoe Here:!", id: "pic28", secondsrc: "Pics/female12 after.png" },
    { imgsrc: "Pics/female14.png", price: 2200, gender: "female", desc: "Very Nice Shoe Here:!", id: "pic29", secondsrc: "Pics/female14 after.png" },
    { imgsrc: "Pics/mensclassic5.png", price: 3000, gender: "mens", desc: "Very Nice Shoe Here:!", id: "pic12", secondsrc: "Pics/mensclassic5 after.png" },
    { imgsrc: "Pics/child1.png", price: 1300, gender: "children", desc: "Very Nice Shoe Here:!", id: "pic30", secondsrc: "Pics/child1 after.png" },
    { imgsrc: "Pics/child2.png", price: 1200, gender: "children", desc: "Very Nice Shoe Here:!", id: "pic31", secondsrc: "Pics/child2 after.png" },
    { imgsrc: "Pics/mensclassic.png", price: 2200, gender: "mens", desc: "Very Nice Shoe Here:!", id: "pic8", secondsrc: "Pics/mensclassic after.png" },
    { imgsrc: "Pics/mensclassic2.png", price: 2600, gender: "mens", desc: "Very Nice Shoe Here:!", id: "pic10", secondsrc: "Pics/mensclassic2 after.png" },
    { imgsrc: "Pics/child4.png", price: 1500, gender: "children", desc: "Very Nice Shoe Here:!", id: "pic33", secondsrc: "Pics/child4 after.png" },
    { imgsrc: "Pics/mensclassic8.png", price: 1800, gender: "mens", desc: "Very Nice Shoe Here:!", id: "pic15", secondsrc: "Pics/mensclassic8 after.png" },
    { imgsrc: "Pics/child5.png", price: 1000, gender: "children", desc: "Very Nice Shoe Here:!", id: "pic34", secondsrc: "Pics/child5 after.png" },
    { imgsrc: "Pics/child6.png", price: 900, gender: "children", desc: "Very Nice Shoe Here:!", id: "pic35", secondsrc: "Pics/child6 after.png" },
    { imgsrc: "Pics/child7.png", price: 799, gender: "children", desc: "Very Nice Shoe Here:!", id: "pic36", secondsrc: "Pics/child7 after.png" },
];


let cartitems = [];


function shoedetails(oldData = meraOlDData, newData) {

    return [...oldData];
}

function cartitem(oldData = cartitems, newData) {
    let itemAlready = false;
    if (newData.type == "addtocart") {
        oldData.forEach(element => {
            if (element.id == newData.payload.id) {
                element.quantity++;
                toast.info("Quantity Updated")
                itemAlready = true;
            }
        });
        if (itemAlready) {
            itemAlready = false;
            return;
        }
        else {
            oldData.push(newData.payload);
        }
    }
    else if (newData.type == "deleteitem") {

        console.log(newData.payload);
        oldData.find((element, index) => {
            if (element.id == newData.payload) {
                oldData.splice(index, 1);
            }
        })
    }
    // else if(newData.type=="quantityincrease"){
    //     oldData.forEach(element => {
    //         if (element.id == newData.payload.id) {
    //             element.quantity++;
    //             toast.info("Quantity Updated");
    //             return;}})
    //     }
    else if(newData.type=="qtyincrement"){
        oldData.forEach(element=>{
            if(element.id==newData.payload.id){
                element.quantity++;
                toast.info("Quantity Updated")
            }
        })
    }
    else if(newData.type=="minusfromcart"){
        oldData.forEach(element => {
            if (element.id == newData.payload.id) {
                if(element.quantity<=1){
                    toast.error("Already Single Item");
                    return;
                }
                else{
                    element.quantity--;
                    toast.warning("Quantity decreased")
                }
            }})
    }


    return [...oldData]
}

let root = combineReducers({ shoedetails, cartitem });

let Store = createStore(root);

export default Store;