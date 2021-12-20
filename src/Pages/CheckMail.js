import React from 'react'

const CheckMail = () => {
    return (
        <div>
            <div style={{backgroundImage:"url(./assets/images/girl.png)",backgroundColor:"#EBF3FE"}} class="h-screen w-screen">
            <div>
                <img src="./assets/images/dl2.png" class="w-80 ml-96 relative top-28 left-20"></img>
            </div>
            <div class="border border-gray drop-shadow-xl mt-44 ml-80 bg-white" style={{width:600,height:350}}>
                <h1 class="text-center text-gray-700 mt-32">CHECK YOUR MAIL</h1>
                <h1 class="text-center mt-4 text-gray-500">An email with password reset instructions has been sent</h1>
                    <h1 class="text-center text-gray-500">to your email address</h1>
            </div>
        </div>
        </div>
    );
};

export default CheckMail;
