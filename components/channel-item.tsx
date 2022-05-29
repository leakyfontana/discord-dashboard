import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faHashtag, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { useDrag } from "react-dnd";
import { Channel } from "../types/channel";


export default function ChannelItem(Props: Channel) {

    const [{isDragging}, drag] = useDrag(() => ({
        type: "channelItem",
        item: {id: Props.id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <div ref={drag} className={`flex flex-row bg-discord-light-grey text-white rounded-md justify-between px-3 py-1 ${isDragging ? 'bg-discord-blue' : ''}`}>
            <div className='flex flex-row gap-1'>
                <FontAwesomeIcon icon={faHashtag} size='xs' className='w-3'  />
                <h2>{Props.name}</h2>
            </div>
            <div className='flex flex-row gap-1'>
                <FontAwesomeIcon icon={faUserPlus} size='xs' className='w-3'  />
                <FontAwesomeIcon icon={faGear} size='xs' className='w-3'  />
            </div>
        </div>
    )
}