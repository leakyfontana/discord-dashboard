import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { Channel } from "../types/channel";
import ChannelView from "./channel-view";
import { ChannelList } from "./dropdown";


export default function ChannelBoard() {

    const [board, setBoard] = useState<Channel[]>([]);

    const [{isOver}, drop] = useDrop(() => ({
        accept: "channelItem",
        drop: (item: Channel) => addChannelToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const addChannelToBoard = (id: number | undefined) => {
        const channelList = ChannelList.filter((channel: Channel) => id === channel.id);
        setBoard((board) => [...board, channelList[0]])
    };

    const removeChannel = (id: number | undefined) => {
        var idx = ChannelList.map(function(x) {return x.id; }).indexOf(id!)
        setBoard(board.slice(idx));
    };


    return (
        <>
            <div ref={drop} className='flex flex-row justify-center content-center items-center max-w-[66%] w-8/12 text-white gap-1'>
                <h2 className={`${board.length === 0 ? 'block' : 'hidden'}`}>Drag Channels Here</h2>
                {board.map((channel: Channel) => {
                    return (
                        <div key={channel.id}>
                            <ChannelView name={channel.name}  />
                        </div>
                    )
                })}
            </div>
        </>
    )
}