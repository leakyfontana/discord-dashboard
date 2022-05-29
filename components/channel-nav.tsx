import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import React from "react";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";

//const faPropIcon = faDiscord as IconProp;

export default function ChannelNav() {

    return (
        <>
            <div className='flex flex-col h-screen bg-discord-darker-grey p-2 gap-2 w-15'>
                <span className='bg-discord-light-grey rounded-full p-3 w-15'>
                    <FontAwesomeIcon icon={faDiscord} size='lg' className='text-white' />
                </span>
                <span className='bg-discord-light-grey rounded-full p-3 mt-2 w-12'>
                    <FontAwesomeIcon icon={faPlus} size='lg' className='text-green-400' />
                </span>
                <span className='bg-discord-light-grey rounded-full p-3 w-12'>
                    <FontAwesomeIcon icon={faSearch} size='lg' className='text-green-400' />
                </span>
            </div>
        </>
    )
}