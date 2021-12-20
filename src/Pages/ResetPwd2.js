import React from 'react'

const ResetPwd2 = () => {
    return (
        <div>
            <div style={{backgroundImage:"url(./assets/images/girl.png)",backgroundColor:"#EBF3FE"}} class="h-screen w-screen">
            <div>
                <img src="./assets/images/dl2.png" class="w-80 ml-96 relative top-28 left-20"></img>
            </div>
            <div class="border border-gray drop-shadow-xl mt-44 ml-80 bg-white" style={{width:600,height:350}}>
            <h1 class="text-center text-gray-700 mt-20">RESET YOUR PASSWORD</h1>
            <h1 class="text-gray-500 mt-8 ml-10">NEW PASSWORD</h1>
            <hr class="mt-2 ml-10" style={{width:500}}></hr>
            <h1 class="text-gray-500 mt-8 ml-10">CONFIRM PASSWORD</h1>
            <hr class="mt-2 ml-10" style={{width:500}}></hr>
            <button class="w-40 p-1 ml-52 mt-8 bg-blue-500">SUBMIT</button>
            </div>
            
        </div>
        </div>
    );
};

export default ResetPwd2;
