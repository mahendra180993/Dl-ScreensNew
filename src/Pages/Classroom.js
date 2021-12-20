import React from 'react';
import { BsClock} from 'react-icons/bs';
import {AiFillCheckCircle} from 'react-icons/ai';
import {AiFillPlayCircle} from 'react-icons/ai';

const Classroom = () => {
    return (
        <div>
            <div class="w-max">
            <img src="./assets/images/dl1.png" class="mt-6 ml-52"></img>
                <h1 style={{marginLeft:900}} class="relative bottom-8 left-28"><u>My Class Room</u></h1>
                <img src="./assets/images/bellicon.png" style={{marginLeft:1050}} class="relative bottom-16 left-24"></img>
                <img src="./assets/images/user.png" style={{marginLeft:1120}} class="relative bottom-24 w-8 left-16"></img> 
            </div>
            <div class="h-14 relative bottom-10 bg-gray-100">
            <BsClock class="ml-20 relative top-4 left-24" style={{fontSize:30}} color="gray"/>
            <p class="ml-32 relative bottom-3 left-28 text-gray-500">Your Upcoming Class at 28-04-20 IST 5:30pm</p>
            <button class="w-36 p-1 relative bottom-11 left-60 bg-blue-500" style={{marginLeft:900}}>Join Class</button>
            </div>
            <div>
                <p class="ml-20 text-sm relative left-6"><b>Recorded Classes</b></p>
                </div>
                <div class="border-2 float-left drop-shadow-2xl border-gray-300 ml-20 mt-6 rounded-xl" style={{width:450}}>
                <p class="ml-12 mt-4">Module 1: UI Design</p>
               <AiFillCheckCircle class="ml-6 relative top-6 left-8" color="green"/> <p class="ml-20 mt-1 text-gray-500">1. Lorem ipsum dolor sit amet, consetetur</p>
               <AiFillCheckCircle class="ml-6 relative top-6 left-8" color="green"/> <p class="ml-20 mt-1 text-gray-500">1. Lorem ipsum dolor sit amet, consetetur</p>
               <AiFillPlayCircle class="ml-6 relative top-6 left-8" color="gray"/> <p class="ml-20 mt-1 text-gray-500">1. Lorem ipsum dolor sit amet, consetetur</p>
               <AiFillPlayCircle class="ml-6 relative top-6 left-8" color="gray"/> <p class="ml-20 mt-1 text-gray-500">1. Lorem ipsum dolor sit amet, consetetur</p>
               <p class="mt-4 p-1 pl-12 bg-gray-300">Module 2: UX Design</p>
               <AiFillPlayCircle class="ml-6 relative top-6 left-8" color="gray"/> <p class="ml-20 mt-1 text-gray-500">1. Lorem ipsum dolor sit amet, consetetur</p>
               <AiFillPlayCircle class="ml-6 relative top-6 left-8" color="gray"/> <p class="ml-20 mt-1 text-gray-500">1. Lorem ipsum dolor sit amet, consetetur</p>
               <AiFillPlayCircle class="ml-6 relative top-6 left-8" color="gray"/> <p class="ml-20 mt-1 text-gray-500">1. Lorem ipsum dolor sit amet, consetetur</p>
               <AiFillPlayCircle class="ml-6 relative top-6 left-8" color="gray"/> <p class="ml-20 mt-1 text-gray-500">1. Lorem ipsum dolor sit amet, consetetur</p>
               </div>
               <div class="float-left ml-28 mt-20">
               <img src="./assets/images/video.png"></img>
               </div>
               
               <div class="clear-left">
                   <ul>
                       <li class="text-gray-500">Courses Info</li>
                   </ul>
               </div>
            </div>
    )
}

export default Classroom
