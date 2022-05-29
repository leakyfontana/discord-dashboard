import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faHeadphones, faMicrophone } from "@fortawesome/free-solid-svg-icons";


export default function ProfileBar() {

    return (
        <div className='flex flex-row justify-between px-3 mt-auto text-white rounded-sm bg-discord-grey'>
            <div className="relative w-12 h-12">
            <img src='/images/prof9.jpeg' className='w-8 rounded-full shadow-sm' loading='lazy'/>
            <div className="absolute w-3 h-3 my-1 bg-green-400 border-2 border-white rounded-full bottom-8 right-4 z-2"></div>
            </div>
            <div className='flex flex-col'>
                <h2 className='text-white'>Norman</h2>
                <h2 className='text-discord-light-grey'>#6709</h2>
            </div>
            <FontAwesomeIcon icon={faMicrophone} size='xs' className='w-3'  />
            <FontAwesomeIcon icon={faHeadphones} size='xs' className='w-3'  />
            <FontAwesomeIcon icon={faGear} size='xs' className='w-3'  />
        </div>
    )
}