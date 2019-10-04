import React from 'react';

export default function Display (props) {
    return (
        <>
            <div className='scores'>
                <p className='ball'>BALL {`${props.getBalls()}`}</p>
                <p className='strike'>STRIKE {`${props.getStrikes()}`}</p>
                <p className='out'>OUT {`2`}</p>
            </div>

            <div className='bottom-content'>
            <div><p className='roll-one'>[{`1`}] [{`2`}] [{`3`}] [{`4`}] [{`5`}] [{`6`}] [{`7`}] [{`8`}] [{`9`}]</p></div>
            <div className='home'>
                <p>Home</p>
                <p className='roll-two'>[{`0`}] [{`2`}] [{`1`}] [{`2`}] [{`4`}] [{`0`}] [{`0`}] [{`1`}] [{`1`}]</p>
            </div>
            <div className='guest'>
                <p>Guest</p>
                <p className='roll-three'>[{`2`}] [{`1`}] [{`2`}] [{`0`}] [{`2`}] [{`2`}] [{`0`}] [{`0`}] [{`1`}]</p>
            </div>   
            </div>

            <div className='totals'>
            <p>Home Total: [{`11`}]</p>
            <p>Guest Total: [{`12`}]</p>   
            </div>
        </>
    )
}