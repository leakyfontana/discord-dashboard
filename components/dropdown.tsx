import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp, faPlus } from "@fortawesome/free-solid-svg-icons";
import ChannelItem from "./channel-item";
import { Channel } from "../types/channel";


type dropdownProps = {
    //children: React.ReactNode,
    dropdownName: string
}

interface IChannelData {
    name: string,
    id: number,
}

export const ChannelList = [
    {
        id: 1,
        name: 'Example 1'
    },
    {
        id: 2,
        name: 'Example 2'
    },
    {
        id: 3,
        name: 'Example 3'
    }
]

export default function Dropdown(Props: dropdownProps) {

    // const [data, setData] = useState([{}])

    // useEffect(() => {
    //     fetch("/channels").then(
    //         res => console.log(res.json())          
    //     )
    //     .catch(err => {
    //         console.log(err)
    //     })
    //     // .then(
    //     //     data => {
    //     //         setData(data)
    //     //         console.log(data);
    //     //     }
    //     //)
    // }, [])

    const [isExpanded, setExpanded] = useState(false);

    const expand = () => {
        setExpanded(!isExpanded);
    };

    return (
        <>
            <div className='flex flex-row justify-between my-2 text-discord-light-grey'>
                <span className='flex flex-row gap-2' onClick={expand}>
                    <FontAwesomeIcon icon={faCaretDown} size='xs' className={`w-3 ${isExpanded ? 'block': 'hidden'}`} />
                    <FontAwesomeIcon icon={faCaretUp} size='xs' className={`w-3 ${isExpanded ? 'hidden': 'block'}`} />
                    <h2>{Props.dropdownName}</h2>
                </span>
                <FontAwesomeIcon icon={faPlus} size='xs' className='w-3'  />
            </div>
            <div className={`${isExpanded ? 'flex flex-col gap-2': 'hidden'}`} > {ChannelList.map((channel: Channel) => {
                return (
                    <>
                        <ChannelItem key={channel.id} name={channel.name} id={channel.id} />
                    </>
                )
            })}
            </div>
        </>
    )
}