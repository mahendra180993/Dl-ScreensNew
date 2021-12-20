import React from 'react'

const Signin = () => {
    return (
        <div class="w-screen" style={{backgroundColor:"#EBF3FE"}}>
           <div >
                <img src="./assets/images/girl.png" style={{width:950}} class="ml-52 relative top-12"></img>
        </div>
            <div class="ml-96 relative left-28 bottom-96 " style={{position:"relative",bottom:650}}>
                <img src="./assets/images/dl2.png" class="w-72"></img>
            </div>
            <div class="border border-gray-300 border-solid ml-96 relative left-8 bg-white" style={{width:470,height:420,position:"relative",bottom:600}}>
                <button class="w-48 p-2 bg-gray-100">SIGN UP</button>
                <button class="ml-24 font-bold">SIGN IN</button><br></br>
                <label class="text-gray-300 text-sm ml-8 relative top-16">EMAIL</label><br></br>
                <input type="text" class="border outline-0 border-t-0 border-l-0 border-r-0 ml-8 mt-12 border-gray-300" style={{width:420}}></input>
            
                <label class="text-gray-300 text-sm ml-8 relative top-12">PASSWORD</label><br></br>
               
                <input type="text" class="border outline-0 border-t-0 border-l-0 border-r-0 ml-8 mt-8 border-gray-300" style={{width:420}}></input><br></br><br></br>
                <p class="ml-44 text-gray-300"><u>Forget Password?</u></p><br></br>
                <button class="ml-44 text-white w-32 bg-blue-500 rounded-3xl p-1">sign in</button><br></br>
                <input type="text" class="border outline-0 border-t-0 border-l-0 border-r-0 ml-44 w-12 border-gray-300"></input>
                <p class="ml-56 text-gray-300 relative bottom-3 left-2">OR</p>
                <input type="text" class="border outline-0 border-t-0 border-l-0 border-r-0 w-12 ml-64 border-gray-300 relative bottom-12"></input>
                <div class="relative bottom-8 left-2">
                <img src="./assets/images/ln.png" class="w-14 ml-48"></img>
                <img src="./assets/images/gl.png" class="w-8 relative left-60 bottom-8 ml-2 mt-1"></img>
                </div>
                

            </div>
        </div>
    );
};

export default Signin;
