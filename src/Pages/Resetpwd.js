import React from 'react';

const Resetpwd = () => {
    return (
        <div class="w-screen" style={{backgroundColor:"#EBF3FE"}}>
        <div class="ml-44 relative top-10">
            <img src="./assets/images/girl2.png" style={{width:900}}></img>
        </div>
        <div class="ml-96 relative left-20" style={{position:"relative",bottom:550}}>
            <img src="./assets/images/dl2.png" style={{width:300}}></img>
        </div>
        <div class="border border-black bg-white" style={{width:600,height:400,position:"relative",bottom:500,left:320}}>
            <h1 class="ml-52 mt-20 text-gray-500">RESET YOUR PASSWORD</h1>
            <p class="text-gray-500 text-base ml-20 mt-6">Please Provide the email address ypu used when you signed up</p>
            <p class="text-gray-500 text-base ml-52 ">for your OSAcadaccount</p>
            <label class="text-gray-300 text-sm ml-20 relative top-16">EMAIL</label><br></br>
            <input type="text" class="border border-gray-300 outline-0 border-t-0 border-l-0 border-r-0 ml-20 mt-12 " style={{width:460}}></input>
            <button class="w-40 p-1 mt-10 ml-56 bg-blue-500 rounded-3xl">SEND EMAIL</button>
        </div>
        
    </div>
    );
};

export default Resetpwd;
