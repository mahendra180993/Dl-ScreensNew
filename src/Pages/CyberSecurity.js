import React from 'react';
import { BsArrowRight} from 'react-icons/bs';

const CyberSecurity = () => {
    return (
        <div>
            <div style={{backgroundColor:"#EBF3FE",backgroundImage:"url(./assets/images/girl.png)"}} className="h-screen">
           
           <div>
           <img src="./assets/images/dl2.png" class="w-72 ml-96 relative left-32 top-16"></img>
           </div>
           <div class="relative top-20">
           <img src="./assets/images/boy.png" class="w-52 ml-96 relative left-44"></img>
           <img src="./assets/images/tickmark.png" class="w-16 ml-96 relative left-96 bottom-24" style={{marginLeft:400}}></img>
           </div>
           <div>
               <h1 class="ml-96 relative left-10 text-3xl mt-16">Welcome to the world of cyber security</h1>
           </div>
           <div class="border border-gray ml-20 bg-white mt-10" style={{height:190,width:1150}}>
                   <img src="./assets/images/ama1.png" style={{width:295}}></img>
                   <h1 class="relative left-96 bottom-28 text-3xl font-bold">AWS</h1>
                   
                   <button class=" w-40 pt-2 bg-blue-400 text-white relative bottom-40 left-16" style={{marginLeft:800}}>Start Course <BsArrowRight class="ml-32 relative bottom-4"></BsArrowRight></button>
                  
               </div>
               <button  class="border border-yellow-500 bg-white w-52 p-2 ml-96 mt-6 relative left-48">My Class Room</button>
       </div>
        </div>
    );
};

export default CyberSecurity;
