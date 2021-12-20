import React from 'react'

const Signup = () => {
    return (
        <div class="w-screen" style={{backgroundColor:"#EBF3FE"}}>
        <div >
            <img src="./assets/images/girl.png" style={{width:950}} class="ml-52 relative top-12"></img>
    </div>
        <div class="ml-96 relative left-28 bottom-96 " style={{position:"relative",bottom:650}}>
            <img src="./assets/images/dl2.png" class="w-72"></img>
        </div>
        <div class="border border-gray-300 border-solid bg-white ml-96 relative left-8" style={{width:470,height:420,position:"relative",bottom:600}}>
            <button class="font-bold ml-28">SIGN UP</button>
            <button class="ml-24  w-48 p-2 bg-gray-100">SIGN IN</button>
            <label class="text-gray-300 text-sm ml-8 relative top-6">FIRST NAME</label>
            <label class="text-gray-300 text-sm ml-40 relative top-6">LAST NAME</label><br></br>
            <input type="text" class="border outline-0 border-t-0 border-l-0 border-r-0 ml-8 mt-2 border-gray-300"></input>
            <input type="text" class="border outline-0 border-t-0 border-l-0 border-r-0 ml-12 mt-2 border-gray-300"></input><br></br>
            <label class="text-gray-300 text-sm ml-8 relative top-6">EMAIL</label><br></br>
            <input type="text" class="border outline-0 border-t-0 border-l-0 border-r-0 ml-8 mt-2 border-gray-300" style={{width:420}}></input>
            <label class="text-gray-300 text-sm ml-8 relative top-6">MOBILE</label><br></br>
            <input type="text" class="border outline-0 border-t-0 border-l-0 border-r-0 ml-8 mt-2 border-gray-300" style={{width:420}}></input>
            <label class="text-gray-300 text-sm ml-8 relative top-6">PASSWORD</label>
            <label class="text-gray-300 text-sm ml-40 relative top-6">CONFIRM PASSWORD</label><br></br>
            <input type="text" class="border outline-0 border-t-0 border-l-0 border-r-0 ml-8 mt-2 border-gray-300"></input>
            <input type="text" class="border border-t-0 border-l-0 border-r-0 ml-12 mt-2 border-gray-300 outline-0"></input><br></br><br></br>
            <button class="border border-2 ml-44 text-white w-32 bg-blue-500 rounded-3xl p-1">sign up</button>
            <p class="ml-56 text-gray-300 mt-2">OR</p>
            <div class="mt-2">
            <img src="./assets/images/ln.png" class="w-14 ml-48"></img>
            <img src="./assets/images/gl.png" class="w-8 relative left-60 bottom-8 ml-2 "></img>
            </div>
            

        </div>
    </div>
    );
};

export default Signup;
