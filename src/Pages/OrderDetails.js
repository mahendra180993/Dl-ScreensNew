import React from 'react'

const OrderDetails = () => {
    return (
        <div style={{backgroundColor:"#EBF3FE"}}>
        <img src="./assets/images/girl.png" class="ml-40 relative bottom-36"></img>
        <div style={{position:"relative",bottom:950}}>
            <img src="./assets/images/dl2.png" class="w-72 ml-96 mt-10 relative left-20"></img>
        </div>
        <div class="drop-shadow-2xl ml-80 mt-10 bg-white" style={{width:600,height:450,position:"relative",bottom:950}}>
            <div>
                <h1 class="text-white p-2 bg-gray-500">ORDER DETAILS</h1>
                
            </div>
            <div class="bg-gray-100 mt-8 m-6 h-10">
        <p class="ml-24 text-gray-300 text-base relative top-2">COURSE</p>
        <p class="ml-96 text-gray-300 text-base relative bottom-4">PRICE</p>
            </div>
            <div>
                <img src="./assets/images/ama1.png" class="w-40 ml-20"></img>
                <p class="ml-72 relative bottom-16 text-gray-500">AWS</p>
                <p class="ml-96 relative left-24 text-gray-500 bottom-20 -mt-1">₹ 34,999.00</p>
                <hr class="relative bottom-6"></hr>
                <p class="ml-96 relative left-8 text-gray-500">Total : ₹ 34,999.00</p>
                <p class="text-gray-500 ml-80 mt-2">Coupon</p>
                <hr class="w-32 ml-80"></hr>
                <button class="border border-gray-300 w-20 ml-96 relative left-20 bottom-6 text-gray-500">Apply</button>
                <p class="ml-96"><span class="text-gray-500">Grand Total</span> : ₹ 34,999.00</p>
                <button class="p-1 ml-80 relative left-12 text-white top-2 bg-blue-500">PROCEED FOR PAYMENT</button>
            </div>

        </div>
    </div>
    );
};

export default OrderDetails;
