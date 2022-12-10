import React, { useEffect, useState } from 'react'
import './clock.css'
 

export const Clock = ({h24=false}) => {

    const [hour  , setHour  ] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);
    const [pm    , setPm    ] = useState(false);
    const [date  , setDate  ] = useState('');

    useEffect(()=> {

        const update = () => {
            const date = new Date();
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            let currentDate = `${day}-${month}-${year}`;
            setDate(currentDate);
            let hour = date.getHours();
            if(!h24) {
                hour = (hour % 12) || 12;
            }
            setHour(hour);
            setMinute(date.getMinutes());
            setSecond(date.getSeconds());
            setPm(date.getHours() >= 12);
        }

        update();

        const interval = setInterval(()=> {
            update();
        }, 1000);

        return ()=>clearInterval(interval);
    }, [h24]);

    return (
        <div className='clock-container'>
            <div>
                {`${hour}:${minute}:${second} ${pm?'PM':'AM'}`}
            </div>
            <div>
                {`${date}`}
            </div>
        </div>
    )
    
}