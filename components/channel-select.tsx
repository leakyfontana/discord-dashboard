import React from "react";
import Dropdown from "./dropdown";
import ProfileBar from "./profile-bar";


//const faPropIcon = faDiscord as IconProp;

export default function ChannelSelect() {

    return (
        <>
            <div className='flex flex-col w-2/12 bg-discord-dark-grey p-2 gap-2'>
                <div className='text-white flex flex-row justify-between'>
                    <h1>Guild</h1>
                    <h1>`</h1>
                </div>
                <hr className='w-full divide-black'/>
                <Dropdown dropdownName='Text Channels' />
                {/* <div > */}
                <ProfileBar />
                {/* </div> */}
            </div>
        </>
    )
}