import { faCirclePlus, faCircleXmark, faHashtag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import { Channel } from "../types/channel";
import ChannelBoard from "./channel-board";

type Message = {
    id: number,
    author: string,
    message: string,
    picture: string
}


export const MessageList = [
    {
        id: 1,
        author: 'Enrik Veer',
        message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam fuga facere, sint maxime incidunt 
        ducimus blanditiis dicta atque vitae voluptatem similique magnam quibusdam necessitatibus laborum hic iste possimus. Est, officia.`,
        picture: '/images/prof1.jpeg'
    },
    {
        id: 2,
        author: 'Katka Zebulon',
        message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam fuga facere, sint maxime incidunt 
        ducimus blanditiis dicta atque vitae voluptatem similique magnam quibusdam necessitatibus laborum hic iste possimus. Est, officia.`,
        picture: '/images/prof2.jpeg'
    },
    {
        id: 3,
        author: 'Willard Navin',
        message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam fuga facere, sint maxime incidunt 
        ducimus blanditiis dicta atque vitae voluptatem similique magnam quibusdam necessitatibus laborum hic iste possimus. Est, officia.`,
        picture: '/images/prof3.jpeg'
    },
    {
        id: 4,
        author: 'Nes Cale',
        message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam fuga facere, sint maxime incidunt 
        ducimus blanditiis dicta atque vitae voluptatem similique magnam quibusdam necessitatibus laborum hic iste possimus. Est, officia.`,
        picture: '/images/prof4.jpeg'
    },
    {
        id: 5,
        author: 'Samantha Brage',
        message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam fuga facere, sint maxime incidunt 
        ducimus blanditiis dicta atque vitae voluptatem similique magnam quibusdam necessitatibus laborum hic iste possimus. Est, officia.`,
        picture: '/images/prof5.jpeg'
    },
    {
        id: 6,
        author: 'Radek Ofelia',
        message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam fuga facere, sint maxime incidunt 
        ducimus blanditiis dicta atque vitae voluptatem similique magnam quibusdam necessitatibus laborum hic iste possimus. Est, officia.`,
        picture: '/images/prof6.jpeg'
    },
    {
        id: 7,
        author: 'Yaakov Alex',
        message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam fuga facere, sint maxime incidunt 
        ducimus blanditiis dicta atque vitae voluptatem similique magnam quibusdam necessitatibus laborum hic iste possimus. Est, officia.`,
        picture: '/images/prof7.jpeg'
    },
    {
        id: 8,
        author: 'Vija Davyd',
        message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam fuga facere, sint maxime incidunt 
        ducimus blanditiis dicta atque vitae voluptatem similique magnam quibusdam necessitatibus laborum hic iste possimus. Est, officia.`,
        picture: '/images/prof8.jpeg'
    },

]

type specialProps = {
    id: number,
    name: string,
    remove: any
}

const ChannelView: FC<specialProps> = ({
    name,
    id,
    remove
}) => {

    return (
        <div className='flex flex-col justify-between flex-auto w-auto h-screen'>
            <div className='flex flex-row w-full gap-1 py-2 text-center'>
                <FontAwesomeIcon icon={faHashtag} size='xs' className='w-3'  />
                <h2>{name}</h2>
                <button className='pr-4 ml-auto'>
                    <FontAwesomeIcon icon={faCircleXmark} size='xs' className='w-5' onClick={remove}/>
                </button>
            </div>
            <div className='flex flex-col gap-3 overflow-scroll'>
                {MessageList.map((message) => {
                    return (
                    <div key={message.id} className='flex flex-row'>
                        <div className="relative w-3/12 h-12 pl-6">
                            <img src={message.picture} className='w-8 rounded-full shadow-sm' loading='lazy' />
                            <div className="absolute w-3 h-3 my-1 bg-green-400 border-2 border-white rounded-full bottom-8 right-4 z-2"></div>
                        </div>
                        <div className='flex flex-col w-9/12 gap-2'>
                            <h2 className='text-discord-blue'>{message.author}</h2>
                            <p>{message.message}</p>
                        </div>
                    </div>
                    )
                })}
            </div>
            <div className='flex flex-row w-auto gap-3 p-2 bg-discord-grey'>
                <input className='w-full p-1 text-white rounded-md bg-discord-dark-grey' type='text' placeholder='Send Message'></input>
                <button>
                    <FontAwesomeIcon icon={faCirclePlus} size='xs' className='w-5'  />
                </button>
            </div>
        </div>
    )
}

export default ChannelView;